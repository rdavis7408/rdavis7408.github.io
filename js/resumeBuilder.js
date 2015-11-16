var name = "Robert L. Davis"
var role = "Senior Business Analyst"
//var email = "RDavis7408@gmail.com"
var formattedName = HTMLheaderName.replace("%data%",name)
var formattedRole = HTMLheaderRole.replace("%data%", role)
//var formattedEmail = HTMLheaderEmail.replace("%data%", email)
$("#header").prepend(formattedName);
$("#header").append(formattedRole);
$("#header").append(formattedEmail);

var bio = {
  "name":"Robert L. Davis",
  "email" :  "RDavis7408@gmail.com", 
  "role" : "Senior Business Analyst"
};

$("#header").append(bio.email);


