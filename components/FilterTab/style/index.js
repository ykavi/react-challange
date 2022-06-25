import styled from 'styled-components';

export const Container = styled.div`
  margin: ${({ theme }) => theme.sizes.large} 0;
`;

export const ItemWrapper = styled.div`
  margin: ${({ theme }) => theme.sizes.xxxlarge} 0;
  @media (max-width: ${({ theme }) => theme.flexboxgrid.breakpoints.xs}em) {
    display: none;
  }
`;
