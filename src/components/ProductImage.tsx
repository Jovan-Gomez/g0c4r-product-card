import React, { useContext } from 'react';
import { ProductContext } from './ProductCard';
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';
import { ProductImageProps } from '../interfaces/product';

export const ProductImage = ({ image = '', className = '', style }: ProductImageProps) => {
  let imageToShow: string;
  const { product } = useContext(ProductContext);
  if (image) {
    imageToShow = image;
  } else if (product.image) {
    imageToShow = product.image;
  } else {
    imageToShow = noImage;
  }
  return <img style={style} src={imageToShow} alt={'Product'} className={`${styles.productImg} ${className}`} />;
};
