import { CartContainer, Content } from './style';
import Text from '../Text';
import CartProduct from './CartProduct';

const Cart = () => {
  return (
    <CartContainer>
      <Text>Sepetim (3 ürün)</Text>

      <Content>
        <CartProduct />
        <CartProduct />
      </Content>
    </CartContainer>
  );
};
export default Cart;
