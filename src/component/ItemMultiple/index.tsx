import React from 'react';
import { router } from 'umi';
import styles from './index.css';

export type ItemMultipleT = {
  title?: string;
  contents: Array<{
    titleText: string;
    desText: string;
    refLinks?: Array<{
      title: string;
      refLink?: string;
      navLink?: string;
    }>;
  }>;
};

const ItemMultiple: React.FC<ItemMultipleT> = (props: ItemMultipleT) => {
  return (
    <div className={styles.item}>
      <h2 className={styles.title}>{props.title}</h2>
      {props.contents.map((content, index) => (
        <React.Fragment key={index}>
          <p className={styles.detail}>
            {content.titleText && <b>{content.titleText + ': '}</b>}
            {content.desText}
            <br />
            {content?.refLinks?.map((refItem, index) => (
              <a
                className={refItem.navLink ? styles.people : styles.mail}
                href={refItem.refLink}
                key={index}
                onClick={() => refItem.navLink && router.push(refItem.navLink)}
              >
                {refItem.title}
              </a>
            ))}
          </p>
        </React.Fragment>
      ))}
    </div>
  );
};

export default ItemMultiple;
