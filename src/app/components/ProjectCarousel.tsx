import styles from "../styles/ProjectCarousel.module.scss";
import Projects from "../data/ProjectsData";
import ProjectCard from "./ProjectCard";

const ProjectCarousel: React.FC = () => {
  return (
    <section className={styles.carousel}>
      <h2>Featured Projects</h2>
      <div className={styles.track}>
        {Projects.map((proj, i) => (
          <ProjectCard key={i} {...proj} />
        ))}
      </div>
    </section>
  );
};

export default ProjectCarousel;
