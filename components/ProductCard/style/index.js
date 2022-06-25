import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  flex: 1;
  margin: 0 0 0 ${({ theme }) => theme.sizes.small};
  line-height: 1.4;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.white};
  height: 100%;
  margin-bottom: ${({ theme }) => theme.sizes.xxlarge};

  ${({ hasBorder }) =>
    hasBorder &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.grey_v2};
      border-radius: ${({ theme }) => theme.radius.normal};
    `};

  @media (max-width: ${({ theme }) => theme.flexboxgrid.breakpoints.sm}em) {
    margin-bottom: ${({ theme }) => theme.sizes.xxlarge};
  }
`;

export const BrandInfo = styled.div`
  display: flex;
`;

export const PriceContainer = styled.div`
  margin: ${({ theme }) => theme.sizes.large} 0 0 0;
`;

export const DiscountContainer = styled.div`
  display: flex;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 6px;
  left: 6px;
  right: 6px;
`;
