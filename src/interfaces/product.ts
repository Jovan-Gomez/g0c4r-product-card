import type { CSSProperties } from 'react';

export interface IProduct {
  id: number;
  title: string;
  image?: string;
}
export interface ProductCardProps {
  product: IProduct;
  children: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  style?: CSSProperties;
  onChange?: (args: onChangeProductArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}
export interface InitialValues {
  counter?: number;
  maxCounter?: number;
}
export interface ProductCardHandlers {
  counter: number;
  isMaxCounterReached: boolean;
  maxCounter?: number;
  product: IProduct;

  increaseBy: (value: number) => void;
  reset: () => void;
}
export interface onChangeProductArgs {
  product: IProduct;
  counter: number;
}
export interface ProductContextProps {
  counter: number;
  maxCounter?: number;
  product: IProduct;
  increaseBy: (value: number) => void;
}
export interface ProductTitleProps {
  title?: string;
  className?: string;
  style?: CSSProperties;
}
export interface ProductImageProps {
  image?: string;
  className?: string;
  style?: CSSProperties;
}
export interface ProductButtonsProps {
  className?: string;
  style?: CSSProperties;
}
export interface ProductInCart extends IProduct {
  counter: number;
}

export interface ProductCardHOCProps {
  ({ product, children }: ProductCardProps): JSX.Element;
  Title: ({ title }: ProductTitleProps) => JSX.Element;
  Image: ({ image }: ProductImageProps) => JSX.Element;
  Buttons: ({ className }: ProductButtonsProps) => JSX.Element;
}
