import styles from '../styles/ContactPage.module.css';


const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles['education-section']}>
        <h3 className={styles.heading}>Education History</h3>

        <div className={styles.item}>
          <h4 className={styles.resumeHead}>Developer Roadmap Experiment Lab</h4>
          <div>Bukas Global Investments</div>
          <div>2022 - Present</div>
        </div>

        <div className={styles.item}>
          <h4 className={styles.resumeHead}>FULL-STACK WITH HTML, CSS, JAVASCRIPT, NODE, REACT, POSTGRESQL, WEB3 AND DAPPS</h4>
          <div>Udemy INC. and Dr Angela Yu.</div>
          <div>2022 - 2024</div>
        </div>

        <div className={styles.item}>
          <h4 className={styles.resumeHead}>FULL STACK WEB DEVELOPMENT WITH REACT JS, ANGULAR AND NODEJS</h4>
          <div>Udemy INC. and Oak Academy.</div>
          <div>2022 - 2023</div>
        </div>

        <div className={styles.item}>
          <h4 className={styles.resumeHead}>FRONTEND DEVELOPMENT WITH REACTJS, API INTEGRATION AND NODEJS</h4>
          <div>Soutech Ventures, Owerri, Imo State, Nigeria.</div>
          <div>2023</div>
        </div>

        <div className={styles.item}>
          <h4 className={styles.resumeHead}>HTML, CSS, & JAVASCRIPT</h4>
          <div>Coursera Online INC.</div>
          <div>2021</div>
        </div>

        <div className={styles.item}>
          <h4 className={styles.resumeHead}>BSc. Industrial Microbiology</h4>
          <div>Imo State University, Owerri.</div>
          <div><strong>Year:</strong> 2016 - 2020</div>
        </div>

      </div>

      <div className={styles['work-section']}>
        <h3 className={styles.heading}>Professional Experience</h3>
        <div className={styles.item}>
          <h4 className={styles.resumeHead}>Virtuous Tech Enterprise</h4>
          <div>Remote: Edo State, Nigeria</div>
          <div>Frontend Developer with React</div>
          <div>2024 - Presen t</div>
        </div>

        <div className={styles.item}>
          <h4 className={styles.resumeHead}>SKI MUSIC</h4>
          <div>Remote: Lagos State, Nigeria</div>
          <div>Lead Mobile App Developer</div>
          <div>2024 - Present</div>
        </div>

        <div className={styles.item}>
          <h4 className={styles.resumeHead}>BIG Foundation (MY GRIND APP)</h4>
          <div>Remote: Lagos State, Nigeria</div>
          <div>Lead Developer</div>
          <div>2023</div>
        </div>

        <div className={styles.item}>
          <h4 className={styles.resumeHead}>SOUTECH VENTURES</h4>
          <div>Physical: Imo State, Nigeria</div>
          <div>Web Developer & Instructor</div>
          <div>2023</div>
        </div>

        <div className={styles.item}>
          <h4 className={styles.resumeHead}>KRIS MEDICAL LABORATORY</h4>
          <div>Physical: Imo State, Nigeria</div>
          <div>Laboratory Scientist Intern</div>
          <div>2019</div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
