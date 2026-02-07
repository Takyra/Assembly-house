import React from 'react';
import type { FC } from 'react';

import Title from 'components/Title';
import TextList, { TextListItem } from 'components/TextList';

import Residential from 'assets/workObjects/residential.svg';
import Industrial from 'assets/workObjects/industrial.svg';
import Private from 'assets/workObjects/private.svg';
import Business from 'assets/workObjects/business.svg';
import styles from './styles.module.scss';

const WorkObjects: FC = () => (
  <section className={styles.workObjects}>
    <Title level={2} className={styles.workObjects__title}>Объекты любого <span>масштаба</span></Title>

    <ul className={styles.workObjects__list}>
      <li className={styles.workObjects__item}>
        <img
          src={Residential}
          className={styles.workObjects__image}
          alt="Residential buildings"
        />
        <Title level={2} className={styles.workObjects__caption}>Жилые здания</Title>
        <TextList>
          <TextListItem>Новостройки;</TextListItem>
          <TextListItem>"Старый фонд";</TextListItem>
          <TextListItem>Школы и дет.сады.</TextListItem>
        </TextList>
      </li>

      <li className={styles.workObjects__item}>
        <img
          src={Industrial}
          className={styles.workObjects__image}
          alt="Industrial buildings"
        />
        <Title level={2} className={styles.workObjects__caption}>Промышленные здания</Title>
        <TextList>
          <TextListItem>Заводы;</TextListItem>
          <TextListItem>Предприятия;</TextListItem>
          <TextListItem>Муниципалитет.</TextListItem>
        </TextList>
      </li>

      <li className={styles.workObjects__item}>
        <img
          src={Private}
          className={styles.workObjects__image}
          alt="Private sector"
        />
        <Title level={2} className={styles.workObjects__caption}>Частный сектор</Title>
        <TextList>
          <TextListItem>Дома, дачи;</TextListItem>
          <TextListItem>Коттеджи, виллы;</TextListItem>
          <TextListItem>Таунхаусы.</TextListItem>
        </TextList>
      </li>

      <li className={styles.workObjects__item}>
        <img
          src={Business}
          className={styles.workObjects__image}
          alt="Business buildings"
        />
        <Title level={2} className={styles.workObjects__caption}>Здания бизнеса</Title>
        <TextList>
          <TextListItem>Заведения;</TextListItem>
          <TextListItem>Бизнес-центры;</TextListItem>
          <TextListItem>Офисы.</TextListItem>
        </TextList>
      </li>
    </ul>
  </section>
);

export default WorkObjects;