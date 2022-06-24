import { Col, Grid, Row } from 'react-styled-flexboxgrid';
import { StyledHeader, LogoWrapper } from './style';
import { SearchBar, ShoppingCart } from '@components';
import Link from 'next/link';
import { Logo } from '@Icons';

const Header = () => (
  <StyledHeader>
    <Grid>
      <Row>
        <Col lg={5} md={4} sm={4} xs={8}>
          <Link href="/">
            <LogoWrapper>
              <Logo width="100%" />
            </LogoWrapper>
          </Link>
        </Col>

        <Col lg={16} md={17} sm={17} xs={24}>
          <SearchBar />
        </Col>

        <Col lg={3} md={3} sm={3} xs={12}>
          <ShoppingCart />
        </Col>
      </Row>
    </Grid>
  </StyledHeader>
);

export default Header;
