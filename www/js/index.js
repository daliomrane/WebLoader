$("#ok").click(function(){
"use strict";		   
localStorage.setItem("tol",$("#tol").val())	;


var url="http://"+$("#ip").val()+":8088/";
$.ajax({
  "url": url+"getConnexion",
  "method": "GET",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
   
	success: function(){
		localStorage.setItem("ipb",$("#ip").val());
    	localStorage.setItem("ip",url);
		setTimeout(function(){
		location.href = "cam.html";
	},500);
		
		
  },
	
	error:function(){
    
	alert("Adresse IP non valide");

}
			   
 });
});