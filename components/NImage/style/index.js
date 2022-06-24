import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.grey_v2};
  border-radius: ${({ theme }) => theme.radius.normal};
`;
