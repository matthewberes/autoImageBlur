//Matt Beres September 2022
//browser extension to blur all images on each webpage

//injects css for blur effect, index.css
chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(message, sender, sendResponse){
	//inject indexIMG.css, turn on blur for img tags
	if(message.txt == "insertIMG"){
		chrome.scripting.insertCSS({ target: {tabId: sender.tab.id}, files: ["indexIMG.css"]});
	}
	//remove indexIMG.css, turn off blur for img tags
	if(message.txt == "removeIMG"){
		chrome.scripting.removeCSS({ target: {tabId: sender.tab.id}, files: ["indexIMG.css"]});
	}
	//inject indexA.css, turn on blur for a tags
	if(message.txt == "insertA"){
		chrome.scripting.insertCSS({ target: {tabId: sender.tab.id}, files: ["indexA.css"]});
	}
	//remove indexA.css, turn off blur for a tags
	if(message.txt == "removeA"){
		chrome.scripting.removeCSS({ target: {tabId: sender.tab.id}, files: ["indexA.css"]});
	}
}