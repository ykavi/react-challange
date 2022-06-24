import styled from 'styled-components';

export const StyledInput = styled.input`
  padding: 0 ${({ theme }) => theme.sizes.medium} 0 3.3rem;
  background: ${({ theme }) => theme.colors.grey_v3};
  width: 75%;
  border: none;
  border-radius: ${({ theme }) => theme.radius.search};
  outline: none;
  font-size: ${({ theme }) => theme.sizes.medium};
  height: ${({ theme }) => theme.sizes.xxxxlarge};
  font-weight: ${({ theme }) => theme.weight.medium};
  font-size: ${({ theme }) => theme.sizes.small};

  &::placeholder {
    color: ${({ theme }) => theme.colors.grey_v5};
    font-weight: ${({ theme }) => theme.weight.medium};
    font-size: ${({ theme }) => theme.sizes.small};
  }

  @media (max-width: ${({ theme }) => theme.flexboxgrid.breakpoints.sm}em) {
    width: 100%;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: relative;

  @media (max-width: ${({ theme }) => theme.flexboxgrid.breakpoints.sm}em) {
    margin-top: ${({ theme }) => theme.sizes.xxxsmall};
    padding: 0;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  position: absolute;
  cursor: pointer;
  left: 5.8rem;

  @media (max-width: ${({ theme }) => theme.flexboxgrid.breakpoints.sm}em) {
    position: absolute;
    right: ${({ theme }) => theme.sizes.large};
  }
`;
