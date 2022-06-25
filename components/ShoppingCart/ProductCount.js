import { ProductCountText } from './style';
import { useSelector } from 'react-redux';

const ProductCount = () => {
  const currentBasketProducts = useSelector((store) => store.main.basket);

  return (
    <>
      <ProductCountText>{currentBasketProducts?.length}</ProductCountText>
    </>
  );
};

export default ProductCount;
