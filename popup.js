//Matt Beres August 2022
//browser extension to blur all images on each webpage

//handles control panel interaction
$(document).ready(function() {
	//arguments for query calls
	let params = {
		active: true,
		currentWindow: true
	}
	//user data
	var obj;

	document.getElementById("img").onclick = function() {IMG()};
	function IMG(){
		var checkBoxIMG = document.getElementById("img");
		if(checkBoxIMG.checked == true){
			chrome.tabs.query(params, gotTabs);
			function gotTabs(tabs){	
		 		chrome.tabs.sendMessage(tabs[0].id, {txt: "onIMG"});
		 	}
		}
		else{
			chrome.tabs.query(params, gotTabs);
			function gotTabs(tabs){	
		 		chrome.tabs.sendMessage(tabs[0].id, {txt: "offIMG"});
		 	}
		}
	}
	document.getElementById("a").onclick = function() {A()};
	function A(){
		var checkBoxA = document.getElementById("a");
		if(checkBoxA.checked == true){
			chrome.tabs.query(params, gotTabs);
			function gotTabs(tabs){	
		 		chrome.tabs.sendMessage(tabs[0].id, {txt: "onA"});
		 	}
		}
		else{
			chrome.tabs.query(params, gotTabs);
			function gotTabs(tabs){	
		 		chrome.tabs.sendMessage(tabs[0].id, {txt: "offA"});
		 	}
		}
	}
	//storage get settings
	chrome.storage.local.get(obj, function(data){
	if(data["img"] == 2){
		document.getElementById("img").checked = true;		
	}
	if(data["a"] == 2){
		document.getElementById("a").checked = true;		
	}
});
	//open help
	document.getElementById("question").onclick = function() {HELP()};
	function HELP(){
		document.getElementById("home").style.display = "none";
		document.getElementById("settings").style.display = "block";
	}
	//back to home
	document.getElementById("back").onclick = function() {BACK()};
	function BACK(){
		document.getElementById("home").style.display = "block";
		document.getElementById("settings").style.display = "none";
	}
});