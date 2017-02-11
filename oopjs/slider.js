var Slider = (function(){
	function sliderCreator(bar,control) {
		var downMouse;
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