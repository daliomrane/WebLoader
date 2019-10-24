// JavaScript Document
var x1=0;
var y1=0;
var z1=0;
var x2=0;
var y2=0;
var z2=0;
var pictureSource;   // picture source
var destinationType; // sets the format of returned value
var url = localStorage.getItem("ip");
var ip = localStorage.getItem("ipb");
var tol = localStorage.getItem("tol");

$( document ).ready(function(){
	"use strict";
	 $("body").append(' <script src="Scripts/jquery.signalR-2.4.0.min.js"></script><script src="http://'+ip+':8080/signalr/hubs"></script>'); 
	setTimeout(function(){
		capturePhoto();
						 
	 $(function () {
            //Set the hubs URL for the connection
            $.connection.hub.url = "http://"+ip+":8080/signalr";
            
             //Declare a proxy to reference the hub.
            var chat = $.connection.sRHub;       

            // Create a function that the hub can call to broadcast messages.
            chat.client.addMessage = function (message) {
                // Html encode display name and message.
                //var encodedName = $('<div />').text(name).html();
				
               if(message===false)
				   {
					   alert("erreur de mesure");
					   capturePhoto();
					  
				   }
				
				else{
					
					
	navigator.accelerometer.getCurrentAcceleration(onSuccessg2, onErrorg);
	setTimeout(function(){
	var x=Math.abs(x1-x2);
    var y=Math.abs(y1-y2);
	var z=Math.abs(z1-z2);
		
		
		if(x>tol || y> tol || z >tol)
		{alert("capture instable");}
		
		capturePhoto();
	},1500); }};
			$.connection.hub.start().done(function () {
                }); });
				
      },1500);      		
});

// Wait for device API libraries to load
//
document.addEventListener("deviceready",onDeviceReady,false);

// device APIs are available
//
function onDeviceReady() {
	"use strict";
     pictureSource=navigator.camera.PictureSourceType;
     destinationType=navigator.camera.DestinationType;
   }

// Called when a photo is successfully retrieved
//
function onPhotoDataSuccess(imageData) {
// Uncomment to view the base64-encoded image data
// console.log(imageData);
// Get image handle
//
	"use strict";
// send image elements and getn motion
//
navigator.accelerometer.getCurrentAcceleration(onSuccessg1, onErrorg);
$.ajax({
  "url": url+"sendImage",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
   "data": "{\"Image\":\""+imageData+"\"}",
	success: function(){
    alert("Image recu");

	 
		
  },
	error:function(){
	alert("problème de connexion");

	
		capturePhoto();

					}
});
}

// A button will call this function
//
function capturePhoto() {
	"use strict";
// Take picture using device camera and retrieve image as base64-encoded string
     navigator.camera.getPicture(onPhotoDataSuccess, onFail,
								  { quality: 100,destinationType: destinationType.DATA_URL });
    }

   

// Called if something bad happens.
//
function onFail() {
	"use strict";
		setTimeout(function(){
	capturePhoto();
	 
	},5500);
    
    }

function onErrorg() {
	"use strict";
    alert('onError!');
}

// onSuccess acceleration.
//
function onSuccessg2(acceleration) {
  "use strict";
	x2=acceleration.x;
    y2=acceleration.y;
    z2=acceleration.z; 
         
}
function onSuccessg1(acceleration) {
  "use strict";
    x1=acceleration.x;
    y1=acceleration.y;
    z1=acceleration.z;
         
}


