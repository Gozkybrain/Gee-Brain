import React from "react";
import {
  FaJsSquare,
  FaReact,
  FaNode,
  FaGitAlt,
  FaBootstrap,
  FaWordpress,
  FaRobot
} from "react-icons/fa";
import { SiMongodb, SiPostman, SiFirebase, SiEthereum } from "react-icons/si";
import styles from "../styles/ContactPage.module.css";

// ================= Data =================
const educationData = [
  {
    title: "iBukas Developer Experiment Lab",
    institution: "Bukas Global Investments",
    period: "2022 - Present",
  },
  {
    title: "FULL-STACK WITH HTML, CSS, JAVASCRIPT, NODE, REACT, POSTGRESQL, WEB3 AND DAPPS",
    institution: "Udemy INC. and Dr Angela Yu.",
    period: "2022 - 2024",
  },
  {
    title: "FULL STACK WEB DEVELOPMENT WITH REACT JS, ANGULAR AND NODEJS",
    institution: "Udemy INC. and Oak Academy.",
    period: "2022 - 2023",
  },
  {
    title: "FRONTEND DEVELOPMENT WITH REACTJS, API INTEGRATION AND NODEJS",
    institution: "Soutech Ventures, Owerri, Imo State, Nigeria.",
    period: "2023",
  },
  {
    title: "HTML, CSS, & JAVASCRIPT",
    institution: "Coursera Online INC.",
    period: "2020 - 2021",
  },
  {
    title: "BSc. Industrial Microbiology",
    institution: "Imo State University, Owerri.",
    period: "2016 - 2020",
  },
];

const experienceData = [
  {
    title: "Advertorial Hub",
    company: "Remote: Lagos State, Nigeria",
    role: "Backend Developer with Express",
    period: "2025 - Present",
  },
  {
    title: "Virtuous Tech Enterprise",
    company: "Remote: Edo State, Nigeria",
    role: "Frontend Developer with React",
    period: "2024",
  },
  {
    title: "SKI MUSIC",
    company: "Remote: Lagos State, Nigeria",
    role: "Lead Mobile App Developer",
    period: "2024",
  },
  {
    title: "BIG Foundation (MY GRIND APP)",
    company: "Remote: Lagos State, Nigeria",
    role: "Lead Developer",
    period: "2023",
  },
  {
    title: "SOUTECH VENTURES",
    company: "Physical: Imo State, Nigeria",
    role: "Web Developer & Instructor",
    period: "2023",
  },
  {
    title: "KRIS MEDICAL LABORATORY",
    company: "Physical: Imo State, Nigeria",
    role: "Laboratory Scientist Intern",
    period: "2019",
  },
];

export default function ContactPage({ education, experience }) {
  return (
    <div className={styles.container}>
      {/* ================= Profile Section ================= */}
      <div className={styles.profile}>
        <img src="/brain.jpg" alt="Profile" className={styles.avatar} />
        <div>
          <h2 className={styles.name}>Izuka Chigozie Emmanuel Brain</h2>
          <p className={styles.role}>AI Software Developer</p>
          <p>5+ Years of Dev Experience</p>
          <p>Freelance, Remote & Hybrid</p>
          <p>
            Founder of <strong>Sarcastic Geeks Trybe</strong>
          </p>
        </div>
      </div>

      {/* ================= Skills Section ================= */}
      <div className={styles.skills}>
        <h3 className={styles.heading}>⚡ Tech Stack</h3>
        <div className={styles.icons}>
          <FaBootstrap title="Bootstrap & CSS" />
          <FaWordpress title="Wordpress" />
          <FaJsSquare title="JavaScript" />
          <FaReact title="React / React Native / Next.js" />
          <FaNode title="Node.js / Express.js" />
          <SiFirebase title="Firebase" />
          <SiMongodb title="MongoDB" />
          <FaRobot title="AI Integration" />
          <SiEthereum title="Web3 Development" />
          <FaGitAlt title="Git / Version Control" />
          <SiPostman title="Postman / API Testing" />
        </div>
      </div>

      {/* ================= Resume Grid ================= */}
      <div className={styles.grid}>
        {/* Education */}
        <div className={styles.section}>
          <h3 className={styles.heading}>🎓 Education History</h3>
          {education.map((edu, idx) => (
            <div key={idx} className={styles.item}>
              <h4 className={styles.title}>{edu.title}</h4>
              <p>{edu.institution}</p>
              <span>{edu.period}</span>
            </div>
          ))}
        </div>

        {/* Work */}
        <div className={styles.section}>
          <h3 className={styles.heading}>💼 Professional Experience</h3>
          {experience.map((exp, idx) => (
            <div key={idx} className={styles.item}>
              <h4 className={styles.title}>{exp.title}</h4>
              <p>{exp.company}</p>
              <p>{exp.role}</p>
              <span>{exp.period}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: "Resume",
      education: educationData,
      experience: experienceData,
    },
  };
}
