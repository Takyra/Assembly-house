import React from 'react';
import type { FC, ReactNode } from 'react';
import cn from 'classnames';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './styles.module.scss';

interface ITextListProps {
  pulse?: boolean;
  className?: string;
  children: ReactNode;
}

interface ITextListItemProps {
  children: ReactNode;
}

export const TextListItem: FC<ITextListItemProps> = ({ children }) => (
  <li className={cn(styles.textList__item)}>
    <FontAwesomeIcon className={styles.textList__icon} icon={faCheck} />
    {children}
  </li>
);

const TextList: FC<ITextListProps> = ({ pulse, className, children }) => (
  <ul className={cn(styles.textList, className, pulse && styles['textList--pulse'])}>
    {children}
  </ul>
);

export default TextList;