import Head from 'next/head';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import { PageTitle, FilterTab } from '@components';

const Home = () => (
  <>
    <Col>
      <PageTitle />
    </Col>

    <Col lg={5}>
      <FilterTab />
    </Col>
  </>
);

export default Home;
