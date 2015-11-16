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

$("#header").append(bio.email);


