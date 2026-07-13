import cn from 'classnames';
import styles from './button.module.scss';
import { useContext } from 'react';
import { ThemeContext } from '../ThemeProvider/ThemeProvider';

export const Button = ({
  title,
  onClick,
  disabled,
  className,
  sizeViewVariant = 'xl',
  colorViewVariant = 'active',
}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      className={cn(className, styles.colorViewVariant)}
      disabled={disabled}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
