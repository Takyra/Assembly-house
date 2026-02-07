import React from 'react';
import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cn from 'classnames';

import { routPaths } from 'constants/routs';
import PhoneNumber from 'components/PhoneNumber';

import styles from './styles.module.scss';

const Header: FC = () => (
  <header id="header" className={styles.header}>
    <div className={styles.header__wrapper}>
      <div className={styles.header__column}>
        <Link to={routPaths.home} className={styles.header__logo}>
          LOGO
        </Link>
      </div>

      <div className={cn(styles.header__column, styles['header__column--address'])}>
        <FontAwesomeIcon className={styles.header__iconPoint} icon={faMapMarkerAlt} />
        <address className={styles.header__address}>
          <div>пер. Макарова, 52</div>
          <div>г. Ставрополь</div>
        </address>
      </div>

      <div className={styles.header__column}>
        <PhoneNumber className={styles.header__phone}>+79682786111</PhoneNumber>
        <a href="mailto:montajdom@bk.ru" target="_blank">montajdom@bk.ru</a>
      </div>
      <div className={styles.header__column}>
        <PhoneNumber className={styles.header__phone}>+79187513421</PhoneNumber>
        <a
          href="https://wa.me/79682786111"
          target="_blank"
          className={styles.header__whatsapp}
        >
          Чат в WhatsApp
        </a>
      </div>
    </div>
  </header>
);

export default Header;