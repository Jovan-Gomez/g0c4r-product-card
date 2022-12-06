import React, { createContext } from 'react';
import { useProduct } from '../hooks/useProduct';
import type { ProductCardProps, ProductContextProps } from '../interfaces/product';
import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({
  product,
  children,
  className = '',
  style,
  onChange,
  value,
  initialValues,
}: ProductCardProps) => {
  const { counter, increaseBy, reset, maxCounter, isMaxCounterReached } = useProduct({
    product,
    onChange,
    value,
    initialValues,
  });
  return (
    <Provider
      value={{
        counter,
        maxCounter,
        product,
        // methods
        increaseBy,
      }}
    >
      <div style={style} className={`${styles.productCard} ${className}`}>
        {children({
          counter,
          maxCounter,
          isMaxCounterReached,
          product,
          // methods
          increaseBy,
          reset,
        })}
      </div>
    </Provider>
  );
};
