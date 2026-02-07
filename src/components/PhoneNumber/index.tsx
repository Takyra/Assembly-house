import React from 'react';
import type { FC } from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

interface IProps {
  className?: string;
  children: string;
}

const PhoneNumber: FC<IProps> = ({ className, children }) => {
  const phone = children
                        .replace(/[^0-9]/g, '')
                        .slice(1);

  const formatted = phone.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/g, `+7 ($1) $2-$3-$4`);

  return (
    <a
      href={`tel:+7${phone}`}
      target="_blank"
      className={cn(styles.phoneNumber, className)}
    >
      {formatted}
    </a>
  );
};

export default PhoneNumber;