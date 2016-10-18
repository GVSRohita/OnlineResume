//My basic details
var bio = {
    "name": "Rohita Goparaju",
    "role": "A Passionate Web devoloper",
    "contacts": {
        "mobile": "9989121356",
        "email": "gvsrohita@gmail.com",
        "github": "GVSRohita",
        "location": "Visakhapatnam, India"
    },
    "welcomeMessage": "Welcome to the world of a passionate Web-Developer. Thanks for visiting my profile!",
    "skills": [
        "HTML", "CSS", "Programming", "JavaScript"
    ],
    "bioPic": "images/MY_PIC.png",
    //Display function (Encapsulated)
    "display": function () {
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole);
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        $("#header").prepend(formattedName);
        var formattedMobileFooter = HTMLcontactGeneric.replace("%contact%", "mobile");
        formattedMobileFooter = formattedMobileFooter.replace("%data%", bio.contacts.mobile);
        $("#footerContacts:last").append(formattedMobileFooter);
        var formattedEmailFooter = HTMLcontactGeneric.replace("%contact%", "email");
        formattedEmailFooter = formattedEmailFooter.replace("%data%", bio.contacts.email);
        $("#footerContacts:last").append(formattedEmailFooter);
        var formattedGithubFooter = HTMLcontactGeneric.replace("%contact%", "github");
        formattedGithubFooter = formattedGithubFooter.replace("%data%", bio.contacts.github);
        $("#footerContacts:last").append(formattedGithubFooter);
        var formattedLocationFooter = HTMLcontactGeneric.replace("%contact%", "location");
        formattedLocationFooter = formattedLocationFooter.replace("%data%", bio.contacts.location);
        $("#footerContacts:last").append(formattedLocationFooter);
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $("#topContacts").append(formattedMobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        $("#topContacts").append(formattedEmail);
        var formattedGit = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#topContacts").append(formattedGit);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts").append(formattedLocation);
        var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
        $("#header").append(formattedPic);
        var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedMsg);
        //add here
        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            for (var skillNo = 0; skillNo < bio.skills.length; skillNo++) {
                var formattedSkill = HTMLskills.replace("%data%", bio.skills[skillNo]);
                $("#skills").append(formattedSkill);
            }
        }
    }
};

