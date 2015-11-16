var name = "Robert L. Davis"
var role = "Senior Business Analyst"

var formattedName = HTMLheaderName.replace("%data%",name)
var formattedRole = HTMLheaderRole.replace("%data%", role)

$("#header").prepend(formattedName);
$("#header").append(formattedRole);

var skills = [
  "Python", "R Language", "Visual Basic for Applications", "SQL", "Transact SQL", "PL / SQL",
  "Tableau", "Salesforce Administration", "SQL Developer", "MS Access", "MS Excel", "MS Word", "MS PowerPoint"]

var bio = {
  "name":"Robert L. Davis",
  "role" : "Senior Business Analyst",
  "email" :  "RDavis7408@gmail.com", 
  "skills" : skills,
  "URL" : "https://www.linkedin.com/in/robert-davis-46a26a12"
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

var formattedRole = HTMLskillsStart.replace("%data%", bio.skills);

