import styles from "../styles/DesigningServices.module.scss";

export default function DesignServices() {
  return (
    <section className={styles.section}>
      <div>
        <img src="/designImage.jpg" alt="designImage" />
      </div>
      <div className={styles.textContainer}>
        <p>PARKS INTERIORS</p>
      </div>
    </section>
  );
}
