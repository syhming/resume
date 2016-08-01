'use strict';
// header section: portrait image, skills, bio, etc
var bio = {
    "name": "Syhming Vong",
    "role": "Front-end Web Developer",
    "welcomeMessage": "Welcome to my resume page!  I'm an artist learning new skills in a different arena.",
    "contacts": {
        "email": "syhming@gmail.com",
        "github": "syhming",
        "twitter": "@syhming",
        "location": "Holland, MI"
    },
    "skills": ["HTML", "CSS", "javascript", "illustration", "painting", "photography", "drawing"],
    "biopic": "images/syhming.jpg"
};
bio.display = function() {
    //shift contact info down below name and role
    var headerName = HTMLheaderName.replace('%data%', bio.name);
    var headerRole = HTMLheaderRole.replace('%data%', bio.role);

    //TODO make github and twitter links aligned with the rest of contacts
    var headerEmail = HTMLemail.replace('%data%', bio.contacts.email);
    $('#topContacts').append(headerEmail);
    var headerGithub = HTMLgithub.replace('%data%', bio.contacts.github);
    $('#topContacts').append(headerGithub);
    var headerTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
    $('#topContacts').append(headerTwitter);
    var headerLocation = HTMLlocation.replace('%data%', bio.contacts.location);
    $('#topContacts').append(headerLocation);
    var headerMessage = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
    $('#header').append(headerMessage);

    if (bio.skills.length > 0) {
        $('#header').append(HTMLskillsStart);

        for (var skill = 0; skill < bio.skills.length; skill++) {
            var formattedskills = HTMLskills.replace('%data%', bio.skills[skill]);
            $('#skills').append(formattedskills);
        }
    }

    var formattedBioPic = HTMLbioPic.replace('%data%', bio.biopic);
    $('#header').prepend(formattedBioPic, headerName, headerRole);
    $('#footerContacts').append(headerEmail, headerTwitter, headerGithub);
};
bio.display();

function inName(name) {
    name = name.trim().split(' ');
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + ' ' + name[1];
}

$('#main').append(internationalizeButton);
/*work section with info on jobs*/
var work = {
    "jobs": [{
            "employer": "Self-employed",
            "title": "Artist",
            "location": "Holland, MI",
            "dates": "June 2016 - present",
            "description": "Creating original oil paintings depicting people in reaction to their hopes and dreams."
        }, {
            "employer": "Gentex",
            "title": "Production Team Member",
            "location": "Zeeland, MI",
            "dates": "July 2015 - present",
            "description": "Producing and inspecting inside rearview mirrors for automobiles."
        }, {
            "employer": "Manpower",
            "title": "Temporary Production Assistant",
            "location": "Zeeland, MI",
            "dates": "May 2007 - June 2015",
            "description": "Working in various factories learning how to assemble parts, work with fiberglass and epoxy, and inspect for defects."
        }, {
            "employer": "Corporate Color Graphics",
            "title": "Photo Mounter",
            "location": "Grand Rapids, MI",
            "dates": "June 2014 - September 2014",
            "description": "Laminating photos and mounting them onto boards that gets edge trimmed."
        }]
        /*this function shows all the info written in work*/
};
work.display = function() {
    for (var job = 0; job < work.jobs.length; job++) {
        $("#workExperience").append(HTMLworkStart);

        var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle;

        var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

        $('.work-entry:last').append(formattedEmployerTitle);
        $('.work-entry:last').append(formattedWorkDates);
        $('.work-entry:last').append(formattedWorkLocation);
        $('.work-entry:last').append(formattedWorkDescription);
    }
};
work.display();

/*info on schools, certifications and online courses taken*/
var education = {
    "schools": [{
        "school": "Michigan State University",
        "location": "East Lansing, MI, US",
        "degree": "BFA",
        "majors": "Studio Art",
        "dates": "2007 - 2008"
    }],
    "onlineCourses": [{
        "school": "Udacity",
        "title": "Front-end Web Development",
        "dates": "August 2015 - present",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }, {
        "school": "Udacity",
        "title": "Intro to HTML and CSS",
        "dates": "August 2015 - October 2015",
        "url": 'https://www.udacity.com/course/progress#!/c-ud304-nd'
    }, {
        "school": "Udacity",
        "title": "Javascript Basics",
        "dates": "October 2016 - February 2016",
        "url": "https://www.udacity.com/course/progress#!/c-ud804-nd"
    }]
};

education.display = function() {
    if (education.schools.length) {
        for (var school = 0; school < education.schools.length; school++) {
            $('#education').append(HTMLschoolStart);
            var schoolName = HTMLschoolName.replace('%data%', education.schools[school].school);
            var schoolDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
            var schoolNameDegree = schoolName + schoolDegree;
            $('.education-entry:last').append(schoolNameDegree);

            var schoolLocation = HTMLschoolLocation.replace('%data%', education.schools[school].location);
            $('.education-entry:last').append(schoolLocation);
            var schoolDates = HTMLschoolDates.replace('%data%', education.schools[school].dates);
            $('.education-entry:last').append(schoolDates);
            var schoolMajor = HTMLschoolMajor.replace('%data%', education.schools[school].majors);
            $('.education-entry:last').append(schoolMajor);

        }
        // TODO: "Online Courses" header aligned the same as classes

        $('#education').append(HTMLonlineClasses);
        for (var course = 0; course < education.onlineCourses.length; course++) {
            var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[course].title);
            var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[course].school);
            var formattedTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
            $('.education-entry:last').append(formattedTitleSchool);
            var formattedOnlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[course].dates);
            $('.education-entry:last').append(formattedOnlineDates);
        }
    }
};
education.display();

/* projects section: what i've done, images of projects, etc */
var projects = {
    "project": [{
        "title": "Portfolio Site",
        "dates": "August 2015 - September 2015",
        "description": "First project for the Udacity Nanodegree.  I learned to create a portfolio site using HTML and CSS.",
        "image": [
            "http://placehold.it/350x150",
            "http://placehold.it/350x150",
            "http://placehold.it/350x150"
        ]
    }, {
        "title": "Resume",
        "dates": "In progress",
        "description": "Second project for the nanodegree.  I built a resume using javascript.",
        "image": [
            "http://placehold.it/350x150",
            "http://placehold.it/350x150",
            "http://placehold.it/350x150"
        ]
    }]
};

projects.display = function() {
    for (var item = 0; item < projects.project.length; item++) {
        $('#projects').append(HTMLprojectStart);

        var projectTitle = HTMLprojectTitle.replace('%data%', projects.project[item].title);
        $('.project-entry:last').append(projectTitle);
        var projectDates = HTMLprojectDates.replace('%data%', projects.project[item].dates);
        $('.project-entry:last').append(projectDates);
        var projectDescription = HTMLprojectDescription.replace('%data%', projects.project[item].description);
        $('.project-entry:last').append(projectDescription);

        if (projects.project[item].image.length) {
            var n = 0;
            while (n < projects.project[item].image.length) {
                n++;
                var projectImages = HTMLprojectImage.replace('%data%', projects.project[item].image);
                $('.project-entry:last').append(projectImages);
            }
        }
    }
};
projects.display();

$('#mapDiv').append(googleMap);
