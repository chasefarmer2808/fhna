import React from 'react';
import Image from 'next/image';
import { NavLinksFragment } from './NavLinksFragment';
import styles from '../styles/Footer.module.css';
import { Icon } from './Icon';

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className={`content-frame ${styles['site-map']}`}>
        <NavLinksFragment />
      </div>
      <div className={styles['social-media-frame']}>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/groups/FHNA21230/about"
        >
          <Icon name="facebook" sizeRem={3} />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://nextdoor.com/neighborhood/federalhillbaltimoremd--baltimore--md/"
        >
          <Image
            src="/nextdoor.png"
            alt="Nextdoor logo"
            width={38}
            height={38}
          />
        </a>
      </div>
    </footer>
  );
};
