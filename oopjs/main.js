var ajaxFileDownloader = ( function() {
var resultData= "";
  function XMLDownloader() {
    
    this.downloadXML = function(){
			$.get('main.xml',function(result){
			console.log(result);
			resultData = result;
			console.log(resultData);
		});
	};
	this.xmlData = resultData;
	//this.downloadXML = $.get('main.xml',function(result){});
  }
  return XMLDownloader;
} )();

var xmlFile = new ajaxFileDownloader();
console.log(xmlFile);
xmlFile.downloadXML();
console.log(xmlFile);
var xmlReturn = xmlFile.xmlData;
console.log('hi'+xmlReturn);

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