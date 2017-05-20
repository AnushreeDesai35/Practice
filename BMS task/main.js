var btn = document.getElementById("animateDiv");
btn.addEventListener('click',moveDiv);
var divElement = document.getElementById("testDiv");
var screenW = screen.width;
console.log(screenW);
var screenY = screen.height;
console.log(screenY);
leftPos=0;
topPos=0;
function moveDiv(){
	requestAnimationFrame(animateDiv);
}
function animateDiv(){
	if(leftPos <= screenW-50){
			
		leftPos=leftPos+5;
		divElement.style.left=leftPos+"px";
		console.log(leftPos);
		if(leftPos == screenW){
			divElement.style.backgroundColor = "yellow";
		}
	}
	
	if(topPos <= 300 && leftPos >= screenW){
		topPos++;
		divElement.style.top=topPos+"px";
		if(topPos == 300)
		{
			divElement.style.backgroundColor = "red";
		}
		console.log(topPos);
		console.log(leftPos);
	}
	
	
	if(topPos >= 300 && leftPos >= screenW){
		leftPos--;
		divElement.style.left=leftPos+"px";
		if(leftPos == 0){
			divElement.style.backgroundColor = "green";
		}
	}
	requestAnimationFrame(animateDiv);
}
