browser.runtime.onInstalled.addListener(handleInstalled);

browser.browserAction.onClicked.addListener(() => {
  browser.tabs.printPreview()
});

// start about.html
function handleInstalled() {
    browser.storage.local.clear();
    browser.tabs.create({
        url: "../html/about.html"
    });
}

function onCreated() {
  if (browser.runtime.lastError) {
    console.log(`Error: ${browser.runtime.lastError}`);
  } else {
    console.log("Context Menu created successfully");
  }
}

function startContextMenu(data){
    if(data.contextMenu == true){
        browser.menus.create({
        id: "print-preview",
        title: "Print Preview",
        contexts: ["all"]
    }, onCreated);
    }else{
        browser.menus.remove("print-preview");
    }
}

browser.menus.onClicked.addListener((info, tab) => {
  switch (info.menuItemId) {
    case "print-preview":
        startPreview();
      break;
  }
});

function startPreview(){
  browser.tabs.printPreview();
}

let gettingAllCommands = browser.commands.getAll();

browser.commands.onCommand.addListener((command) => {
  startPreview();
});