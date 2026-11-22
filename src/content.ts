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
  name: "Gabriel Bryce Rabuya Maximo",
  headline: "Aerospace Engineering @ Temasek Polytechnic", // typed out letter by letter on load
  email: "gabe.mex11@gmail.com",
  // TODO: replace with your real LinkedIn profile URL and label.
  linkedin: "https://linkedin.com/in/your-profile",
  linkedinLabel: "linkedin.com/in/your-profile",
  // Optional: put your résumé PDF in public/ (e.g. public/resume.pdf) and set this to
  // "resume.pdf" to show a "View résumé" button. Leave "" to hide the button.
  // Remove your phone number from the PDF before publishing it.
  resumeUrl: "",
  // Your photo, shown beside your name (portrait, roughly 4:5). Set to "" to hide it.
  photo: "images/profile.jpg",
};

// "Professional goals and objectives": a short statement, then 2–3 specific goals.
export const goals = {
  statement:
    "I'm an Aerospace Engineering student at Temasek Polytechnic with a keen interest in Maintenance Engineering. I'm interested in a technician role or internship where I can install, troubleshoot and maintain equipment in an aerospace or manufacturing environment.",
  objectives: [
    "Learning: build practical troubleshooting skills on real equipment through diagnosing electrical and mechanical faults, using circuit diagrams, engineering drawings and manuals.",
    "Career: contribute to reliable, safe manufacturing operations through scheduled preventive maintenance and accurate reporting of equipment abnormalities.",
    "Long-term: progress into an aerospace maintenance or manufacturing engineering role while working toward relevant industry licenses and certifications.",
  ],
};

// Most recent first. Leave detail as "" if there is nothing to show (e.g. no GPA).
export const education = [
  {
    period: "Apr 2025 – Present",
    title: "Diploma in Aerospace Engineering",
    school: "School of Engineering, Temasek Polytechnic",
    detail: "cGPA 3.65 / 4.00",
  },
  {
    period: "2021 – 2024",
    title: "Singapore-Cambridge GCE Ordinary Level",
    school: "Changkat Changi Secondary School",
    detail: "Distinctions in Literature & Mathematics",
  },
];

// "Fundamental skills": group them however suits you. Add or remove groups freely.
export const technicalSkills = [
  {
    title: "Engineering & Design",
    items: ["Reading engineering drawings", "3D CAD modelling", "3D printing", "Prototyping & testing"],
  },
  {
    title: "Electronics & Instruments",
    items: ["Reading circuit diagrams", "Multimeter", "Oscilloscope", "Signal generator"],
  },
  {
    title: "Software & Data",
    items: ["Python (data visualisation)", "Excel (data logging & statistics)"],
  },
  {
    title: "Relevant Modules",
    items: [
      "Gas Turbine Engine (A)",
      "Electronic Devices & Circuits (A)",
      "Digital Fundamentals 1 (A)",
      "Circuit Analysis",
      "Engineering Materials",
    ],
  },
  {
    title: "Generic Skills",
    items: [
      "Safety awareness",
      "Problem-solving under pressure",
      "Teamwork",
      "Following procedures & protocols",
      "Adapting to shifting deadlines",
    ],
  },
];

