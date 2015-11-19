var bio = {
	"name": "Robert L. Davis",
	"role": "Senior Buisiness Analyst",
	"contact": {
		"mobile": "931.436.6656",
		"email": "rdavis7408@gmail.com",
		"github": "rdavis7408",
		"twitter": "@robertdavis",
		"location": "Pleasant View, TN"
	},
	"biopic": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAASWAAAAJDg3ZTI5NmY2LWU5YTAtNDNlOC1iZDExLWU5NjZlYjMyMmVlNQ.jpg",
	"welcomeMessage": "Turning data into information, visualizations, and reporting",
	"summary": "Over six years of experience as a Data Analyst and Senior Business Analyst supporting Fortune 500 firms' operation. Extensive experience working across disparate data sources to synthesize data for project and organizational goals. Research, analyze and capture sales trends, web usage data, operational processes and cross-functional relationships. As part of a close team, providing weekly progress reports and being autonomous to self-direct individual efforts. ",
	
	"skills": ["Python", "R Language", "Transact SQL", "PL / SQL", "Tableau", "Salesforce", "Visual Basic for Applications"]
};

var work = {
	"jobs": [
	{
		"employer": "AIG",
		"title": "Senior Business Analyst",
		"location": "Brentwood, TN",
		"dates": "2014 - present",
		"description": "Gathering of business requirements for visualizations and reporting. Creation of standardized and ad hoc reporting using SQL, Visual Basic for Applications, Tableau, Python, MS Access, MS Excel, and Oracle SQL Developer Tool. Design and implementation of visualizations and dashboards using Tableau. Creation of Visual Basic for Applications Macros and Python to automate repetitive tasks to ensure accuracy and standardization of reports."
	},
	{
		"employer": "Discovery Communications",
		"title": "Data Analyst",
		"location": "Nashville, TN",
		"dates": "2008 - 2014",
		"description": "Develop sites for local businesses."
	},
		{
		"employer": "Dillon Transportation LLC",
		"title": "Demand Plannert",
		"location": "Ashland City, TN",
		"dates": "2005 - 2008",
		"description": "Develop sites for local businesses."
	},
		{
		"employer": "Ryder",
		"title": "Logistics Engineer",
		"location": "Ashland City, TN",
		"dates": "2000 - 2005",
		"description": "Develop sites for local businesses."
	}
	]
};

var projects = {
	"projects": [
	{
		"title": "The Linux Startup",
		"dates": "2012-2014",
		"description": "Created a website to help newcomers to linux. The Site was built using Wordpress.",
		"images": ['images/thelinuxstartupsmall.jpg']
	},
	{
		"title": "Genesis Kickstart",
		"dates": "2015",
		"description": "Web application used to build Wordpress themes for the Genesis Framework.",
		"images": ['images/genesiskickstart_tksmall.jpg']
	},
	{
		"title": "Udacity Portfolio",
		"completed": "2015",
		"description": "Portfolio to show off my amazing work while working on the Udacity Front-end Nanodegree.",
		"images": ['images/udacity-portfolio-site_small.jpg']
	}
	]
};

var education = {
 	"schools": [
 	{
 		"name": "Saint Joseph\'s University",
 		"location": "Philadelphia, PA",
 		"degree": "Masters of Science",
 		"major": "Secondary Education",
 		"datesAttended": "1990 - 1992",
 		"url": "www.sju.edu"
 	},
 	{
 		"name": "The University of Alabama",
 		"location": "Tuscaloosa, AL",
 		"degree": "Bachelor of Arts",
 		"major": "History",
 		"datesAttended": "1986 - 1989",
 		"url": "www.ua.edu"
 	}
 	],
 	"onlineCourses": [
 	{
 		"title": "Front-end Web Developer Nanodegree",
 		"school": "Udacity",
 		"date": "2015",
 		"url": "www.udacity.com"
 	}
 	]
 };

bio.display = function() {
	$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));

	$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

	$("#topContacts").append(HTMLmobile.replace("%data%", bio.contact.mobile));

	$("#topContacts").append(HTMLemail.replace("%data%", bio.contact.email));

	$("#topContacts").append(HTMLtwitter.replace("%data%", bio.contact.twitter));

	$("#topContacts").append(HTMLgithub.replace("%data%", bio.contact.github));

	$("#topContacts").append(HTMLlocation.replace("%data%", bio.contact.location));

	$("#header").append(HTMLbioPic.replace("%data%", bio.biopic));

	if (bio.skills.length > 0) {
		$('#header').append(HTMLskillsStart);

		for (i = 0; i < bio.skills.length; i++) 
		{
			var formattedSkill = HTMLskills.replace('%data%', bio.skills[i]);
			$('#skills').append(formattedSkill);
		}
/* 		formattedSkill = HTMLskills.replace('%data%', bio.skills[1]);
		$('#skills').append(formattedSkill);
		formattedSkill = HTMLskills.replace('%data%', bio.skills[2]);
		$('#skills').append(formattedSkill); */
	}
	
	$("#footerContacts").append(HTMLmobile.replace("%data%", bio.contact.mobile));

	$("#footerContacts").append(HTMLemail.replace("%data%", bio.contact.email));

	$("#footerContacts").append(HTMLtwitter.replace("%data%", bio.contact.twitter));

	$("#footerContacts").append(HTMLgithub.replace("%data%", bio.contact.github));

	$("#footerContacts").append(HTMLlocation.replace("%data%", bio.contact.location));
}

work.display = function() {
	for (job in work.jobs) {
		$('#workExperience').append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);

	}
};

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

 education.display = function() {
 	if(education.schools.length > 0 || education.onlineCourses.length > 0) {
 		for(i in education.schools) {
 			$("#education").append(HTMLschoolStart);
 
 			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
 			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
 			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].datesAttended);
 			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);			
 			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
 			//var formattedSchoolMinor = HTMLschoolMinor.replace("%data%", education.schools[i].minor);
 
 			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
 			$(".education-entry:last").append(formattedSchoolDates);
 			$(".education-entry:last").append(formattedSchoolLocation);
 			$(".education-entry:last").append(formattedSchoolMajor);
 			//$(".education-entry:last").append(formattedSchoolMinor);
 		}
 
 		if(education.onlineCourses.length > 0) {
 			$("#education").append(HTMLonlineClasses);
 			for(i in education.onlineCourses) {				
 				$("#education").append(HTMLschoolStart);
 				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
 				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
 				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].completed);
 				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);
 
 				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
 				$(".education-entry:last").append(formattedOnlineDates);
 				$(".education-entry:last").append(formattedOnlineURL);
 			}
 		}
 		
 	}
 }


bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);
