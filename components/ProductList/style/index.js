import styled from 'styled-components';

export const Container = styled.section`
  @media (max-width: ${({ theme }) => theme.flexboxgrid.breakpoints.sm}em) {
    margin: ${({ theme }) => theme.sizes.medium} 0;
  }

  .list-wrapper {
    margin-bottom: ${({ theme }) => theme.sizes.large};
  }
`;
