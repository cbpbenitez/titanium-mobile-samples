var assetImages = [];
var appDataImages = [];

var imgDir = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory + 'images/');
if (imgDir.exists()) {
	var imageFiles = imgDir.getDirectoryListing();

	for (var i = 0; i < imageFiles.length; i++) {
		var imageFile = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory + 'images/', imageFiles[i]);
		assetImages.push('/images/' + imageFiles[i]);
		
		var imageCopy = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, imageFiles[i]);
		
		if (!imageCopy.exists()) {
			imageFile.copy(Ti.Filesystem.applicationDataDirectory + imageFiles[i]);
		}
		
		appDataImages.push(imageCopy.nativePath);
	}
}

var win = Ti.UI.createWindow({
	orientationModes : [Ti.UI.PORTRAIT],
	backgroundColor : '#ffffff',
	navBarHidden : true,
	top : 0,
	left : 0,
	right : 0,
	bottom : 0,
	exitOnClose : true
});

var label = Ti.UI.createLabel({
	text : 'Image source : http://www.freeimages.co.uk/',
	textAlign : 'center',
	bottom : '10dp',
	left : 0,
	right : 0,
	height : '35dp',
	color : '#000000',
	font : {
		fontSize : '16dp'
	}
});
win.add(label);

var btnOpenWin1 = Ti.UI.createButton({
	title : 'Open Window1',
	height : '35dp',
	top : '10dp',
	left : '20dp',
	right : '20dp'
});
win.add(btnOpenWin1);
btnOpenWin1.addEventListener('click', function(e){
	var assetImagesWin = Ti.UI.createWindow({
		navBarHidden : true,
		top : 0,
		left : 0,
		right : 0,
		bottom : 0
	});
	
	var tableView = Ti.UI.createTableView({
		width : Ti.UI.FILL,
		height : Ti.UI.FILL
	});
	assetImagesWin.add(tableView);
	
	var _data = [];
	for (var j = 0; j < assetImages.length; j++) {
		var row = Ti.UI.createTableViewRow({
			height : '144dp',
			left : 0,
			right : 0
		});
		
		row.add(Ti.UI.createView({
			backgroundImage : assetImages[j],
			width : '200dp',
			height : '134dp',
			left : '10dp',
			top : '5dp'
		}));
		
		_data.push(row);
	}
	tableView.data = _data;
	
	assetImagesWin.open();
});

var btnOpenWin2 = Ti.UI.createButton({
	title : 'Open Window2',
	height : '35dp',
	top : '60dp',
	left : '20dp',
	right : '20dp'
});
win.add(btnOpenWin2);
btnOpenWin2.addEventListener('click', function(e){
	var appDataImagesWin = Ti.UI.createWindow({
		navBarHidden : true,
		top : 0,
		left : 0,
		right : 0,
		bottom : 0
	});
	
	var tableView = Ti.UI.createTableView({
		width : Ti.UI.FILL,
		height : Ti.UI.FILL
	});
	appDataImagesWin.add(tableView);
	
	var _data = [];
	for (var j = 0; j < appDataImages.length; j++) {
		var row = Ti.UI.createTableViewRow({
			height : '144dp',
			left : 0,
			right : 0
		});
		
		row.add(Ti.UI.createImageView({
			image : appDataImages[j],
			width : '200dp',
			height : '134dp',
			left : '10dp',
			top : '5dp'
		}));
		
		_data.push(row);
	}
	tableView.data = _data;
	
	appDataImagesWin.open();
});

win.open();
