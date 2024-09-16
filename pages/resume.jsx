import styles from '../styles/ContactPage.module.css';

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles['education-section']}>
        <h3 className={styles.heading}>Education History</h3>
        <div className={styles.item}>
          <h4>Bachelor of Science in Industrial Microbiology</h4>
          <p><strong>Institution:</strong> University Name</p>
          <p><strong>Year:</strong> 2015 - 2019</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className={styles.item}>
          <h4>Bachelor of Industrial Microbiology</h4>
          <p><strong>Institution:</strong> University Name</p>
          <p><strong>Year:</strong> 2015 - 2019</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className={styles.item}>
          <h4>High School Diploma</h4>
          <p><strong>Institution:</strong> High School Name</p>
          <p><strong>Year:</strong> 2011 - 2015</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>

      <div className={styles['work-section']}>
        <h3 className={styles.heading}>Work Experience History</h3>
        <div className={styles.item}>
          <h4>Software Developer at Company XYZ</h4>
          <p><strong>Duration:</strong> June 2020 - Present</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className={styles.item}>
          <h4>Intern at Company ABC</h4>
          <p><strong>Duration:</strong> January 2019 - May 2020</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
