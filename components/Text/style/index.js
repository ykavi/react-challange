import styled, { css } from 'styled-components';

const centered = css`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  ${({ center }) => center && centered};
  ${({ margin }) => margin && `margin: ${margin}`};
`;

export const StyledText = styled.p`
  font-size: ${({ theme, size }) => theme.sizes[size]};
  color: ${({ theme, color }) => theme.colors[color]};
`;
