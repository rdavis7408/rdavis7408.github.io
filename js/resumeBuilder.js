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

var work = {
  "Position" : "Senior Business Analyst",
  "Employer" : "AIG",
  "Time" : "2",
  "City" : "Brentwood, TN"
  }
$("#main").append(work.Position);
$("#main").append(work.Employer);
$("#main").append(work.Time);
$("#main").append(workObject.currentCity);


