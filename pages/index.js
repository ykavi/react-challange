import Head from 'next/head';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import { PageTitle, FilterTab } from '@components';

const Home = () => (
  <Grid>
    <PageTitle />
    <FilterTab />
  </Grid>
);

export default Home;
