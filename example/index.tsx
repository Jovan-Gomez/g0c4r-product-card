import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../.';

const product = {
  id: 1,
  title: 'Coffe Mug',
  // image: '/coffee-mug.png',
};

const App = () => {
  return (
    <div>
      <ProductCard
        product={product}
        initialValues={{
          counter: 0,
          // maxCounter: 15,
        }}
      >
        {({ reset, increaseBy, isMaxCounterReached }) => {
          return (
            <>
              <ProductImage />
              <ProductTitle />
              <ProductButtons />
            </>
          );
        }}
      </ProductCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
