import Link from 'next/link';
import styles from '../styles/HomePage.module.css';
import styling from '../styles/Home.module.css';
import logo from "../public/logo.png";
import Image from 'next/image';

// FontAwesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faWordpress, faJs, faNode, faEthereum } from '@fortawesome/free-brands-svg-icons';
import { faRobot } from '@fortawesome/free-solid-svg-icons';

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>I BUILD</h1>
          <h1>MAGIC!</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Sarcastic Geek</h1>
            <h6 className={styles.bio}> AI Software Developer with
              <span className={styles.react}> Web3.</span></h6>

            {/* Skill Icons Section */}
            <div className={styling.skillsContainer}>

              {/* Skill item for JavaScript */}
              <div className={styling.skillItem}>
                <FontAwesomeIcon icon={faJs} className={`${styling.icon} ${styling.jsIcon}`} />
                <div className={styling.skillText}>JavaScript</div>
              </div>

              {/* Skill item for React */}
              <div className={styling.skillItem}>
                <FontAwesomeIcon icon={faReact} className={`${styling.icon} ${styling.reactIcon}`} />
                <div className={styling.skillText}>React</div>
              </div>

              {/* Skill item for Express.js */}
              <div className={styling.skillItem}>
                <FontAwesomeIcon icon={faNode} className={`${styling.icon} ${styling.nodeIcon}`} />
                <div className={styling.skillText}>Express.js</div>
              </div>

              {/* Skill item for React */}
              <div className={styling.skillItem}>
                <FontAwesomeIcon icon={faEthereum} className={`${styling.icon} ${styling.web3Icon}`} />
                <div className={styling.skillText}>Web3</div>
              </div>


              {/* Skill item for Solana Rust */}
              <div className={styling.skillItem}>
                <FontAwesomeIcon icon={faRobot} className={`${styling.icon} ${styling.aiIcon}`} />
                <div className={styling.skillText}>AI</div>
              </div>

              {/* Skill item for WordPress */}
              <div className={styling.skillItem}>
                <FontAwesomeIcon icon={faWordpress} className={`${styling.icon} ${styling.wordpressIcon}`} />
                <div className={styling.skillText}>WordPress</div>
              </div>
            </div>


            <div className={styling.forMobile}>
              <Link href="/projects">
                <button className={`${styles.button} ${styling.workBtn}`}>View Work</button>
              </Link>
              <Link href="/resume">
                <button className={`${styles.outlined} ${styling.contactBtn}`}>My Resume</button>
              </Link>
            </div>
          </div>


          {/* Logo image */}
          <div className={styling.imageWrapper}>
            <Image
              src={logo}
              alt="Sarcastic Geek Logo"
              className={styling.myImg}
              priority
            />

          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
