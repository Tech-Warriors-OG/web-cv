import React from 'react';
import styles from './index.css';

export type ItemSingleT = {
  title: string;
  content: string;
};

const ItemSingle: React.FC<ItemSingleT> = (props: ItemSingleT) => {
  return (
    <div className={styles.item}>
      <h2 className={styles.title}>{props.title}</h2>
      <p className={styles.detail}>{props.content}</p>
    </div>
  );
};

export default ItemSingle;
