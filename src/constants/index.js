import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    vn,
    lps,
    cu,
    shopify,
    taskgo,
    apmineral,
    ytclone,
    usbinteriors,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "My Journey",
    },
    {
      id: "project",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Mobile App Developer",
      icon: mobile,
    },
    {
      title: "Full Stack Developer",
      icon: backend,
    },
    {
      title: "Gamer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    // {
    //   name: "Tailwind CSS",
    //   icon: tailwind,
    // },
    // {
    //   name: "Node JS",
    //   icon: nodejs,
    // },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    // {
    //   name: "git",
    //   icon: git,
    // },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Matriculation & Intermediate",
      company_name: "Lucknow Public School",
      icon: lps,
      iconBg: "#383E56",
      date: "April 2005 - June 2018",
      points: [
        "Completed Matriculation from ICSE board and Intermediate from CBSE.",
        "Participated in extracurricular activities throughout my school years.",
        "Worked for various community services such as planting trees and clean-up initiatives.",
        "Won 1st prize in science fair for water harvesting model.",
      ],
    },
    {
      title: "Graduation (BCA)",
      company_name: "Chandigarh University",
      icon: cu,
      iconBg: "#E6DEDD",
      date: "July 2018 - June 2021",
      points: [
        "Learnt web development with Php.",
        "Proficient in programming languages such as Java,Php and Python, demonstrated through successfully completing complex projects like Kisaan Saathi, Online Voting System.",
        "Worked on a project Online Notice Board based on Php.",
        "Participated in workshops and tech-events.",
      ],
    },
    {
      title: "Post-Graduation (MCA)",
      company_name: "Chandigarh University",
      icon: cu,
      iconBg: "#383E56",
      date: "July 2021 - June 2023",
      points: [
        "Learnt full stack development with MERN stack.",
        "Proficient in programming languages such as React and Node, demonstrated through successfully completing complex projects like Task Management System, News App, Youtube Clone.",
        "Worked on a project named Kisaan Saathi based on java servlet and filed it as patent.",
        "Learnt critical data structures and algorithms.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Virtual Ninjas",
      icon: vn,
      iconBg: "#E6DEDD",
      date: "April 2022 - Present",
      points: [
        "Developing and maintaining web applications using GoHighlevel and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Siddharath is an exceptional web developer who turned our vision into a stunning reality.",
      name: "Rudram Shah",
      designation: "UI/UX Designer",
      company: "TCS",
      image: "https://pps.whatsapp.net/v/t61.24694-24/347732986_621025469993682_4545181184292469130_n.jpg?ccb=11-4&oh=01_AdTRm8dr8cGYiVepVSUFaIGeV653WoqadkGCaDeJGT6jMg&oe=6496C757",
    },
    {
      testimonial:
        "Impressed by Siddharath's technical prowess and ability to deliver a top-notch website on time.",
      name: "Manish Harit",
      designation: "Software Engineer",
      company: "All State",
      image: "https://pps.whatsapp.net/v/t61.24694-24/345490081_797817914897495_7341578084169701383_n.jpg?ccb=11-4&oh=01_AdT3OxZSVmJ_2WxKsYijF5GD0AKnXAAHBGakz-hMvE4gkQ&oe=649965B6",
    },
    {
      testimonial:
        "Impressed by Sid's ability to seamlessly integrate advanced functionalities into our website.",
      name: "Naved Farooqi",
      designation: "Manager",
      company: "Virtual Ninjas",
      image: vn,
    },
  ];
  
  const projects = [
    {
      name: "Task Go",
      description:
        "Task Go is a comprehensive task management system built using the MERN stack. It offers a user-friendly interface and robust features to help individuals and teams effectively organize and track their tasks.With Task Go, users can create, assign, and prioritize tasks effortlessly.",
      tags: [
        {
          name: "MERN",
          color: "blue-text-gradient",
        },
        {
          name: "MUI",
          color: "green-text-gradient",
        },
        {
          name: "restapi",
          color: "pink-text-gradient",
        },
      ],
      image: taskgo,
      live_link: "https://taskgo.callmesid.in/",
      source_code_link: "https://github.com/sidd84755/TaskManager",
    },
    {
      name: "Ap Minerals",
      description:
        "Ap Minerals is a professional website developed using React, catering to the needs of a leading coal mining and trading company. This platform showcases the company's expertise in the coal industry and provides essential information and services to its clients and stakeholders.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "MUI",
          color: "green-text-gradient",
        },
      ],
      image: apmineral,
      live_link: "https://apmineral.in/",
      source_code_link: "https://github.com/sidd84755/ap-minerals",
    },
    {
      name: "Youtube Clone",
      description:
        "The YouTube Clone is an impressive web application built using React, designed to emulate the popular video-sharing platform, YouTube. This dynamic and interactive platform offers users a similar experience to YouTube, allowing them to watch, upload, and share videos with ease.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "MUI",
          color: "green-text-gradient",
        },
        {
          name: "Rapid Api",
          color: "pink-text-gradient",
        },
      ],
      image: ytclone,
      live_link: "https://yt.callmesid.in/",
      source_code_link: "https://github.com/sidd84755/youtube_clone",
    },
    {
      name: "USB Interiors",
      description:
        "Usb Interiors is a visually stunning website for interior designing, meticulously crafted using HTML, CSS, and JavaScript. This website serves as a showcase for the expertise and creativity of the Usb Interiors team, providing visitors with an immersive experience in the world of interior design.",
      tags: [
        {
          name: "Html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "js",
          color: "pink-text-gradient",
        },
      ],
      image: usbinteriors,
      live_link: "https://usbinteriors.com/",
      source_code_link: "https://github.com/sidd84755",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };