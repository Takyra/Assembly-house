import React from 'react';

import Tile from 'components/Tile';
import TextList, { TextListItem } from 'components/TextList';
import Button from 'components/Button';
import Card from 'components/Card';
import Title from 'components/Title';
import Domino from 'components/Domino';

import WorkObjects from 'modules/WorkObjects';
import QualityAssurance from 'modules/QualityAssurance';

import mainImg from 'assets/main.jpg';
import card1 from 'assets/img1.png';
import card2 from 'assets/img2.png';
import card3 from 'assets/img3.png';
import card4 from 'assets/img4.png';
import img9 from 'assets/items/menu9.png';
import img10 from 'assets/items/menu10.png';
import img11 from 'assets/items/menu11.png';

import img12 from 'assets/items/menu12.png';
import bgi from 'assets/bgi.jpg';
import bgi2 from 'assets/bgi2.jpg';

import lcPDF from 'assets/documents/lc.pdf';
import styles from './styles.module.scss';

const HomePage = () => (
  <>
    <section className={styles.welcome}>
      <div className={styles.welcome__wrapper}>
        <Title level={1}>Экспертный центр по оказанию услуг в области систем безопасности и строительства</Title>
        <TextList>
          <TextListItem>Подбор, монтаж, испытание и реализация пожарного оборудования.</TextListItem>
          <TextListItem>Проведение огнезащиты зданий, сооружений и материалов в соответствии с ФЗ, ГОСТами, СНиПами. </TextListItem>
          <TextListItem>Разработка проектной документации и подготовка к успешной проверке объекта пожарным инспектором МЧС.</TextListItem>
        </TextList>
      </div>

      <img
        src={mainImg}
        alt="Пожарный"
        className={styles.welcome__image}
      />
    </section>

    <section className={styles.cards}>
      <Card title="Сигнализация" imagePath={card1}>
        <p className={styles.cards__description}>Обслуживание пожарной сигнализации от <span>500р.</span></p>
        <Button linkTo="/" className={styles.cards__button}>Подробнее</Button>
      </Card>

      <Card title="Планы эвакуации" imagePath={card2}>
        <p className={styles.cards__description}>Разработка планов эвакуации от <span>1500р.</span></p>
        <Button linkTo="/contacts" className={styles.cards__button}>Подробнее</Button>
      </Card>

      <Card title="Лицензия МЧС" imagePath={card3}>
        <p className={styles.cards__description}>№26-Б/00231 в области обеспечения пожарной безопасности</p>
        <Button
          linkTo={lcPDF}
          className={styles.cards__button}
          rel="noopener noreferrer"
          target="_blank"
        >
          Подробнее
        </Button>
      </Card>

      <Card title="Наши сайты" imagePath={card4}>
        <p className={styles.cards__description}>Посетите наши сайты систем видеонаблюдения и огнезащиты</p>
        <Button linkTo="/contacts" className={styles.cards__button}>Подробнее</Button>
      </Card>
    </section>

    <section>
      <Title level={2}>Наши услуги</Title>
      <div className={styles.products}>
        <Tile linkTo={''} title="Разработка и изготовление документации" imagePath={img11} />
        <Tile linkTo={''} title="Монтаж и обслуживание пожарных систем" imagePath={img12} />
        <Tile linkTo={''} title="Огнезащита покрытий" imagePath={img10} />
        <Tile linkTo={''} title="Испытание и проверка оборудования" imagePath={img9} />
      </div>
    </section>

    <WorkObjects />

    <Domino imgPath={bgi} backgroundColor="#f5f5f6">
      <Title level={3}>Работаем <span>напрямую</span> с производителями</Title>
      <p>
        Это позволяет сформировать оптимальные условия для вас и cкорректировать цены в соответствии с объемами работ.
      </p>
      <Button linkTo="/" className={styles.domino__button}>Смотреть прайс</Button>
    </Domino>
    <Domino imgPath={bgi2} direction="right">
      <Title level={3}>Пройдите <span>любую</span> проверку</Title>
      <p>
        Мы имеем всю необходимую материально-техническую базу, сертифицированное оборудование и оснащение
        для подготовки к успешной проверке объекта инспектором. Наши специалисты обладают практическим опытом
        работы в органах Государственной противопожарной службы МЧC.
      </p>
      <Button linkTo="/" className={styles.domino__button}>Выбрать услугу</Button>
    </Domino>
    <QualityAssurance />
  </>
);

export default HomePage;