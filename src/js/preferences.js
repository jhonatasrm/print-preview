var backgroundPage = browser.extension.getBackgroundPage();
const contextMenuId = document.getElementById("contextMenu");
var success = document.getElementById("success");
var savePreferences = document.getElementById("save_preferences");
var promiseContextMenu;
var setSuccess;

function loadPreferences() {
    if (localStorage.getItem("loadMyPreferences") == "true"){
         contextMenuId.checked = true;
    }else if (window.localStorage.getItem("loadMyPreferences") == "false"){
         contextMenuId.checked = false;
    }else{
         contextMenuId.checked = false;
    }
    backgroundPage.startContextMenu();
}

savePreferences.addEventListener('click', function(){
    success.style.display = "block";
    setTimeout(function(){ success.style.display = "none"; }, 1500);
    localStorage.setItem("loadMyPreferences", contextMenuId.checked);
    backgroundPage.startContextMenu();
}, false);

document.addEventListener("DOMContentLoaded", loadPreferences);