// Delete every item to hide the Certifications list.
export const certifications: { title: string; issuer: string }[] = [];

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
    title: "Ping Pong Ball Launcher",
    period: "2026",
    role: "Principles of Dynamics",
    summary:
      "Designed, 3D-printed and assembled a working launcher that had to hit a target at two different heights. Iterated the CAD model based on test results to improve accuracy, and used test data to select the most accurate launch angles for the final assessment.",
    tools: ["3D CAD", "3D printing", "Component assembly", "Test & iterate", "Projectile dynamics"],
    image: "images/project.svg",
    imageSize: [1600, 900],
    imageAlt: "The ping pong ball launcher assembled on a test bench",
  },
  {
    title: "Popsicle Stick Truss Bridge",
    period: "2025",
    role: "Statics & Strength of Materials",
    summary:
      "Constructed and load-tested a popsicle stick truss bridge to bear increasing loads. Documented structural failure modes across prototypes to refine assembly methods, applying statics and materials theory to maximize load-bearing capacity for final evaluation.",
    tools: ["Truss design", "Statics", "Load testing", "Failure analysis"],
    image: "images/project.svg",
    imageSize: [1600, 900],
    imageAlt: "The popsicle stick truss bridge under load testing",
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
    period: "Jun 2025 – Present",
    title: "Member, Temasek Polytechnic Band",
    image: "images/cca.svg",
    imageAlt: "Temasek Polytechnic Band performing on campus",
    points: [
      "Assisted with stage setup and instrument transport for major performances across campus, allowing efficient preparation",
      "Persevered towards shared goals through tight and shifting rehearsal schedules",
      "Adapted quickly to far more complex and challenging music, showing a strong willingness to learn",
    ],
  },
  {
    period: "Apr 2021 – Apr 2024",
    title: "Quartermaster, Concert Band, Changkat Changi Secondary School",
    image: "images/cca.svg",
    imageAlt: "Changkat Changi Secondary School Concert Band",
    points: [
      "Managed inventory, instrument handling and storage orderliness to prevent loss or damage to the band's instruments",
      "Enforced safety and discipline among band members to ensure proper conduct during band",
    ],
  },
  {
    period: "Jan 2022 – Dec 2022",
    title: "Class Chairperson, Changkat Changi Secondary School",
    points: [
      "Facilitated class cohesion and teamwork to accomplish multiple class tasks",
      "Identified hazards during class activities to keep the environment safe",
    ],
  },
];

// Shown in the same alternating layout as Projects, with a photo of each certificate.
// Blur or crop out anything private (signatures, IC numbers) before adding the photo.
// stat is optional: leave it out if there is no figure to highlight.
type Achievement = {
  title: string;
  detail: string;
  stat?: { value: string; label: string };
  description: string;
  image: string;
  imageSize: [number, number];
  imageAlt: string;
};

export const achievements: Achievement[] = [
  {
    title: "Best in Literature in English",
    detail: "Changkat Changi Secondary School · 2025",
    description:
      "Awarded by Changkat Changi Secondary School for top academic performance in Literature in English in GCE 'O' Level Examinations 2024.",
    image: "images/certificate.svg",
    imageSize: [1240, 1754],
    imageAlt: "Certificate for Best in Literature in English",
  },
  {
    title: "Edusave Award (Eagles)",
    detail: "Changkat Changi Secondary School · 2025",
    description:
      "Recognises leadership qualities and excellence in non-academic activities.",
    image: "images/certificate.svg",
    imageSize: [1240, 1754],
    imageAlt: "Certificate for the Edusave Award (Eagles)",
  },
  {
    title: "Edusave Certificate of Academic Achievement",
    detail: "Changkat Changi Secondary School · 2025",
    description: "Recognises strong academic performance.",
    image: "images/certificate.svg",
    imageSize: [1240, 1754],
    imageAlt: "Edusave Certificate of Academic Achievement",
  },
  {
    title: "CCC – CDC Education Merit Award",
    detail: "Changkat Changi Secondary School · 2024",
    description: "Recognises strong academic performance.",
    image: "images/certificate.svg",
    imageSize: [1240, 1754],
    imageAlt: "Certificate for the CCC – CDC Education Merit Award",
  },
  {
    title: "Edusave Scholarship",
    detail: "Changkat Changi Secondary School · 2022",
    description: "Recognises excellent academic performance.",
    image: "images/certificate.svg",
    imageSize: [1240, 1754],
    imageAlt: "Certificate for the Edusave Scholarship",
  },
];

// "References" and "Testimonials". Add short quotes once a lecturer or CCA advisor
// agrees to be quoted, e.g.
//   { quote: "…", name: "Ms Tan", role: "Lecturer, Your School" }
// Keep their contact details off the site.
export const testimonials: { quote: string; name: string; role: string }[] = [];
