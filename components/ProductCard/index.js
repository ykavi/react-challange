import { useState } from 'react';
import { Container, BrandInfo, PriceContainer, DiscountContainer, ButtonWrapper } from './style';
import { NImage, Button } from '@components';
import Text from '../Text';

const ProductCard = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Container hasBorder={isHover} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
      <NImage src="https://cdn.dsmcdn.com/ty119/product/media/images/20210524/14/91056373/57025599/1/1_org_zoom.jpg" alt="alt" hasBorder={!isHover} />
      <Text margin="10px" size="small" color="black_v1" ellipsis={2}>
        Apple iPhone 11 Pro Maxi Phone 11 Pro Max iPhone 11 (Max 2 Line) asd asdsa
      </Text>

      {!isHover && (
        <>
          <BrandInfo>
            <Text margin="0 0 0 10px" weight="bold" size="small" color="black_v1" ellipsis={2}>
              Marka:
            </Text>
            <Text margin="0 0 0 6px" size="small" color="black_v1">
              Apple
            </Text>
          </BrandInfo>

          <PriceContainer>
            <Text margin="0 0 0 10px" weight="bold" size="small" color="black_v1" ellipsis={2}>
              90,85 TL
            </Text>

            <DiscountContainer>
              <Text margin="0 0 0 10px" size="xsmall" color="grey_v7" strikeout>
                124,00 TL
              </Text>
              <Text margin="0 0 0 4px" size="xsmall" color="brand_color" weight="bold">
                12%
              </Text>
            </DiscountContainer>
          </PriceContainer>
        </>
      )}

      {isHover && (
        <>
          <ButtonWrapper>
            <Button backGroundColor="orange_v2" color="orange_v1">
              Sepete Ekle
            </Button>
          </ButtonWrapper>

          {false && (
            <ButtonWrapper>
              <Button backGroundColor="grey_v2">
                <Text size="small" color="grey_v5">
                  Bu Ürün Sepete Eklenemez.
                </Text>
              </Button>
            </ButtonWrapper>
          )}
        </>
      )}
    </Container>
  );
};

export default ProductCard;
