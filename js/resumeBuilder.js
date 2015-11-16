 

var bio = {
  "name":"Robert L. Davis",
  "role" : "Senior Business Analyst",
  "contacts" : {
        "email" :  "RDavis7408@gmail.com",
        "twitter" : "@robertdavis",
        "URL" : "https://www.linkedin.com/in/robert-davis-46a26a12",
        "location" : "Pleasant View, TN"
  },
  "welcomeMessage": "Creating information through reporting, visualizations, data mining and communication"
   
  "skills" : ["Python", "R Language", "Visual Basic for Applications", "SQL", "Transact SQL", "PL / SQL",
  "Tableau", "Salesforce Administration", "SQL Developer", "MS Access", "MS Excel", "MS Word", "MS PowerPoint"]
  
};




var work = {
  "Position" : "Senior Business Analyst",
  "Employer" : "AIG",
  "Time" : "2",
  "City" : "Brentwood, TN"
  }


var formattedName = HTMLheaderName.replace("%data%",bio.name)
var formattedRole = HTMLHeaderRole.replace("%data%", bio.role);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.URL));
formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#header").append(formattedWelcomeMsg);
