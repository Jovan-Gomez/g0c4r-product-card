import React, { useCallback, useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';
import type { ProductButtonsProps } from '../interfaces/product';

export const ProductButtons = ({ className = '', style }: ProductButtonsProps) => {
  const { counter, increaseBy, maxCounter } = useContext(ProductContext);

  const isMaxReached = useCallback(() =>  !!maxCounter && counter === maxCounter , [counter, maxCounter]);

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button className={`${styles.buttonAdd} ${isMaxReached() ? styles.disabled : ''}`} onClick={() => increaseBy(+1)}>
        +
      </button>
    </div>
  );
};
