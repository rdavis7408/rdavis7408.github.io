var name = "Robert L. Davis"
var role = "Senior Business Analyst"
var formattedName = HTMLheaderName.replace("%data%",name)
var formattedRole = HTMLheaderRole.replace("%data%", role)
$("#header").prepend(formattedName);
$("#header").append(formattedRole);

var bio = {
  "name":"Robert L. Davis",
  "email" : "<img id= emailImg src = 'images/rdavis_BlackRobotoEmail.png' />",
  "role" : "Senior Business Analyst"
};
$("#main").append(bio.name);
$("#main").append(bio.email);


