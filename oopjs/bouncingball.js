var myapp = myapp || {};

myapp.BBall = ( function() {
	
  function bouncingBall(elementObject,parentElement) 
  {
	var abc;
	var animation;
	var self = this;
	var startBtn = document.getElementById(elementObject.attributes["startBtn"].value);
	var stopBtn = document.getElementById(elementObject.attributes["stopBtn"].value);
	startAnimation = startAnimation.bind(this);
	startBtn.addEventListener("click",startAnimation);
	stopBtn.addEventListener("click",stopAnimation);
	
	  function startAnimation(){
		//abc = self.bouncingBallAni.bind(self);
		
		//console.log('abc : '+abc);
		animation = requestAnimationFrame(this.bouncingBallAni);
	  }
	  
	  function stopAnimation(){
		cancelAnimationFrame(animation);
	  }
	  
	var i=0,j=0,a=0;
	this.speed = 1;
    var uiElement1 = document.createElement("div");
	var uiElement2 = document.createElement("div");
	uiElement1.setAttribute("id",elementObject.attributes["id1"].value);
	uiElement2.setAttribute("id",elementObject.attributes["id2"].value);
	$('#'+elementObject.parentElement.attributes["uniquid"].value).append(uiElement1);
	uiElement1.setAttribute("class",elementObject.attributes["class1"].value);
	uiElement2.setAttribute("class",elementObject.attributes["class2"].value);
	$('#'+elementObject.parentElement.attributes["uniquid"].value).append(uiElement1);
	$("#"+elementObject.attributes["id1"].value).append(uiElement2);
	var coordinates = elementObject.attributes["rect"].value.split(",");
	$("#"+elementObject.attributes["id1"].value).css({left: coordinates[0]+'px','top': coordinates[1]+'px',width: coordinates[2]+'px',height: coordinates[3],position:"absolute"});
	
	
	this.setSpeed = function(speed){
		this.speed = speed;
		console.log("bouncingspeed : "+this.speed);
	}
	
	this.bouncingBallAni = function()
	{
			//alert('start bouncing');
		if(parseInt(i)<100)
		{
			i= i+ this.speed;
			j = (i*i)/(4*7);
			$(uiElement2).css({left:i,top:j});
			a = i;
		}
		if(parseInt(i)>=100 && parseInt(i)<200)
		{
			i= i+ this.speed;
			a--;
			j = (a*a)/(4*7);
			$(uiElement2).css({left:i,top:j});
		}
		if(parseInt(i)>=200 && parseInt(i)<300)
		{
			i= i+ this.speed;
			a++;
			j = (a*a)/(4*7);
			$(uiElement2).css({left:i,top:j});
		}
		if(parseInt(i)>=300 && parseInt(i)<=350)
		{
			i= i+ this.speed;
			a--;
			j = (a*a)/(4*7);
			$(uiElement2).css({left:i,top:j});
		}

		animation = requestAnimationFrame(this.bouncingBallAni);
	}
	
	this.bouncingBallAni = this.bouncingBallAni.bind(this);
	
  }
  return bouncingBall;
})();