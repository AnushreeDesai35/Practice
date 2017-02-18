// XML downloader module

var myapp = myapp || {};

myapp.ajaxFileDownloader = ( function() {
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

var xmlReturn = new myapp.ajaxFileDownloader('main.xml');	
var abc = new myapp.uiCreator();
xmlReturn.downloadXML(abc.xmlui);



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