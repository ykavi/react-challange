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
  bottom: -36px;
  width: 100%;
  color: ${({ theme }) => theme.colors.white};

  ul {
    margin: 0;
  }
  li {
    padding: 5px;
  }
`;
