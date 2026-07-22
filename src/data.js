export const personal = {
  name: "Ketul Patel",
  title: "Software Engineer",
  tagline: "",
  available: true,
  linkedin: "https://linkedin.com/in/ketul-patel-69a3181b7",
  email: "patel.ketul0119@gmail.com",
};

export const summary = [`Software Engineer with experience working on Electronic Health Records, debugging legacy code 
                        to improve performance and resolve critical issues.`,
                        
                        `Recently, I've focused my attention to studying and developing AI-driven solutions 
                        that help improve existing workflows, also upskilling with an increasingly 
                        AI-centric market. I'm personally more interested in networking and 
                        telecom, and how intelligent systems are shaping the 
                        future of connectivity.`,
                        
                        `I'm, passionate about technology in general, someone who 
                        enjoy diving into complex problems often with a strong cup of coffee on the side :)`];

export const experience = [
  {
    date: "OCT 2021 - SEPT 2022",
    role: "Junior Software Engineer",
    company: "Meditab Software",
    type: "Full-time",
    description: `Developed and maintained enterprise healthcare software using PowerBuilder, C++, and SQL 
                  within a large-scale legacy codebase, delivering new features, bug fixes, and performance enhancements.
                  
                  Optimized SQL stored procedures and database workflows, reducing query latency by 30% 
                  and improving performance of data-intensive healthcare applications; supported CI/CD workflows using Git and Jenkins.
                  
                  Collaborated with cross-functional Agile teams throughout the SDLC, 
                  including requirements analysis, implementation, troubleshooting production issues, and documentation for SaaS applications.`,
    
                  tags: ["PowerBuilder", "EMR", "SQL", "HIPPA", "Powershell"],
  },
  
  {
    date: "APR 2020 - JUL 2020",
    role: "Summer Research Intern",
    company: "CHARUSAT",
    type: "Part-time",
    description: `Researched I2C, SPI, and UART protocols, developing synthesizable Verilog RTL modules and simulation testbenches 
                  while performing waveform-based timing analysis to verify functionality and improve hardware designs.`,
    tags: ["Verilog", "VHDL", "FPGA", "Proteus"],
  },

];

export const education = [
  {
    date: "2023 - 2025",
    degree: "Masters in Electrical and Computer Engineering",
    school: "University of Ottawa",
    location: "Ottawa, ON",
    tags: ["GPA: 8.3"],
  },
  {
    date: "2018 - 2022",
    degree: "Bachelors in Electronics and Communication Engineering",
    school: "Charotar University of Science and Technology",
    location: "Gujarat, India",
    tags: ["GPA: 8.5"],
  },
];

export const skills = [
  { category: "Languages", items: ["Go", "TypeScript / JavaScript", "Python", "Rust", "SQL"] },
  { category: "Frontend", items: ["React / Next.js", "HTML / CSS", "Tailwind CSS"] },
  { category: "Backend & APIs", items: ["Node.js", "gRPC / REST", "Kafka / RabbitMQ", "Redis"] },
  { category: "Infrastructure", items: ["AWS / GCP", "Docker / Kubernetes", "Terraform", "GitHub Actions"] },
  { category: "Databases", items: ["PostgreSQL", "MongoDB", "DynamoDB", "ClickHouse"] },
  { category: "Practices", items: ["System Design", "TDD / BDD", "Code Review", "Agile / Scrum"] },
];

export const projects = [
  {
    num: "Project_01",
    title: "Lung Cancer Detection",
    description: "",
    tags: ["Go", "Time-Series", "Open Source"],
    github: "https://github.com/yourprofile/flowdb",
    demo: null,
  },
  {
    num: "Project_02",
    title: "Stock Predictor ChatBot",
    description: "",
    tags: ["TypeScript", "Terraform", "DevTools"],
    github: "https://github.com/yourprofile/deployfast",
    demo: null,
  },
  {
    num: "Project_03",
    title: "URL Shortener",
    description: "",
    tags: ["React", "WebSockets", "PostgreSQL"],
    github: "https://github.com/yourprofile/synthboard",
    demo: null,
  },
  {
    num: "Project_04",
    title: "Packet Lens",
    description: "A network traffic analyzer and visualizer. Captures live packets via libpcap, parses protocol layers, and renders them in an interactive web UI. Useful for debugging microservice communication issues.",
    tags: ["Python", "libpcap", "D3.js"],
    github: "https://github.com/yourprofile/packetlens",
    demo: null,
  },
];
