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
    capg,
    bdo,
    rudram,
    manish,
    lps,
    cu,
    shopify,
    taskgo,
    apmineral,
    ytclone,
    careerguru,
    usbinteriors,
    arki,
    getmetherapy,
    virtualninjas,
    uditahomes,
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
      iconBg: "#E6DEDD",
      date: "April 2005 - June 2018",
      points: [
        "Completed Matriculation from ICSE board and Intermediate from CBSE.",
        "Participated in extracurricular activities throughout my school years.",
        "Worked for various community services such as planting trees and clean-up initiatives.",
        "Won 1st prize in science fair for water harvesting model.",
      ],
    },
    {
      title: "Bachelors In Computer Applications",
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
      title: "Masters In Computer Applications",
      company_name: "Chandigarh University",
      icon: cu,
      iconBg: "#E6DEDD",
      date: "July 2021 - June 2023",
      points: [
        "Learnt full stack development with MERN stack.",
        "Proficient in programming languages such as React and Node, demonstrated through successfully completing complex projects like Task Management System, News App, Youtube Clone.",
        "Worked on a project named Kisaan Saathi based on java servlet and filed it as patent.",
        "Learnt critical data structures and algorithms.",
      ],
    },
    {
      title: "Full Stack Developer (Intern)",
      company_name: "Virtual Ninjas",
      icon: vn,
      iconBg: "#E6DEDD",
      date: "April 2022 - November 2022",
      points: [
        "Developed and maintained web applications using MERN Stack and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Associate Software Engineer",
      company_name: "BDO India",
      icon: bdo,
      iconBg: "#E6DEDD",
      date: "December 2022 - December 2023",
      points: [
        "Played a key role in developing and enhancing theCollege ERP system using PHP CodeIgniter, ensuring smooth operation and functionality across various modules such as admissions,student records, faculty management, and financial systems.",
        "Conducted regular codebase maintenance, optimized performance, and ensured high security and reliability.",
        "Created comprehensive technical documentation for the ERP system, including user manuals, system architecture diagrams, and API documentation to facilitate future development and maintenance.",
        "Provided training and support to end-users, helping them understand and effectively use the ERP system.",
      ],
    },
    {
      title: "Associate Software Engineer",
      company_name: "Capgemini",
      icon: capg,
      iconBg: "#E6DEDD",
      date: "April 2024 - Present",
      points: [
        "Led and contributed to projects involving the design, implementation, and maintenance of Cisco Unified Communications Manager (CUCM) systems, ensuring robust and efficient communication solutions for clients",
        "Managed the configuration and deployment of CUCM, including provisioning users, setting up devices, and ensuring compliance with organizational policies.",
        "Created comprehensive technical documentation for the ERP system, including user manuals, system architecture diagrams, and API documentation to facilitate future development and maintenance.",
        "Worked closely with clients, project managers, and cross-functional teams to understand requirements, deliver solutions, and ensure client satisfaction.",
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
      image: rudram,
    },
    {
      testimonial:
        "Impressed by Siddharath's technical prowess and ability to deliver a top-notch website on time.",
      name: "Manish Harit",
      designation: "Software Engineer",
      company: "All State",
      image: manish,
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
      name: "Arki Government College",
      description:
        "The ERP system for Arki Government College, streamlines administrative and academic processes. It integrates functions like student enrollment, course management, and financial administration, enhancing efficiency, accuracy, and data accessibility for the institution.",
      tags: [
        {
          name: "PHP (Codeignitor)",
          color: "blue-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "HTML, CSS",
          color: "blue-text-gradient",
        },
      ],
      image: arki,
      live_link: "",
      source_code_link: "",
    },
    {
      name: "Udita Homes",
      description:
        "Udita Homes is an old age home providing a safe, comfortable, and nurturing environment for elderly residents. It offers personalized care, recreational activities, and medical support. Udita Homes fosters a sense of community to ensure their well-being and happiness.",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "HTML, CSS",
          color: "blue-text-gradient",
        },
      ],
      image: uditahomes,
      live_link: "https://uditahomes.in/",
      source_code_link: "",
    },
    {
      name: "Get Me Therapy",
      description:
        "Get Me Therapy offers accessible mental health services, including personalized counseling and therapy sessions. The project aims to create a supportive environment for individuals seeking to improve their mental wellness and overall well-being with a focus on comprehensive care",
      tags: [
        {
          name: "PHP",
          color: "blue-text-gradient",
        },
        {
          name: "HTML, CSS",
          color: "green-text-gradient",
        },
        {
          name: "Jquery, Razorpay",
          color: "blue-text-gradient",
        },
      ],
      image: getmetherapy,
      live_link: "https://getmetherapy.com/",
      source_code_link: "",
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
      live_link: "https://apminerals.callmesid.in/",
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
      name: "Career Guru",
      description:
        "Career Guru is a cutting-edge mobile application built using React Native, designed to revolutionize the way individuals search for their dream jobs. With its user-friendly interface and powerful features, Career Guru serves as a comprehensive job hunting companion.",
      tags: [
        {
          name: "ReactNative",
          color: "blue-text-gradient",
        },
        {
          name: "Expo",
          color: "green-text-gradient",
        },
        {
          name: "Rapid Api",
          color: "pink-text-gradient",
        },
      ],
      image: careerguru,
      live_link: "https://drive.google.com/file/d/18CQS-GoWjB8zmWD-8ad9x-4wkVFivhh1/view?usp=sharing",
      source_code_link: "https://github.com/sidd84755/CareerGuru",
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
    {
      name: "Virtual Ninjas",
      description:
        "Virtual Ninjas is a digital marketing agency specializing in innovative strategies and solutions to enhance online presence. It focuses on delivering impactful campaigns, brand development, and data-driven marketing techniques to help clients achieve their business goals in the digital landscape.",
      tags: [
        {
          name: "Html",
          color: "blue-text-gradient",
        },
        {
          name: "CSS, GoHighlevel",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: virtualninjas,
      live_link: "https://virtualninjas.agency/",
      source_code_link: "",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };