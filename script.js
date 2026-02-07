const portfolioData = {
  name: "Dennis Wachira Mwangi",
  roleTag: "Open To Work | Backend Developer (Python | Django)",
  headline:
    "Backend-focused developer passionate about building reliable, scalable systems and solving real-world problems through clean backend architecture.",
  about:
    "I am a backend developer specializing in Python and Django, with strong interest in system performance, data integrity, and clean architecture. I enjoy understanding how applications work internally - not just making them run, but making them reliable and scalable. I have built projects including a scam-reporting platform and a high-performance TCP search server. Currently expanding my skills in backend engineering, system design, and AI-integrated applications.",
  resumeUrl:
    "https://drive.google.com/file/d/1Jmewx-W6kdjSgTPG73AzPlWANDRf16_G/view?usp=sharing",
  email: "denochira78@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/dennis-wachira-dev25",
  githubUrl: "https://github.com/MwachiraD",
  siteUrl: "",
  photoUrl: "./assets/dennis.jpg",
  photoAlt: "Dennis Wachira Mwangi profile photo",
  animatedWords: ["reliable", "scalable", "secure", "maintainable", "efficient"],
  skills: [
    "Python",
    "Django",
    "Django REST Framework",
    "JavaScript",
    "Java",
    "Kotlin",
    "REST APIs",
    "PostgreSQL",
    "MySQL",
    "SQLite",
    "Scrapy",
    "Selenium",
    "BeautifulSoup",
    "Pandas",
    "TCP/IP Networking",
    "Multithreading",
    "AsyncIO",
    "Git",
    "Docker",
    "Linux",
    "PyTest",
    "Bootstrap",
    "HTML",
    "CSS",
  ],
  projects: [
    {
      title: "Scam Sentry",
      description:
        "Django scam reporting platform for collecting and organizing scam reports with focus on validation, backend logic, and maintainable architecture.",
      stack: "Python, Django, SQLite/PostgreSQL, Bootstrap",
      liveUrl: "",
      repoUrl: "https://github.com/MwachiraD/Scam-sentry",
    },
    {
      title: "Task Scheduler",
      description:
        "Python-based task scheduling project focused on organizing tasks with clear backend logic and extendable structure.",
      stack: "Python",
      liveUrl: "",
      repoUrl: "https://github.com/MwachiraD/Task-Scheduler",
    },
    {
      title: "High-Performance TCP Search Server",
      description:
        "Persistent TCP exact-line matching server with optional caching, logging, benchmarking, concurrency handling, and SSL support.",
      stack: "Python, Sockets, Threading/Async, SSL/TLS",
      liveUrl: "",
      repoUrl: "",
      repoNote: "Code available on request",
    },
  ],
  experience: [
    {
      role: "Software Developer Intern",
      org: "Nairobi City Hall",
      period: "2024",
      summary:
        "Developed internal web tools using Django and Python to streamline administrative operations.",
      highlights: [
        "Contributed backend code in Java and Kotlin and optimized MySQL database queries.",
        "Participated in agile development sprints, code reviews, deployment processes, and API integrations.",
        "Gained hands-on experience with database management and real-world software workflows.",
      ],
    },
    {
      role: "Freelance Web Developer and Web Scraper",
      org: "Remote",
      period: "2023 - Present",
      summary:
        "Built Django web applications and automated web scraping solutions for startups and small businesses.",
      highlights: [
        "Developed Scrapy and Selenium bots reducing manual data collection time by about 70%.",
        "Analyzed data using Pandas for reporting and workflow optimization.",
        "Collaborated with international clients across multiple time zones.",
      ],
    },
  ],
};

function setText(id, value) {
  const node = document.getElementById(id);
  if (node) node.textContent = value;
}

function setLink(id, href, text) {
  const node = document.getElementById(id);
  if (!node) return;
  node.href = href;
  if (text) node.textContent = text;
}

function setImage(id, src, alt) {
  const node = document.getElementById(id);
  if (!node) return;
  node.src = src;
  node.alt = alt;
}

function setMeta(selector, content) {
  const node = document.querySelector(selector);
  if (!node || !content) return;
  node.setAttribute("content", content);
}

function resolveUrl(pathOrUrl, siteUrl) {
  try {
    return new URL(pathOrUrl, siteUrl).href;
  } catch (error) {
    return pathOrUrl;
  }
}

function renderSkills(skills) {
  const list = document.getElementById("skillsList");
  if (!list) return;
  list.innerHTML = skills.map((skill) => `<li>${skill}</li>`).join("");
}

