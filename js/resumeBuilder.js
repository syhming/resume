// header section: portrait image, skills, bio, etc

// a function that takes the info and outputs it into the sections mapped out in the html file
var bio = {
    "name": "Syhming Vong",
    "role": "Web Developer",
    "welcomeMessage": "Welcome to my resume page!",
    "contacts": {
        "email":{
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
    "bioPic": "images/syhming.jpg"
};

/*work section with info on jobs*/
//button menu to change through the different sections: work, education, projects
var work = {
    "jobs" : [
        {
            "employer": "Gentex",
            "title": "Production Team Member",
            "location": "Zeeland, MI",
            "dates": "July 2015 to present",
            "description": "Producing and inspecting inside rearview mirrors for automobiles."
        },
        {
            "employer": "Manpower",
            "title": "Temporary Production Assistant",
            "location": "Holland, MI",
            "dates": "May 2007 to June 2015",
            "description": "Working in various factories learning how to assemble parts, work with fiberglass and epoxy, and inspect for defects."
        },
        {
            "employer": "Corporate Color Graphics",
            "title": "Photo Mounter",
            "location": "Grand Rapids, MI",
            "dates": "June 2014 to September 2014",
            "description": "Laminating photos and mounting them onto boards that gets edge trimmed."
        }
    ]
};

/*info on schools, certifications and online courses taken*/
var education = {
    "schools": [
        {
            "name": "Michigan State University",
            "location": "East Lansing, MI, US",
            "degree": "BFA",
            "major": "Studio Art",
            "date": "2007 to 2008"
        }
    ],
    "onlineCourses": [
        {
            "site": "Udacity",
            "title": "Front-end Web Development",
            "dates": "August 2015 to present",
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        },
        {
            "site": "Udacity",
            "title": "Intro to HTML and CSS",
            "dates": "August 2015 to October 2015",
            "url": 'https://www.udacity.com/course/progress#!/c-ud304-nd'
        },
        {
            "site": "Udacity",
            "title": "Javascript Basics",
            "dates": "October 2016 to February 2016",
            "url": "https://www.udacity.com/course/progress#!/c-ud804-nd"
        }
      ]
};

/* projects section: what i've done, images of projects, etc */
var projects = {
    "project": [
        {
            "title": "Portfolio Site",
            "dates": "August 2015 to September 2015",
            "description": "First project for the Udacity Nanodegree.  I learned to create a portfolio site using HTML and CSS.",
            "image": "http://placehold.it/350x150"
        },
        {
            "title": "Resume",
            "dates": "September 2015 to February 2016",
            "description": "Second project for the nanodegree.  I built a resume with javascript.",
            "image": "http://placehold.it/350x150"
        }
    ]
};

/*saw this cool function in a project I looked at.
It helped simply some code and provided a way for me to make the titles into links*/
function replaceAndAppend(rawHTML, target, insertion, destination, insertionUrl, urlTarget){
  var formattedHTML = rawHTML.replace(target, insertion);

  //if information contains a link
  if(insertionUrl){
    formattedHTML = formattedHTML.replace(urlTarget, insertionUrl);
  }
  destination.append(formattedHTML);
};

function displayBio() {
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

        $('#skills').append(pie);

    var formattedBioPic = HTMLbioPic.replace('%data%', bio.bioPic);
    $('#header').append(formattedBioPic);
};

/*this function shows all the info written in work*/
function displayWork() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        replaceAndAppend(HTMLworkEmployer, "%data%", work.jobs[job].employer, $('.work-entry:last'));
        replaceAndAppend(HTMLworkTitle, "%data%", work.jobs[job].title, $('.work-entry:last'));
        replaceAndAppend(HTMLworkDates, "%data%", work.jobs[job].dates, $('.work-entry:last'));
        replaceAndAppend(HTMLworkLocation, "%data%", work.jobs[job].location, $('.work-entry:last'));
        replaceAndAppend(HTMLworkDescription, "%data%", work.jobs[job].description, $('.work-entry:last'));
    }
};


function displayEducation() {
    for (school in education.schools){
        $('#education').append(HTMLschoolStart);

        replaceAndAppend(HTMLschoolName, '%data%', education.schools[school].name, $('.education-entry:last'));
        replaceAndAppend(HTMLschoolDegree, '%data%', education.schools[school].degree, $('.education-entry:last'));
        replaceAndAppend(HTMLschoolLocation, '%data%', education.schools[school].location, $('.education-entry:last'));
        replaceAndAppend(HTMLschoolMajor, '%data%', education.schools[school].major, $('.education-entry:last'));
        replaceAndAppend(HTMLschoolDates, '%data%', education.schools[school].date, $('.education-entry:last'));
    }
    for (course in education.onlineCourses){

        replaceAndAppend(HTMLonlineTitle, '%data%', education.onlineCourses[course].title, $('.education-entry:last'), education.onlineCourses[course].url, '#');
        replaceAndAppend(HTMLonlineSchool, '%data%', education.onlineCourses[course].site, $('.education-entry:last'));
        replaceAndAppend(HTMLonlineDates, '%data%', education.onlineCourses[course].dates, $('.education-entry:last'));
    }
};

function displayProjects() {
    for (item in projects.project){
        $('#projects').append(HTMLprojectStart);

        replaceAndAppend(HTMLprojectTitle, '%data%', projects.project[item].title, $('.project-entry:last'));
        replaceAndAppend(HTMLprojectDates, '%data%', projects.project[item].dates, $('.project-entry:last'));
        replaceAndAppend(HTMLprojectDescription, '%data%', projects.project[item].description, $('.project-entry:last'));

        if (projects.project[item].image.length > 0) {
            replaceAndAppend(HTMLprojectImage, '%data%', projects.project[item].image, $('.project-entry:last'));
        }
    }
};

displayBio();
displayWork();
displayEducation();
displayProjects();
/* map section: not sure yet, a map showing where I've been? */
$('#map-div').append(googleMap);
