import { useState } from "react";
import { getProjects } from "./api/projects";
import styles from "../styles/ProjectsPage.module.css";
import cardStyles from "../styles/ProjectCard.module.css";

const ProjectsPage = ({ projects }) => {
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState(null);

  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(query.toLowerCase()),
  );

  const selected = projects.find((p) => p.id === openId) || null;

  return (
    <>
      {/* Search Box */}
      <div className={styles.searchBox}>
        <input
          type="text"
          placeholder="Search projects..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={styles.searchInput}
        />
      </div>

      <h3 className={styles.heading}>Stuff I've Built Recently</h3>

      {/* Project grid */}
      <div className={styles.container}>
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <div
              key={project.id}
              className={cardStyles.card}
              role="button"
              tabIndex={0}
              onClick={() =>
                setOpenId(openId === project.id ? null : project.id)
              }
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setOpenId(openId === project.id ? null : project.id);
                }
              }}
            >
              <div className={cardStyles.content}>
                <span className={cardStyles.category}>{project.category}</span>
                <h3 className={styles.cardTitle}>{project.name}</h3>
                <div className={cardStyles.tags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={cardStyles.skillTag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className={styles.noResults}>No projects found.</p>
        )}
      </div>

      {/* Details drawer */}
      {selected && (
        <>
          <div className={styles.overlay} onClick={() => setOpenId(null)} />
          <aside
            className={styles.drawer}
            role="dialog"
            aria-label={`${selected.name} details`}
          >
            <div className={styles.drawerHeader}>
              <span className={cardStyles.category}>{selected.category}</span>
              <button
                type="button"
                className={styles.drawerClose}
                onClick={() => setOpenId(null)}
                aria-label="Close panel"
              >
                ✕
              </button>
            </div>
            <h2 className={styles.drawerTitle}>{selected.name}</h2>
            <p className={styles.drawerDesc}>{selected.description}</p>
            <div className={styles.drawerLinks}>
              {selected.source_code && (
                <a
                  className={`${styles.btn} ${styles.btnSecondary}`}
                  href={selected.source_code}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              )}
              {selected.demo && (
                <a
                  className={`${styles.btn} ${styles.btnPrimary}`}
                  href={selected.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              )}
            </div>
          </aside>
        </>
      )}
    </>
  );
};

export async function getStaticProps() {
  const projects = getProjects();

  return {
    props: { title: "Projects", projects },
  };
}

export default ProjectsPage;