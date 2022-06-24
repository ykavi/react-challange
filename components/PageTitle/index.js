import { SelectBox, Text } from '@components';
import { SearchKeyWrapper, Container } from './style';

const PageTitle = () => {
  return (
    <Container>
      <div>
        <Text weight="bold" size="xlarge" color="black_v1">
          Cep Telefonları
        </Text>

        <SearchKeyWrapper>
          <Text size="medium" color="grey_v5">
            Aranan Kelime:
          </Text>
          <Text margin="0 0 0 6px" size="medium">
            iphone 11
          </Text>
        </SearchKeyWrapper>
      </div>
    </Container>
  );
};

export default PageTitle;
