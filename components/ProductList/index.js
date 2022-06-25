import ProductCard from '../ProductCard';
import { Container } from './style';

const ProductList = () => {
  return (
    <Container>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </Container>
  );
};
export default ProductList;
