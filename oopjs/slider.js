var Slider = (function(){
	function sliderCreator(elementObject) {
		
		var downMouse;
		var uiElement1 = document.createElement("div");
		var uiElement2 = document.createElement("div");
		uiElement1.setAttribute("id","bar");
		uiElement2.setAttribute("id","control");
		var bar = uiElement1;
		var control = uiElement2;
		$("body").append(uiElement1);
		$("#bar").append(uiElement2);
		var coordinates = elementObject.attributes["rect"].value.split(",");
		$("#bar").css({left: coordinates[0]+'px','top': coordinates[1]+'px',width: coordinates[2]+'px',height: coordinates[3],position:"absolute"});
	this.createSlider = function()
	{
		document.addEventListener('mousedown',mouseOnDown,false);
		document.addEventListener('mouseup',mouseOnUp,false);
		document.addEventListener('mousemove',mouseOnMove,false);
	};
	this.controlValue = parseInt(control.style.left);
	
	function mouseOnDown(e)
	{
		if (e.target.id === "control")
		downMouse = true;
	}

	function mouseOnMove(ev)
	{
		ev.preventDefault();
		var controlx;
			if (downMouse)
			{
				controlx = parseInt(window.getComputedStyle(control,null).getPropertyValue("left"));	
				if ((ev.pageX) > controlx)
				{
					if (controlx < 100)
					control.style.left = (controlx + 1) + 'px';
				}
				else if ((ev.pageX) < (controlx+5))
				{
					if (controlx > 0)
					control.style.left = (controlx - 1) + 'px';
				}
			//console.log(parseInt(control.style.left));
			}
			
	}

	function mouseOnUp(e)
	{
		e.preventDefault();
		downMouse = false;
	}
  }
  return sliderCreator;
})();