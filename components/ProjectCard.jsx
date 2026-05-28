import Image from 'next/image';
import styles from '../styles/ProjectCard.module.css';

const ProjectCard = ({ project }) => {
  const getTagClass = (tag) => {
    const t = tag.toLowerCase();
    if (t.includes('react') || t.includes('native')) return styles.reactTag;
    if (t.includes('node')) return styles.nodeTag;
    if (t.includes('next')) return styles.nextTag;
    if (t.includes('js') || t.includes('javascript')) return styles.jsTag;
    if (t.includes('web3') || t.includes('ethereum')) return styles.web3Tag;
    if (t.includes('bootstrap')) return styles.bootstrapTag;
    if (t.includes('api') || t.includes('smtp') || t.includes('postman')) return styles.apiTag;
    if (t.includes('firebase')) return styles.firebaseTag;
    if (t.includes('express')) return styles.expressTag;
    if (t.includes('ai') || t.includes('prompt')) return styles.aiTag;
    return styles.defaultTag;
  };

  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.cardHeader}>
          <h3>
            <a
              href={project.demo} 
              target="_blank"
              rel="noopener noreferrer"
              className={styles.underline}
            >
              {project.name}
            </a>
          </h3>
          <span className={styles.category}>{project.category}</span>
        </div>
        <p>{project.description}</p>
        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} className={`${styles.skillTag} ${getTagClass(tag)}`}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
