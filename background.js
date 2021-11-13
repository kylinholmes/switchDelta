// entry of install
var configure = {
    mode: "fixed_servers",
    rules: {
        singleProxy: {
            scheme: "http",
            host: "127.0.0.1",
            port: 10809,
        },
        bypassList: null,
    },
};
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({ white: [] });
    chrome.storage.local.set({ 'config': configure });
});


chrome.proxy.onProxyError.addListener((msg) => {
    console.log(msg);
});

chrome.storage.local.get("white", (data) => {
    var arr = data.white;
    if (data === null) {
        console.log("data is empty");
    } else {
        startProxy(arr);
    }
});

function startProxy(arr) {
    chrome.storage.local.get('config',(data)=>{
        var config = data.config
        config.rules.bypassList = arr
        chrome.proxy.settings.set(
            {
                value: config,
                scope: "regular",
            }
        );
        console.log("Switch Delta Working")
        console.log("Configure:: ");
        console.log(config)
    });    
}