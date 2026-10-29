import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/HomePage.module.css';
import styling from '../styles/Home.module.css';
import logo from "../public/geebrain.JPG";
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNode, faRust } from '@fortawesome/free-brands-svg-icons';
import { faBrain } from '@fortawesome/free-solid-svg-icons';
import EthereumIcon from '../components/icons/EthereumIcon';
import FirebaseIcon from '../components/icons/FirebaseIcon';
import MongoDBIcon from '../components/icons/MongoDBIcon';
import OpenRouterIcon from '../components/icons/OpenRouterIcon';
import ExpoIcon from '../components/icons/ExpoIcon';
import PostmanIcon from '../components/icons/PostmanIcon';
import OllamaIcon from '../components/icons/OllamaIcon';
import NextjsIcon from '../components/icons/NextjsIcon';
import '../styles/TestFontFaces.module.css';

export default function HomePage() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>I BUILD</h1>
          <h1>MAGIC!</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Gozie Brain Izuka</h1>
            <h6 className={styles.bio}> Software Business Developer
              <span className={styles.react}> Integrating AI & Web3 in real life solutions.</span></h6>

            {/* Skill Icons Section */}
            <div className={styling.skillsContainer}>
              <div className={styling.skillItem}>
                <FontAwesomeIcon icon={faReact} className={`${styling.icon} ${styling.reactIcon}`} />
                <span className={styling.skillText}>React</span>
              </div>

              <div className={styling.skillItem}>
                <NextjsIcon width="1em" height="1em" className={`${styling.icon} ${styling.nextjsIcon}`} />
                <span className={styling.skillText}>Next.js</span>
              </div>

              <div className={styling.skillItem}>
                <FontAwesomeIcon icon={faNode} className={`${styling.icon} ${styling.nodeIcon}`} />
                <span className={styling.skillText}>Express.js</span>
              </div>

              <div className={styling.skillItem}>
                <FontAwesomeIcon icon={faRust} className={`${styling.icon} ${styling.rustIcon}`} />
                <span className={styling.skillText}>Rust</span>
              </div>

              <div className={styling.skillItem}>
                <ExpoIcon className={`${styling.icon} ${styling.expoIcon}`} />
                <span className={styling.skillText}>Expo</span>
              </div>

              <div className={styling.skillItem}>
                <EthereumIcon className={`${styling.icon} ${styling.web3Icon}`} />
                <span className={styling.skillText}>Web3</span>
              </div>

              <div className={styling.skillItem}>
                <FontAwesomeIcon icon={faBrain} className={`${styling.icon} ${styling.aiIcon}`} />
                <span className={styling.skillText}>AI Integration</span>
              </div>

              <div className={styling.skillItem}>
                <OpenRouterIcon className={`${styling.icon} ${styling.openrouterIcon}`} />
                <span className={styling.skillText}>OpenRouter</span>
              </div>

              <div className={styling.skillItem}>
                <FirebaseIcon className={`${styling.icon} ${styling['firebase-icon']}`} />
                <span className={styling.skillText}>Firebase</span>
              </div>

              <div className={styling.skillItem}>
                <MongoDBIcon className={`${styling.icon} ${styling['mongodb-icon']}`} />
                <span className={styling.skillText}>MongoDB</span>
              </div>

              <div className={styling.skillItem}>
                <PostmanIcon className={`${styling.icon} ${styling.postmanIcon}`} />
                <span className={styling.skillText}>Postman</span>
              </div>

              <div className={styling.skillItem}>
                <OllamaIcon className={`${styling.icon} ${styling.ollamaIcon}`} />
                <span className={styling.skillText}>Ollama</span>
              </div>
            </div>


            <div className={styling.forMobile}>
              <Link href="/projects">
                <button className={`${styles.outlined} ${styling.contactBtn}`}>View My Projects</button>
              </Link>
            </div>
          </div>


          {/* Logo image - DO NOT DELETE */}
          {/* <div className={styling.imageWrapper}>
            <Image
              src={logo}
              alt="Sarcastic Geek Logo"
              className={styling.myImg}
              priority
            />

          </div> */}
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
