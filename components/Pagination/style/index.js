import styled, { css } from 'styled-components';

export const Container = styled.section`
  padding: ${({ theme }) => theme.sizes.xxxlarge} ${({ theme }) => theme.sizes.small};
`;

export const PageItem = styled.span`
  border: ${({ theme }) => theme.sizes.base} solid ${({ theme }) => theme.colors.grey_v6};
  border-radius: ${({ theme }) => theme.radius.normal};
  padding: ${({ theme }) => theme.sizes.xxsmall} ${({ theme }) => theme.sizes.xsmall};
  cursor: pointer;
  margin-left: ${({ theme }) => theme.sizes.xsmall};

  &:hover {
    background: ${({ theme }) => theme.colors.grey_v6};
  }

  ${({ isActive }) =>
    isActive &&
    css`
      background: ${({ theme }) => theme.colors.grey_v6};
    `}
`;
