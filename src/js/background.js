browser.runtime.onInstalled.addListener(handleInstalled);

browser.browserAction.onClicked.addListener(() => {
  browser.tabs.printPreview()
});

// start about.html
function handleInstalled(details) {
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

function startContextMenu(){
    if(localStorage.getItem('contextMenu') == "True"){
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