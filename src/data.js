export const personal = {
  name: "Ketul Patel",
  title: "Software Engineer",
  tagline: "",
  available: true,
  linkedin: "https://linkedin.com/in/ketul-patel-69a3181b7",
  email: "patel.ketul0119@gmail.com",
};

export const summary = `Newly graduated Software Engineer with experience working on 
                        Electronic Health Records, debugging legacy code to improve performance 
                        and resolve critical issues. 

                        Recently, I've focused my attention to studying and developing AI-driven solutions 
                        that help improve existing workflows, also upskilling with an increasingly 
                        AI-centric market. I'm personally more interested in networking and 
                        telecom, and how intelligent systems are shaping the 
                        future of connectivity. 
                        
                        I'm, passionate about technology in general, someone who 
                        enjoy diving into complex problems often with a strong cup of coffee on the side :)`;

export const experience = [
  {
    date: "2021 - 2022",
    role: "Junior Software Engineer",
    company: "Meditab Software",
    type: "Full-time",
    description: "Learned and gained experience working on legacy systems on Powerbuiler. dfdfd",
    tags: ["PowerBuilder", "EMR", "SQL", "HIPPA", "Powershell"],
  },
  
  {
    date: "2021 — 2021",
    role: "Verilog Design Intern",
    company: "CHARUSAT",
    type: "Part-time",
    description: "Built the company's first CI/CD pipeline and developer platform from scratch. Owned the billing and subscription microservice end-to-end, integrating Stripe and handling 99.9% uptime SLA.",
    tags: ["Verilog", "VHDL", "FPGA", "Proteus"],
  },

];

export const education = [
  {
    date: "2023 — 2025",
    degree: "Masters in Electrical and Computer Engineering",
    school: "University of Ottawa",
    location: "Ottawa, ON",
    tags: ["GPA: 8.3"],
  },
  {
    date: "2018-2022",
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
    title: "FlowDB",
    description: "A lightweight, embeddable time-series database written in Go. Supports custom retention policies, streaming ingestion via WebSockets, and a SQL-like query DSL. Used in production by 3 open-source projects.",
    tags: ["Go", "Time-Series", "Open Source"],
    github: "https://github.com/yourprofile/flowdb",
    demo: null,
  },
  {
    num: "Project_02",
    title: "Deployfast CLI",
    description: "A developer tool that auto-generates Terraform configs and GitHub Actions pipelines from a simple YAML manifest. Reduces infra setup from hours to minutes. 800+ GitHub stars.",
    tags: ["TypeScript", "Terraform", "DevTools"],
    github: "https://github.com/yourprofile/deployfast",
    demo: null,
  },
  {
    num: "Project_03",
    title: "Synthboard",
    description: "Real-time collaborative dashboard builder with drag-and-drop widgets, live data connectors (Postgres, APIs), and shareable embed links. Built solo over a 6-week sprint.",
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
