import React from 'react';
import styles from './index.css';

const BasicLayout: React.FC = props => {
  return (
    <div className={styles.normal}>
      <link rel="shortcut icon" type="image/x-icon" href="../assets/favicon.ico" />
      <h1 className={styles.title}>Tech Warriors</h1>
      <p className={styles.description}>Mobie Application, Website, And everything you need... </p>
      <p className={styles.mail}>
        <a className={styles.mail} href="mailto:doanhuuphuoc98@gmail.com ">
          doanhuuphuoc@gmail.com
        </a>
        |
        <a className={styles.mail} href="https://join.skype.com/invite/yoD57MxQvcS4">
          join.skype.com
        </a>
      </p>
      <p className={styles.mail}>
        <a className={styles.phone} href="tel:+84982251735">
          Mobile: +84982251735 (or zalo)
        </a>
      </p>
      {props.children}
    </div>
  );
};

export default BasicLayout;
