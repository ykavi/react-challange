import { Col, Row } from 'react-styled-flexboxgrid';
import { PageTitle, FilterTab, SelectBox, Text, ProductList, Pagination } from '@components';

const Home = () => (
  <>
    <Row>
      <Col lg={20}>
        <PageTitle />
      </Col>

      <Col lg={4}>
        <SelectBox>
          <Text color="grey_v5">Sıralama</Text>
        </SelectBox>
      </Col>
    </Row>

    <Row>
      <Col lg={4}>
        <FilterTab />
      </Col>

      <Col lg={20}>
        <ProductList />
        <Pagination />
      </Col>
    </Row>
  </>
);

export default Home;
