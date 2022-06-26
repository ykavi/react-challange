import { Col, Row } from 'react-styled-flexboxgrid';
import { PageTitle, FilterTab, SelectBox, Text, ProductList, Pagination } from '@components';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setProducts } from '../redux/actions/main';
import { PRODUCT_LIST } from '@mock';
import { EXCLUDE_FILTER_KEYS } from '@enums';

const Home = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { filterKey } = router.query;

  useEffect(() => {
    if (!filterKey) return;
    if (EXCLUDE_FILTER_KEYS.includes(filterKey)) return;

    const filteredData = PRODUCT_LIST.filter((item) => item.brand?.toLowerCase() === filterKey?.toLowerCase());
    dispatch(setProducts(filteredData));
  }, [filterKey]);

  return (
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
};

export default Home;
