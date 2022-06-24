import { Container, ItemList } from './style';
import { Select } from '@Icons';

const SelectBox = ({ children }) => {
  return (
    <Container>
      <span>{children}</span>
      <Select width={10} />

      <ItemList>
        <ul>
          <li>test</li>
          <li>test</li>
        </ul>
      </ItemList>
    </Container>
  );
};

export default SelectBox;
