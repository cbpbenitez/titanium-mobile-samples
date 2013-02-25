var mainWin = Ti.UI.createWindow({
	backgroundColor : '#000000',
	exitOnClose : true,
	top : 0,
	left : 0,
	right : 0,
	bottom : 0
});

var btn1 = Ti.UI.createButton({
	top : '30dp',
	width : Ti.UI.SIZE,
	height : Ti.UI.SIZE,
	title : 'Call Normal Window'
});
btn1.addEventListener('click', function(e){
	var newWin = Ti.UI.createWindow({
		navBarHidden : true,
		backgroundColor : 'red',
		top : 0,
		left : 0,
		right : 0,
		bottom : 0
	});
	newWin.open();
});
mainWin.add(btn1);

var btn2 = Ti.UI.createButton({
	top : '80dp',
	width : Ti.UI.SIZE,
	height : Ti.UI.SIZE,
	title : 'Call Modal Window'
});
btn2.addEventListener('click', function(e){
	var newWin = Ti.UI.createWindow({
		navBarHidden : true,
		backgroundColor : 'blue',
		top : 0,
		left : 0,
		right : 0,
		bottom : 0,
		modal : true
	});
	newWin.open();
});
mainWin.add(btn2);

mainWin.open();
