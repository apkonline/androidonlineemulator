(function(){
  var apps_urls = {
    creapp: "https://www.apkonline.net/runapk/create-androidapk.html?app=android_6.0_blank",
    files: "https://www.apkonline.net/appdirect/filemanager.html",
    usersettings: "https://www.apkonline.net/appdirect/apkonlinechangeuser.html",
  };

  
  for (var link_id in apps_urls){
        var url = apps_urls[link_id];
        document.getElementById(link_id).firstElementChild.href = url;
  }
  
  aaa = encodeURIComponent("https://www.apkonline.net/appdirect/filemanager.html");
  document.getElementById("usersettings").firstElementChild.href = "https://www.apkonline.net/appdirect/apkonlinechangeuser.html?ira=" + aaa;
  
  document.getElementById('situation').innerText = `Using ApkOnline Android online emulator`;
    
  for (var link_id in apps_urls) {
    var localLabel = chrome.i18n.getMessage("new_" + link_id);
    document.querySelector(`#${link_id} .label`).innerText = localLabel;
  }
  
  document.querySelector(`#files .label`).innerText = "My Apk Manager & Apk Upload";
  document.querySelector(`#usersettings .label`).innerText = "Set userid";
  
})();
