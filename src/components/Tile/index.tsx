import React from 'react';
import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Title from 'components/Title';

import styles from './styles.module.scss';

interface IProps {
  title: string;
  linkTo: string;
  imagePath?: string;
}

const Tile: FC<IProps> = ({
  title,
  linkTo,
  imagePath,
}) => (
  <Link to={linkTo} className={styles.tile}>
    <FontAwesomeIcon className={styles.tile__icon} icon={faArrowRight} />
    <Title level={2} className={styles.tile__title}>{title}</Title>

    {imagePath && (
      <img
        src={imagePath}
        className={styles.tile__image}
        alt={title}
      />
    )}
  </Link>
);

export default Tile;