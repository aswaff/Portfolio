

const ProjectData = [
    {
        "title": "Video Saver",
        "image": "/projects/video-saver.png",
        "description": `A very fun fullstack project I envisioned. It communicates with a API I wrote for this 
                        project (https://github.com/aswaff/video-saverAPI). The app lets you save videos, with the ability to 
                        set a category. The homepage has a TikTok style swipe for videos, the search page lets you search for 
                        the videos based on category selected. Please give time for the demo site to load, the front and backend 
                        are hosted on Heroku, you may have to refresh after initial page load.
                        `,
        "github_link": "https://github.com/aswaff/video-saver",
        "live_link": "https://video-save.herokuapp.com/",
        "tech_used": {
            "library": "Svelte",
            "tech": "Iframely API, Node/ExpressJS, MongoDB, Mongoose, SwiperJS",

        },
        
    },

    {
        "title": "ECommerce Store",
        "image": "/projects/ecommerce-store.jpg",
        "description": `As part of the Zero-To-Mastery React course, we created this ecommerce project.
                        It utilizes Redux, and firebase. It was a great code a long project to at least get familiar 
                        with some of the tech that's used with React. (Hosted on Heroku, give time to load the app)
                        `,
        "github_link": "https://github.com/aswaff/Ecommerce-Store",
        "live_link": "https://ecomme-store.herokuapp.com/",
        "tech_used": {
            "library": "React",
            "tech": "Redux, React Router, Firebase, Stripe API",

        },
        
    },

    {
        "title": "Face Recognition",
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
        "title": "Portfolio",
        "image": "/projects/portfolio.jpg",
        "description": `This is the site you are on now! I decided to create this myself so I could learn a little Gatsby. 
                        Hosted on Netlify, it uses the dev.to component I made, and also Gatsby-Image.
                        `,
        "github_link": "https://github.com/aswaff/Portfolio",
        "live_link": "https://aswaff.dev",
        "tech_used": {
            "library": "Gatsby",
            "tech": "Gatsby-Image, GraphQL, Netlify",

        },
        
    },
    
    {
        "title": "Dev.to Blog Component",
        "image": "/projects/devtocomponent.png",
        "description": `This is a reusable component, that works along side @Reach/react. I built this for my website, 
                        so that I could write on dev.to knowing my articles will also always be visible on my site. It uses client 
                        side routing to create the pages. 
                        `,
        "github_link": "https://github.com/aswaff/dev.to-Blog-Component",
        "live_link": "https://aswaff.dev/blog",
        "tech_used": {
            "library": "Javascript Component",
            "tech": "Axios, @reach/router",

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