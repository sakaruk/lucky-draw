var runLoop = false;
var minNumber = 1;
var maxNumber = 100;
var intervalTime = 200;
var selectedVal = [];
setInterval(function(){ 
	if(runLoop){
		let randomNumber;
		randomNumber = generateRandomNumberInRange();
		document.getElementById("number-display").innerHTML = randomNumber;
	}
}, intervalTime);		
function generateRandomNumberInRange(){
	var num  = Math.floor(Math.random() * maxNumber) + minNumber;
	if(selectedVal.indexOf(num) != -1){
		generateRandomNumberInRange();
	}else{
		return num;
	}
	
}
window.onload = function(e){ 
	document.getElementById("start-btn").addEventListener("click", function(){
		runLoop = true;
	});
	document.getElementById("end-btn").addEventListener("click", function(){
		runLoop = false;
		var ul = document.getElementById("winner-list");
	  	var li = document.createElement("li");
	  	li.appendChild(document.createTextNode(document.getElementById("number-display").innerHTML));
	  	ul.appendChild(li);			
	});
	document.getElementById("clear-btn").addEventListener("click", function(){
		clearWinnerList();
	});			
}