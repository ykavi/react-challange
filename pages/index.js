import { Col, Row } from 'react-styled-flexboxgrid';
import { PageTitle, FilterTab, SelectBox, Text } from '@components';

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

    <Col lg={5}>
      <FilterTab />
    </Col>
  </>
);

export default Home;
