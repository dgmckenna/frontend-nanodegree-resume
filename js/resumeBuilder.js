


/*
var forRole = HTMLheaderRole.replace("%data%", "Engineer at Large")

var awesomeThoughts = "I am David and I am AWESOME"
var funThoughts = awesomeThoughts.replace("AWESOME", "FUN")

$("#main").append(funThoughts)



var grantekManager = {};
grantekManager.position = "Engineering Manager";
grantekManager.startDate = "2016-12-01";
grantekManager.endDate = "Present";
grantekManager.city = "Burlington";

var educationQueens = {};
educationQueens["name"] = "Queen's University";
educationQueens["startDate"] = "1999-09-01";
educationQueens["endDate"] = "2003-05-01";
educationQueens["city"] = "Kingston";

var forHTMLbioPic = HTMLbioPic.replace("%data%", bio.pictureURL)
var forHTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage)

$("#header").prepend(forHTMLbioPic)
$("#header").prepend(forHTMLwelcomeMsg)


$("#main").append(grantekManager["position"])
$("#main").append(educationQueens.name)

*/

var work = {
	"jobs": [
		{"employer": "Grantek Systems Integration Inc.",
		"title": "Manager, Engineering",
		"location": "Burlington, Ontario, Canada",
		"dates": "2016-12 to Present",
		"description": "Responsible for 25 engineers based locally in Burlington and Chicago"
		},
		{"employer": "Grantek Systems Integration Inc.",
		"title": "Manager, Systems",
		"location": "Burlington, Ontario, Canada",
		"dates": "????-?? to 2016-12",
		"description": "Developed $1 MM in engineering services and hardware sales for a major Systems Integrator"
		}
	]
}

var projects = {
	"projects": [
	{"title": "Javascript Resume",
	"dates": "2016-12",
	"description": "Javascript based website which programmatically changes values in an HTML file",
	"images": ["images1", "images2"]
	},
	
	{"title": "InvestingCSVtoPivotReports",
	"dates": "2015",
	"description": "Python scripts which take bank CSV files and combine them into an excel file, in a format that supports pivot table reports.",
	"images": ["images1", "images2"]
	}
	]
}

/*
var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%">';
*/

projects.display = function() {
	this.projects.forEach(function(project){ 
		$("#projects").append(HTMLprojectStart);
		var forProjectTitle = HTMLprojectTitle.replace("%data%", project.title);	
		$(".project-entry:last").append(forProjectTitle);	

		var forProjectDates = HTMLprojectDates.replace("%data%", project.dates);	
		$(".project-entry:last").append(forProjectDates);	
		var forProjectDescription = HTMLprojectDescription.replace("%data%", project.description);	
		$(".project-entry:last").append(forProjectDescription);

		project.images.forEach(function(image){
			var forProjectImage = HTMLprojectImage.replace("%data%", image);	
			$(".project-entry:last").append(forProjectImage);

		})


	})
}

projects.display();


var education = {
	"schools": [
		{
			"name": "Queen's University",
			"location": "Kingston, Ontario, Canada",
			"degree dates": "2003",
			"url": "http://www.queensu.ca",
			"majors": ["Mathematics in Engineering: Communications and Control"]
		},
		{
			"name": "University of Toronto",
			"location": "Toronto, Ontario, Canada",
			"degree dates": "2012",
			"url": "http://www.uoft.ca",
			"majors": ["Certificate in Project Management"]
		}
	],
	"onlineCourses": [
	{
		 "title": "Full Stack Web Developer",
		 "school": "Udacity",
		 "dates": "2015-Q3, 2016",
		 "url": "www.udacity.com"
	},
	{
		 "title": "SQL Server Stuff",
		 "school": "Lynda",
		 "dates": "2014",
		 "url": "www.lynda.com"		
	}]
}

var bio = {
	"name": "David McKenna",
	"role": "Engineer at Large",
	"welcomeMessage": "Welcome to my Javascript initial project",
	"biopic": "images/David.jpg",
	"contacts": {
		"mobile": "416-786-0034",
		"email": "dgmkenna@gmail.com",
		"github": "dgmckenna",
		"location": "Toronto, Ontario, Canada"
	},
	"skills": ["Managing", "PLC Programming", "SCADA", "Delighting Customers"]
}

var forName = HTMLheaderName.replace("%data%", "David McKenna");
$("#header").prepend(forName);

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var forSkills = HTMLskills.replace("%data%", bio.skills[0]);
	$("#header").append(forSkills);	
	forSkills = HTMLskills.replace("%data%", bio.skills[1]);
	$("#header").append(forSkills);	
	forSkills = HTMLskills.replace("%data%", bio.skills[2]);
	$("#header").append(forSkills);	
	forSkills = HTMLskills.replace("%data%", bio.skills[3]);
	$("#header").append(forSkills);	
	
}

console.log(work.jobs);

function displayWork () {
	work.jobs.forEach (function(job) {
	$("#workExperience").append(HTMLworkStart);
	var forWorkEmployer = HTMLworkEmployer.replace("%data%", job.employer);	
	var forWorkTitle = HTMLworkTitle.replace("%data%", job.title);
	console.log(forWorkEmployer + forWorkTitle);
	$(".work-entry:last").append(forWorkEmployer + forWorkTitle);	

	var forWorkLocation = HTMLworkLocation.replace("%data%", job.location);
	$(".work-entry:last").append(forWorkLocation);	

	var forWorkDates = HTMLworkDates.replace("%data", job.dates);
	$(".work-entry:last").append(forWorkDates);	

	var forWorkDescription = HTMLworkDescription.replace("%data", job.description);
	$(".work-entry:last").append(forWorkDescription);	

})	
}

displayWork();

$(document).click(function(loc) {
  logClicks(loc.pageX, loc.pageY);
});

$("#main").append(internationalizeButton);

function inName(name){
	names = name.trim().split(" ")
	returnString = names[0][0].toUpperCase() + names[0].slice(1)
	for (var i=1; i<names.length; i++){
		returnString += " " + names[i].toUpperCase()
	}
	return returnString
}

$("#mapDiv").append(googleMap)