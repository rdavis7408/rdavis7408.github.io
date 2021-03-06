var bio = {
	"name": "Robert L. Davis",
	"role": "Salesforce Professional: Developer / Administrator",
	"contact": {
		"mobile": "931.436.6656",
		"email": "rdavis7408@gmail.com",
		"github": "rdavis7408",
		"twitter": "@robertdavis",
		"location": "Pleasant View, TN"
	},
	"biopic": "https://media.licdn.com/media/AAEAAQAAAAAAAAg_AAAAJDk5M2RhMWExLWNlZWQtNDEwNC1iYTI0LWJlNjI3YmI0MTdhMg.jpg",
	"welcomeMessage": "Creating custom solutions for Salesforce users and processes."

};
var work = {
	"jobs": [
	{      "employer": "Sitel",
	       "title":"Salesforce Developer",
	       "location":"Nashville, TN",
	       "dates": "2016 - present",
	       "description":"Creation of Apex Classes, Triggers, Test Classes and Lightning Components."
	},
	{
		"employer": "AIG",
		"title": "Senior Business Analyst",
		"location": "Brentwood, TN",
		"dates": "2014 - 2016",
		"description": "Gathering of business requirements for visualizations and reporting. Creation of standardized and ad hoc reporting using SQL, Visual Basic for Applications, Tableau, Python, MS Access, MS Excel, and Oracle SQL Developer Tool. Design and implementation of visualizations and dashboards using Tableau. Creation of Visual Basic for Applications Macros and Python to automate repetitive tasks to ensure accuracy and standardization of reports."
	},
	{
		"employer": "Discovery Communications",
		"title": "Data Analyst",
		"location": "Nashville, TN",
		"dates": "2008 - 2014",
		"description": "Creation of SQL Queries for ad hoc and customized reporting. Data Manipulation of customer data for updating MySQL database. Creating entries to allow customer access to web products. Testing new products for operational readiness. Use Tableau to create reports, dashboards and visualizations for senior management and customer presentations. Administer Salesforce.com for sales organization to include development of workflow rules, profile and role creation, validation rules and general daily operations. Create scripts with R to automate reporting to customers and senior management with ODBC to MySQL Databases."
	},
		{
		"employer": "Dillon Transportation LLC",
		"title": "Demand Planner",
		"location": "Ashland City, TN",
		"dates": "2005 - 2008",
		"description": "Created reporting using AS400 Sequel to manage daily truck volume. Negotiated with brokers and logistics firms both rate and capacity. Developed and maintained customer volume reporting. Created and maintained two ten user networks and email."
	},
		{
		"employer": "Ryder",
		"title": "Logistics Engineer",
		"location": "Ashland City, TN",
		"dates": "2000 - 2005",
		"description": "Implemented a consolidated traffic center for a client with annual transportation purchases in excess of 40 million dollars. Analyzed payment data to optimize distribution center locations, carrier base, and total cost analysis of the client’s network using MS Excel and MS Access. Designed, and implemented multi-user Access Database to manage shipment flow. Maintained network and troubleshooting for all technology related issues."
	}
	]
};

