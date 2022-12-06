import React, { useContext } from 'react';
import { ProductContext } from './ProductCard';
import type { ProductTitleProps } from '../interfaces/product';
import styles from '../styles/styles.module.css';

export const ProductTitle = ({ title, className = '', style}: ProductTitleProps) => {
  const { product } = useContext(ProductContext);
  return <span style={style} className={`${styles.productDescription} ${className}`}>{title ? title : product.title}</span>;
};
