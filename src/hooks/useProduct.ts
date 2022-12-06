import { useEffect, useRef, useState } from 'react';
import type { InitialValues, IProduct, onChangeProductArgs } from '../interfaces/product';

interface useProductArgs {
  product: IProduct;
  onChange?: (args: onChangeProductArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const useProduct = ({ product, onChange, value = 0, initialValues }: useProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.counter || value);
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
  }, []);
  useEffect(() => {
    if (isMounted.current) return;
    setCounter(value);
  }, [value]);

  const increaseBy = (value: number) => {
    let newValue = Math.max(counter + value, 0);
    if (initialValues?.maxCounter) {
      newValue = Math.min(newValue, initialValues.maxCounter);
    }
    if (newValue !== counter) setCounter(newValue);
    onChange && onChange({ product, counter: newValue });
  };

  const reset = () => {
    setCounter(initialValues?.counter || value);
  };

  return {
    counter,
    isMaxCounterReached: !!initialValues?.counter && initialValues.maxCounter === counter,
    maxCounter: initialValues?.maxCounter,
    //methods
    increaseBy,
    reset,
  };
};
