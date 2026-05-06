export const personal = {
  name: "Alex Morgan",
  title: "Software Engineer",
  tagline: "Building scalable systems, clean APIs, and things that don't break at 3am.",
  available: true,
  linkedin: "https://linkedin.com/in/yourprofile",
  email: "alex.morgan@email.com",
};

export const summary = `I'm a full-stack software engineer with 5+ years of experience designing and shipping production-grade applications. I specialize in building distributed systems, developer tooling, and data-intensive backend services that scale. I care deeply about clean code, thoughtful architecture, and the kind of software that other engineers actually enjoy working with. When I'm not pushing commits, I'm contributing to open source, reading compiler books, or pretending my side projects will ship this quarter.`;

export const experience = [
  {
    date: "2022 — Present",
    role: "Senior Software Engineer",
    company: "Acme Corp",
    type: "Full-time",
    description: "Led the re-architecture of the core data pipeline, reducing latency by 60%. Designed and implemented a multi-tenant API gateway serving 50M+ requests/day. Mentored 3 junior engineers and drove adoption of internal platform tooling across 4 teams.",
    tags: ["Go", "Kubernetes", "PostgreSQL", "gRPC", "Kafka"],
  },
  {
    date: "2020 — 2022",
    role: "Software Engineer",
    company: "Startup Inc.",
    type: "Full-time",
    description: "Built the company's first CI/CD pipeline and developer platform from scratch. Owned the billing and subscription microservice end-to-end, integrating Stripe and handling 99.9% uptime SLA.",
    tags: ["TypeScript", "Node.js", "React", "AWS", "Terraform"],
  },
  {
    date: "2019 — 2020",
    role: "Software Engineer Intern",
    company: "Tech Agency",
    type: "Internship",
    description: "Developed internal dashboard tooling used by 200+ employees. Fixed critical bugs in a legacy Rails monolith and helped migrate key modules to a modern REST API.",
    tags: ["Ruby on Rails", "Python", "MySQL"],
  },
];

export const education = [
  {
    date: "2015 — 2019",
    degree: "B.Sc. Computer Science",
    school: "University of Placeholder",
    location: "Toronto, ON",
    description: "Graduated with Honours. Specialized in systems programming and distributed computing. Thesis: Optimizing Cache Invalidation in Multi-Region Distributed Systems.",
    tags: ["GPA 3.9 / 4.0", "Dean's List", "Systems Track"],
  },
  {
    date: "2024",
    degree: "AWS Solutions Architect — Associate",
    school: "Amazon Web Services",
    location: "Certification",
    description: "Certified in designing distributed, scalable, and highly available systems on AWS.",
    tags: [],
  },
];

export const skills = [
  { category: "Languages", items: ["Go", "TypeScript / JavaScript", "Python", "Rust", "SQL"] },
  { category: "Frontend", items: ["React / Next.js", "HTML / CSS", "Tailwind CSS", "GraphQL"] },
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
