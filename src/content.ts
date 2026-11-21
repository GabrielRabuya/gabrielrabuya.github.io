// ─────────────────────────────────────────────────────────────────────────────
// ALL of the site's text and images are set in this file. Replace every
// placeholder below with your own details; the layout updates automatically.
//
// • Images go in public/images/. Refer to them here without "public",
//   e.g. public/images/projects/my-app.png → "images/projects/my-app.png".
// • imageSize is the image's width and height in pixels. It lets the page reserve
//   the right space before the image loads (on a Mac: open the image, ⌘I).
// • To remove an item, delete it from its list.
//
// Section order follows the PROCOMM "Preparing a Portfolio" lesson.
// Online, share only your email and LinkedIn (no IC number, address, date of birth,
// race, religion or expected salary).
// ─────────────────────────────────────────────────────────────────────────────

export const profile = {
  name: "Your Name",
  headline: "Your Course @ Your School", // typed out letter by letter on load
  email: "your.email@example.com",
  linkedin: "https://linkedin.com/in/your-profile",
  linkedinLabel: "linkedin.com/in/your-profile",
  // Optional: put your résumé PDF in public/ (e.g. public/resume.pdf) and set this to
  // "resume.pdf" to show a "View résumé" button. Leave "" to hide the button.
  resumeUrl: "",
  // Your photo, shown beside your name (portrait, roughly 4:5). Set to "" to hide it.
  photo: "images/profile.svg",
};

// "Professional goals and objectives": a short statement, then 2–3 specific goals.
export const goals = {
  statement:
    "One or two sentences on what you study, the field you want to work in, and what kind of internship or role you are looking for.",
  objectives: [
    "A learning goal: what you want to get better at, and how (projects, certifications, courses).",
    "A career goal: the industry or kind of work you want to do, and why it matters to you.",
    "A long-term goal: where you want your skills to take you in a few years.",
  ],
};

// Most recent first. Leave detail as "" if there is nothing to show (e.g. no GPA).
export const education = [
  {
    period: "2025 – Present",
    title: "Diploma in Your Course",
    school: "School of Your School, Your Polytechnic",
    detail: "GPA 0.00 / 4.00",
  },
  {
    period: "2021 – 2024",
    title: "Singapore-Cambridge GCE Ordinary Level",
    school: "Your Secondary School",
    detail: "",
  },
];

// "Fundamental skills": group them however suits you. Add or remove groups freely.
export const technicalSkills = [
  { title: "Languages", items: ["Language 1", "Language 2", "Language 3"] },
  { title: "Frameworks & Platforms", items: ["Framework 1", "Platform 1"] },
  { title: "Databases", items: ["Database 1", "Database 2"] },
  { title: "Tools", items: ["Tool 1", "Tool 2", "Tool 3"] },
];

// Delete every item to hide the Certifications list.
export const certifications = [
  { title: "Certification name", issuer: "Issuing organisation" },
  { title: "Another certification", issuer: "Issuing organisation" },
];

// "Project work showcasing your achievements". Shown as alternating rows
// (image left, then right). The order here is the order on the page.
export type Project = {
  title: string;
  period: string;
  role: string;
  summary: string; // two or three sentences
  tools: string[];
  image: string;
  imageSize: [number, number]; // pixel width and height of the image
  imageAlt: string; // describe the image for screen readers
  link?: { label: string; url: string }; // optional, e.g. { label: "View code", url: "https://github.com/..." }
};

export const projects: Project[] = [
  {
    title: "Project One",
    period: "2026",
    role: "Your Role",
    summary:
      "What the project is and who it is for. What you built or designed, and the most interesting problem you solved. The result, with a number if you have one.",
    tools: ["Tool 1", "Tool 2", "Tool 3"],
    image: "images/project.svg",
    imageSize: [1600, 900],
    imageAlt: "Screenshot of Project One",
    link: { label: "View code", url: "https://github.com/your-username/project-one" },
  },
  {
    title: "Project Two",
    period: "2025",
    role: "Your Role",
    summary:
      "What the project is and who it is for. What you built or designed, and the most interesting problem you solved. The result, with a number if you have one.",
    tools: ["Tool 1", "Tool 2"],
    image: "images/project.svg",
    imageSize: [1600, 900],
    imageAlt: "Screenshot of Project Two",
  },
  {
    title: "Project Three",
    period: "2025",
    role: "Your Role",
    summary:
      "What the project is and who it is for. What you built or designed, and the most interesting problem you solved. The result, with a number if you have one.",
    tools: ["Tool 1", "Tool 2", "Tool 3"],
    image: "images/project.svg",
    imageSize: [1600, 900],
    imageAlt: "Screenshot of Project Three",
  },
];

// "Co-curricular activities" and "Community involvement". The photo is optional:
// leave image out and the row shows text only. Photos are cropped to 4:3; use
// imagePosition (e.g. "50% 30%") to choose which part of the photo stays in view.
type Involvement = {
  period: string;
  title: string;
  points: string[];
  image?: string;
  imageAlt?: string;
  imagePosition?: string;
};

export const involvement: Involvement[] = [
  {
    period: "2026 – Present",
    title: "Your Role, Your CCA or Club",
    image: "images/cca.svg",
    imageAlt: "Describe what is happening in the photo",
    points: [
      "Start with an action verb, say what you did, and end with the result or impact",
      "A second point, with a number if you can (people led, events run, items managed)",
    ],
  },
  {
    period: "2026 – Present",
    title: "Class Representative (Your Class)",
    points: ["A role without a photo: leave out image and imageAlt"],
  },
  {
    period: "2021 – 2024",
    title: "Your Rank | Your Appointment, Your Secondary School CCA",
    image: "images/cca.svg",
    imageAlt: "Describe what is happening in the photo",
    points: [
      "What you were responsible for, and what it shows about you",
      "Something you achieved or helped the group achieve",
    ],
  },
];

// Shown in the same alternating layout as Projects, with a photo of each certificate.
// Blur or crop out anything private (signatures, IC numbers) before adding the photo.
type Achievement = {
  title: string;
  detail: string;
  stat: { value: string; label: string };
  description: string;
  image: string;
  imageSize: [number, number];
  imageAlt: string;
};

export const achievements: Achievement[] = [
  {
    title: "Award Name",
    detail: "AY 2025/2026",
    stat: { value: "Top 10%", label: "of students" },
    description: "One sentence on who gave the award and what it recognises.",
    image: "images/certificate.svg",
    imageSize: [1240, 1754],
    imageAlt: "Certificate for Award Name",
  },
  {
    title: "Another Award",
    detail: "AY 2025/2026",
    stat: { value: "Top 25%", label: "of students in my level and course" },
    description: "One sentence on who gave the award and what it recognises.",
    image: "images/certificate.svg",
    imageSize: [1240, 1754],
    imageAlt: "Certificate for Another Award",
  },
];

// "References" and "Testimonials". Add short quotes once a lecturer or CCA advisor
// agrees to be quoted, e.g.
//   { quote: "…", name: "Ms Tan", role: "Lecturer, Your School" }
// Keep their contact details off the site.
export const testimonials: { quote: string; name: string; role: string }[] = [];
