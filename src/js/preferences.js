// contextMenu radio
var backgroundPage = browser.extension.getBackgroundPage();

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