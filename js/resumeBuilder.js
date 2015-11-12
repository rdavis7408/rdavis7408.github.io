var name = "Robert L. Davis"
var role = "Business Analyst"
var formattedName = HTMLheaderName.replace("%data",name)
var formattedRole = HTMLheaderRole.replace("data", role)
$("#header").append(formattedName);
$("#header").prepend(formattedRole);