var projects = {
	"projects": [
	{
		"title": "Daily HTML Report",
		"dates": "2014",
		"description": "Using the R Language and the googleVis and RHTML libraries created a process using BAT file, ODBC to MySQL Database to update customer with daily reporting.",
		"images": ['images/Answer_Record_Count_Pic.jpg'],
		"url": "R_Dash_example.html"
	},
	{
		"title": "Python Script to Calculate Lead Distance",
		"dates": "2015",
		"description": "A Python Script that calculates the distance from sales representative to sales lead zip codes and keeps those pairs that are within 30 miles. ",
		"images": ['images/Python_Zip_Code_Pic.jpg'],
		"url": "Script_for_zip_code_distance.txt"
	},
	{
		"title": "Create Mass KPI Emails with Python",
		"dates": "2015",
		"description": "Using Python and the win32com 200 KPI spreadsheets are open values read to whom to send the emails, email subjects and content are read in and a pdf created for each receipient and their supervisor.",
		"images": ['images/Python_script_send_comp.jpg'],
		"url": "Script_to_send_KPIs.txt"
	},
	{
		"title": "Tableau Map",
		"dates": "2013",
		"description": "Tableau Map showing Colonial relationships between countries through time.",
		"images": ['images/Tableau_Map.jpg'],
		"url": "https://publicrevizit.tableausoftware.com/profile/robert.davis#!/vizhome/COW_Map_2013120601/Dashboard1"
		
	},
	{
		"title": "Tableau Dashboard",
		"dates": "2016",
		"description": "Tableau dashboard showing Crime Data from 2003 to present.",
		"images":['images/SF_Crime_Data_Thumbnail.png'],
		"url": "https://public.tableau.com/profile/robert.davis#!/vizhome/SF_Crime_Data/SFCrimeDB"
	},
	{     
	       "title": "SQL Select Query Example 1",
	       "dates": "2014",
	       "description": "Example of a Select query in a Postgres database from a web based survey tool.",
	       "images": ['images/select.png'],
	       "url": "SQL_Survey_Queries_Example.copy.txt"
	},
	{     
	       "title": "SQL Select Query Example 2",
	       "dates": "2012",
	       "description": "Example of Select query in a MySQL database from a web based assessment tool with Case Statement.",
	       "images": ['images/case_statement.png'],
	       "url": "query_Usage_Count_Logins_by_0month_2012040301.txt"
	},
	{      
	       "title": "Python script with SQL Statements",
	       "dates": "2016",
	       "description": "Python script that queries an Oracle and MS Access Databases and demonstrates Create, Alter, Update, Drop and Insert queries within a new schema in an Oracle Database.",
	       "images": ['images/create_kpi.png'],
	       "url":"KPI_Script.txt"
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
 		"url": "http://www.sju.edu"
 	},
 	{
 		"name": "The University of Alabama",
 		"location": "Tuscaloosa, AL",
 		"degree": "Bachelor of Arts",
 		"major": "History",
 		"datesAttended": "1986 - 1989",
 		"url": "http://www.ua.edu"
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

var certification = {
	exams: [
		{"name":"Salesforce Platform Developer I",
		 "organization": "Salesforce.com",
		 "date": "2016",
		 "url": "http://certification.salesforce.com/platform-developers?trk=profile_certification_title"
		},
		{
		    "name" : "Microsoft Technology Associate: Database Fundamentals",
		    "organization" : "Microsoft Corporation",
		    "date" : "2015",
		    "url" : "http://www.microsoft.com/learning/en-us/certification-overview.aspx"
		},
		{
		    "name" : "Microsoft Certified Desktop Support",
		    "organization" : "Microsoft Corporation",
		    "date" : "2008",
		    "url" : "http://www.microsoft.com/learning/en-us/certification-overview.aspx"
		},
		{
		    "name" : "Microsoft Certified Professional",
		    "organization" : "Microsoft Corporation",
		    "date" : "2007",
		    "url" : "http://www.microsoft.com/learning/en-us/certification-overview.aspx"
		},
		{
		    "name" : "Microsoft Office User - MS Access 2003",
		    "organization" : "Microsoft Corporation",
		    "date" : "2005",
		    "url" : "http://www.microsoft.com/learning/en-us/certification-overview.aspx"
		},
				{
		    "name" : "Salesforce.com Certified Administrator",
		    "organization" : "Salesforce.com",
		    "date" : "2011 - 2014",
		    "url" : "http://certification.salesforce.com/administrators"
		},
				{
		    "name" : "A+ Certified Professional IT Technician",
		    "organization" : "CompTia",
		    "date" : "2009",
		    "url" : "http://certification.comptia.org/getCertified/certifications/a.aspx"
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
/*        
        $("#header").append(HTMLsummary.replace("%data%", bio.summary));
        
	if (bio.skills.length > 0) {
		$('#header').append(HTMLskillsStart);

		for (i = 0; i < bio.skills.length; i++) 
		{
			var formattedSkill = HTMLskills.replace('%data%', bio.skills[i]);
			$('#skills').append(formattedSkill);
		}
 		formattedSkill = HTMLskills.replace('%data%', bio.skills[1]);
		$('#skills').append(formattedSkill);
		formattedSkill = HTMLskills.replace('%data%', bio.skills[2]);
		$('#skills').append(formattedSkill); 
	}
	*/
	
	
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
certification.display = function() {
	for (i in certification.exams) {
		$('#certification').append(HTMLcertification);
		
		var formattedCertification = HTMLcertificationName.replace("%data%", certification.exams[i].name).replace("#",certification.exams[i].url); ;
		var formattedDate = HTMLcertificationDate.replace("%date%", certification.exams[i].date);
		$(".certification-entry:last").append(formattedCertification);
		$(".certification-entry:last").append(formattedDate);
	}
}
projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title).replace('#', projects.projects[project].url);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]).replace('#', projects.projects[project].url);
				
				$(".project-entry:last").append(formattedImage);
			        
				
			}
			
		}
	}
}

 education.display = function() {
 	if(education.schools.length > 0 || education.onlineCourses.length > 0) {
 		for(i in education.schools) {
 			$("#education").append(HTMLschoolStart);
 
 			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("urllink", education.schools[i].url);
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
certification.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);
