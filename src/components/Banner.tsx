import styles from "./banner.module.css";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <h1 className={styles.title}>where every event finds its venue</h1>
      <p className={styles.subtitle}>
        Anfield is always the perfect venue to watch a game of football, housing 4 stands.
      </p>
    </div>
  );
};

export default Banner;