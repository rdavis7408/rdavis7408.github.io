/*

This file contains all of the code running in the background that makes resumeBuilder.js possible. We call these helper functions because they support your code in this course.

Don't worry, you'll learn what's going on in this file throughout the course. You won't need to make any changes to it until you start experimenting with inserting a Google Map in Problem Set 3.

Cameron Pittman
*/


/*
These are HTML strings. As part of the course, you'll be using JavaScript functions
replace the %data% placeholder text you see in them.
*/
var HTMLheaderName = "<h1 id='name'>%data%</h1>";
var HTMLheaderRole = "<span>%data%</span><hr/>";

var HTMLcontactGeneric = "<li class='flex-item'><span class='orange-text'>%contact%</span><span class='white-text'>%data%</span></li>";
var HTMLmobile = "<li class='flex-item'><span class='orange-text'>mobile</span><span class='white-text'>%data%</span></li>";
var HTMLemail = "<li class='flex-item'><span class='orange-text'>email</span><span class='white-text'>%data%</span></li>";
var HTMLtwitter = "<li class='flex-item'><span class='orange-text'>twitter</span><span class='white-text'>%data%</span></li>";
var HTMLgithub = "<li class='flex-item'><span class='orange-text'>github</span><span class='white-text'>%data%</span></li>";
var HTMLblog = "<li class='flex-item'><span class='orange-text'>blog</span><span class='white-text'>%data%</span></li>";
var HTMLlocation = "<li class='flex-item'><span class='orange-text'>location</span><span class='white-text'>%data%</span></li>";

//var HTMLbioPic = "<img src='%data%' class='biopic'>";
var HTMLbioPic = "<h3><span class='orange-text'>What I Do : </span><span class='white-text'>%data%</span></h3>";
var HTMLWelcomeMsg = "<span class='welcome-message'>%data%</span>";

var HTMLskillsStart = "<h3 id='skillsH3'>Skills at a Glance:</h3><ul id='skills' class='flex-box'></ul>";
var HTMLskills = "<li class='flex-item'><span class='white-text'>%data%</span></li>";

var HTMLworkStart = "<div class='work-entry'></div>";
var HTMLworkEmployer = "<a href='#'>%data%";
var HTMLworkTitle = " - %data%</a>";
var HTMLworkDates = "<div class='date-text'>%data%</div>";
var HTMLworkLocation = "<div class='location-text'>%data%</div>";
var HTMLworkDescription = "<p><br>%data%</p>";

var HTMLprojectStart = "<div class='project-entry'></div>";
var HTMLprojectTitle = "<a href='#'>%data%</a>";
var HTMLprojectDates = "<div class='date-text'>%data%</div>";
var HTMLprojectDescription = "<p><br>%data%</p>";
var HTMLprojectImage = "<img src='%data%'>";

var HTMLschoolStart = "<div class='education-entry'></div>";
var HTMLschoolName = "<a href='#'>%data%";
var HTMLschoolDegree = " - %data%</a>";
var HTMLschoolDates = "<div class='date-text'>%data%</div>";
var HTMLschoolLocation = "<div class='location-text'>%data%</div>";
var HTMLschoolMajor = "<em><br>Concentration: %data%<br></em>"
var HTMLschoolMinor = "<em><br>Minor: %data%</em>"

var HTMLonlineClasses = "<h3>Online Classes</h3>";
var HTMLonlineTitle = "<a href='#'>%data%";
var HTMLonlineSchool = " - %data%</a>";
var HTMLonlineDates = "<div class='date-text'>%data%</div>";
var HTMLonlineURL = "<br><a href='#'>%data%</a>";

var internationalizeButton = "<button>Internationalize</button>";
var googleMap = "<div id='map'></div>";
//var googleMap = "<div class='map'></div>";

/*
The International Name challenge in Lesson 2 where you'll create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/
$(document).ready(function() {
  $('button').click(function() {
    var iName = inName() || function(){};
    $('#name').html(iName);  
  });
})



/*
The next few lines about clicks are for the Collecting Click Locations quiz in Lesson 2.
*/
clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      "x": x,
      "y": y
    }
  );
  console.log("x location: " + x + "; y location: " + y);
}

$(document).click(function(loc) {
  // your code goes here!
});



/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/

var map;    // declares a global map variable

/*
Start here! initializeMap() is called when page is loaded.
*/

function initializeMap() {

  var locations;        

  var mapOptions = {
    disableDefaultUI: true
  };

  // This next line makes `map` a new Google Map JavaScript Object and attaches it to
  // <div id="map">, which is appended as part of an exercise late in the course.
 // map = new google.maps.Map(document.querySelector('#map'), mapOptions);
 locations = [
         ['The University of Alabama', 33.2094, -87.5415,"FFFFFF", "0000FF"],
         ['Saint Joseph\'s University', 39.9953,-75.2389, "FFFFFF", "0000FF"],
         ['Ryder', 36.2680, -87.0549 , "FFFFFF", "0000FF"],
         ['Dillon', 36.2680, -87.0549 , "FFFFFF", "0000FF"]]
     ];
 
    function initialize() {

    var myOptions = {
      center: new google.maps.LatLng(36.38,-87.11),
      zoom: 4,
      mapTypeId: google.maps.MapTypeId.ROADMAP

    };
    var map = new google.maps.Map(document.querySelector('#map-div'),
        myOptions);

    setMarkers(map,locations)

  }
    function setMarkers(map,locations){

      var marker, i

      for (i = 0; i < locations.length; i++)
          var office = locations[i][0]
          var lat = locations[i][1]
          var long = locations[i][2]
          var imageColor = locations[i][3]
          var imageColor2 = locations[i][4]
          
      latlngset = new google.maps.LatLng(lat, long);
      var img = new google.maps.MarkerImage('http://chart.apis.google.com/chart?cht=mm&chs=12x16&chco='+imageColor+','+imageColor2+',000000&ext=.png');
      var marker = new google.maps.Marker({  
          map: map, title: office , icon: img, position: latlngset  
        });
          map.setCenter(marker.getPosition())
      var infowindow = new google.maps.InfoWindow()
    google.maps.event.addListener(marker,'click', (function(marker,content,infowindow){ 
        return function() {
           infowindow.setContent(content);
           infowindow.open(map,marker);
        };
    })(marker,content,infowindow)); 

  }
  };



window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window 
// and adjust map bounds
window.addEventListener('resize', function(e) {
  // Make sure the map bounds get updated on page resize
  map.fitBounds(mapBounds);
});
