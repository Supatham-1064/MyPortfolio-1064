window.onload = pageLoad;

function pageLoad(){
	document.getElementById('start').onclick = startGame;
	

}
var S_game = false;
function startGame(){
	if(S_game == false)
	{
		alert("Ready");
		addBox();
		timeStart();
		S_game = true;}else{
		alert("Game are playing")
	}
}

function timeStart(){
	var TIMER_TICK = 1000;
	var timer = null;
	var min = 0.5; // 0.5 minute
	var second = min*60; //30 s
	var x = document.getElementById('clock');	
	//setting timer using setInterval function
	timer = setInterval(timeCount ,TIMER_TICK);

	function timeCount(){
		var allbox = document.querySelectorAll("#layer div");
		 x.innerText = second;
		 console.log(second); 
		// จัดการเกี่ยวกับเวลา เช่น ถ้ายังมีกล่องเหลืออยู่ เวลาจะลดลงเรื่อยๆ 
		// ถ้าไม่มีกล่องเหลือแล้ว และเวลายังเหลืออยู่จะขึ้นว่า You win!
		// ถ้าเวลาหมด แต่ยังมีกล่องเหลืออยู่ จะบอกว่า Game over และทำการ clear screen
		if(allbox.length >= 1)
		{
			second --;
			
		}
		if(allbox.length == 0 && second >= 1)
		{
			
			// var id =	setTimeout(delaytimeYouWIN,1500);
			alert("You WIN!")
			clearInterval(timer);
			clearScreen();
			clearTimeout(id);
			S_game =false;
			

		}else if(second == 0 && allbox.length >= 1)
		{
			
			var id =	setTimeout(delaytimeGameover,1500);

		}
		function delaytimeGameover(){					
			alert("Game over")
			clearInterval(timer);
			clearScreen();
			clearTimeout(id);
			S_game =false;
		}
		// function delaytimeYouWIN(){
		// 	alert("You WIN!")
		// 	clearInterval(timer);
		// 	clearScreen();
		// 	clearTimeout(id);
		// 	S_game =false;
		// }

	}
}

function addBox(){
	// สร้างกล่องตาม input ที่เราใส่ 
	var numbox = document.getElementById("numbox").value;
	var gameLayer = document.getElementById("layer");
	var colorDrop = document.getElementById("color").value;
	
	for (var i =0; i<numbox;i++){
		var tempbox = document.createElement("div");
		tempbox.className = "square " + colorDrop;
		tempbox.id = "box"+i;
		tempbox.style.left = Math.random() * (500 - 25) + "px";
		tempbox.style.top = Math.random() * (500 - 25) + "px";
		//add element to HTML node
		gameLayer.appendChild(tempbox);
		bindBox(tempbox);
	}
}

function bindBox(box){
	//เมื่อกดแล้ว กล่องจะหายไป
	box.onclick = function(){
		box.parentNode.removeChild(box);
	}
}

function clearScreen(){
	// ทำการลบ node ของกล่องทั้งหมด ออกจาก หน้าจอ
	var allbox = document.querySelectorAll(".square");
	// console.log(allbox);	
	//delete all  div
	for (var i=0;i<allbox.length;i++){
		allbox[i].parentNode.removeChild(allbox[i]);
		
	}
}




