var Mustache = require('mustache');

var win = Ti.UI.createWindow({
	backgroundColor : '#808080',
	orientationModes : [ Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT ],
	navBarHidden : true,
	exitOnClose : true,
	top : 0,
	left : 0,
	right : 0,
	bottom : 0
});

var btnShowTableView = Ti.UI.createButton({
	title : 'Show Table View',
	width : '250dp',
	height : '45dp',
	top : '10dp',
	left : '10dp'
});
win.add(btnShowTableView);
btnShowTableView.addEventListener('click', function(e){
	
	var win2 = Ti.UI.createWindow({
		backgroundColor : '#808080',
		orientationModes : [ Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT ],
		navBarHidden : true,
		top : 0,
		left : 0,
		right : 0,
		bottom : 0
	});
	
	var rowData = [];
	var imageIndex = 0;
	for (var i = 0; i < 150; i++) {
		if (imageIndex > 4) {
			imageIndex = 0;
		}
		
		var row = Ti.UI.createTableViewRow({
			height : '250dp'
		});
		
		var imgvwRowImage = Ti.UI.createImageView({
			image : '/images/' + imageIndex + '.jpg',
			width : '320dp',
			height : '240dp',
			left : '10dp',
			top : '5dp',
			bottom : '5dp'
		});
		row.add(imgvwRowImage);
		
		rowData.push(row);
		imageIndex += 1;
	}
	
	var tableView = Ti.UI.createTableView({
		top : '65dp',
		left : 0,
		right : 0,
		bottom : 0,
		data : rowData
	});
	win2.add(tableView);
	tableView.addEventListener('click', function(e){
		alert('You have selected the row with index ' + e.index);
	});
	
	var btnClose = Ti.UI.createButton({
		title : 'Close',
		width : '70dp',
		height : '45dp',
		top : '10dp',
		left : '10dp'
	});
	win2.add(btnClose);
	btnClose.addEventListener('click', function(e){
		win2.close();
	});
	
	win2.open();
	
});

var btnShowAlternative = Ti.UI.createButton({
	title : 'Show Alternative',
	width : '250dp',
	height : '45dp',
	top : '65dp',
	left : '10dp'
});
win.add(btnShowAlternative);
btnShowAlternative.addEventListener('click', function(e){
	
	function getStringContents(path){
		var contents = '';
		
		var file = Ti.Filesystem.getFile(path);
		if (file.exists()) {
			var blob = file.read();
			contents = blob.text;
		}
			
		return contents;
	}
	
	function handleRowSelect(e) {
		alert('You have selected the row with index ' + e.index);
	}
	
	var win2 = Ti.UI.createWindow({
		backgroundColor : '#808080',
		orientationModes : [ Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT ],
		navBarHidden : true,
		top : 0,
		left : 0,
		right : 0,
		bottom : 0
	});
	
	var resImgBaseDir = '/';
	if (Ti.Platform.name == 'android') {
		var f = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory);
		if (f.exists()) {
			resImgBaseDir = f.nativePath;
		}
	}

	var imageIndex = 0;
	var listData = { table_rows : [] };
	for (var  i = 0; i < 150; i++) {
		if (imageIndex > 4) {
			imageIndex = 0;
		}
		
		listData.table_rows.push({ 
			image_url : resImgBaseDir + 'images/' + imageIndex + '.jpg',
			row_index : i
		});
		imageIndex += 1;
	}
	
	var htmlContents = getStringContents(Ti.Filesystem.resourcesDirectory + 'list.html');
	var htmlData = Mustache.render(htmlContents, listData);
	
	var webView = Ti.UI.createWebView({
		backgroundColor : '#ffffff',
		top : '65dp',
		left : 0,
		right : 0,
		bottom : 0,
		html : htmlData
	});
	win2.add(webView);
	
	var btnClose = Ti.UI.createButton({
		title : 'Close',
		width : '70dp',
		height : '45dp',
		top : '10dp',
		left : '10dp'
	});
	win2.add(btnClose);
	btnClose.addEventListener('click', function(e){
		win2.close();
	});
	
	win2.addEventListener('close', function(e){
		Ti.App.removeEventListener('app:handleRowSelect', handleRowSelect);
	});
	Ti.App.addEventListener('app:handleRowSelect', handleRowSelect);
	
	win2.open();
	
});

win.open();
