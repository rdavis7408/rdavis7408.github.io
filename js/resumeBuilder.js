var name = "Robert L. Davis"
var role = "Senior Business Analyst"
var email = "RDavis7408@gmail.com"
var formattedName = HTMLheaderName.replace("%data%",name)
var formattedRole = HTMLheaderRole.replace("%data%", role)
var formattedEmail = HTMLheaderEmail.replace("%data%", email)
$("#header").prepend(formattedName);
$("#header").append(formattedRole);
$("#header").append(formattedEmail);

var bio = {
  "name":"Robert L. Davis",
  //"email" :  "<table><tr><td><p color:white> Email :  </p></td><td><img  id= emailImg src = 'images/rdavis_White_Email_Small.gif' /></td></tr></table> ", 
  "role" : "Senior Business Analyst"
};

//$("#header").append(bio.email);


