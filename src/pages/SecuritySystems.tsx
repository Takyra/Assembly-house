import React from 'react';

import { routTitles } from 'constants/routs';
import Title from 'components/Title';
import TextList, { TextListItem } from 'components/TextList';

const SecuritySystemsPage = () => (
  <article>
    <Title level={1}>{routTitles.securitySystems}</Title>
    <TextList>
      <TextListItem>Монтаж, техническое обслуживание и ремонт систем охранной сигнализации (ОС)</TextListItem>
      <TextListItem>Монтаж, техническое обслуживание и ремонт видеонаблюдения с возможностью удаленного просмотра (СОТ)</TextListItem>
      <TextListItem>Монтаж, техническое обслуживание и ремонт систем контроля и управления доступом (СКУД)</TextListItem>
      <TextListItem>Монтаж, техническое обслуживание и ремонт сетей связи (СС)</TextListItem>
      <TextListItem>Монтаж, техническое обслуживание и ремонт структурированных кабельных систем (СКС)</TextListItem>
      <TextListItem>Монтаж видеодомофонов с возможностью удаленного управления через телефон</TextListItem>
      <TextListItem>Монтаж автоматики для откатных, секционных и распашных ворот</TextListItem>
    </TextList>

    <p>
      Опыт работы в области систем безопасности более 10 лет;<br/>
      Проконсультируем по всем вопросам пожарной безопасности, и поможем в их решении.
    </p>
    <p>Гарантия на все перечисленные виды работ 1 (один) год.</p>
  </article>
);

export default SecuritySystemsPage;