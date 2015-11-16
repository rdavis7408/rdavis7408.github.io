var name = "Robert L. Davis"
var role = "Senior Business Analyst"

var formattedName = HTMLheaderName.replace("%data%",name)
var formattedRole = HTMLheaderRole.replace("%data%", role)

$("#header").prepend(formattedName);
$("#header").append(formattedRole);


var bio = {
  "name":"Robert L. Davis",
  "email" :  "RDavis7408@gmail.com", 
  "role" : "Senior Business Analyst"
};
$("#main").append(bio.name);
$("#main").append(bio.email);

var workObject = {
  "currentPosition" : "Senior Business Analyst",
  "currentEmployer" : "AIG",
  "currentTime" : "2",
  "currentCity" : "Brentwood, TN"
  }
$("#main").append(workObject.currentPosition);
$("#main").append(workObject.currentEmployer);
$("#main").append(workObject.currentTime);
$("#main").append(workObject.currentCity);


