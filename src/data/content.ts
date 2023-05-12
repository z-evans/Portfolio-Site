import imgINSPIRE from "../assets/logo/inspiring-skills-wales.png";
import imgWORLD from "../assets/logo/world-skills.png";
import imgHTML from "../assets/logo/technologies/html5.png";
import imgCSS from "../assets/logo/technologies/css3.png";
import imgJS from "../assets/logo/technologies/javascript.png";
import imgTYPE from "../assets/logo/technologies/typescript.png";
import imgJQUERY from "../assets/logo/technologies/jquery.png";
import imgREACT from "../assets/logo/technologies/react.png";
import imgWEBPACK from "../assets/logo/technologies/webpack.png";
import imgVITE from "../assets/logo/technologies/vite.png";
import imgNODEJS from "../assets/logo/technologies/nodejs.png";
import imgELECTRON from "../assets/logo/technologies/electron.png";
import imgWORDPRESS from "../assets/logo/technologies/wordpress.png";
import imgJAVA from "../assets/logo/technologies/java.png";
import imgSPRING from "../assets/logo/technologies/spring.png";
import imgMYSQL from "../assets/logo/technologies/mysql.png";
import imgPOST from "../assets/logo/technologies/postgresql.png";
import imgGITHUB from "../assets/project/github.jpg";
import imgTEAM from "../assets/project/team.png";
import imgBACK from "../assets/index.png";

export default {
  replacements: [
    {
      id: "h1",
      replace: "h2",
    },
    {
      id: "h2",
      replace: "h3",
    },
  ],
  images: {
    background: imgBACK,
  },
  pages: {
    about: {
      tech: [
        {
          name: "HTML 5",
          src: imgHTML,
        },
        {
          name: "CSS",
          src: imgCSS,
        },
        {
          name: "JavaScript",
          src: imgJS,
        },
        {
          name: "TypeScript",
          src: imgTYPE,
        },
        {
          name: "JQuery",
          src: imgJQUERY,
        },
        {
          name: "ReactJS",
          src: imgREACT,
        },
        {
          name: "NodeJS",
          src: imgNODEJS,
        },
        {
          name: "Electron",
          src: imgELECTRON,
        },
        {
          name: "Webpack",
          src: imgWEBPACK,
        },
        {
          name: "Vite",
          src: imgVITE,
        },
        {
          name: "WordPress",
          src: imgWORDPRESS,
        },
        {
          name: "Java",
          src: imgJAVA,
        },
        {
          name: "Springboot",
          src: imgSPRING,
        },
        {
          name: "MySQL",
          src: imgMYSQL,
        },
        {
          name: "PostgreSQL",
          src: imgPOST,
        },
      ],
    },
    expierence: {
      achievements: [
        {
          name: "Inspiring Skills Wales",
          description: "2018 | 1st Place",
          src: imgINSPIRE,
        },
        {
          name: "WSUK Web Design Heat",
          description: "2019 | Qualify for National Final",
          src: imgWORLD,
        },
        {
          name: "WSUK Web Design Nation Final",
          description: "2019 | 2nd Place",
          src: imgWORLD,
        },
      ],
      education: [
        {
          name: "Level 3 Information Technology",
          location: "NPTC Group, Neath College",
          date: "2017 - 2019",
          description:
            "The course is designed to provide highly specialist, work-related qualifications in the Computing and Information Technology sector. Its aim is to give the knowledge, under-standing and skills they need to prepare for employment.",
          list: [
            "Event Driven Programming",
            "Website Production",
            "Computer Networking",
            "Computer Games Development",
          ],
        },
        {
          name: "BE, Computer Software Engineering",
          location: "University of Wales Trinity Saint David",
          date: "2019 - 2023",
          description:
            "The course focuses on designing, implementing, testing and maintenance of high-quality software solutions. The course focuses on acquiring and using the expertise required by a professional programmer to create solutions to large and complex problems.",
          list: [
            "Advanced Software Development",
            "Software Engineering Principles and Testing",
            "Network Operating Systems and Services",
          ],
        },
      ],
    },
    projects: [
      {
        name: "Home - Work in progress",
        description:
          "Software thats underdevelopment to replace local nextcloud software and note / task tracker software that was made with PHP & JQuery.",
        src: "https://github.com/z-evans/home",
        image: imgGITHUB,
        tech: [imgREACT, imgWEBPACK, imgNODEJS, imgTYPE],
      },
      {
        name: "WSUK Team Competition",
        description:
          "Several people grouped together with different skills were challenged to create a website within and host it on the local network.",
        src: "http://team.zevans.co.uk/",
        image: imgTEAM,
        tech: [imgHTML, imgCSS, imgJS],
      },
      {
        name: "Reworked Portfolio Website",
        description:
          "Yet another rework to my own Portfolio website. But this time it includes several new frameworks and new features.",
        src: undefined,
        image: imgGITHUB,
        tech: [imgREACT, imgVITE, imgNODEJS, imgTYPE],
      },
    ],
  },
};
