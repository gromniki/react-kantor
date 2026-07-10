import { useScrollProgress } from './useScrollProgress';
import styles from './scroll.module.scss';
import cn from 'classnames';

export const ScrollProgress = () => {
  const progress = useScrollProgress();

  return (
    <div
      className={cn(styles['scroll-progress'], {
        [styles.active]: progress > 0,
      })}
      style={{ width: `${progress}%` }}
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
    />
  );
};
