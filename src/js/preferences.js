var backgroundPage = browser.extension.getBackgroundPage();
const contextMenuId = document.getElementById("contextMenu");
var promiseContextMenu;

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

function savePreferences(e) {
    e.preventDefault();

    localStorage.setItem("loadMyPreferences", contextMenuId.checked);

    Swal.fire({
        position: 'top',
        type: 'success',
        title: browser.i18n.getMessage('saved_preferences'),
        showConfirmButton: false,
        timer: 1500
    })

    backgroundPage.startContextMenu();
}

document.addEventListener("DOMContentLoaded", loadPreferences);
document.querySelector("form").addEventListener("submit", savePreferences);