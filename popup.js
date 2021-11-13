async function getCurrentTab() {
    let queryOptions = { active: true, currentWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
}


function BtnEvent(event){
    const input = document.getElementById("currentWindwos")
    var host = input.value
    if(host == ""){
        host = input.getAttribute('placeholder')
    }
    console.log(host)
    chrome.storage.local.get('white',(data)=>{
        const arr = data.white
        arr.push(host)
        const sss = [...new Set(arr)]
        chrome.storage.local.set({white:sss},()=>{
            console.log(sss)

        })
    })
}



// Add a button to the page for each supplied color
function init() {
    var URL = getCurrentTab()
    URL.then((data) =>{
        var curwin = document.getElementById("currentWindwos")
        var host = data.url.split("/")[2]
        console.log(host)
        curwin.setAttribute("placeholder", host)
        
        var addbtn = document.getElementById("addbtn")
        addbtn.onclick = BtnEvent

    })

}

// Initialize the page by constructing the color options
window.onload =  init;
