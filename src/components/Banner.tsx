import styles from "./banner.module.css";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <h1 className={styles.title}>where every event finds its venue</h1>
      <p className={styles.subtitle}>
        Anfield is the best football stadium to ever exist.
      </p>
    </div>
  );
};

export default Banner;
