import styles from "../styles/Footer.module.scss";
import Button from "./Button";
import { FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa"; // FontAwesome Icons

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.upperContainer}>
        <p>Transforming design into reality.</p>
        <Button size="md">Get in touch</Button>
      </div>
      <hr className={styles.line} />
      <div className={styles.lowerContainer}>
        <div className={styles.logoContainer}>
          <img src={"/Logo_2.png"} height={40} width={40} />
          <h1>Parks Interiors</h1>
        </div>
        <div className={styles.linksContainer}>
          <div>
            <ul>
              <li>Work</li>
              <li>Expertise</li>
              <li>Latest</li>
              <li>Clients</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>About</li>
              <li>Awards</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className={styles.icons}>
          <FaWhatsapp className={styles.icon} />
          <FaInstagram className={styles.icon} />
          <FaEnvelope className={styles.icon} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
