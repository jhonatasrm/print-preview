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
  var radiosContext = document.getElementsByName("contextMenu");
  var valContext = localStorage.getItem('contextMenu');
  for(var i=0;i<radiosContext.length;i++){
    if(radiosContext[i].value == valContext){
      radiosContext[i].checked = true;
    }
  }
$('input[name="contextMenu"]').on('change', function(){
    localStorage.setItem('contextMenu', $(this).val());
    backgroundPage.startContextMenu();
  });

  //
  var radiosSimplify = document.getElementsByName("simplifyPage");
  var valSimplify = localStorage.getItem('simplifyPage');
  for(var i=0;i<radiosSimplify.length;i++){
    if(radiosSimplify[i].value == valSimplify){
      radiosSimplify[i].checked = true;
    }
  }
$('input[name="simplifyPage"]').on('change', function(){
    localStorage.setItem('simplifyPage', $(this).val());
  });
});