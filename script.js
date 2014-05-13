

//

$(document).ready(function() {
	console.log("hello");
	
	loadVideo();

});


function loadVideo() {
	var videoWidth = $("#video").width();
	var videoHeight = videoWidth*.66;
	console.log(videoWidth);
	
	var vidMarkup = "<iframe width='"+videoWidth+"' height='"+videoHeight+"' src='http://www.youtube.com/embed/4kYpFmGCeBU' frameborder='0' allowfullscreen></iframe>";

	$("#video").html(vidMarkup);

}; 

/*
function loadChart() {
	var chartoneWidth = $("#chartone").width();
	var chartoneHeight = chartoneWidth*.66;
	console.log(chartoneWidth);
	
	var chtMarkup = "<iframe width='"+chartoneWidth+"' height='"+chartoneHeight+"' src='http://www.youtube.com/embed/4kYpFmGCeBU' frameborder='0' allowfullscreen></iframe>";

	$("#chartone").html(chtMarkup);

};   */