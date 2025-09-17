import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { getProjects } from './api/projects';
import styles from '../styles/ProjectsPage.module.css';

const ProjectsPage = ({ projects }) => {
  const [query, setQuery] = useState('');

  // Filter projects by name (case-insensitive)
  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <h3 className={styles.heading}>Stuff I've Built ...</h3>

      {/* Search Box */}
      <div className={styles.searchBox}>
        <input
          type="text"
          placeholder="🔍 Search projects..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={styles.searchInput}
        />
      </div>

      {/* Project Grid */}
      <div className={styles.container}>
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <p className={styles.noResults}>No projects found.</p>
        )}
      </div>
    </>
  );
};

export async function getStaticProps() {
  const projects = getProjects(); 

  return {
    props: { title: 'Projects', projects },
  };
}

export default ProjectsPage;
