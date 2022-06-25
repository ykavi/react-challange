import { Container, PageItem } from './style';

const Pagination = () => {
  return (
    <Container>
      <PageItem isActive>1</PageItem>
      <PageItem>2</PageItem>
      <PageItem>3</PageItem>
    </Container>
  );
};

export default Pagination;
