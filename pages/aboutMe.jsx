import Image from 'next/image';
import styles from '../styles/About.module.css'; // Import the CSS module 
import brain from '../public/brain.jpg';

export default function AboutMe() {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2>A little about me</h2>
        </div>

        <div className={`row`}>
          <div className={`col-lg-3 ${styles.imageContainer}`} data-aos="fade-right">
            <Image 
              src={brain}
              alt="About Me" 
              width={500} 
              height={500}
              className={styles.myImg} 
            />
          </div>
          <div className={`col-lg-9 pt-4 pt-lg-0 ${styles.content}`} data-aos="fade-left">
            <h3>Mobile &amp; Web Developer.</h3>
            <div className={`row`}>
              <div className={`col-lg-6`}>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    <i className={`${styles.icon} bi bi-chevron-right`}></i> 
                    <strong className={styles.strong}>Name:</strong> 
                    <span>Izuka Chigozie Emmanuel Brain</span>
                  </li>
                  <li className={styles.listItem}>
                    <i className={`${styles.icon} bi bi-chevron-right`}></i> 
                    <strong className={styles.strong}>Nationality:</strong> 
                    <span>Nigeria 🇳🇬</span>
                  </li>
                  <li className={styles.listItem}>
                    <i className={`${styles.icon} bi bi-chevron-right`}></i> 
                    <strong className={styles.strong}>College Degree:</strong> 
                    <span>Industrial Microbiology</span>
                  </li>
                </ul>
              </div>
              <div className={`col-lg-6`}>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    <i className={`${styles.icon} bi bi-chevron-right`}></i> 
                    <strong className={styles.strong}>Aliases:</strong> 
                    <span>Gozkybrain Izuka, Sarcastic Geek</span>
                  </li>
                  <li className={styles.listItem}>
                    <i className={`${styles.icon} bi bi-chevron-right`}></i> 
                    <strong className={styles.strong}>Zodiac:</strong> 
                    <span>Leo</span>
                  </li>
                  <li className={styles.listItem}>
                    <i className={`${styles.icon} bi bi-chevron-right`}></i> 
                    <strong className={styles.strong}>Freelance:</strong> 
                    <span>Available</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className={styles.paragraph}>
              <strong className={styles.strong}>Note:</strong> I'm available to work Remote and Hybrid. I am also available to work physically and relocate regardless of location.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'AboutMe' },
  };
}
