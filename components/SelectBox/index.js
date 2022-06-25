import { Container, ItemList } from './style';
import { Select, Tick } from '@Icons';
import { useState } from 'react';

const SelectBox = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const onClickHandle = () => {
    alert('item selected');
  };

  return (
    <Container onClick={() => setIsVisible(!isVisible)}>
      <span>{children}</span>
      <Select width={10} />

      {isVisible && (
        <ItemList>
          <ul>
            <li onClick={onClickHandle}>
              <Tick width={12} />
              En Düşük Fiyat
            </li>
            <li onClick={onClickHandle}>
              <Tick width={12} />
              En Yüksek Fiyat
            </li>
          </ul>
        </ItemList>
      )}
    </Container>
  );
};

export default SelectBox;
