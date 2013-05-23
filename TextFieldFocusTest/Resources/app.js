var win = Ti.UI.createWindow({
	navBarHidden : true,
	exitOnClose : true,
	top : 0,
	left : 0,
	right : 0,
	bottom : 0
});

var view = Ti.UI.createView({
	backgroundColor : '#ffffff',
	top : 0,
	left : 0,
	right : 0,
	bottom : 0
});
win.add(view);

var btnShowBuggedField = Ti.UI.createButton({
	title : 'Show Bugged TextField',
	top : '20dp',
	width : '150dp',
	height : '35dp'
});
view.add(btnShowBuggedField);

btnShowBuggedField.addEventListener('click', function(e){
	var win1 = Ti.UI.createWindow({
		navBarHidden : true,
		top : 0,
		left : 0,
		right : 0,
		bottom : 0
	});
	
	var subView = Ti.UI.createView({
		backgroundColor : '#ffffff',
		top : 0,
		left : 0,
		right : 0,
		bottom : 0
	});
	win1.add(subView);
	
	var _data = [];
	var tableViewRow = Ti.UI.createTableViewRow({
		height : '45dp',
		left : 0,
		right : 0
	});
	
	var textField = Ti.UI.createTextField({
		top : '5dp',
		left : '20dp',
		right : '20dp',
		height : '35dp'
	});
	tableViewRow.add(textField);
	
	_data.push(tableViewRow);
	
	var tableView = Ti.UI.createTableView({
		backgroundColor : '#c0c0c0',
		data : _data,
		top : '10dp',
		left : '20dp',
		right : '20dp',
		bottom : '10dp'
	});
	subView.add(tableView);
	
	win1.open();
});

var btnShowFixedField = Ti.UI.createButton({
	title : 'Show Fixed TextField',
	top : '75dp',
	width : '150dp',
	height : '35dp'
});
view.add(btnShowFixedField);

btnShowFixedField.addEventListener('click', function(e){
	var win2 = Ti.UI.createWindow({
		navBarHidden : true,
		top : 0,
		left : 0,
		right : 0,
		bottom : 0
	});
	
	var subView = Ti.UI.createView({
		backgroundColor : '#ffffff',
		top : 0,
		left : 0,
		right : 0,
		bottom : 0
	});
	win2.add(subView);
	
	var _data = [];
	var tableViewRow = Ti.UI.createTableViewRow({
		height : '45dp',
		left : 0,
		right : 0
	});
	
	var textField = Ti.UI.createTextField({
		top : '5dp',
		left : '20dp',
		right : '20dp',
		height : '35dp'
	});
	tableViewRow.add(textField);
	
	_data.push(tableViewRow);
	
	var tableView = Ti.UI.createTableView({
		backgroundColor : '#c0c0c0',
		data : _data,
		top : '10dp',
		left : '20dp',
		right : '20dp',
		height : '380dp'
	});
	subView.add(tableView);
	
	win2.open();
});

win.open();
