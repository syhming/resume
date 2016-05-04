'use strict';
/*saw this cool function in a project I looked at.
It helped simply some code and provided a way for me to make the titles into links*/
function replaceAndAppend(rawHTML, target, insertion, destination, insertionUrl, urlTarget){
  var formattedHTML = rawHTML.replace(target, insertion);

  //if information contains a link
  if(insertionUrl){
    formattedHTML = formattedHTML.replace(urlTarget, insertionUrl);
  }
  destination.append(formattedHTML);
}
function appendArray(rawHTML, target, insertion, destination) {
	for(var item=0; item < insertion.length; item++) {
		var formattedItem = rawHTML.replace(target, insertion[item]);
		destination.append(formattedItem);
	}

}
// header section: portrait image, skills, bio, etc
// contacts drop-down menu
var bio = {
    "name": "Syhming Vong",
    "role": "Web Developer",
    "welcomeMessage": "Welcome to my resume page!",
    "contacts": {
        "email": {
           'name': "syhming@gmail.com",
           'url': 'mailto:syhming@gmail.com'
         },
        "github": {
          'name': "syhming",
          'url': 'https://github.com/syhming'
        },
        "twitter": {
          'name': "@syhming",
          'url': 'https://twitter.com/syhming'
        },
        "location": "Holland, MI"
    },
    "skills":
        ["HTML", "CSS", "javascript", "illustration", "painting", "photography", "drawing"],
    "biopic": "images/syhming.jpg"
}
bio.display = function() {
  //shift contact info down below name and role
    replaceAndAppend(HTMLheaderName, '%data%', bio.name, $('#topContacts'));
    replaceAndAppend(HTMLheaderRole,'%data%', bio.role, $('#topContacts'));
    replaceAndAppend(HTMLemail, '%data%', bio.contacts.email.name, $('#topContacts'), bio.contacts.email.url, '#');
    replaceAndAppend(HTMLgithub,'%data%', bio.contacts.github.name, $('#topContacts'), bio.contacts.github.url, '#');
    replaceAndAppend(HTMLtwitter, '%data%', bio.contacts.twitter.name, $('#topContacts'), bio.contacts.twitter.url, '#');
    replaceAndAppend(HTMLlocation, '%data%', bio.contacts.location, $('#topContacts'));
    replaceAndAppend(HTMLwelcomeMsg, '%data%', bio.welcomeMessage, $('#topContacts'));

//change skills to chart from a list.  use d3 js
        $('#header').append(HTMLskillsStart);

        var formattedSkills = HTMLskills.replace('%data%', bio.skills[0]);
        $('#skills').append(formattedSkills);
        var formattedSkills = HTMLskills.replace('%data%', bio.skills[1]);
        $('#skills').append(formattedSkills);
        var formattedSkills = HTMLskills.replace('%data%', bio.skills[2]);
        $('#skills').append(formattedSkills);
        var formattedSkills = HTMLskills.replace('%data%', bio.skills[3]);
        $('#skills').append(formattedSkills);
        var formattedSkills = HTMLskills.replace('%data%', bio.skills[4]);
        $('#skills').append(formattedSkills);
        var formattedSkills = HTMLskills.replace('%data%', bio.skills[5]);
        $('#skills').append(formattedSkills);
        var formattedSkills = HTMLskills.replace('%data%', bio.skills[6]);
        $('#skills').append(formattedSkills);

        /*the d3 chart
        $('#skills').append(pie);*/

    var formattedBioPic = HTMLbioPic.replace('%data%', bio.biopic);
    $('#header').append(formattedBioPic);
}
bio.display();

/*work section with info on jobs*/
var work = {
    "jobs" : [
        {
          "employer": "Self-employed",
          "title": "Artist",
          "location": "Holland, MI",
          "date": "June 2016 - present",
          "description": "Creating original oil paintings depicting people in reaction to their hopes and dreams."
        },
        {
            "employer": "Gentex",
            "title": "Production Team Member",
            "location": "Zeeland, MI",
            "date": "July 2015 - present",
            "description": "Producing and inspecting inside rearview mirrors for automobiles."
        },
        {
            "employer": "Manpower",
            "title": "Temporary Production Assistant",
            "location": "Holland, MI",
            "date": "May 2007 - June 2015",
            "description": "Working in various factories learning how to assemble parts, work with fiberglass and epoxy, and inspect for defects."
        },
        {
            "employer": "Corporate Color Graphics",
            "title": "Photo Mounter",
            "location": "Grand Rapids, MI",
            "date": "June 2014 - September 2014",
            "description": "Laminating photos and mounting them onto boards that gets edge trimmed."
        }
    ]
    /*this function shows all the info written in work*/
}
work.display = function(){
  for(var job = 0; job < work.jobs.length; job++){
        $("#workExperience").append(HTMLworkStart);

        var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle;

        var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].date);
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

        $('.work-entry:last').append(formattedEmployerTitle);
        $('.work-entry:last').append(formattedWorkDates);
        $('.work-entry:last').append(formattedWorkLocation);
        $('.work-entry:last').append(formattedWorkDescription);
    }
}
work.display();

