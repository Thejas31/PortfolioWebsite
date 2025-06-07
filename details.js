const resumeData = {
  education: [
    {
      university: "Karunya Institute of Technology and Sciences",
      course: "B.Tech in Computer Science and Engineering(AI and ML)",
      timeline: "2022 - 2026",
      score: "CGPA: 8.91",
      city: "Coimbatore, Tamil Nadu"
    },
    {
      university: "Kendriya Vidyalaya AFS Arjangarh New Delhi",
      course: "Science with Maths and Computer Science (CBSE Class 12)",
      timeline: "2021 - 2022",
      score: "Percentage: 82.5%",
      city: "New Delhi"
    },
    {
      university: "Kendriya Vidyalaya No.1 Udaipur, Rajasthan",
      course: "CBSE Class 10",
      timeline: "2019 - 2020",
      score: "Percentage: 85.5%",
      city: "New Delhi"
    }
  ],
    projects: [
    {
      name: "Smart Health App",
      domain: "Healthcare",
      description: "An AI-powered symptom checker and appointment scheduler.",
      timeline: "Jan 2023 - Apr 2023"
    }
  ],
  certifications: [
    {
      name: "Google UX Design",
      agency: "Coursera",
      date: "Feb 2023"
    }
  ],
  internships: [
    {
      company: "Intel Corporation",
      role: "Industrial Trainee / Intern",
      timeline: "May 2024 - July 2024"
    }
  ],

  conferences: [
    {
      title: "AI in Education",
      conference: "ICET 2024",
      doi: "10.1234/icet.2024.00321",
      date: "March 2024"
    }
  ]
};

const container = document.getElementById("resumeRight");

function createSection(title, items, renderFn) {
  const section = document.createElement("section");
  const heading = document.createElement("h1");
  heading.textContent = title;
  section.appendChild(heading);
  items.forEach(item => {
    const div = renderFn(item);
    section.appendChild(div);
  });
  container.appendChild(section);
}

function renderEducation(item) {
  return createItemBlock(item.university, item.course, item.timeline, item.score, item.city);
}
function renderProject(item) {
  return createItemBlock(item.name, `${item.domain}\n${item.description}`, item.timeline);
}
function renderCertification(item) {
  return createItemBlock(item.name, item.agency, item.date);
}
function renderInternship(item) {
  return createItemBlock(item.company, item.role, item.timeline);
}
function renderConference(item) {
  return createItemBlock(`${item.title}`, item.conference, item.doi, item.date);
}

function createItemBlock(title, subtitle, topRight, bottomRight = "") {
  const div = document.createElement("div");
  div.className = "itemBlock";
  div.innerHTML = `
    <div class="left">
      <h3>${title}</h3>
      <p>${subtitle}</p>
    </div>
    <div class="right">
      <span class="top">${topRight}</span>
      ${bottomRight ? `<span class="bottom">${bottomRight}</span>` : ""}
    </div>
  `;
  return div;
}

createSection("Education", resumeData.education, renderEducation);
createSection("Projects", resumeData.projects, renderProject);
createSection("Certifications", resumeData.certifications, renderCertification);
createSection("Internships and Experiences", resumeData.internships, renderInternship);
createSection("Conference Publications", resumeData.conferences, renderConference);
