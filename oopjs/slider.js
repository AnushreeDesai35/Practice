var Slider = (function(){
	function sliderCreator(elementObject,parentElement) {
		var self = this;
		var downMouse;
		var uiElement1 = document.createElement("div");
		var uiElement2 = document.createElement("div");
		uiElement1.setAttribute("id",elementObject.attributes["id1"].value);
		uiElement2.setAttribute("id",elementObject.attributes["id2"].value);
		uiElement1.setAttribute("class",elementObject.attributes["class1"].value);
		uiElement2.setAttribute("class",elementObject.attributes["class2"].value);
		this.bar = uiElement1;
		var control = uiElement2;
		//$("body").append(uiElement1);
		$('#'+elementObject.parentElement.attributes["uniquid"].value).append(uiElement1);
		$("#"+elementObject.attributes["id1"].value).append(uiElement2);
		var coordinates = elementObject.attributes["rect"].value.split(",");
		$("#"+elementObject.attributes["id1"].value).css({left: coordinates[0]+'px','top': coordinates[1]+'px',width: coordinates[2]+'px',height: coordinates[3],position:"absolute"});
	this.createSlider = function()
	{
		document.addEventListener('mousedown',mouseOnDown,false);
		document.addEventListener('mouseup',mouseOnUp,false);
		document.addEventListener('mousemove',mouseOnMove,false);
	};
	
	function mouseOnDown(e)
	{
		if (e.target.id === elementObject.attributes["id2"].value)
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
				
				var eventControl = new CustomEvent("getLeft",{
					detail:{parLeft:parseInt(control.style.left)},
					bubbles: true,
					cancelable: true			
				});
				self.bar.dispatchEvent(eventControl);
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