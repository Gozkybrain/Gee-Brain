import Image from 'next/image';
import styles from '../styles/About.module.css';
import brain from '../public/brain.jpg';

export default function AboutMe() {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <h3 className={styles.textHead}>AI Software Developer</h3>
        <div className={styles.grid}>
          <div className={styles.imageContainer} data-aos="fade-right">
            <Image
              src={brain}
              alt="About Me"
              width={150}
              height={150}
              priority
              className={styles.myImage}
            />
          </div>
          <div className={styles.textContainer} data-aos="fade-left">
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <i className={`${styles.icon} bi bi-chevron-right`}></i>
                <span><strong className={styles.strong}>Name: </strong>
                  Izuka Chigozie Emmanuel Brain</span>
              </li>

              <li className={styles.listItem}>
                <i className={`${styles.icon} bi bi-chevron-right`}></i>
                <span> <strong className={styles.strong}>Aliases: </strong>
                  Gozkybrain Izuka, Sarcastic Geek, Gee Brain</span>
              </li>

              <li className={styles.listItem}>
                <i className={`${styles.icon} bi bi-chevron-right`}></i>
                <span><strong className={styles.strong}>College Degree: </strong>
                  BSc. Industrial Microbiology</span>
              </li>

              <li className={styles.listItem}>
                <i className={`${styles.icon} bi bi-chevron-right`}></i>
                <span> <strong className={styles.strong}>Availability: </strong>
                  Freelance, Remote, & Hybrid</span>
              </li>
            </ul>
          </div>


        </div>
        <div className={styles.paragraph}>
          Innovative and deadline-driven Developer with 5+ years of experience researching and developing solutions that meet client satisfaction using the easiest, yet effective approach possible.
          I make the whole concept of developing a whole vibe — A Normal Life is Boring. I’m also the founder of the <strong>Sarcastic Geeks Trybe</strong>, a tech community that encourages collaboration, shared learning, and building cool stuff together.
        </div>

        {/* Skills Section */}
        <div className={styles.skillsSection}>
          <h3 className={styles.textHead}>Skills</h3>
          <div className={styles.skillsGrid}>

            <div className={styles.skill}>
              <span className={styles.skillName}>JavaScript</span>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: '89%' }}></div>
              </div>
            </div>

            <div className={styles.skill}>
              <span className={styles.skillName}>ReactJS, NextJS & React Native</span>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: '85%' }}></div>
              </div>
            </div>

            <div className={styles.skill}>
              <span className={styles.skillName}>Wordpress, CSS & Bootstrap</span>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: '92%' }}></div>
              </div>
            </div>

            <div className={styles.skill}>
              <span className={styles.skillName}>MongoDB, ExpressJS & NodeJS</span>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: '88%' }}></div>
              </div>
            </div>

            <div className={styles.skill}>
              <span className={styles.skillName}>Web3 Development & Integration</span>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: '60%' }}></div>
              </div>
            </div>

            <div className={styles.skill}>
              <span className={styles.skillName}>Prompt Engineering & AI Integration</span>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: '75%' }}></div>
              </div>
            </div>

            <div className={styles.skill}>
              <span className={styles.skillName}>Firebase, EmailJS, & MailJet</span>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: '85%' }}></div>
              </div>
            </div>

            <div className={styles.skill}>
              <span className={styles.skillName}>Git, SMTP, & Postman</span>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: '85%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Fetch static props if needed for SSR or static generation
export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}
