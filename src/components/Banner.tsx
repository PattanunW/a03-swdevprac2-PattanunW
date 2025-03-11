import Image from "next/image";
import styles from "./banner.module.css";

const Banner = () => {
  return (
    <div className={styles.banner}>
      {/* Background image for better compatibility */}
      <Image 
        src="/championswall.jpg" 
        alt="Champions Wall" 
        width={1920} 
        height={600} 
        className={styles.image} 
        priority
      />
      <div className={styles.content}>
        <h1 className={styles.title}>where every event finds its venue</h1>
        <p className={styles.subtitle}>
          Anfield is the best football stadium to ever exist.
        </p>
      </div>
    </div>
  );
};

export default Banner;