/*info on schools, certifications and online courses taken*/
var education = {
    "schools": [
        {
            "name": "Michigan State University",
            "location": "East Lansing, MI, US",
            "degree": "BFA",
            "major": "Studio Art",
            "date": "2007 - 2008"
        }
    ],
    "onlineCourses": [
        {
            "site": "Udacity",
            "title": "Front-end Web Development",
            "date": "August 2015 - present",
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        },
        {
            "site": "Udacity",
            "title": "Intro to HTML and CSS",
            "date": "August 2015 - October 2015",
            "url": 'https://www.udacity.com/course/progress#!/c-ud304-nd'
        },
        {
            "site": "Udacity",
            "title": "Javascript Basics",
            "date": "October 2016 - February 2016",
            "url": "https://www.udacity.com/course/progress#!/c-ud804-nd"
        }
      ]

}
education.display = function() {
  if(education.schools.length){
    for (var school = 0; school < education.schools.length; school++){
        $('#education').append(HTMLschoolStart);
        var schoolName = HTMLschoolName.replace('%data%', education.schools[school].name);
        var schoolDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
        var schoolNameDegree = schoolName + schoolDegree;
        $('.education-entry:last').append(schoolNameDegree);
        /*move major and "udacity" down below the schoolDate*/

        replaceAndAppend(HTMLschoolLocation, '%data%', education.schools[school].location, $('.education-entry:last'));
        replaceAndAppend(HTMLschoolDates, '%data%', education.schools[school].date, $('.education-entry:last'));
        replaceAndAppend(HTMLschoolMajor, '%data%', education.schools[school].major, $('.education-entry:last'));
    }
    for (var course = 0; course < education.onlineCourses.length; course++){
        var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[course].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[course].site);
        var formattedTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
        $('.education-entry:last').append(formattedTitleSchool);
      /*  replaceAndAppend(HTMLonlineTitle, '%data%', education.onlineCourses[course].title, $('.education-entry:last'), education.onlineCourses[course].url, '#');
        replaceAndAppend(HTMLonlineSchool, '%data%', education.onlineCourses[course].site, $('.education-entry:last'));*/
        replaceAndAppend(HTMLonlineDates, '%data%', education.onlineCourses[course].date, $('.education-entry:last'));
    }
  }
}
education.display();

/* projects section: what i've done, images of projects, etc */
var projects = {
    "project": [
        {
            "title": "Portfolio Site",
            "date": "August 2015 - September 2015",
            "description": "First project for the Udacity Nanodegree.  I learned to create a portfolio site using HTML and CSS.",
            "image": [
              "http://placehold.it/350x150",
              "http://placehold.it/350x150",
              "http://placehold.it/350x150"
            ]
        },
        {
            "title": "Resume",
            "date": "September 2015 - February 2016",
            "description": "Second project for the nanodegree.  I built a resume with javascript.",
            "image":  [
              "http://placehold.it/350x150",
              "http://placehold.it/350x150",
              "http://placehold.it/350x150"
            ]
        }
    ]
}
projects.display = function() {
    for (var item = 0; item < projects.project.length; item++){
        $('#projects').append(HTMLprojectStart);

        replaceAndAppend(HTMLprojectTitle, '%data%', projects.project[item].title, $('.project-entry:last'));
        replaceAndAppend(HTMLprojectDates, '%data%', projects.project[item].date, $('.project-entry:last'));
        replaceAndAppend(HTMLprojectDescription, '%data%', projects.project[item].description, $('.project-entry:last'));

        if (projects.project[item].image.length){
          appendArray(HTMLprojectImage, '%data%', projects.project[item].image, $('.project-entry:last'));
        }
    }
}
projects.display();

/* map section: not sure yet, a map showing where I've been? */
$('#mapDiv').append(googleMap);
