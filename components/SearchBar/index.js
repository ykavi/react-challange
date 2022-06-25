import { StyledInput, Container, IconWrapper } from './style';
import { Search } from '@Icons';
import { PRODUCT_LIST } from '@mock';
import { useDispatch } from 'react-redux';
import { setProducts } from '../../redux/actions/main';
import { useEffect, useState } from 'react';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const [filteredProducts, setFilteredProducts] = useState();

  useEffect(() => {
    const filteredItems = PRODUCT_LIST.filter((item) => item.title.includes(inputValue));
    setFilteredProducts(filteredItems);
  }, [inputValue]);

  useEffect(() => {
    if (inputValue.length > 2) dispatch(setProducts(filteredProducts));
  }, [filteredProducts]);

  const onChangeHandle = (e) => {
    const { value } = e.target;
    setInputValue(value);
  };

  return (
    <Container>
      <IconWrapper>
        <Search width={17} />
      </IconWrapper>
      <StyledInput onChange={onChangeHandle} type="text" placeholder="25 milyon’dan fazla ürün içerisinde ara" />
    </Container>
  );
};

export default SearchBar;
