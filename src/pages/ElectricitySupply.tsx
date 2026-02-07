import React from 'react';

import { routTitles } from 'constants/routs';
import Title from 'components/Title';
import TextList, { TextListItem } from 'components/TextList';

const ElectricitySupplyPage = () => (
  <article>
    <Title level={1}>{routTitles.electricitySupply}</Title>
    <TextList>
      <TextListItem>Электромонтажные работы электроснабжения внутридомовых распределительных сетей (ЭС)</TextListItem>
    </TextList>


  </article>
);

export default ElectricitySupplyPage;