import styles from "../styles/ProjectCard.module.scss";

type Props = {
  image: string;
  title: string;
  subtitle: string;
  description: string;
};

const ProjectCard: React.FC<Props> = ({
  image,
  title,
  subtitle,
  description,
}) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <div className={styles.text}>
        <h4>
          {title}
          <span>{subtitle}</span>
        </h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
