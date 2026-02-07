import React from 'react';

import { routTitles } from 'constants/routs';
import Title from 'components/Title';
import TextList, { TextListItem } from 'components/TextList';

const DocumentationPage = () => (
  <article>
    <Title level={1}>Документация по пожарной безопасности</Title>
    <TextList>
      <TextListItem>Разработка деклараций пожарной безопасности</TextListItem>
      <TextListItem>Расчет категории зданий, помещений и сооружений по пожарной и взрывопожарной опасности</TextListItem>
      <TextListItem>Расчет пожарных рисков, пожарный аудит, устранение замечаний по предписаниям</TextListItem>
      <TextListItem>Разработка и согласование СТУ (специальных технических условий) в области пожарной и промышленной безопасности</TextListItem>
    </TextList>


  </article>
);

export default DocumentationPage;