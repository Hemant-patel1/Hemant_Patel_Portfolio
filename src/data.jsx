import shoes from './assets/shoes.png'
import notes from './assets/notes.png'
export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
];

export const projects = [
  {
    id: 1,
    title: "Nike-Clone-Website",
    description: "Full-featured online store with cart, payment integration, and admin dashboard.",
    tech: ["React", "Tailwindcss", "Java Script", "Api"],
    image: shoes,
    liveLink: "https://nike-website0-clone.netlify.app/",
    codeLink: "https://github.com/Hemant-patel1/Nike-Clone-Website?tab=readme-ov-file"
  },
  {
    id: 2,
    title: "Short-Hand-Notes",
    description: "A single-page application built using Vite, React, and Tailwind CSS.",
    tech: ["React", "Js", "TailwindCSS", "Vite"],
    image: notes,
    liveLink: "https://basic-notes-projects.vercel.app/",
    codeLink: "https://github.com/Hemant-patel1/Basic-Notes-Projects?tab=readme-ov-file"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Real-time weather application with 7-day forecast and location-based updates.",
    tech: ["React", "API Integration", "Chart.js", "Geolocation"],
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    liveLink: "#",
    codeLink: "#"
  },
  
];

export const skills = [
  { 
    icon: "Code", 
    name: "Frontend", 
    items: ["React", "JavaScript", "TypeScript", "HTML5/CSS3", "Tailwind CSS"] 
  },
  { 
    icon: "Database", 
    name: "Backend", 
    items: ["Python", "MongoDB", "PostgreSQL", "REST APIs",'GSAP'] 
  },
  { 
    icon: "Smartphone", 
    name: "Core Skills", 
    items: ["DSA", "Oops", "Problem-Solving", "Responsive Design", "Debugging"] 
  },
  { 
    icon: "Palette", 
    name: "Tools", 
    items: ["Git", "Excel", "Vercel", "Vite", "Vs Code"] 
  }
];

export const experience = [
  {
    title: "Training",
    company: "Grass Solution",
    period: "Sep(2023) - Apr(2024)",
    description: "Developed full-stack applications with React, Python, and Sql.",
    achievements: [
      "Applied component-based development and state management principles to build user interfaces with React.",
      "Knowledge of building responsive layouts Using flexbox.",
      "Create Resposive web application."
    ]
  },
  {
    title: "Celebal Intern",
    company: "Celebal.",
    period: "July(2024) - Sep(2024)",
    description: "Building responsive web applications using React and Java Script.",
    achievements: [
      "Developed a frontend application using HTML, CSS, JavaScript and React JS.",
      "Focused on performance optimization and user-friendly UI design.",
      "Built user-friendly UI with React basics and reusable components"
    ]
  },
  
  {
    title: "Training",
    company: "Q Spider",
    period: "2025",
    description: "Inhancing my Technical Skills and Learn a New Technology.",
    achievements: [
      "150+ Programming Problem Solved",
      "Learn a web development",
      "Build a Projects using Ai"
    ]
  }
];

export const education = [
  {
    degree: "Bachlor of Technology",
    institution: "Arya College of Engineering & IT",
    period: "2021 - 2025",
    description: "Specialized in Web Technologies and Software Engineering",
    gpa: "8.0/10.0"
  },
  {
    degree: "Python Full Stack Development",
    institution: "Q Spider",
    period: "2025",
    description: "Advanced React, Modern JavaScript, and Web Performance",
    certificate: true
  }
];

export const contactInfo = {
  email: "hemantpatel272001@gmail.com",
  phone: "+91 6375108719",
  location: "Noida, UP",
  github: "https://github.com/Hemant-patel1",
  linkedin: "www.linkedin.com/in/hemantpatel272001"
};

export const socialLinks = [
  { name: "GitHub", icon: "Github", url: "https://github.com/Hemant-patel1" },
  { name: "LinkedIn", icon: "Linkedin", url: "https://www.linkedin.com/in/hemant-patel-93305731a/" },
  { name: "Email", icon: "Mail", url: "hemantpatel272001@gmail.com" }
];