function renderProjects(projects) {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;

  function buildProjectLinks(project) {
    const links = [];

    if (project.liveUrl) {
      links.push(
        `<a href="${project.liveUrl}" target="_blank" rel="noreferrer">Live</a>`
      );
    }
    if (project.repoUrl) {
      links.push(
        `<a href="${project.repoUrl}" target="_blank" rel="noreferrer">Code</a>`
      );
    }
    if (project.repoNote) {
      links.push(`<span class="mono">${project.repoNote}</span>`);
    }

    if (!links.length) return "";
    return `<div class="card-links">${links.join("")}</div>`;
  }

  grid.innerHTML = projects
    .map(
      (project) => `
      <article class="card">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <p class="mono">${project.stack}</p>
        ${buildProjectLinks(project)}
      </article>
    `
    )
    .join("");
}

function renderExperience(experience) {
  const list = document.getElementById("experienceList");
  if (!list) return;

  list.innerHTML = experience
    .map((item) => {
      const highlights = Array.isArray(item.highlights) ? item.highlights : [];
      const highlightsHtml = highlights.length
        ? `
          <ul class="timeline-highlights">
            ${highlights.map((line) => `<li>${line}</li>`).join("")}
          </ul>
        `
        : "";

      return `
      <article class="timeline-item">
        <h3>${item.role} - ${item.org}</h3>
        <p class="timeline-meta">${item.period}</p>
        <p>${item.summary}</p>
        ${highlightsHtml}
      </article>
    `
    })
    .join("");
}

function animateTagline(words) {
  const wordNode = document.getElementById("animatedWord");
  if (!wordNode || !Array.isArray(words) || !words.length) return;

  wordNode.textContent = words[0];
  if (words.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  let index = 0;
  setInterval(() => {
    wordNode.classList.remove("in");
    wordNode.classList.add("out");

    setTimeout(() => {
      index = (index + 1) % words.length;
      wordNode.textContent = words[index];
      wordNode.classList.remove("out");
      wordNode.classList.add("in");
    }, 180);
  }, 2300);
}

function updateSeo(portfolio) {
  const hasOrigin = window.location.origin && window.location.origin !== "null";
  const inferredUrl = hasOrigin ? `${window.location.origin}/` : "";
  const siteUrl = portfolio.siteUrl || inferredUrl || "https://your-portfolio.vercel.app/";
  const imageUrl = resolveUrl(portfolio.photoUrl, siteUrl);

  const title = `${portfolio.name} | Backend Developer Portfolio`;
  const description =
    `${portfolio.name} is a backend developer specializing in Python, Django, APIs, ` +
    "data systems, and scalable backend architecture.";
  const keywords = [
    portfolio.name,
    "Backend Developer",
    "Python",
    "Django",
    "Django REST Framework",
    "REST APIs",
    "PostgreSQL",
    "MySQL",
    "Web Scraping",
  ].join(", ");

  document.title = title;
  setMeta('meta[name="description"]', description);
  setMeta('meta[name="keywords"]', keywords);
  setMeta('meta[property="og:title"]', title);
  setMeta('meta[property="og:description"]', description);
  setMeta('meta[property="og:url"]', siteUrl);
  setMeta('meta[property="og:image"]', imageUrl);
  setMeta('meta[property="og:image:alt"]', portfolio.photoAlt);
  setMeta('meta[name="twitter:title"]', title);
  setMeta('meta[name="twitter:description"]', description);
  setMeta('meta[name="twitter:image"]', imageUrl);

  const canonicalNode = document.getElementById("canonicalUrl");
  if (canonicalNode) canonicalNode.href = siteUrl;

  const schemaNode = document.getElementById("personSchema");
  if (schemaNode) {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: portfolio.name,
      jobTitle: "Backend Developer",
      url: siteUrl,
      image: imageUrl,
      email: `mailto:${portfolio.email}`,
      sameAs: [portfolio.linkedinUrl, portfolio.githubUrl],
      knowsAbout: portfolio.skills,
    };
    schemaNode.textContent = JSON.stringify(schema);
  }
}

function revealOnScroll() {
  const sections = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  sections.forEach((section, index) => {
    section.style.transitionDelay = `${index * 60}ms`;
    observer.observe(section);
  });
}

function init() {
  setText("fullName", portfolioData.name);
  setText("roleTag", portfolioData.roleTag);
  setText("headline", portfolioData.headline);
  setText("aboutText", portfolioData.about);
  setText("footerName", portfolioData.name);
  setText("projectCount", `${portfolioData.projects.length} selected projects`);
  setText("year", new Date().getFullYear());

  setLink("resumeLink", portfolioData.resumeUrl);
  setLink("emailLink", `mailto:${portfolioData.email}`, portfolioData.email);
  setLink("linkedinLink", portfolioData.linkedinUrl);
  setLink("githubLink", portfolioData.githubUrl);
  setImage("profilePhoto", portfolioData.photoUrl, portfolioData.photoAlt);

  updateSeo(portfolioData);
  renderSkills(portfolioData.skills);
  renderProjects(portfolioData.projects);
  renderExperience(portfolioData.experience);
  animateTagline(portfolioData.animatedWords);
  revealOnScroll();
}

init();
