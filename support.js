chrome.runtime.onInstalled.addListener(function (){
    chrome.contextMenus.create({
        title: "Open ApkOnline Android online emulator",
        id: "ApkOnline",
        contexts: ["selection", "link", "editable", "image"]
    });
});

chrome.contextMenus.onClicked.addListener(function(info, tab){
    if (info.menuItemId === "ApkOnline") {
        ApkOnline();
    }
});


function ApkOnline() {         
  	
  		gourl =  "https://www.apkonline.net/runapk/create-androidapk.html?app=android_6.0_blank";
    	window.open(gourl,'_blank');
	
}



