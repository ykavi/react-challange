import { CartContainer, Content, Separator } from './style';
import Text from '../Text';
import CartProduct from './CartProduct';

const Cart = ({ isCartOpen }) => {
  return (
    <CartContainer onClick={(e) => e.stopPropagation()} isCartOpen={isCartOpen}>
      <Separator />

      <Content>
        <CartProduct />
        <CartProduct />
      </Content>
    </CartContainer>
  );
};
export default Cart;
