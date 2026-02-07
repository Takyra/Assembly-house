import React from 'react';
import type { FC, ReactNode } from 'react';

import Title from 'components/Title';

import styles from './styles.module.scss';

interface IProps {
  title: string;
  imagePath?: string;
  children: ReactNode;
}

const Card: FC<IProps> = ({
  title,
  imagePath,
  children,
}) => (
  <div className={styles.card}>
    <div className={styles.card__content}>
      <Title level={3} className={styles.card__title}>{title}</Title>
      {children}
    </div>

    {imagePath && (
      <img
        src={imagePath}
        className={styles.card__image}
        alt={title}
      />
    )}
  </div>
);

export default Card;