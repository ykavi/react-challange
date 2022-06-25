import { Col, Row } from 'react-styled-flexboxgrid';
import ProductCard from '../ProductCard';
import { Container } from './style';
import { useSelector } from 'react-redux';

const ProductList = () => {
  const products = useSelector((store) => store.main.products);

  return (
    <Container>
      <Row>
        {products?.map((product) => (
          <Col key={product?.id} lg={6} md={6} sm={6} xs={12}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
