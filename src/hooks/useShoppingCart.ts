import { useState } from 'react';
import type { IProduct, ProductInCart } from '../interfaces/product';

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

  const onProductCountChange = ({ product, counter }: { product: IProduct; counter: number }) => {
    setShoppingCart((prevState) => {
      if (counter === 0) {
        const { [product.id]: toDelete, ...rest } = prevState;
        return rest;
      }
      return {
        ...prevState,
        [product.id]: {
          ...product,
          counter,
        },
      };
    });
  };

  return {
    shoppingCart,
    onProductCountChange,
  };
};
