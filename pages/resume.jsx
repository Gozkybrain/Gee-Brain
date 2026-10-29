import React from "react";
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
    title: "Sarcastic Geeks Trybe",
    company: "Remote: Nigeria",
    role: "Community Lead",
    period: "2020 - Present",
  },
   {
    title: "Sentra Finance",
    company: "Remote: Nigeria",
    role: "Lead Software Developer",
    period: "2025 - 2026",
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
          <p>Over a Decade of Dev Experience</p>
          <p>Freelance, Remote & Hybrid</p>
          {/* <p>
            Founder of <strong>Sarcastic Geeks Trybe</strong>
          </p> */}
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
              <div className={styles.metaRow}>
                <p>{exp.role}</p>
                <span>{exp.period}</span>
              </div>
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
      experience: experienceData,
    },
  };
}
