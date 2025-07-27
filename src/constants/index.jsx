  import { FaGithub, FaLinkedin } from "react-icons/fa";
  // import { ReactComponent as LeetCodeIcon } from "../assets/leetcode.svg";


  import projectImage1 from "../assets/project1.png";
  import projectImage2 from "../assets/project2.png";
  import projectImage3 from "../assets/project3.png";
  import projectImage4 from "../assets/project4.png";
  // import projectImage5 from "../assets/project5.jpeg";
  import projectImage5 from "../assets/project5.png";
  import projectImage6 from "../assets/project6.png";

  
  import { FaCss3 } from "react-icons/fa"; // Font Awesome CSS icon
  import { RiReactjsLine } from "react-icons/ri";
  import { TbBrandNextjs } from "react-icons/tb";
  import { SiTailwindcss } from "react-icons/si"; // Importing Tailwind CSS icon
  import { SiExpress } from "react-icons/si"; // Importing Express.js icon
  import { SiMongodb } from "react-icons/si";
  //import { DiRedis } from "react-icons/di";
  import { FaNodeJs } from "react-icons/fa";
  import { SiMysql } from "react-icons/si"; // Importing MySQL icon 
  import { DiJava } from "react-icons/di";             
  import { FaPython } from "react-icons/fa";
  import { FaHtml5 } from "react-icons/fa";
  import { DiJavascript } from "react-icons/di";
  import { AiFillAmazonCircle } from "react-icons/ai"; // Importing new AWS icon
  import { SiSpringboot } from "react-icons/si"; // Import Spring Boot icon
  import { FaReact } from "react-icons/fa"; // Import React icon
  import { SiPostman } from "react-icons/si"; // Import Postman icon for RESTful APIs
  import { SiGit } from "react-icons/si"; // Import Git icon
  import { GiProgression } from "react-icons/gi"; // Import alternative Agile icon  import { GiGitPull } from "react-icons/gi"; // Import CI/CD icon
  import { SiJenkins } from "react-icons/si"; // Import Jenkins CI/CD icon


  export const NAVIGATION_LINKS = [
    { label: "Projects", href: "#projects" },
    { label: "Bio", href: "#bio" },
    { label: "Skills", href: "#skills" },
    { label: "Work Experience", href: "#work" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];
  
  export const HERO = {
    name: "Dharma Ajay",
    greet: "Hello there! 👋🏻",
    description:
      "I’m a software developer with a strong interest in both frontend and backend technologies, as well as data science. With a solid foundation in data structures and algorithms, I’m passionate about problem-solving and enjoy designing and building distributed, scalable systems that make a meaningful impact. Focused on creating efficient, user-centered solutions, I continuously seek to bridge the gap between cutting-edge technologies and real-world applications."
  };
  
  export const PROJECTS = [
    {
      id: 1,
      name: "GitWise – GitHub AI Code Review Assistant",
      description:
        "Built an AI-powered tool that automates GitHub pull request reviews, reducing manual effort by 20%. Used React.js, Node.js, and Hugging Face’s CodeLlama API to generate intelligent suggestions. Secured GitHub integration via OAuth and deployed the frontend on Vercel and backend on Render using free-tier hosting for cost-effective availability.",
      // image: projectImage6,
      // githubLink: "https://github.com/Dharmaajay2222/AjayFolio",
    },
    {
      id: 2,
      name: "EmotionPlay – Real-Time Emotion Detection App",
      description:
        "Developed a web application that detects facial expressions in real time using TensorFlow.js and Face-API.js, and recommends songs via the Spotify Web API. Achieved 90% detection accuracy through performance tuning. Optimized background processing for smooth performance on low-power mobile devices.",
      // image: projectImage7, // replace with actual image variable if different
      // githubLink: "https://github.com/Dharmaajay2222/AjayFolio", // update if different for EmotionPlay
}





    // {
    //   id: 2,
    //   name: "ExamShield",
    //   description:
    //     "A secure system for encrypted exam paper distribution, featuring role-based access control, scheduled access, and real-time monitoring to protect exam integrity and confidentiality.",
    //   image: projectImage2,
    //   githubLink: "https://github.com/Dharmaajay2222/ExamShield",
    // },
    // {
    //   id: 3,
    //   name: "EthLink",
    //   description:
    //     "Create EthLink, a secure Ethereum dApp for transferring Ether using Solidity smart contracts with re-entrancy protection. Master Web3.0 essentials, from contract deployment to integrating Ether payments in an NFT marketplace.",
    //   image: projectImage3,
    //   githubLink: "https://github.com/Dharmaajay2222/EthLink",
    // },
    // {
    //   id: 4,
    //   name: "FileSync S3",
    //   description:
    //     "The Scalable File Upload Application is a web application that allows users to upload files seamlessly and efficiently using Amazon S3 for storage. This application is built using React.js for the frontend and Spring Boot for the backend, providing a user-friendly interface and a robust backend architecture.",
    //   image: projectImage4,
    //   githubLink: "https://github.com/Dharmaajay2222/FileSync-S3",
    // },
    // {
    //   id: 5,
    //   name: "Inventory Management",
    //   description:
    //     "An Inventory Management System built with the MERN stack (MongoDB, Express, React, Node.js) that enables efficient tracking, management, and reporting of stock, suppliers, and orders. It provides real-time updates, analytics, and integrates AWS S3 for secure file storage. The system streamlines inventory processes and enhances data accuracy.",
    //   image: projectImage5,
    //   githubLink: "https://github.com/Dharmaajay2222/Inventory-Management",
    // },
    {
      id: 6,
      name: "Personal portfolio",
      description:
        "Developed a responsive personal portfolio website using React.js, Tailwind CSS, and Vite. This project showcases my skills and projects in an interactive, visually appealing layout with smooth transitions and dynamic elements. Leveraged Tailwind CSS for rapid styling and Vite for optimized build performance, ensuring a fast and seamless user experience.",
      image: projectImage6,
      githubLink: "https://github.com/Dharmaajay2222/AjayFolio",
    },
  ];
  
  export const BIO = [
    "Hello! I’m Dharma Ajay, a dedicated software developer pursuing my B.E. in Computer Science Engineering at SRM TRP Engineering College. Currently, I work as a Front-End Developer Intern at ParkQwik, where I specialize in creating responsive user interfaces using JavaScript, React.js, and React Native. My contributions have led to increased user engagement and optimized application performance through innovative engineering solutions.",
    "I have a solid foundation in problem-solving, particularly in Data Structures and Algorithms (DSA), which I continuously refine through platforms like LeetCode, GeeksforGeeks, and CodeChef. My focus is on enhancing my DSA skills while advancing my knowledge in software development and data science. I am particularly interested in working on distributed scalable systems and enjoy tackling complex issues through thorough troubleshooting.",
    "I’m passionate about leveraging technology to create innovative solutions that improve lives. My achievements include developing an AI-driven application for personalized cancer treatment plans and creating a secure Ethereum dApp for seamless Ether transfers. In my free time, I enjoy solving coding challenges, exploring new technologies, and engaging with the tech community. I also utilize AI tools and prompt engineering to enhance my work and spark creativity in my projects. Let’s connect and collaborate on exciting projects that make a difference!",
  ];
  
  export const SKILLS = [
    {
      icon: <FaHtml5 className="text-4xl text-orange-600 lg:text-5xl" />,
      name: "HTML",
      //experience: "2+ years",
    },
    {
      icon: <FaCss3 className="text-4xl text-blue-600 lg:text-5xl" />,
      name: "CSS",
      //experience: "2+ years",
    },
    {
      icon: <DiJavascript className="text-4xl text-yellow-600 lg:text-5xl" />,
      name: "JavaScript",
      //experience: "3+ years",
    },
    {
      icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
      name: "React",
      //experience: "2+ years",
    },
    {
      icon: <FaReact className="text-4xl text-blue-600 lg:text-5xl" />,
      name: "React Native",
      //experience: "1+ year",
    },
  
    // {
    //   icon: <SiTailwindcss className="text-4xl text-sky-400 lg:text-5xl" />,
    //   name: "Tailwind CSS",
    //   //experience: "1+ year",
    // },
    // {
    //   icon: <TbBrandNextjs className="text-4xl text-white lg:text-5xl" />,
    //   name: "Next.js",
    //   //experience: "1+ year",
    // },
    {
      icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
      name: "Node.js",
      //experience: "2+ years",
    },
    {
      icon: <SiExpress className="text-4xl text-green-600 lg:text-5xl" />,
      name: "Express.js",
      //experience: "2+ years",
    },
    {
      icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
      name: "MongoDB",
      //experience: "1.5+ years",
    },
    // {
    //   icon: <DiRedis className="text-4xl text-red-600 lg:text-5xl" />,
    //   name: "Redis",
    //   //experience: "1+ year",
    // },
    {
      icon: <SiMysql className="text-4xl text-blue-600 lg:text-5xl" />,
      name: "MySQL",
      //experience: "1+ year",
    },
    {
      icon: <SiSpringboot className="text-4xl text-green-600 lg:text-5xl" />,
      name: "Spring Boot",
      //experience: "1+ year",
    },
    {
      icon: <DiJava className="text-4xl text-orange-600 lg:text-5xl" />,
      name: "Java",
      //experience: "2+ years",
    },
    {
      icon: <FaPython className="text-4xl text-blue-600 lg:text-5xl" />,
      name: "Python",
      //experience: "2+ years",
    },
    // {
    //   icon: <AiFillAmazonCircle className="text-4xl text-orange-600 lg:text-5xl" />,
    //   name: "AWS",
    //   //experience: "1+ year",
    // },
    // {
    //   icon: <SiPostman className="text-4xl text-red-500 lg:text-5xl" />,
    //   name: "RESTful APIs",
    //   //experience: "2+ years",
    // },
    {
      icon: <SiGit className="text-4xl text-orange-600 lg:text-5xl" />,
      name: "Git",
      //experience: "2+ years",
    },
    // {
    //   icon: <GiProgression className="text-4xl text-yellow-600 lg:text-5xl" />,
    //   name: "Agile",
    //   //experience: "1+ year",
    // },
    // {
    //   icon: <SiJenkins className="text-4xl text-black lg:text-5xl" />,
    //   name: "CI/CD",
    //   //experience: "1+ year",
    // },
  ];
  
  
  export const EXPERIENCES = [
  {
    title: "Java Developer Intern",
    company: "Infosys Springboard",
    duration: "February 2025 - March 2025",
    description:
      "Developed a Spring Boot and MySQL auction platform handling 100+ concurrent users with real-time bidding functionality. " +
      "Designed RESTful APIs that processed 200+ bids across 50+ auctions, implementing JWT authentication for secure access. " +
      "Integrated automated email notifications which increased user engagement by 30%. " +
      "Achieved 95%+ test coverage using JUnit and Mockito, reducing production bugs by 40%.",
  },
  // {
  //   title: "Frontend Developer Intern",
  //   company: "ParkQwik",
  //   duration: "October 2024 - December 2024",
  //   description:
  //     "Built responsive user interfaces using React.js and Tailwind CSS, improving application performance by 20%. " +
  //     "Created reusable React components that reduced development time by 15% and decreased code duplication by 30%. " +
  //     "Collaborated with UX designers to implement features that increased usability metrics by 25%. " +
  //     "Participated in agile sprints to deliver features that enhanced overall user satisfaction.",
  // }
];
  
  export const EDUCATION = [
    {
      degree: "B.E. in Computer Science and Engineering",
      institution: "SRM TRP Engineering College, Anna University",
      duration: "November 2022 - Expected Graduation 2026",
      description:
        "As a third-year student at SRM TRP Engineering College, I am deeply engaged in exploring the ever-evolving landscape of Computer Science and Engineering. My coursework has provided me with a robust foundation in key areas, including Object-Oriented Programming, Data Structures, Algorithms, Python, C, Database Management Systems (DBMS), Operating Systems, and Computer Networks. Through a blend of theoretical knowledge and practical applications, I am cultivating a strong problem-solving mindset and honing my skills to tackle complex technological challenges.",
    },
    {
      degree: "Higher Secondary Education",
      institution: "Sri Sankara Matric Hr. Sec School",
      duration: "2021 - 2022",
      description:
        "My journey in technology began during my higher secondary education, where I focused on Physics, Chemistry, Mathematics, and Computer Science, igniting my passion for engineering and paving the way for my academic pursuits.",
    },
  ];
  
  export const SOCIAL_MEDIA_LINKS = [
    // {
    //   href: "https://leetcode.com/your-username/", // Replace with your LeetCode profile link
    //   icon: <LeetCodeIcon className="hover:opacity-80" style={{ width: '25px', height: '25px' }} />, // Set size as needed
    // },
    {
      href: "https://github.com/Dharmaajay2222",
      icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
    },
    {
      href: "https://www.linkedin.com/in/dharmaajay/",
      icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
    },
  ];
