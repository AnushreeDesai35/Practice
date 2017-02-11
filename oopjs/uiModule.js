// UI creator module

var uiCreator = ( function() {
	function createUI()
	{
		this.xmlui = function(xmlElements)
		{
			console.log(xmlElements);
		};
	}
  return createUI;
})();
