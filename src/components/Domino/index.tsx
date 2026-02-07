import React from 'react';
import type { FC, ReactNode } from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

interface IProps {
  className?: string;
  imgPath?: string;
  direction?: 'left' | 'right';
  backgroundColor?: string;
  children: ReactNode;
}

const Domino: FC<IProps> = ({
  className,
  imgPath,
  direction = 'left',
  backgroundColor,
  children,
}) => {

  return (
    <section
      className={cn(styles.domino, styles[`domino--${direction}`], className)}
      style={{backgroundColor: backgroundColor}}
    >
      <div className={styles.domino__image}>
        <img src={imgPath} alt="Фоновая картинка" />
      </div>
      <div className={styles.domino__content}>
        {children}
      </div>
    </section>
  );
};

export default Domino;