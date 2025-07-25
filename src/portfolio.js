/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Danielle's Portfolio",
  description:
    "Computer Science student at UT Austin passionate about iOS development, AI, and using tech to uplift underrepresented communities.",
  og: {
    title: "Danielle Nyame Portfolio",
    type: "website",
    url: "http://daniellenyame.com/",
  },
};

//Home Page
const greeting = {
  title: "Danielle Nyame",
  logo_name: "DanielleNyame ",
  nickname: "daninyame1",
  subTitle:
    "UT Austin CS student building inclusive tech, innovative apps, and a future in iOS development.",
  resumeLink:
    "https://drive.google.com/file/d/17PRiiKhoJMBNGcGzSV2CccuW5TNOCLru/view?usp=sharing",
  portfolio_repository: "https://github.com/dnyame1/danielle-portfolio",
  githubProfile: "https://github.com/dnyame1",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/dnyame1",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/danielle-nyame/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    
    //name: "YouTube",
   // link: "https://youtube.com/c/DevSense19",
    //fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
   // backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:daniellenyame@utexas.edu",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
   // name: "X-Twitter",
   // link: "https://twitter.com/ashutosh_1919",
    //fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
   // backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/danielle.nysme/",
  fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    //name: "Instagram",
  //  link: "https://www.instagram.com/layman_brother/",
   // fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
   // backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Technical Skills",
      fileName: "FullStackImg",
      skills: [
        "⚡ Developed an AI app using C++ and HTML for social evaluation and racial awareness",
        "⚡ Experience building frontend UI and participating in research-based development",
        "⚡ Passionate about app development, iOS, and inclusive technology",
      ],
      softwareSkills: [
        {
          skillName: "C++",
          fontAwesomeClassname: "logos:c-plusplus",
          style: {
            backgroundColor: "#00599C",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            backgroundColor: "white",
            color: "#E34F26",
          },
        },
        {
          skillName: ""GitHub",
          fontAwesomeClassname: "fa-brands fa-github",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Public Speaking",
          imageSrc: "fas fa-microphone",
        },
      ],
    },
    {
      title: "Professional Skills",
      fileName: "DesignImg",
      skills: [
        "⚡ Advanced public speaking and communication",
        "⚡ Strong time management and organizational leadership",
        "⚡ Collaboration and leadership in both STEM and community spaces",
      ],
      softwareSkills: [
        {
          skillName: "Leadership",
          fontAwesomeClassname: "fas fa-user-tie",
          style: {
            color: "#1abc9c",
          },
        },
        {
          skillName: "Teamwork",
          fontAwesomeClassname: "fas fa-users",
          style: {
            color: "#3498db",
          },
        },
        {
          skillName: "Writing",
          fontAwesomeClassname: "fas fa-pen-nib",
          style: {
            color: "#e67e22",
          },
        },
        {
          skillName: "Bilingual (English/Spanish)",
          fontAwesomeClassname: "fas fa-language",
          style: {
            backgroundColor: "#000000",
            color: "#9b59b6",
          },
        },
        {
       //
          },
        },
    /*
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
          /*
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};
*/
const degrees = {
  degrees: [
    {
      title: "The University of Texas at Austin",
      subtitle: "Bachelor of Science in Computer Science",
      logo_path: "ut_logo.png",
      alt_name: "UT Austin",
      duration: "Aug 2025 – Present",
      descriptions: [
        "⚡ Full-ride Impact & Dijkstra Scholar majoring in Computer Science",
         "⚡ Accepted into UT Austin's Exclusive Freshman Research Inititave",
        "⚡ Relevant Coursework: Introduction to Programming, Calculus I",
        "⚡ Passionate about iOS development, equity in tech, and research innovation",
      ],
      website_link: "https://www.cs.utexas.edu/",
    },
    {
      title: "St. Philip's College",
      subtitle: "Associate of Arts in Multidisciplinary Studies",
      logo_path: "stphilip_logo.png",
      alt_name: "St. Philip's College",
      duration: "Aug 2021 – May 2025",
      descriptions: [
         "⚡ Graduated with a 4.0 GPA while dual enrolled in high school",
      "⚡ Took college-level courses in English, History, Government, and more",
      "⚡ Built foundational skills in analysis, research, and communication",
      ],
      website_link: "https://www.alamo.edu/spc/",
    },
  ],
};
/*
const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};
*/
// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, and Internship",
  description:
    "I’ve gained diverse work experience across customer service, pharmacy, and healthcare industries—balancing fast-paced environments with precision, empathy, and strong communication. My roles have sharpened my time management, teamwork, and problem-solving skills while supporting both people and processes.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "E-Store Shopper",
          company: "H-E-B",
          company_url: "https://www.heb.com/",
          logo_path: "heb_logo.png",
          duration: "May 2024 – Present",
          location: "Seguin, TX",
          description:
            "Top Shopper within 6 months. Streamlined online grocery orders with speed, accuracy, and attention to detail.",
          color: "#FF0000",
        },
        {
          title: "Pharmacy Intern",
          company: "Core Veterinary Compounding Pharmacy",
         // company_url: "https://legatohealthtech.com/",
         // logo_path: "legato_logo.png",
          duration: "Nov 2023",
          location: "Seguin, TX",
          description:
            "Assisted in compounding medications tailored to patient needs. Gained hands-on experience in formulation and dosage customization.",
          color: "#00a86b",
        },
        {
          /*
          title: "Android and ML Developer",
          company: "Muffito Incorporation",
          company_url: "https://www.linkedin.com/company/muffito-inc/about/",
          logo_path: "muffito_logo.png",
          duration: "May 2018 - Oct 2018",
          location: "Pune, Maharashtra",
          description:
            "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
          color: "#9b1578",
        },
        {
          title: "Android Developer",
          company: "FreeCopy Pvt. Ltd.",
          company_url: "https://www.linkedin.com/company/freecopy/about/",
          logo_path: "freecopy_logo.png",
          duration: "Nov 2017 - Dec 2017",
          location: "Ahmedabad, Gujarat",
          description:
            "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Machine Learning Intern",
          company: "TikTok Inc.",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "tiktok_logo.png",
          duration: "May 2022 - Aug 2022",
          location: "San Francisco, USA",
          description:
            "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
          color: "#000000",
        },
        {
          title: "Data Science Research Intern",
          company: "Delhivery Pvt. Ltd.",
          company_url: "https://www.delhivery.com/",
          logo_path: "delhivery_logo.png",
          duration: "May 2019 - Sept 2019",
          location: "Gurgaon, Haryana",
          description:
            "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
          color: "#ee3c26",
        },
        {
          title: "Data Science Intern",
          company: "Intel Indexer LLC",
          company_url:
            "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "intel_logo.jpg",
          duration: "Nov 2018 - Dec 2018",
          location: "Work From Home",
          description:
            "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
          color: "#0071C5",
        },
      ],
    },
    {
    */
      title: "Volunteerships",
      experiences: [
        {
          title: "Texas State Leader",
           company: "Society of Black Students in Healthcare",
         // company_url: "https://about.google/",
         // logo_path: "google_logo.png",
          duration: "July 2023 – Present",
          location: "Dallas, TX",
          description:
            "Led a statewide team focused on health equity awareness. Co-authored a children's book on sickle cell, organized a community field day, and launched campaigns reaching 13K+ across Instagram and TikTok.",
          color: "#e67e22",
        },
        {
          title: "Chair – Superintendent Student Advisory Team",
          company: "Seguin Independent School District",
          company_url: "https://www.seguin.k12.tx.us",
          logo_path: "seguinisd_logo.png",
          duration: "Aug 2021 – May 2025",
          location: "Seguin, TX",
          description:
            "Only student on the district's 5-year strategic board. Co-created the district mission symbol (recognized by the Holdsworth Center), and led the inaugural Matador Family Bash with 400+ attendees.",
          color: "#3498db",
        },
        {
          title: "Public Relations Officer",
          company: "National Honor Society",
          //company_url: "https://www.mozilla.org/",
          logo_path: "nhs_logo.png",
          duration: "Jan 2024 – May 2025",
          location: "Seguin, TX",
          description:
            "Managed NHS Instagram to increase engagement and communication. Led fundraising efforts that raised $1.5K through event concessions at the Matador Family Bash.",
          color: "#2c3e50",
        },
        {
          title: "Class President (4 Years)",
          company: "Student Government",
          //company_url:
           // "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
         // logo_path: "dsc_logo.png",
          duration: "Aug 2021 – May 2025",
          location: "Seguin, TX",
          description:
            "Served as Class President all four years. Organized Decision Day, Celebration of Excellence, and raised over $12K for prom. Represented Guadalupe County at Texas Girls State as a Senate Councilwoman.",
          color: "#f39c12",
        },
        {
          /*
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2019 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
        },
      ],
    },
  ],
};
*/
// Projects Page
const projectsHeader = {
  image: "ai_app.png",
 projectName: "Me vs. Me – Inclusive Cognitive Awareness AI App",
  description:
    "Invented an AI-based app using C++ and HTML to explore racial cognitive awareness and promote inclusive evaluation. Partnered with South Texas Blood & Tissue Center and dedicated 150+ hours to design, testing, and iteration.",
  footerLink: [
      {
        name: "Science Fair Awards",
        url: "https://drive.google.com/file/d/17PRiiKhoJMBNGcGzSV2CccuW5TNOCLru/view?usp=sharing", // Optional – or replace with a real achievement link
      },
     {
  image: "socials_preview.png", // Combine screenshots from each page into a grid-style image
  projectName: "Instagram Branding & Page Management",
  projectDesc:
    "Managed four Instagram pages, including National Honor Society, Class of 2025 Page, College Decision Page, and the Seguin Tennis Team. Created branded graphics, announcement posts, and recap content to keep student engagement high across all platforms.",
  footerLink: [
    {
      name: "NHS Page",
      url: "https://www.instagram.com/seguinnationalhonorsociety",
    },
    {
      name: "Class of 2025",
      url: "https://www.instagram.com/seguinclassof2025",
    },
    {
      name: "College Decisions",
      url: "https://www.instagram.com/seguinhsdecisions",
    },
    {
      name: "Tennis Team",
      url: "https://www.instagram.com/seguinhstennis",
    },
  ],
},

 // avatar_image_path: "projects_image.svg",
};
/*
const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};
*/
// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  /*
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  */
  addressSection: {
    title: "Address",
   // subtitle: "1417 Redbridge Dr, Seguin, Texas, 78155",
    locality: "Austin",
    country: "USA",
    region: "Texas",
   // postalCode: "78155",
  //  streetAddress: "Redbridge Dr",
  //  avatar_image_path: "address_image.svg",
 //   location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
 // phoneSection: {
  //  title: "Phone",
   // subtitle: "(830) 556-8033",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  //competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  //publicationsHeader,
  //publications,
  contactPageData,
};
