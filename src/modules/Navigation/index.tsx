import React from 'react';
import type { FC } from 'react';
import { useLocation, Link } from 'react-router-dom';
import cn from 'classnames';

import { navigation } from 'constants/routs';

import styles from './styles.module.scss';

const Navigation: FC = () => {
  const location = useLocation();

  return (
    <nav id="navigation" className={styles.navigation}>
      <ul className={styles.navigation__list}>
        {navigation.map(({ title, path }) => (
          <li
            key={path}
            className={cn(styles.navigation__item, location.pathname === path && styles['navigation__item--active'])}
          >
            <Link to={path}>{title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;