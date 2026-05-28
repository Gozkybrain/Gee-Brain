import React from "react";
import {
  FaJsSquare,
  FaReact,
  FaNode,
  FaGitAlt,
  FaBootstrap,
  FaWordpress,
  FaRobot,
} from "react-icons/fa";
import {
  SiMongodb,
  SiPostman,
  SiFirebase,
  SiEthereum,
  SiMinutemailer,
} from "react-icons/si";
import styles from "../styles/ContactPage.module.css";

// ================= Data =================
const experienceData = [
  {
    title: "Advertorial Hub",
    company: "Remote: Lagos State, Nigeria",
    role: "Lead Software Developer",
    period: "2025 - Present",
  },
    {
    title: "Sentra Finance",
    company: "Remote: Nigeria",
    role: "Lead Software Developer",
    period: "2025 - Present",
  },
   {
    title: "Sarcastic Geeks Trybe",
    company: "Remote: Nigeria",
    role: "Community Lead",
    period: "2023 - Present",
  },
  {
    title: "Xpress Plus Global Consulting",
    company: "Remote: Lagos State, Nigeria",
    role: "Contact Address Verification Developer",
    period: "2025 - 2026",
  },
  {
    title: "Zefra INC.",
    company: "Remote: Owerri, Imo State, Nigeria",
    role: "Web App Game Developer",
    period: "2025 - 2026",
  },
   {
    title: "Alpha Tech Hub",
    company: "Physical: Owerri, Imo State, Nigeria",
    role: "Lead Software Developer",
    period: "2025 - 2026",
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
];

export default function ContactPage({ experience }) {
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

      {/* ================= Resume Grid ================= */}
      <div className={styles.grid}>
        {/* Work (Left Column: 2/3) */}
        <div className={styles.section}>
          <h3 className={styles.heading}>Professional Experience</h3>
          {experience.map((exp, idx) => (
            <div key={idx} className={styles.item}>
              <h4 className={styles.title}>{exp.title}</h4>
              <p>{exp.company}</p>
              <p>{exp.role}</p>
              <span>{exp.period}</span>
            </div>
          ))}
        </div>

        {/* Skills (Right Column: 1/3) */}
        <div className={styles.section}>
          <h3 className={styles.heading}>Tech Stack</h3>
          <div className={styles.icons}>
            <div className={styles.skillEntry}>
              <div className={styles.skillTag}>
                <FaJsSquare /> <span>JavaScript</span>
              </div>
            </div>
            <div className={styles.skillEntry}>
              <div className={styles.skillTag}>
                <FaReact /> <span>React / Next.js</span>
              </div>
            </div>
            <div className={styles.skillEntry}>
              <div className={styles.skillTag}>
                <FaNode /> <span>Node / Express</span>
              </div>
            </div>
            <div className={styles.skillEntry}>
              <div className={styles.skillTag}>
                <SiFirebase /> <span>Firebase</span>
              </div>
            </div>
            <div className={styles.skillEntry}>
              <div className={styles.skillTag}>
                <SiMongodb /> <span>MongoDB</span>
              </div>
            </div>
            <div className={styles.skillEntry}>
              <div className={styles.skillTag}>
                <FaRobot /> <span>AI Integration</span>
              </div>
            </div>
            <div className={styles.skillEntry}>
              <div className={styles.skillTag}>
                <SiEthereum /> <span>Web3 / DApps</span>
              </div>
            </div>
            <div className={styles.skillEntry}>
              <div className={styles.skillTag}>
                <FaWordpress /> <span>WordPress</span>
              </div>
            </div>
            <div className={styles.skillEntry}>
              <div className={styles.skillTag}>
                <FaBootstrap /> <span>CSS / Bootstrap</span>
              </div>
            </div>
            <div className={styles.skillEntry}>
              <div className={styles.skillTag}>
                <FaGitAlt /> <span>Git Control</span>
              </div>
            </div>
            <div className={styles.skillEntry}>
              <div className={styles.skillTag}>
                <SiPostman /> <span>API Testing</span>
              </div>
            </div>
            <div className={styles.skillEntry}>
              <div className={styles.skillTag}>
                <SiMinutemailer /> <span>Email Api & SMTP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: "Resume",
      experience: experienceData,
    },
  };
}
