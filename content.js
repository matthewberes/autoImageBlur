//Matt Beres September 2022
//browser extension to blur all images on each webpage
var obj;

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
			break;		
			case 2:
			chrome.runtime.sendMessage({txt: "insertIMG"});
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
			break;		
			case 2:
			chrome.runtime.sendMessage({txt: "insertA"});
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
	}
	if(message.txt == "offIMG"){
		obj = {};
		obj["img"] = 1;
		chrome.storage.local.set(obj);
		chrome.runtime.sendMessage({txt: "removeIMG"});
	}
	if(message.txt == "onA"){
		obj = {};
		obj["a"] = 2;
		chrome.storage.local.set(obj);
		chrome.runtime.sendMessage({txt: "insertA"});
	}
	if(message.txt == "offA"){
		obj = {};
		obj["a"] = 1;
		chrome.storage.local.set(obj);
		chrome.runtime.sendMessage({txt: "removeA"});
	}
}