//The details of my education
var education = {
    "schools": [
        {
            "name": "Vignan Institute of Information Technology",
            "location": "Duvvada, India",
            "degree": "B. Tech., JNTU",
            "shortTitle": "B.Tech.",
            "majors": ["Electronics", "Communications"],
            "dates": "2012 - 2016",
            "url": "http://www.vignan.com",
            "marks": 83
        },
        {
            "name": "Sri Chaitanya Jr. College",
            "location": "Gajuwaka, India",
            "degree": "Intermediate (XII), AP State Board",
            "shortTitle": "XIIth",
            "majors": ["Mathematics", "Physics", "Chemistry"],
            "dates": "2010 - 2012",
            "url": "http://www.srichaitanya.com",
            "marks": 95
        },
        {
            "name": "De paul school",
            "location": "Ukkunagaram, India",
            "degree": "Xth, ICSE",
            "shortTitle": "Xth",
            "majors": ["Mathematics"],
            "dates": "2010",
            "url": "http://www.depaulschool.com",
            "marks": 72
        }
    ],
    "onlineCourses": [
        {
            "title": "Nanodegree in Front-end Web devolopment",
            "shortTitle": "Web",
            "school": "Udacity",
            "dates": "Jan 2016 - April 2016",
            "url": "http://www.udacity.com",
            "duration": 4
        },
        {
            "title": "J2EE Technologies",
            "school": "Ramtech",
            "shortTitle": "J2EE",
            "dates": "July 2015 - December 2015",
            "url": "http://www.ramtech.com",
            "duration": 6
        },
        {
            "title": "Oracle-SQL & PL/SQL",
            "school": "Datapro",
            "shortTitle": "Oracle",
            "dates": "August 2013 - December 2013",
            "url": "http://www.datapro.com",
            "duration": 5
        }
    ],
    //For the charts
    "myEdnDtlsLabelsArray4Chart": [],
    "myEdnDtlsArray4Chart": [],
    "myCourseDtlsLabelsArray4Chart": [],
    "myCourseDtlsArray4Chart": [],
    //display function (Encapsulated)
    "display": function () {
        //For handling plural in "majors"
        var majorTemplateString = HTMLschoolMajor;
        var formattedName;
        var formattedSchoolTitle;
        var formattedDates;
        for (var schoolNo = 0; schoolNo < education.schools.length; schoolNo++) {
            $("#education:last").append(HTMLschoolStart);
            formattedName = HTMLschoolName.replace("%data%", education.schools[schoolNo].name);
            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[schoolNo].degree);
            formattedSchoolTitle = formattedName + formattedDegree;
            $(".education-entry:last").append(formattedSchoolTitle);
            formattedDates = HTMLschoolDates.replace("%data%", education.schools[schoolNo].dates);
            $(".education-entry:last").append(formattedDates);
            var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[schoolNo].location);
            $(".education-entry:last").append(formattedLocation);
            if (education.schools[schoolNo].majors.length > 0) {
                var majorString;
                for (var majorNo = 0; majorNo < education.schools[schoolNo].majors.length; majorNo++) {
                    if (majorNo === 0) {
                        HTMLschoolMajor = majorTemplateString;
                        majorString = education.schools[schoolNo].majors[majorNo];
                    } else {
                        if (majorNo === 1) {
                            // for converting the literal "Major" to "Majors" in the label, in case more than one major exists
                            HTMLschoolMajor = HTMLschoolMajor.replace("Major", "Majors");
                        }
                        majorString = majorString + ", " + education.schools[schoolNo].majors[majorNo];
                    }
                }
            }
            var formattedMajors = HTMLschoolMajor.replace("%data%", majorString);
            $(".education-entry:last").append(formattedMajors);
        }
        $("#education:last").append(HTMLschoolStart);
        $(".education-entry:last").append(HTMLonlineClasses);
        for (var courseNo = 0; courseNo < education.onlineCourses.length; courseNo++) {
            var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[courseNo].title);
            formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[courseNo].school);
            formattedSchoolTitle = formattedTitle + formattedSchool;
            $(".education-entry:last").append(formattedSchoolTitle);
            formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[courseNo].dates);
            $(".education-entry:last").append(formattedDates);
            var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[courseNo].url);
            formattedUrl = formattedUrl.replace("#", education.onlineCourses[courseNo].url);
            $(".education-entry:last").append(formattedUrl);
        }
    },
    //Academic Charts Function (Encapsulated)
    "chartAcademics": (function () {
        for (var schoolNo = 0; schoolNo < education.schools.length; schoolNo++) {
            education.myEdnDtlsLabelsArray4Chart[schoolNo] = education.schools[schoolNo].shortTitle + " - " + education.schools[schoolNo].dates;
            var degreeMarksArray = [];
            degreeMarksArray[0] = education.myEdnDtlsLabelsArray4Chart[schoolNo];
            degreeMarksArray[1] = education.schools[schoolNo].marks;
            education.myEdnDtlsArray4Chart[schoolNo] = degreeMarksArray;
        }
        var myAcademics = education.myEdnDtlsLabelsArray4Chart;
        $('#container-academics').highcharts({
            chart: {
                type: 'bar',
                zoomType: 'xy',
                backgroundColor: {
                    linearGradient: [0, 0, 500, 500],
                    stops: [
                        [0, 'rgb(255, 255, 255)'],
                        [1, 'rgb(200, 200, 255)']
                    ]
                }
            },
            title: {
                text: 'Academic Performance'
            },
            xAxis: {
                title: {
                    enabled: true,
                    text: 'Course, Year'
                },
                startOnTick: true,
                endOnTick: true,
                showLastLabel: true,
                labels: {
                    formatter: function () {
                        return myAcademics[this.value];
                    }
                }
            },
            yAxis: {
                title: {
                    text: '% Marks'
                }
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                verticalAlign: 'top',
                x: 250,
                y: 0,
                floating: true,
                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
                borderWidth: 1
            },
            plotOptions: {
                scatter: {
                    marker: {
                        radius: 5,
                        states: {
                            hover: {
                                enabled: true,
                                lineColor: 'rgb(100,100,100)'
                            }
                        }
                    },
                    states: {
                        hover: {
                            marker: {
                                enabled: false
                            }
                        }
                    },
                    tooltip: {
                        pointFormat: 'In {point.x} got {point.y} %'
                    }
                }
            },
            series: [{
                    name: 'Academics',
                    showInLegend: false,
                    color: 'blue',
                    data: education.myEdnDtlsArray4Chart
                }]
        });
    }),
    //Skills Chart Function (Encapsulated)
    "chartSkills": (function () {
        for (var course = 0; course < education.onlineCourses.length; course++) {
            education.myCourseDtlsLabelsArray4Chart[course] = education.onlineCourses[course].shortTitle + " - " + education.onlineCourses[course].dates;
            var courseArray = [];
            courseArray[0] = education.myCourseDtlsLabelsArray4Chart[course];
            courseArray[1] = education.onlineCourses[course].duration;
            education.myCourseDtlsArray4Chart[course] = courseArray;
        }
        var mySwSkills = education.myCourseDtlsLabelsArray4Chart;
        $('#container-skills').highcharts({
            chart: {
                type: 'bar',
                zoomType: 'xy',
                backgroundColor: {
                    linearGradient: [0, 0, 500, 500],
                    stops: [
                        [0, 'rgb(255, 255, 255)'],
                        [1, 'rgb(200, 200, 255)']
                    ]
                }
            },
            title: {
                text: 'Software Skills'
            },
            xAxis: {
                title: {
                    enabled: true,
                    text: 'Course, Year'
                },
                startOnTick: true,
                endOnTick: true,
                showLastLabel: true,
                labels: {
                    formatter: function () {
                        return mySwSkills[this.value];
                    }
                }
            },
            yAxis: {
                title: {
                    text: 'No. Months'
                }
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                verticalAlign: 'top',
                x: 250,
                y: 0,
                floating: true,
                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
                borderWidth: 1
            },
            plotOptions: {
                scatter: {
                    marker: {
                        radius: 5,
                        states: {
                            hover: {
                                enabled: true,
                                lineColor: 'rgb(100,100,100)'
                            }
                        }
                    },
                    states: {
                        hover: {
                            marker: {
                                enabled: false
                            }
                        }
                    },
                    tooltip: {
                        pointFormat: 'In {point.x} for {point.y} months'
                    }
                }
            },
            series: [{
                    name: 'Software Skills',
                    showInLegend: false,
                    color: 'blue',
                    data: education.myCourseDtlsArray4Chart
                }]
        });
    })
};

