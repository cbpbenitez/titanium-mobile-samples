var urls = [
	"http://tabletpcssource.com/wp-content/uploads/2011/05/android-logo.png",
	"http://simpozia.com/pages/images/stories/windows-icon.png",
	"https://si0.twimg.com/profile_images/1135218951/gmail_profile_icon3_normal.png",
	"http://www.krify.net/wp-content/uploads/2011/09/Macromedia_Flash_dock_icon.png",
	"http://radiotray.sourceforge.net/radio.png",
	"http://www.bandwidthblog.com/wp-content/uploads/2011/11/twitter-logo.png",
	"http://weloveicons.s3.amazonaws.com/icons/100907_itunes1.png",
	"http://weloveicons.s3.amazonaws.com/icons/100929_applications.png",
	"http://www.idyllicmusic.com/index_files/get_apple-iphone.png",
	"http://www.frenchrevolutionfood.com/wp-content/uploads/2009/04/Twitter-Bird.png",
	"http://3.bp.blogspot.com/-ka5MiRGJ_S4/TdD9OoF6bmI/AAAAAAAAE8k/7ydKtptUtSg/s1600/Google_Sky%2BMaps_Android.png",
	"http://www.desiredsoft.com/images/icon_webhosting.png",
	"http://goodereader.com/apps/wp-content/uploads/downloads/thumbnails/2012/01/hi-256-0-99dda8c730196ab93c67f0659d5b8489abdeb977.png",
	"http://1.bp.blogspot.com/-mlaJ4p_3rBU/TdD9OWxN8II/AAAAAAAAE8U/xyynWwr3_4Q/s1600/antivitus_free.png",
	"http://cdn3.iconfinder.com/data/icons/transformers/computer.png",
	"http://cdn.geekwire.com/wp-content/uploads/2011/04/firefox.png?7794fe",
	"https://ssl.gstatic.com/android/market/com.rovio.angrybirdsseasons/hi-256-9-347dae230614238a639d21508ae492302340b2ba",
	"http://androidblaze.com/wp-content/uploads/2011/12/tablet-pc-256x256.jpg",
	"http://www.theblaze.com/wp-content/uploads/2011/08/Apple.png",
	"http://1.bp.blogspot.com/-y-HQwQ4Kuu0/TdD9_iKIY7I/AAAAAAAAE88/3G4xiclDZD0/s1600/Twitter_Android.png",
	"http://3.bp.blogspot.com/-nAf4IMJGpc8/TdD9OGNUHHI/AAAAAAAAE8E/VM9yU_lIgZ4/s1600/Adobe%2BReader_Android.png",
	"http://cdn.geekwire.com/wp-content/uploads/2011/05/oovoo-android.png?7794fe",
	"http://icons.iconarchive.com/icons/kocco/ndroid/128/android-market-2-icon.png",
	"http://thecustomizewindows.com/wp-content/uploads/2011/11/Nicest-Android-Live-Wallpapers.png",
	"http://c.wrzuta.pl/wm16596/a32f1a47002ab3a949afeb4f",
	"http://macprovid.vo.llnwd.net/o43/hub/media/1090/6882/01_headline_Muse.jpg"
];

function cacheImageAndLoad(url, imageView){
	var fileName = url.substring(url.lastIndexOf('/') + 1);
	
	var fileCopy = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, fileName);
	if (!fileCopy.exists()) {
		var xhr = Ti.Network.createHTTPClient({
			onload : function(e) {
				fileCopy.write(xhr.responseData);
				imageView.image = fileCopy.nativePath;
			},
			onerror : function(e) {
				/*
				 * show default image
				 */
			},
			timeout : 20000
		});
		
		xhr.open('GET', url);
		xhr.send();
	}
	else {
		imageView.image = fileCopy.nativePath;
	}
}

var win = Ti.UI.createWindow({
	backgroundColor : '#ffffff',
	top : 0,
	left : 0,
	right : 0,
	bottom : 0
});

var rows = [];
for (var i = 0; i < urls.length; i++) {
	var row = Ti.UI.createTableViewRow({
		left : 0,
		right : 0,
		height : '160dp'
	});
	
	var imageView = Ti.UI.createImageView({
		image : '/appicon.png',
		width : '150dp',
		height : '150dp',
		top : '5dp',
		bottom : '5dp'
	});
	row.add(imageView);
	
	cacheImageAndLoad(urls[i], imageView);
	
	rows.push(row);
}

var tableView = Ti.UI.createTableView({
	data : rows,
	top : 0,
	left : 0,
	right : 0,
	bottom : 0
});
win.add(tableView);

win.open();
