import { useState } from 'react';
import { Container, BrandInfo, PriceContainer, DiscountContainer, ButtonWrapper } from './style';
import { NImage, Button, Text } from '@components';
import { formatPrice, formatDiscount } from '@helpers';
import { useSelector, useDispatch } from 'react-redux';
import { setBasket } from '../../redux/actions/main';

const getInfoButton = () => (
  <ButtonWrapper>
    <Button backGroundColor="grey_v2">
      <Text size="small" color="grey_v5">
        Bu Ürün Sepete Eklenemez.
      </Text>
    </Button>
  </ButtonWrapper>
);

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const [isHover, setIsHover] = useState(false);
  const currentBasketProducts = useSelector((store) => store.main.basket);
  const hasBasketProduct = currentBasketProducts.some((item) => item.id === product.id);

  const CardButtons = () => (
    <>
      {hasBasketProduct ? (
        getInfoButton()
      ) : (
        <ButtonWrapper onClick={() => dispatch(setBasket([product, ...currentBasketProducts]))}>
          <Button backGroundColor="orange_v2" color="orange_v1">
            Sepete Ekle
          </Button>
        </ButtonWrapper>
      )}
    </>
  );

  return (
    <Container hasBorder={isHover} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
      <NImage src={product?.imageUrl} alt="alt" hasBorder={!isHover} />
      <Text margin="10px" size="small" color="black_v1" ellipsis={2}>
        {product?.title}
      </Text>

      {!isHover && (
        <>
          <BrandInfo>
            <Text margin="0 0 0 10px" weight="bold" size="small" color="black_v1" ellipsis={2}>
              Marka:
            </Text>
            <Text margin="0 0 0 6px" size="small" color="black_v1">
              {product?.brand}
            </Text>
          </BrandInfo>

          <PriceContainer>
            <Text margin="0 0 0 10px" weight="bold" size="small" color="black_v1" ellipsis={2}>
              {formatPrice(product?.price?.buyPrice)}
            </Text>

            <DiscountContainer>
              <Text margin="0 0 0 10px" size="xsmall" color="grey_v7" strikeout>
                {formatPrice(product?.price?.marketPrice)}
              </Text>
              <Text margin="0 0 0 4px" size="xsmall" color="brand_color" weight="bold">
                {formatDiscount(product?.price?.discount)}
              </Text>
            </DiscountContainer>
          </PriceContainer>
        </>
      )}

      {isHover && <CardButtons />}
    </Container>
  );
};

export default ProductCard;
