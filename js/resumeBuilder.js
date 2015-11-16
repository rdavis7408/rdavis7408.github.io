var name = "Robert L. Davis"
var role = "Senior Business Analyst"
var formattedName = HTMLheaderName.replace("%data%",name)
var formattedRole = HTMLheaderRole.replace("%data%", role)
$("#header").prepend(formattedName);
$("#header").append(formattedRole);

var bio = {
  "name":"Robert L. Davis",
  "email" :  "<table><tr><td><p id=Em> Email :  </p></td><td><img  id= emailImg src = 'images/rdavis_White_Email_Small.gif' /></td></tr></table> ",
  "role" : "Senior Business Analyst"
};

$("#header").append(bio.email);


