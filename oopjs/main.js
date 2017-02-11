$.getScript("uiModule.js", function(data){
//console.log(data);

});
// XML downloader module
var ajaxFileDownloader = ( function() {
var resultData= "";
  function XMLDownloader(fileXML) {
    
	this.downloadXML = function(xmlui)
	{
		$.get(fileXML,function(result){
			xmlui(result.documentElement.children);
		});
	};
	
	this.xmlData = resultData;
	//this.downloadXML = $.get('main.xml',function(result){});
  }
  return XMLDownloader;
})();

// UI creator module
var uiCreator = ( function() {
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


var xmlReturn = new ajaxFileDownloader('main.xml');	
var abc = new uiCreator();
xmlReturn.downloadXML(abc.xmlui);

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
		imgSrc = "";
		switch(elementObject.tagName){
			case "button":
				ele = "button";
				break;
			case "image":
				ele = "img";
				imgSrc = elementObject.attributes["imgSrc"].value;
				break;
			case "panel":
				ele = "div";
				break;
			case "label":
				ele = "label"
				break;
		}
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

/*
var ajaxFileDownloader = (function(){
	
	var myObject = {
		downloadXML : function(){
			$.get('main.xml',function(result){
			alert(result);
		});
		}
	};
	 return myObject;
})();
*/