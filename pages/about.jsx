import Image from "next/image";
import Link from "next/link";
import styles from "../styles/About.module.css";
import brain from "../public/brain.jpg";

export default function AboutMe() {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <h3 className={styles.textHead}>Software Developer +</h3>
        <div className={styles.grid}>
          <div className={styles.imageContainer} data-aos="fade-right">
            <Image
              src={brain}
              alt="About Me"
              width={200}
              height={200}
              priority
              className={styles.myImage}
            />
          </div>
          <div className={styles.textContainer} data-aos="fade-left">
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <i className={`${styles.icon} bi bi-chevron-right`}></i>
                <span>
                  <strong className={styles.strong}>Name: </strong>
                  Izuka Chigozie Emmanuel Brain
                </span>
              </li>

              <li className={styles.listItem}>
                <i className={`${styles.icon} bi bi-chevron-right`}></i>
                <span>
                  {" "}
                  <strong className={styles.strong}>Aliases: </strong>
                  Gozkybrain Izuka, Sarcastic Geek, Gee Brain
                </span>
              </li>

              <li className={styles.listItem}>
                <i className={`${styles.icon} bi bi-chevron-right`}></i>
                <span>
                  <strong className={styles.strong}>College Degree: </strong>
                  BSc. Industrial Microbiology
                </span>
              </li>

              <li className={styles.listItem}>
                <i className={`${styles.icon} bi bi-chevron-right`}></i>
                <span>
                  {" "}
                  <strong className={styles.strong}>
                    Post Graduate Diploma:{" "}
                  </strong>
                  Computer Science
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.paragraph}>
          Innovative and deadline-driven Developer with 5+ years of experience
          researching and developing solutions that meet client satisfaction
          using the easiest, yet effective approach possible. I make the whole
          concept of developing a whole vibe — A Normal Life is Boring. I’m also
          the founder of the <strong>Sarcastic Geeks Trybe</strong>, a tech
          community that encourages collaboration, shared learning, and building
          cool stuff together.
        </div>

        {/* Skills Section */}
        <div className={styles.skillsSection}>
          <h3 className={styles.textHead}>Expertise</h3>
          <div className={styles.skillsGrid}>
            {/* Frontend Development */}
            <div className={styles.categoryCard} data-aos="fade-up">
              <h4 className={styles.categoryTitle}>Frontend Dev</h4>
              <ul className={styles.skillList}>
                <li className={`${styles.skillTag} ${styles.jsTag}`}>
                  JavaScript
                </li>
                <li className={`${styles.skillTag} ${styles.reactTag}`}>
                  ReactJS
                </li>
                <li className={`${styles.skillTag} ${styles.nextTag}`}>
                  NextJS
                </li>
                <li className={`${styles.skillTag} ${styles.reactTag}`}>
                  React Native
                </li>
                <li className={`${styles.skillTag} ${styles.defaultTag}`}>
                  WordPress
                </li>
                <li className={`${styles.skillTag} ${styles.bootstrapTag}`}>
                  CSS & Bootstrap
                </li>
              </ul>
            </div>

            {/* Backend Development */}
            <div
              className={styles.categoryCard}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h4 className={styles.categoryTitle}>Backend & DB</h4>
              <ul className={styles.skillList}>
                <li className={`${styles.skillTag} ${styles.nodeTag}`}>
                  NodeJS
                </li>
                <li className={`${styles.skillTag} ${styles.expressTag}`}>
                  ExpressJS
                </li>
                <li className={`${styles.skillTag} ${styles.aiTag}`}>
                  Serverless APIs (Next.js)
                </li>
                <li className={`${styles.skillTag} ${styles.apiTag}`}>
                  MongoDB
                </li>
                <li className={`${styles.skillTag} ${styles.firebaseTag}`}>
                  Firebase
                </li>
              </ul>
            </div>

            {/* AI & Web3 */}
            <div
              className={styles.categoryCard}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h4 className={styles.categoryTitle}>AI & Web3</h4>
              <ul className={styles.skillList}>
                <li className={`${styles.skillTag} ${styles.aiTag}`}>
                  Prompt Engineering
                </li>
                <li className={`${styles.skillTag} ${styles.aiTag}`}>
                  AI Integration
                </li>
                <li className={`${styles.skillTag} ${styles.web3Tag}`}>
                  Motoko (ICP)
                </li>
                <li className={`${styles.skillTag} ${styles.web3Tag}`}>RUST</li>
                <li className={`${styles.skillTag} ${styles.web3Tag}`}>
                  MOVE (Sui)
                </li>
              </ul>
            </div>

            {/* Tools & DevOps */}
            <div
              className={styles.categoryCard}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h4 className={styles.categoryTitle}>Tools & Utilities</h4>
              <ul className={styles.skillList}>
                <li className={`${styles.skillTag} ${styles.defaultTag}`}>
                  Git & GitHub
                </li>
                <li className={`${styles.skillTag} ${styles.apiTag}`}>
                  Postman
                </li>
                <li className={`${styles.skillTag} ${styles.expressTag}`}>
                  Resend
                </li>
                <li className={`${styles.skillTag} ${styles.apiTag}`}>
                  EmailJS
                </li>
                <li className={`${styles.skillTag} ${styles.defaultTag}`}>
                  SMTP
                </li>
                <li className={`${styles.skillTag} ${styles.aiTag}`}>Ollama</li>
                <li className={`${styles.skillTag} ${styles.aiTag}`}>
                  LM Studio
                </li>
                <li className={`${styles.skillTag} ${styles.aiTag}`}>
                  OpenRouter
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <Link href="/resume" className={styles.resumeButton}>
              View Full Resume
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Fetch static props if needed for SSR or static generation
export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}
