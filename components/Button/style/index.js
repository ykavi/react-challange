import styled from 'styled-components';

export const StyledButton = styled.a``;
export const Container = styled.div`
  border: ${({ theme }) => theme.colors.brand_color} 1px solid;
  border-radius: ${({ theme }) => theme.radius.normal};
  color: ${({ theme }) => theme.colors.brand_color};
  padding: ${({ theme }) => theme.sizes.xxsmall};
  display: flex;
  align-items: center;
  justify-content: center;
`;
