var win = Ti.UI.createWindow({
	backgroundColor : '#ffffff',
	navBarHidden : true,
	exitOnClose : true,
	top : 0,
	left : 0,
	right : 0,
	bottom : 0
});

var button = Ti.UI.createButton({
	title : 'Take Picture',
	width : '200dp',
	height : '45dp',
	top : '10dp'
});
win.add(button);
button.addEventListener('click', function(e){
	Titanium.Media.showCamera({
		success:function(event)
		{
	    	if (tempImage) {
	        	imageWrapper.remove(tempImage);
	           	tempImage = null;
	        }
	            	
	        var image = event.media; 
	                
	        if(event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
	        	tempImage = Ti.UI.createImageView({
		        	image : image,
		        	width : '385dp',
		            height : '300dp'
				});
		                    
		        var rotation = Ti.UI.create2DMatrix({ rotate : -270 });
		        tempImage.transform = rotation;
	
	            imageWrapper.add(tempImage);
			}
		},
	    cancel:function()
	    {

	    },
	    error:function(error)
	    {
	    	var a = Titanium.UI.createAlertDialog({title:'Camera'});
	
	        if (error.code == Titanium.Media.NO_CAMERA)
	        {
	        	a.setMessage('Device does not have camera');
	        }
	        else
	        {
	            a.setMessage('Unexpected error: ' + error.code);
	        }
	 
	        a.show();
		},
		overlay : Ti.UI.createView({
			backgroundImage : '/crosshair.png',
			width : '200dp',
			height : '200dp'
		}),
	    allowImageEditing : true,
	    saveToPhotoGallery : true
	});
});

var imageWrapper = Ti.UI.createView({
	backgroundColor : 'red',
	width : '300dp',
	height : '385dp',
	top : '65dp'
});
win.add(imageWrapper);

var tempImage = null;

win.open();
