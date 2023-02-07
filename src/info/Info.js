import self from "../img/self.png"

import tinder_clone from "../img/tinder_clone.png"
import movie_site from "../img/movie_site.png"
import senti from "../img/senti.png"
import color_restore from "../img/color_restore.png"
import text1 from "../img/text1.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Jayaprakash",
    lastName: "Lenin",
    initials: "jp", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer(AI/ML)",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in India'
        },
        {
            emoji: "💼",
            text: "Undergrad Researcher at Amrita"
        },
        {
            emoji: "📧",
            text: "jayaprakashnis619@gmail.com"
        },
        {
            emoji :"👨‍💻",
            text:"Currently Learning Devops and Full Stack Development  "
        }
    ],
    socials: [
        {
            link: "https://facebook.com",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://www.instagram.com/jp_duker_390/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/Jpduker",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/jayaprakash-lenin",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com/Jayaprakash_SL",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Jayaprakash aka jp. I'm a software developer with inclination towards AI. I'm pursuing CompSci(with AI) at Amrita University, I enjoy long rides on motorcycles, and I believe AI will automate the booring stuff and  us all one day. You should hire me!",
    skills:
        {
            proficientWith: ['javascript','react','git','github','html5','css3','python','tensorflow','express.js','node.js','mongoDB','SQL','flask','node.js','Java','C++'],
            exposedTo: ['flutter', 'Django', 'firebase' , 'materialUI','fastApi','AWS']
        }
    ,
    hobbies: [
        {
            label: 'working out',
            emoji: '🏋️‍♀️'
        },
        {
            label: 'motorcycling',
            emoji: '🚴'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'hackathons',
            emoji: '👨‍💻'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        
        {
            title: "Dynamic Movie Site",
            live: "https://jpduker.github.io/Movie-Site/",
            source: "https://github.com/Jpduker/Movie-Site",
            image: movie_site
        },
        {
            title: "Toxicity Detection",
            live: "https://jpduker-sentimental-analysis-using-svm-appapp-dy73fy.streamlit.app/",
            source: "https://github.com/Jpduker/Sentimental-Analysis-Using-SVM",
            image: senti
        },
        {
            title: "Tinder Clone (MERN)",
             //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/Jpduker", // this should be a link to the **repository** of the project, where the code is hosted.
            image: tinder_clone
        },
        {
            title: "Color Restoration",
            live: "https://github.com/Jpduker/DeOldify",
            source: "https://github.com/Jpduker/DeOldify",
            image: color_restore
        },
        {
            title: "Text-Summary Generator",
            live: "https://github.com/Jpduker/Q-A-Deeplearning-Web-APP",
            source: "https://github.com/Jpduker/Q-A-Deeplearning-Web-APP",
            image: text1
        }
    ]
}