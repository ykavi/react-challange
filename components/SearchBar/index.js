import { useTheme } from 'styled-components';
import { StyledInput, Container, IconWrapper } from './style';
import { Search } from '@Icons';

const SearchBar = () => {
  const theme = useTheme();

  return (
    <Container>
      <IconWrapper>
        <Search width={17} />
      </IconWrapper>
      <StyledInput type="text" placeholder="25 milyon’dan fazla ürün içerisinde ara" />
    </Container>
  );
};

export default SearchBar;
