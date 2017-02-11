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
