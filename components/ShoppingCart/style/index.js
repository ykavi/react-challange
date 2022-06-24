import styled from 'styled-components';

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

export const CartContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.grey_v2};
  position: absolute;
  width: 20rem;
  top: 45px;
  border-radius: ${({ theme }) => theme.radius.normal};
  padding: ${({ theme }) => theme.sizes.medium};
`;

export const Content = styled.div`
  padding: ${({ theme }) => theme.sizes.medium} 0;
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
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
