browser.browserAction.onClicked.addListener((tab) => {
  oldId = tab.id;
  var creating = browser.tabs.create({openInReaderMode: true, url: tab.url, index: tab.index, openerTabId: oldId}).then(startPreview());
  creating.then(onCreated, onError);
});

if (localStorage.getItem('contextMenu') == 'undefined' || localStorage.getItem('contextMenu') == null){
    localStorage.setItem('contextMenu', false);
}
startContextMenu();

function onCreated() {
  if (browser.runtime.lastError) {
    console.log(`Error: ${browser.runtime.lastError}`);
  } else {
    console.log("Context Menu created successfully");
  }
}

function onError(){
  console.log("Error");
}

function startContextMenu(){
    if(localStorage.getItem("contextMenu") == "true"){
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
    let stateCheck = setInterval(() => {
      if (document.readyState === 'complete') {
        clearInterval(stateCheck);
        browser.tabs.printPreview();
      }
    }, 100);    
}

let gettingAllCommands = browser.commands.getAll();

browser.commands.onCommand.addListener((command) => {
  startPreview();
});