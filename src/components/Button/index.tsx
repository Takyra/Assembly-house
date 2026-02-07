import React from 'react';
import type { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './styles.module.scss';

interface IProps {
  type?: 'submit' | 'button';
  size?: 'small' | 'big';
  color?: 'primary' | 'secondary';
  maxWidth?: number;
  className?: string;
  linkTo?: string;
  onClick?: () => void;
  rel?: string;
  target?: string;
  children: ReactNode;
}

const Button: FC<IProps> = ({
  type = 'button',
  size = 'big',
  color = 'primary',
  maxWidth,
  className,
  linkTo,
  onClick,
  rel,
  target,
  children
}) => {

  return onClick ? (
    <button
      type={type}
      style={{maxHeight: maxWidth ? `${maxWidth}px` : 'auto'}}
      className={cn(
        styles.button,
        styles[`button--${size}`],
        styles[`button--${color}Color`],
        className,
      )}
      onClick={onClick}
    >
      <FontAwesomeIcon className={styles.button__icon} icon={faArrowRight} />
      {children}
    </button>
  ) : linkTo && (
    <Link
      to={linkTo}
      style={{maxHeight: maxWidth ? `${maxWidth}px` : 'auto'}}
      target={target}
      rel={rel}
      className={cn(
        styles.button,
        styles[`button--${size}`],
        styles[`button--${color}Color`],
        className,
      )}
    >
      <FontAwesomeIcon className={styles.button__icon} icon={faArrowRight} />
      {children}
    </Link>
  )
};

export default Button;