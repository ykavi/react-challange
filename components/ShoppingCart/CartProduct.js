import { ItemInfo, Wrapper } from './style';
import { Text, NImage, Button } from '../';
import { Col, Row } from 'react-styled-flexboxgrid';
import { useSelector, useDispatch } from 'react-redux';
import { setBasket } from '../../redux/actions/main';

const CartProduct = ({ product, itemIndex }) => {
  const dispatch = useDispatch();
  const basketProduct = useSelector((store) => store.main.basket);

  const onClickHandle = () => {
    const cloneBasketProduct = [...basketProduct];
    cloneBasketProduct.splice(itemIndex, 1);

    dispatch(setBasket(cloneBasketProduct));
  };

  return (
    <Wrapper>
      <Row>
        <Col lg={7} md={7} sm={7} xs={7}>
          <NImage src="https://cdn.dsmcdn.com/ty119/product/media/images/20210524/14/91056373/57025599/1/1_org_zoom.jpg" alt="alt" hasBorder />
        </Col>
        <Col lg={17} md={17} sm={17} xs={17}>
          <ItemInfo>
            <Text margin="0 6px" size="small" ellipsis={2}>
              {product?.title}
            </Text>
            <Col lg={10}>
              <Button onClickHandle={onClickHandle} margin="0 6px" hasBorder color="brand_color">
                <Text size="xsmall">Kaldır</Text>
              </Button>
            </Col>
          </ItemInfo>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default CartProduct;
