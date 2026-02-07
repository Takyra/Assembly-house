import React from 'react';

import { routTitles } from 'constants/routs';
import Title from 'components/Title';
import TextList, { TextListItem } from 'components/TextList';

const FireSafety = () => (
  <article>
    <Title level={1}>{routTitles.fireSafety}</Title>
    <TextList pulse>
      <TextListItem>Монтаж, техническое обслуживание и ремонт систем пожарной сигнализации</TextListItem>
      <TextListItem>Монтаж, техническое обслуживание и ремонт систем оповещения и управления эвакуацией при пожаре (СОУЭ)</TextListItem>
      <TextListItem>Разработка и изготовление планов эвакуации при пожаре и ЧС</TextListItem>
      <TextListItem>Монтаж, техническое обслуживание и ремонт систем модульного, газового и водяного пожаротушения</TextListItem>
      <TextListItem>Монтаж, техническое обслуживание и ремонт систем противопожарного водоснабжения</TextListItem>
      <TextListItem>Испытание пожарных кранов и гидрантов на водоотдачу</TextListItem>
      <TextListItem>Монтаж, техническое обслуживание и ремонт систем противодымной вентиляции</TextListItem>
      <TextListItem>Монтаж, техническое обслуживание и ремонт противопожарных занавесов и завес</TextListItem>
      <TextListItem>Монтаж, противопожарных дверей, ворот, люков, пожарных шкафов и щитов</TextListItem>
      <TextListItem>Выполнение работ по огнезащите деревянных и металлических конструкций, тканей и занавесей</TextListItem>
      <TextListItem>Изготовление и монтаж металлических пожарных лестниц и ограждений кровли зданий</TextListItem>
      <TextListItem>Испытание пожарных лестниц и ограждений кровлиНа все перечисленные работы имеется соответствующая</TextListItem>
    </TextList>

    <p>Лицензия МЧС 26-06-2023-003848 (Л014-00101-26/00681860)</p>
    <p>Гарантия на все перечисленные виды работ 1 (один) год.</p>
  </article>
);

export default FireSafety;