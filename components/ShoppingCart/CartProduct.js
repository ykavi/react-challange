import { ItemInfo, Wrapper } from './style';
import { Text, NImage, Button } from '../';
import { Col, Row } from 'react-styled-flexboxgrid';

const CartProduct = () => {
  const onClickHandle = (e) => {
    alert('product click');
    e.stopPropagation();
  };

  return (
    <Wrapper onClick={onClickHandle}>
      <Row>
        <Col lg={7}>
          <NImage src="https://cdn.dsmcdn.com/ty119/product/media/images/20210524/14/91056373/57025599/1/1_org_zoom.jpg" alt="alt" />
        </Col>
        <Col lg={17}>
          <ItemInfo>
            <Text margin="0 6px" size="small">
              Spiderman Yeni Örümcek Adam 2 Maskeli Kostüm v733v
            </Text>
            <Col lg={10}>
              <Button>
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
