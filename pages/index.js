import { Col, Row } from 'react-styled-flexboxgrid';
import { PageTitle, FilterTab, SelectBox, Text, ProductList, Pagination } from '@components';

const Home = () => (
  <>
    <Row>
      <Col lg={20} md={20} sm={20} xs={20}>
        <PageTitle />
      </Col>

      <Col lg={4} md={4} sm={4} xs={4}>
        <SelectBox>
          <Text color="grey_v5">Sıralama</Text>
        </SelectBox>
      </Col>
    </Row>

    <Row>
      <Col lg={4} md={4} sm={4} xs={0}>
        <FilterTab />
      </Col>

      <Col lg={20} md={20} sm={20} xs={23}>
        <ProductList />
        <Pagination />
      </Col>
    </Row>
  </>
);

export default Home;