//My work experience
var work = {
    "jobs": [
        {
            "employer": "Infosys",
            "title": "Systems Engineer: Frond-end Web Devoloper",
            "location": "Mysuru, Karnataka, India",
            "dates": "October 2016 till Date",
            "description": "Currently working as Systems Engineer with Infosys; \n\
\n\Specializing in Front-end web development for important clients in USA & \n\
\n\Europe. Presently I am working with Infosys' premier product 'Finnacle'. \n\
\n\I am working on developing web-pages for the business intelligence \n\
\n\system, which takes input from the backend of 'Finnacle'.",
            //The url of Infosys where I have worked
            "employerURL": "http://www.infosys.com"
        },
        {
            "employer": "Udacity",
            "title": "Course Devoloper at Udacity",
            "location": "New York, USA",
            "dates": "June 2016 - September 2016",
            "description": "I am an important member of the team that develops the course material for \n\
Front-end Web Development course in the premier organisationt that offers MOOCs across the world. I specialize in \n\
creating the feed for Javascript lessons. My core competency is in the areas of JSON and Ajax.",
            //The url of Udacity where I have worked
            "employerURL": "http://www.udacity.com"
        }
    ],
    //Display Function (Encapsulated)
    "display": function () {
        for (var jobNo = 0; jobNo < work.jobs.length; jobNo++) {
            $("#workExperience:last").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[jobNo].employer);
            formattedEmployer = formattedEmployer.replace("#", work.jobs[jobNo].employerURL);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[jobNo].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            $(".work-entry:last").append(formattedEmployerTitle);
            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[jobNo].dates);
            $(".work-entry:last").append(formattedDates);
            var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[jobNo].location);
            $(".work-entry:last").append(formattedLocation);
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[jobNo].description);
            $(".work-entry:last").append(formattedDescription);
        }
    }
};

//Projects handled by me so far
var projects = {
    "projects": [
        {
            "title": "Portfolio Site",
            "dates": "March 2016",
            "description": "While taking the Udacity front end Nanodegree course, I \n\
devoloped this project which showcases my bootstrap skills along with break \n\
points. In this project I developed my Web page such that it is compatible to\n\
various kinds of devices such as mobile phones, tablets and desktops.",
            "images": ["images/PORTFOLIO-FULL.png"]
        },
        {
            "title": "Animal cards",
            "dates": "Feb 2016",
            "description": "While taking the Udacity front end Nanodegree course,\n\
 I devoloped this project which showcases my CSS skills and thereby learned a\n\
 lot from it. It contains an image of cute penguins and also some valuble \n\
information about them along with many amazing CSS styles.",
            "images": ["images/ANIMAL-CARDS-FULL.png"]
        }],
    //Display Function (Encapsulated)
    "display": function () {
        for (var projectNo = 0; projectNo < projects.projects.length; projectNo++) {
            $("#projects:last").append(HTMLprojectStart);
            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[projectNo].title);
            $(".project-entry:last").append(formattedTitle);
            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[projectNo].dates);
            $(".project-entry:last").append(formattedDates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[projectNo].description);
            $(".project-entry:last").append(formattedDescription);
            $("#projects").append(HTMLprojectStart);
            if (projects.projects[projectNo].images.length > 0) {
                for (var imageno = 0; imageno < projects.projects[projectNo].images.length; imageno++) {
                    var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[projectNo].images[imageno]);
                    $(".project-entry:last").append(formattedImage);
                }
            }
        }
    }
};

//Calling all the encapsulated functions
bio.display();
education.display();
work.display();
projects.display();
//Academics & Skills Charts
education.chartAcademics();
education.chartSkills();

//Map display for the locations, where I have lived and worked
$("#mapDiv").append(googleMap);

//collecting click locations
$(document).click(function (loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});