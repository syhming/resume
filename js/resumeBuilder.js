'use strict';
function replaceAndAppend(rawHTML, target, insertion, destination, insertionUrl, urlTarget){
  var formattedHTML = rawHTML.replace(target, insertion);

  //if information contains a link
  if(insertionUrl){
    formattedHTML = formattedHTML.replace(urlTarget, insertionUrl);
  }
  destination.append(formattedHTML);
}
// a function that takes the info and outputs it into the sections mapped out in the html file
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
//button menu to change through the different sections: work, education, projects
var work = {
    "jobs" : [
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
        replaceAndAppend(HTMLworkEmployer, '%data%', formattedEmployerTitle, $('.work-entry:last'));
        var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].date);
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);


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
  if(education.schools.length > 0){
    for (var school = 0; school < education.schools.length; school++){
        $('#education').append(HTMLschoolStart);

        replaceAndAppend(HTMLschoolName, '%data%', education.schools[school].name, $('.education-entry:last'));
        replaceAndAppend(HTMLschoolDegree, '%data%', education.schools[school].degree, $('.education-entry:last'));
        replaceAndAppend(HTMLschoolLocation, '%data%', education.schools[school].location, $('.education-entry:last'));
        replaceAndAppend(HTMLschoolMajor, '%data%', education.schools[school].major, $('.education-entry:last'));
        replaceAndAppend(HTMLschoolDates, '%data%', education.schools[school].date, $('.education-entry:last'));
    }
    for (var course = 0; course < education.onlineCourses.length; course++){
        replaceAndAppend(HTMLonlineTitle, '%data%', education.onlineCourses[course].title, $('.education-entry:last'), education.onlineCourses[course].url, '#');
        replaceAndAppend(HTMLonlineSchool, '%data%', education.onlineCourses[course].site, $('.education-entry:last'));
        replaceAndAppend(HTMLonlineDates, '%data%', education.onlineCourses[course].date, $('.education-entry:last'));
    }
  }
}
education.display();
