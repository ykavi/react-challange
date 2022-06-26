import { Container, PageItem } from './style';
import { paginate } from '@helpers';
import { PRODUCT_LIST } from '@mock';
import { useDispatch } from 'react-redux';
import { setProducts } from '../../redux/actions/main';
import { useEffect, useState } from 'react';

const Pagination = () => {
  const dispatch = useDispatch();
  const pages = paginate(PRODUCT_LIST, 8);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    dispatch(setProducts(pages[currentPage]));
  }, [currentPage]);

  const onClickHandle = (index) => {
    setCurrentPage(index);
  };

  return (
    <Container>
      {pages?.map((item, index) => (
        <PageItem key={index} isActive={index === currentPage} onClick={() => onClickHandle(--index)}>
          {++index}
        </PageItem>
      ))}
    </Container>
  );
};

export default Pagination;
