var uiCreator = ( function() {
	
	function drawDiv(elementObject,parentElement){
		createElement(elementObject,parentElement);
		var j = 0;
		var divElements = elementObject.children;
		for(j;j<divElements.length;j++)
		{
			if(divElements[j].tagName == "panel")
			{
				drawDiv(elementObject.children[j],divElements[j].parentElement.attributes["uniquid"].value);
			}
			else
			{
				createElement(divElements[j],divElements[j].parentElement.attributes["uniquid"].value);
			}
		}
	}
	
	function createElement(elementObject,parentElement){
		var ele="";
		imgSrc = "";
		switch(elementObject.tagName){
			case "button":
				ele = "button";
				break;
			case "panel":
				ele = "div";
				break;
			case "label":
				ele = "label"
				break;
			case "slider":
				createSlider(elementObject,parentElement);
				break;
			case "bouncingball":
				createBouncingBall(elementObject,parentElement);
				break;
		}
		
			if(ele == "button" || ele == "div" || ele == "label")
			{
			var uniqueID = elementObject.attributes["uniquid"].value;
			var coordinates = elementObject.attributes["rect"].value.split(",");
			var uiElement = document.createElement(ele);
			uiElement.setAttribute("id",uniqueID);
			if (imgSrc == "")
			{
			}
			else 
				uiElement.setAttribute("src",imgSrc);
			$(uiElement).css({left: coordinates[0]+'px','top': coordinates[1]+'px',width: coordinates[2]+'px',height: coordinates[3],position:"absolute"});
			if(elementObject.tagName == "panel"){
			}
			else
			{
			$(uiElement).text(elementObject.textContent);
			}
			if(parentElement === "")
				$("body").append(uiElement);
			else
				$('#'+elementObject.parentElement.attributes["uniquid"].value).append(uiElement);
			}
	}

	function createSlider(elementObject,parentElement)
	{
		var slider = new Slider(elementObject,parentElement);
		slider.createSlider();
		//var leftval = parseInt(window.getComputedStyle(document.getElementById("control"),null).getPropertyValue("left"));
		//console.log(leftval);
	}
	
	function createBouncingBall(elementObject,parentElement)
	{
		var bouncingball = new BBall(elementObject,parentElement);
		bouncingball.createBouncing();
	}
	
	function createUI()
	{
		this.xmlui = function(xmlElements)
		{
			console.log(xmlElements);
			for (i=0;i<xmlElements.length;i++){

			if (xmlElements[i].tagName === 'panel')
			{
				drawDiv(xmlElements[i],"");
			}
			else
			{
				createElement(xmlElements[i],"");
			}
		}
		};
	}
  return createUI;
})();
