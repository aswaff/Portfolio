

const ProjectData = [
    {
        "title": "Face Recognition APP",
        "image": "/projects/facerecognition.jpg",
        "description": `This is a web application using React, Node, and postgreSQL. It lets users register and sign in, 
                        and place image URL's. Using the Clairify API, the app will detect human faces, and using CSS, will place a 
                        square around the face. 
                        `,
        "github_link": "https://github.com/aswaff/facerecognition",
        "live_link": "https://face-recognitionaswaff.herokuapp.com/",
        "tech_used": {
            "library": "React",
            "tech": "Node, PostgreSQL, Heroku, Clarify API",

        },
        
    },
    

     {
        "title": "URL-Shortener",
        "image": "/projects/URL_shortener.jpg",
        "description": `A small simple React app that takes a users inputted 
                        URL link, and responds with a shortened URL.  It utilizes the shrtco.de API.`,
        "github_link": "https://github.com/aswaff/URL-Shortener",
        "live_link": "https://aswaff.github.io/URL-Shortener/",
        "tech_used": {
            "library": "React",
            "tech": "Promise Tracker, Promise Spinner, FETCH, shortco.de API",

        },
        
    },
]

export default ProjectData;