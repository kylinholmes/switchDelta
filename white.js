
window.onload = function(){
    chrome.storage.local.get('white',(data)=>{
        const arr = data.white
        var ul = document.getElementById("list")
        arr.forEach(host => {
            var li = document.createElement('li')
            li.setAttribute("class", "list-group-item")
            li.innerHTML = host
            ul.appendChild(li)
        });
    })
}