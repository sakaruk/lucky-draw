var runLoop = false;
var minNumber = 1;
var maxNumber = 130;
var intervalTime = 100;
var toselect =2;
var selectcount=0;
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
		document.getElementById("start-btn").style.display = "none"; 
	});
	document.getElementById("end-btn").addEventListener("click", function(){

			
			runLoop = false;
			var ul = document.getElementById("winner-list");
		  	var li = document.createElement("li");
		  	li.appendChild(document.createTextNode(document.getElementById("number-display").innerHTML));
		  	ul.appendChild(li);	
		  	selectcount++;
			runLoop = true;		
			
			if(selectcount >= toselect) {
				runLoop = false;		
				document.getElementById("number-display").innerHTML = "Thank You";
				document.getElementById("btn-wrap").style.display = "none"; 
			}
		
	});
	
}