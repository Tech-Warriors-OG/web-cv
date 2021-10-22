import ItemMultiple from '@/component/ItemMultiple';
import ItemSingle from '@/component/ItemSingle';
import React from 'react';
import styles from './index.css';
import { Profile } from './profile.data/TechWarriors';
export default function() {
  return (
    <div className={styles.root}>
      <ItemSingle title={Profile[0].title} content={Profile[0].content} />
      <ItemMultiple title={Profile[1].title} contents={Profile[1].contents} />
      <ItemMultiple title={Profile[2].title} contents={Profile[2].contents} />
      <ItemMultiple title={Profile[3].title} contents={Profile[3].contents} />
    </div>
  );
}
