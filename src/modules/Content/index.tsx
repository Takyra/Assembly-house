import React, { useState, useEffect } from 'react';
import type { FC, ReactNode } from 'react';

import styles from './styles.module.scss';

interface IProps {
  children: ReactNode;
}

const Content: FC<IProps> = ({ children }) => {
  const [otherHeight, setOtherHeight] = useState(0);

  const getHeightElements = () => {
    const headerHeight = document.getElementById('header').offsetHeight;
    const navigationHeight = document.getElementById('navigation').offsetHeight;
    const footerHeight = document.getElementById('footer').offsetHeight;

    setOtherHeight(headerHeight + navigationHeight + footerHeight);
  };

  useEffect(() => {
    getHeightElements();
    window.addEventListener('resize', getHeightElements);

    return () => window.removeEventListener('resize', getHeightElements);
  }, []);

  return (
    <div
      className={styles.content}
      style={{ minHeight: `calc(100vh - ${otherHeight}px)` }}
    >
      <div className={styles.content__wrapper}>
        {children}
      </div>
    </div>
  );
};

export default Content;

