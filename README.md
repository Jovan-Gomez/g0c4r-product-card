# g0c4r-product-card

Este es un paquete de prueba para la creación de componentes de React.

## Instalación

```bash
npm install g0c4r-product-card
```

```bash
yarn add g0c4r-product-card
```

```bash
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from 'components';
```

```bash
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
```
