var MapModule = require('ti.map');

var mapview = MapModule.createView({
	mapType : MapModule.NORMAL_TYPE,
	region: {
		latitude:33.74511, 
		longitude:-84.38993,
        latitudeDelta:0.01, 
        longitudeDelta:0.01
    },
    top : 0,
    left : 0,
    right : 0,
    bottom : 0,
    animate:true,
    regionFit:true
});
	
$.index.add(mapview);

$.index.open();
