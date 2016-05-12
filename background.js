// var script = "setupInterception();console.log('hello');
// function setupInterception(){
    // var _open = XMLHttpRequest.prototype.open; 
    // debugger
    
    // XMLHttpRequest.prototype.open = function (method, url) {
    //     debugger
    //     if (method === 'PUT' && url.indexOf('/card') != -1 ){
    //         doMagic()
    //     }
    //     return _open.apply(this, arguments)
    // }
// }
// function doMagic() {
//     debugger
//     // body...
// }
// ";
// chrome.webNavigation.onDOMContentLoaded.addListener(function(){
//     chrome.tabs.executeScript(null, { code: '(function(){var _open = XMLHttpRequest.prototype.open;debugger;XMLHttpRequest.prototype.open = function (method, url) {debugger;if (method === "PUT" && url.indexOf("/card") != -1 ){debugger;}return _open.apply(this, arguments)}})();' });;    
// })

chrome.webNavigation.onHistoryStateUpdated.addListener(function () {
    chrome.tabs.executeScript(null, { file: 'contentscript.js' });
});


