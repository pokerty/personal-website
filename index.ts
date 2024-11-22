// TO ADD - WORK EXPERIENCES, PHOTOS
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export const NavItems = [
    {name: 'Home', link: '#home', },
    {name: 'About', link: '#about', },
    {name: 'Projects', link: '#projects', },
    {name: 'Testimonials', link: '#Testimonials', },
    {name: 'Contact', link: '#contact', },
]


// export const GridItems = [
//     {
//       title: 'About Me',
//       description: 'Hello! ',
//       icon: FaGithub,
//       header: "hi",
//       className: 'md:col-span-1',
//     },
//   ];


export const ProjItems = [
    {title: 'link: Github', href: 'https://github.com/pokerty/medical-chatbot-grab', heading:"Grab Medical Chatbot", description:" Deployment of PyTorch chatbot with Flask",imageSrc: 'https://c8.alamy.com/comp/2M3N807/medical-robot-vector-illustration-chatbot-out-of-screen-monitor-holds-speech-bubbles-with-medical-icons-medical-bot-answers-questions-of-patients-2M3N807.jpg', },
    {title: 'link: Github', href: 'https://github.com/pokerty/find-my-hdb-swe', heading:"Find My HDB", description:"Web App to find HDB apartment based on amenities requested",     imageSrc: 'https://dkc9trqgco1sw.cloudfront.net/s3fs-public/styles/simplecrop_article/public/field/image/BLD_HDB_MEI_LING_ST_MAR2022_SIC%201200_0.jpg?NnkzTwKAqiQFjnqZZ8T6pMhFaOXAdpz3',
    },
]

export const TestimonialItems = [
    {name: 'Louis Creteur', quote: 'Hongpo has been working with us for 6 months and became a real team member at Amplified Industries. Everyone really enjoyed working with him. Smart and hard worker, Hongpo quickly understood all the specific needs of the company and helped us a lot by working on very advanced and complicated data science and OPS subjects. We all wish he could have stayed longer.', designation:"CTO at Amplified Industries - Forbes 30 Under 30", src: "https://media.licdn.com/dms/image/v2/C5603AQF6oezygaXwAQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1517429388947?e=1737590400&v=beta&t=G7NjR5Hk19I_wRdpAsols5CUV2W4RBEHmX06HiSxVNw"},
    {name: 'Your Name Here', quote: 'This could be you, what are you waiting for?', designation:"..", src: "https://thumbs.dreamstime.com/b/coming-soon-web-page-poster-stay-tuned-message-coming-soon-web-page-poster-stay-tuned-message-vector-340165708.jpg"},
    
]

export const ContactItems = [
    {
      link: "https://github.com/pokerty",
      name: "My GitHub",
      icon: FaGithub,
      description: "Check out my projects and contributions"
    },
    {
      link: "https://www.linkedin.com/in/chen-hongpo-3644931aa/",
      name: "My LinkedIn",
      icon: FaLinkedin,
      description: "Connect with me professionally"
    },
    {
        link: "https://www.instagram.com/",
        name: "My Instagram(coming soon)",
        icon: FaInstagram,
        description: "Deactivated for now..."
    },
];