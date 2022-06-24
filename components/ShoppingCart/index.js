import { useTheme } from 'styled-components';
import { Container, IconWrapper } from './style';
import Cart from './Cart';
import ProductCount from './ProductCount';
import { Basket } from '@Icons';
import { Text } from '@components';

const ShoppingCart = () => {
  const theme = useTheme();

  return (
    <Container>
      <Text color="grey_v5">Sepetim</Text>
      <ProductCount />
      {/*
        <Cart /> SEPET İÇİ
       */}
    </Container>
  );
};

export default ShoppingCart;
