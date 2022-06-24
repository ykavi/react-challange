import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 46px;
  justify-content: center;
  cursor: pointer;
  position: relative;
  border: ${({ theme }) => theme.sizes.base} solid ${({ theme }) => theme.colors.grey_v6};
  border-radius: ${({ theme }) => theme.radius.normal};
  width: 7.4rem;
  float: right;

  ${({ isCartOpen }) =>
    isCartOpen &&
    css`
      border-bottom-color: ${({ theme }) => theme.colors.white};
      border-bottom-right-radius: initial;
      border-bottom-left-radius: initial;
    `}

  @media (max-width: ${({ theme }) => theme.flexboxgrid.breakpoints.sm}em) {
    position: absolute;
    height: auto;
    right: 9px;
    top: 10px;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
`;

export const Separator = styled.span`
  position: absolute;
  width: 119px;
  right: 0px;
  top: -2px;
  height: 2px;
  background: ${({ theme }) => theme.colors.white};
`;

export const CartContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.grey_v2};
  position: absolute;
  width: 19rem;
  top: 45px;
  right: -1px;
  border-radius: ${({ theme }) => theme.radius.normal};
  padding: 0 ${({ theme }) => theme.sizes.xlarge};

  ${({ isCartOpen }) =>
    isCartOpen &&
    css`
      border-top-left-radius: initial;
      border-top-right-radius: initial;
    `};
`;

export const Content = styled.div`
  padding: ${({ theme }) => theme.sizes.medium} 0 0 0;
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const Wrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.sizes.xxlarge};
`;

export const ProductCountText = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.radius.circle};
  width: 1.1rem;
  height: 1.1rem;
  background-color: ${({ theme }) => theme.colors.brand_color};
  font-size: ${({ theme }) => theme.sizes.xsmall};
  color: ${({ theme }) => theme.colors.white};
  position: absolute;
  right: -6px;
  top: -6px;
  line-height: 0;
`;
