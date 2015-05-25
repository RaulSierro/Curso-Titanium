var win = Ti.UI.createWindow({
	
	backgroundColor : "black",
	
});

var v1 = Ti.UI.createView({
	
	backgroundColor : "#FA0", 
	width : "200px",
	height : "270px",
	right : "0px",
	
	
});

var v2 = Ti.UI.createView({
	
	backgroundColor : "blue",
	width : "1cm",
	height : "1cm",
	left : "0px"
	
});

win.add(v1);
win.add(v2);
win.open();
