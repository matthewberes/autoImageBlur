//Matt Beres September 2022
//browser extension to blur all images on each webpage
var obj;
var dataNumIMG;
var dataNumA;

//checks for saved preferences
chrome.storage.local.get(obj, function(data){
	//initialize user preference data for img
	if(!data["img"]){
		data["a"] = 1;
		chrome.storage.local.set(data);
	}
	//change to users preference for img
	if(data["img"]){
		switch (data["img"]){
			case 1:
			chrome.runtime.sendMessage({txt: "removeIMG"});
			dataNumIMG = 1;
			break;		
			case 2:
			chrome.runtime.sendMessage({txt: "insertIMG"});
			dataNumIMG = 2;
			break;
		}
	}
	//initialize user preference data for a
	if(!data["a"]){
		data["a"] = 1;
		chrome.storage.local.set(data);
	}
	//change to users preference for a
	if(data["a"]){
		switch (data["a"]){
			case 1:
			chrome.runtime.sendMessage({txt: "removeA"});
			dataNumA = 1;
			break;		
			case 2:
			chrome.runtime.sendMessage({txt: "insertA"});
			dataNumA = 2;
			break;
		}
	}
});
//listens for message from popup control panel
chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(message, sender, sendResponse){	
	if(message.txt == "onIMG"){
		obj = {};
		obj["img"] = 2;
		chrome.storage.local.set(obj);
		chrome.runtime.sendMessage({txt: "insertIMG"});
		dataNumIMG = 2;
	}
	if(message.txt == "offIMG"){
		obj = {};
		obj["img"] = 1;
		chrome.storage.local.set(obj);
		chrome.runtime.sendMessage({txt: "removeIMG"});
		dataNumIMG = 1;
	}
	if(message.txt == "onA"){
		obj = {};
		obj["a"] = 2;
		chrome.storage.local.set(obj);
		chrome.runtime.sendMessage({txt: "insertA"});
		dataNumA = 2;
	}
	if(message.txt == "offA"){
		obj = {};
		obj["a"] = 1;
		chrome.storage.local.set(obj);
		chrome.runtime.sendMessage({txt: "removeA"});
		dataNumA = 1;
	}
}
$(document).ready(function(){
    $("img").click(function(){
    	if(dataNumIMG == 1){
    		return
    	}
        var s = $(this).attr("src");
        var hiddenImg = window.open("", "height=200,width=200");
        hiddenImg.document.write('<img src="'+s+'"/><style>img{filter: none;}</style>');
        hiddenImg.document.close();
    });    
});