import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 46px;
  justify-content: space-around;
  cursor: pointer;
  position: relative;
  border: ${({ theme }) => theme.sizes.base} solid ${({ theme }) => theme.colors.grey_v6};
  border-radius: ${({ theme }) => theme.radius.normal};
  width: 7.4rem;
  float: right;
`;

export const ItemList = styled.div`
  background: ${({ theme }) => theme.colors.black_v1};
  position: absolute;
  bottom: -65px;
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
  font-size: 12px;

  ul {
    margin: 0;

    svg {
      margin: 0 ${({ theme }) => theme.sizes.xxxsmall} 0 ${({ theme }) => theme.sizes.xxxxsmall};
    }

    li {
      padding: ${({ theme }) => theme.sizes.xxsmall} 0 ${({ theme }) => theme.sizes.xxsmall} ${({ theme }) => theme.sizes.xxsmall};
      &:hover {
        background: ${({ theme }) => theme.colors.black_v2};
      }
    }
  }
`;
