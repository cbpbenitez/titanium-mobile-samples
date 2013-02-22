var win = Ti.UI.createWindow({
	exitOnClose : true,
	navBarHidden : true,
	top : 0,
	left : 0,
	right : 0,
	bottom : 0
});

var htmlContent = 	'<html>' +
					'	<header>' +
					'		<meta name="viewport" content="initial-scale=1.0, user-scalable=no, width=device-width" /> ' +
					'		<style type="text/css">' +
					'			body { font-family:Airstream; font-size:20pt; } ' +
					'			@font-face { font-family : "Airstream"; src:url("Airstream.ttf"); }' +
					'		</style>' +
					'	</header>' +
					'	<body>' +
					'		Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' +
					'	</body>' +  
					'</html>';
					
var fontFile = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory + 'fonts/', 'Airstream.ttf');
var fontCopy = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'Airstream.ttf');
if (!fontCopy.exists()) {
	fontFile.copy(Ti.Filesystem.applicationDataDirectory + 'Airstream.ttf');
}

var webView = Ti.UI.createWebView({
	top : 0,
	left : 0,
	right : 0,
	bottom : 0
});
win.add(webView);

var htmlFile = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'test.html');
htmlFile.write(htmlContent);
if (htmlFile.exists()) {
	webView.setUrl(htmlFile.nativePath);
}

win.open();
