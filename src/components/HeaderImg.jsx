import styles from './HeaderImg.module.css';

export default function HeaderImg() {
  return (

    <div className={styles["hero_bg_box"]}>
      <div className={styles["bg_img_box"]}>
        <img src="images/hero-bg.png" alt="" />
      </div>
    </div>

  );
};