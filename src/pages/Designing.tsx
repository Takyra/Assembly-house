import React from 'react';

import { routTitles } from 'constants/routs';
import Title from 'components/Title';
import TextList, { TextListItem } from 'components/TextList';

const DesigningPage = () => (
  <>
    <Title level={1}>{routTitles.designing}</Title>
    <TextList>
      <TextListItem>Разработка проектной документации систем пожарной сигнализации (ПС)</TextListItem>
      <TextListItem>Разработка проектной документации систем пожаротушения</TextListItem>
      <TextListItem>Разработка проектной документации систем оповещения и управления эвакуацией при пожаре (СОУЭ)</TextListItem>
      <TextListItem>Разработка проектной документации системы оповещения антитеррор</TextListItem>
      <TextListItem>Разработка проектной документации по огнезащите металлических конструкций</TextListItem>
      <TextListItem>Разработка проектной документации систем охранной сигнализации (ОС)</TextListItem>
      <TextListItem>Разработка проектной документации системы охранного телевидения (СОТ)</TextListItem>
      <TextListItem>Разработка проектной документации систем контроля и управления доступом (СКУД)</TextListItem>
      <TextListItem>Разработка проектной документации сетей связи (СС)</TextListItem>
      <TextListItem>Разработка проектной документации структурированных кабельных систем (СКС)</TextListItem>
      <TextListItem>Разработка проектной документации электроснабжения внутридомовых распределительных сетей (ЭС)</TextListItem>
    </TextList>

    <p>
      На все перечисленные работы имеется соответствующая Аттестация физических лиц на право проектирования средств
      обеспечения пожарной безопасности зданий и сооружений 26-17-2023-001753 и 26-17-2023-001356
    </p>
  </>
);

export default DesigningPage;