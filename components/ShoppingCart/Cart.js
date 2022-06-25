import { useSelector } from 'react-redux';
import { CartContainer, Content, Separator } from './style';
import CartProduct from './CartProduct';

const Cart = ({ isCartOpen }) => {
  const basketProducts = useSelector((store) => store.main.basket);

  return (
    <CartContainer onClick={(e) => e.stopPropagation()} isCartOpen={isCartOpen}>
      <Separator />
      {!basketProducts.length && <p>Sepette ürün bulunmamakta...</p>}
      <Content>
        {basketProducts?.map((product, index) => (
          <CartProduct key={index} product={product} itemIndex={index} />
        ))}
      </Content>
    </CartContainer>
  );
};
export default Cart;
