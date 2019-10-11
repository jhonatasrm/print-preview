var backgroundPage = browser.extension.getBackgroundPage();
const contextMenuId = document.getElementById("contextMenu");
var success = document.getElementById("success");
var savePreferences = document.getElementById("save_preferences");
var promiseContextMenu;
var setSuccess;

// version
var version = document.getElementById("version");
version.textContent = browser.runtime.getManifest().name + " (v"+ browser.runtime.getManifest().version + ")";

 $(document).ready(function(){
  var radios = document.getElementsByName("contextMenu");
  var val = localStorage.getItem('contextMenu');
  for(var i=0;i<radios.length;i++){
    if(radios[i].value == val){
      radios[i].checked = true;
    }
  }
$('input[name="contextMenu"]').on('change', function(){
    localStorage.setItem('contextMenu', $(this).val());
    backgroundPage.startContextMenu();
  });
});