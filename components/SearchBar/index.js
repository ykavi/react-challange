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
    console.log(PRODUCT_LIST);
    const filteredItems = PRODUCT_LIST.filter((item) => item.title.toLowerCase().includes(inputValue.toLowerCase()));
    setFilteredProducts(filteredItems);
  }, [inputValue]);

  useEffect(() => {
    const inputValueLength = inputValue?.length;
    if (inputValueLength < 2) dispatch(setProducts(PRODUCT_LIST));
    if (inputValueLength > 2) dispatch(setProducts(filteredProducts));
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
