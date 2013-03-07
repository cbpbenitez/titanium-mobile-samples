function getStringContents(path){
	var contents = '';
	
	var file = Ti.Filesystem.getFile(path);
	if (file.exists()) {
		var blob = file.read();
		contents = blob.text;
	}
		
	return contents;
}

var win = Ti.UI.createWindow({
	navBarHidden : true,
	backgroundColor : 'blue',
	top : 0,
	left : 0,
	right : 0,
	bottom : 0
});

var htmlContents = getStringContents(Ti.Filesystem.resourcesDirectory + 'test.html');

var webView = Ti.UI.createWebView({
	enableZoomControls : false,
	html : htmlContents,
	top : '50dp',
	left : '50dp',
	right : '50dp',
	bottom : '50dp'
});
win.add(webView);

win.open();
