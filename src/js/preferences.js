var backgroundPage = browser.extension.getBackgroundPage();
const contextMenuId = document.getElementById("contextMenu");

function loadPreferences() {
    function defineContextMenu(data) {
        if (data.contextMenu == true) {
            contextMenuId.checked = true;
        }else {
            contextMenuId.checked = false;
        }
    }
    function onError(error) {
        console.log(`Error: ${error}`);
    }

    var promiseContextMenu = browser.storage.local.get("contextMenu");
    promiseContextMenu.then(defineContextMenu, onError);

}

function savePreferences(e) {
    e.preventDefault();

    let preferences = {
        contextMenu: document.getElementById("contextMenu").checked,
    };

    browser.storage.local.set(preferences);

    Swal.fire({
        position: 'top',
        type: 'success',
        title: browser.i18n.getMessage('saved_preferences'),
        showConfirmButton: false,
        timer: 1500
    })

    backgroundPage.startContextMenu(preferences);
    console.log(preferences);
}

document.addEventListener("DOMContentLoaded", loadPreferences);
document.querySelector("form").addEventListener("submit", savePreferences);