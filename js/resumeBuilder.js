var name = "Robert L. Davis"
var role = "Senior Business Analyst"
var formattedName = HTMLheaderName.replace("%data%",name)
var formattedRole = HTMLheaderRole.replace("%data%", role)
$("#header").prepend(formattedName);
$("#header").append(formattedRole);

var bio = {
  "name":"Robert L. Davis",
  "email" :  "<p align= 'top'> Email :  </p><img align='top' id= emailImg src = 'images/rdavis_White_Email_Small.gif' /> ",
  "role" : "Senior Business Analyst"
};

$("#header").append(bio.email);


