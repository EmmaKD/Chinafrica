/*
 * Aaron Kessler
 this file is associated with index.html in googlevizexamples2 folder. Topic: Google Viz  Charts
 * */

/*
 * google viz line chart documentation:
 * https://developers.google.com/chart/interactive/docs/gallery/linechart#Overview
 * 
 * OUTLINE
 * 
 * 1. Load JQuery library
 * 2. Load my own JS scripts file
 * 3. Test that the script file connected using console.log
 * 4. Add a document-ready action
 * 5. Create a function to be triggered by document-ready
 * 6. Test that function using a console.log
 * 7. Load the Google Visualization library
 * 8. Load my data from Google Fusion table
 * 9. Create a div on the html page where the viz will go
 * 10.Feed data to the Google viz library to place chart result on html page
 * 	10a. Get data into a format that library can handle (array of arrays)
 * 	10b. Identify the data I want to pull from data
 * 	10c. Feed data to a chart/draw chart
 * 	10d. Configure options on the chart
 * 	10e. Tell the library where to place the chart (the div I've created on html page)
 * 11. Load page to test if chart successfully added to page
 * 
 * 
 * 
 */

//first we test that it's loading the JS file into our HTML page 
console.log("The JS connection is working");


//create dataready function from our GET statement below, and give our data a local name: employdata
function dataready(employdata){
	//test data connection
	console.log(employdata)

	//create variable and then loop to pull out data from the "observations" object
	//in the JSON file.
	//first set a variable, myobsdate, to stand in for the observations object
	var obsdata = employdata.observations;
	
	//going to construct an array of arrays
	//start with an empty array to hold our reformatted data
	var containerfordata = [];
	
	//since the array from the json file won't have column names and
	//google wants them, we have to add them in first
	var headernames = ["date", "Ghana"];
	containerfordata.push(headernames);
		

	//put together the loop. start at 0, go for as long as obsdata length, then add one
	for(var i=0; i<obsdata.length; i++){
		
		//create reference to current object in list, based on our variable "i"
		//this ties to the current unemployment record (year, value) as we go through
		var currentrecord = obsdata[i];
		//now we create a variable for our current array
		var currentarray = [currentrecord.year, Number(currentrecord.Ghana);  //the "number" here converts the value to a number
		
		//so now you have to feed this into the overall array container above, to put it all together
		containerfordata.push(currentarray);
		
	}
//end of FOR loop
	
	
//now we'll check to see if our FOR loop worked to create our array-of-arrays
//we'll send the full reformatted dataset to the console
console.log(containerfordata);
	
//now feed the data to google's library
var datatable = google.visualization.arrayToDataTable(containerfordata);
	
var chartoptions = {
         title: 'Monthly Unemployment Rates Since 2006',
       //  hAxis: {title: 'By Month/Year', titleTextStyle: {color: 'red'}}
       	 		//I tried using this...it did spit out the title, but the years
       	 		//had disappeared?  Hmm.

        };

	
//now we'll create the actual line chart and put it in a HTML page's div called chartdiv.
//you can actually change the type of chart easily by changing "line" to "column" etc
var finalchart = new google.visualization.LineChart(document.getElementById("chartdiv"));  
	finalchart.draw(datatable);
	finalchart.draw(datatable, chartoptions);
	
}


//we'll use this function to test the google viz library connection
function googleready(){
	
	console.log("Google Viz libary ready to go");
	

/*loadng the json data file using jquery
	//function called GET used to do this - begins with a PERIOD (.)
	*This requires three arguments:
	* 1 - the file name
	* 2 - the function to call once the file is loaded (no quotes)
	* 3 - the file type to expect as a string (e.g. "json", "xml", etc)
	*/
	//here, we need to BE CAREFUL to have this in the googleready function
	//and NOT in the pageready function below or you have an order of operations problem
	$.get("testdata.json", dataready, "json");
	
}


function pageready(){
	
	console.log("function is working")
	//load the Google vizualization library	
	google.load("visualization", "1", {packages:["corechart"], callback: "googleready"});  //need to add callback inside the object here
	//we are calling the function googleready as the callback

	
}


//here is our trusted document.ready command - so we wait for the page to be ready, then trigger pageready
$(document).ready(pageready);



