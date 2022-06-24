import { useState } from 'react';
import { Container } from './style';
import Cart from './Cart';
import ProductCount from './ProductCount';
import { Text } from '@components';

const ShoppingCart = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const onClickHandle = () => setIsCartOpen(!isCartOpen);

  return (
    <Container onClick={onClickHandle} isCartOpen={isCartOpen}>
      <Text color="grey_v5">Sepetim</Text>
      <ProductCount />
      {isCartOpen && <Cart isCartOpen={isCartOpen} />}
    </Container>
  );
};

export default ShoppingCart;
