import React from 'react';
import type { FC } from 'react';
import { Link } from 'react-router-dom';

import PhoneNumber from 'components/PhoneNumber';

import styles from './styles.module.scss';

const Footer: FC = () => (
  <footer id="footer" className={styles.footer}>
    <div className={styles.footer__wrapper}>
      <div className={styles.footer__column}>
        <Link to="/">Товары</Link>
        <Link to="/">Услуги</Link>
        <Link to="/">Прайс-лист</Link>
      </div>

      <div className={styles.footer__column}>
        <Link to="/">Доставка и оплата</Link>
        <Link to="/">О компании</Link>
        <Link to="/">Контакты</Link>
      </div>

      <div className={styles.footer__column}>
        <PhoneNumber className={styles.footer__phone}>+79682786111</PhoneNumber>
        <PhoneNumber className={styles.footer__phone}>+79187513421</PhoneNumber>
        <div>пн-пт: с 8.00 до 17.00</div>
      </div>

      <div className={styles.footer__column}>
        <PhoneNumber className={styles.footer__phone}>+79034080595</PhoneNumber>
        <div>355001, г. Ставрополь, пер. Макарова, 52</div>
        <a href="mailto:montajdom@bk.ru" target="_blank">montajdom@bk.ru</a>
      </div>

      <div className={styles.footer__copyright}>Монтажный дом ©</div>
    </div>
  </footer>
);

export default Footer;