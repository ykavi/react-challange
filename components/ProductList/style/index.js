import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.flexboxgrid.breakpoints.sm}em) {
    margin: ${({ theme }) => theme.sizes.medium} 0;
  }
`;
