var ajaxFileDownloader = ( function() {
var resultData= "";
  function XMLDownloader(fileXML) {
    
    this.downloadXML = function(){
			$.get(fileXML,function(result){
			console.log(result);
			resultData = result;
			console.log(resultData);
			return resultData;
		});
	};
	this.xmlData = resultData;
	//this.downloadXML = $.get('main.xml',function(result){});
  }
  return XMLDownloader;
} )();

var xmlFile = new ajaxFileDownloader('main.xml');	
console.log(xmlFile);
var xmlData = xmlFile.downloadXML();
console.log(xmlData);
// console.log(xmlFile);
// var xmlReturn = xmlFile.xmlData;
// console.log('hi'+xmlReturn);


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