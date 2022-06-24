import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import { Header, Footer } from '@components';
import { Main } from './style';

const MainLayout = ({ children }) => (
  <>
    <Header />
    <Grid>
      <Main>{children}</Main>
    </Grid>
    <Footer />
  </>
);

export default MainLayout;
