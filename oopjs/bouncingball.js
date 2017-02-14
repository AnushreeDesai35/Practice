var BBall = ( function() {
	
  function bouncingBall(elementObject,parentElement) 
  {
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
	//console.log("bouncingspeed : "+speed);
	this.createBouncing = function(speed)
	{
		console.log("bouncingspeed : "+speed);
		var i=0,j=0,a=0;
		function bouncingBallAni() {
			//alert('start bouncing');
		if(parseInt(i)<100)
		{
			i++;
			j = (i*i)/(4*7);
			$(uiElement2).offset({left:i,top:j});
			a = i;
		}
		if(parseInt(i)>=100 && parseInt(i)<200)
		{
			i++;
			a--;
			j = (a*a)/(4*7);
			$(uiElement2).offset({left:i,top:j});
		}
		if(parseInt(i)>=200 && parseInt(i)<300)
		{
			i++;
			a++;
			j = (a*a)/(4*7);
			$(uiElement2).offset({left:i,top:j});
		}
		if(parseInt(i)>=300 && parseInt(i)<=350)
		{
			i++;
			a--;
			j = (a*a)/(4*7);
			$(uiElement2
			).offset({left:i,top:j});
		}

		requestAnimationFrame(bouncingBallAni);
		}
		requestAnimationFrame(bouncingBallAni);
	};
  }
  return bouncingBall;
})();