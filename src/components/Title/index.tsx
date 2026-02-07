import React from 'react';
import type { FC, ReactNode } from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

interface ButtonProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  children: ReactNode;
}

const Title: FC<ButtonProps> = ({
  level = 1,
  className,
  children,
}) => {
  switch (level) {
    case 1:
      return <h1 className={cn(styles.title, className)}>{children}</h1>;
    case 2:
      return <h2 className={cn(styles.title, className)}>{children}</h2>;
    case 3:
      return <h3 className={cn(styles.title, className)}>{children}</h3>;
    case 4:
      return <h4 className={cn(styles.title, className)}>{children}</h4>;
    case 5:
      return <h5 className={cn(styles.title, className)}>{children}</h5>;
    case 6:
      return <h6 className={cn(styles.title, className)}>{children}</h6>;
    default:
      return <div className={cn(styles.title, className)}>{children}</div>;
  }
};

export default Title;