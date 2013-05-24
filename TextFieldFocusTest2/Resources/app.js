var win = Ti.UI.createWindow({
	orientationModes : [Ti.UI.PORTRAIT],
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

var btn1 = Ti.UI.createButton({
	title : 'Show ScrollView',
	top : '20dp',
	width : '150dp',
	height : '35dp'
});
view.add(btn1);
btn1.addEventListener('click', function(e){
	var subWin = Ti.UI.createWindow({
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
	subWin.add(subView);
	
	var scrollView = Ti.UI.createScrollView({
		backgroundColor : 'transparent',
		layout : 'vertical',
		top : 0,
		left : 0,
		right : 0,
		bottom : 0
	});
	subView.add(scrollView);
	
	for (var i = 0; i < 30; i++) {
		var row = Ti.UI.createView({
			height : '45dp',
			left : 0,
			right : 0
		});
		
		row.add(Ti.UI.createLabel({
			text : 'TextField ' + (i + 1),
			top : '5dp',
			left : '10dp',
			width : '150dp',
			height : '35dp'
		}));
		
		row.add(Ti.UI.createTextField({
			height : '35dp',
			top : '5dp',
			left : '170',
			right : 0
		}));
		
		if (i < 29) {
			row.add(Ti.UI.createView({
				backgroundColor : '#000000',
				left : 0,
				right : 0,
				height : 1,
				bottom : 0
			}));
		}
		
		scrollView.add(row);
	}
	
	
	subWin.open();
});

var btn2 = Ti.UI.createButton({
	title : 'Show TableView',
	top : '75dp',
	width : '150dp',
	height : '35dp'
});
view.add(btn2);
btn2.addEventListener('click', function(e){
	var subWin = Ti.UI.createWindow({
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
	subWin.add(subView);
	
	var _data = [];
	for (var i = 0; i < 30; i++) {
		var row = Ti.UI.createTableViewRow({
			left : 0,
			right : 0,
			height : '45dp'
		});
		
		row.add(Ti.UI.createLabel({
			text : 'TextField ' + (i + 1),
			top : '5dp',
			left : '10dp',
			width : '150dp',
			height : '35dp'
		}));
		
		row.add(Ti.UI.createTextField({
			height : '35dp',
			top : '5dp',
			left : '170',
			right : 0
		}));
		
		_data.push(row);
	}
	
	var tableView = Ti.UI.createTableView({
		height : (Ti.Platform.displayCaps.platformHeight - 20),
		backgroundColor : 'transparent',
		data : _data,
		top : 0,
		left : 0,
		right : 0
	});
	subView.add(tableView);
	
	subWin.open();
});

win.open();
