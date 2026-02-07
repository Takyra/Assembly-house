import React from 'react';
import type { FC } from 'react';

import Domino from 'components/Domino';
import Title from 'components/Title';
import Button from 'components/Button';

import backgroundImage from 'assets/bgi3.jpg';
import lcPDF from 'assets/documents/lc.pdf';

import styles from 'pages/Home/styles.module.scss';

const QualityAssurance: FC = () => {

  return (
    <Domino imgPath={backgroundImage} backgroundColor="#f5f5f6">
      <Title level={3}>Гарантия качества</Title>
      <p>
        Мы имеем всю необходимую материально-техническую базу,
        сертифицированное оборудование и оснащение для подготовки к успешной проверке объекта инспектором.
        Наши специалисты обладают практическим опытом работы в органах Государственной противопожарной службы МЧC.
      </p>
      <Button
        linkTo={lcPDF}
        target="_blank"
        rel="noopener noreferrer"
      >
        Лицензия МЧС РФ
      </Button>
    </Domino>
  );
};

export default QualityAssurance;