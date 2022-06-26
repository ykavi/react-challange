import { useRouter } from 'next/router';
import { Container, ItemList, IconWrapper } from './style';
import { Select, Tick } from '@Icons';
import { useState } from 'react';
import { FILTER_KEYS } from '@enums';
import { PRODUCT_LIST } from '@mock';
import { sortByPrice, getSelectBoxText } from '@helpers';
import { setProducts } from '../../redux/actions/main';
import { useDispatch } from 'react-redux';
import { Text } from '@components';

const SelectBox = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { filterKey } = router.query;
  const [isVisible, setIsVisible] = useState(false);
  const isLowSort = filterKey === 'low';
  const isHighSort = filterKey === 'high';

  const onClickHandle = (key) => {
    router.push({
      pathname: '/',
      query: {
        filterKey: key,
      },
    });
    let sortedData;
    if (key === 'high') sortedData = PRODUCT_LIST.sort(sortByPrice).reverse();
    if (key === 'low') sortedData = PRODUCT_LIST.sort(sortByPrice);
    dispatch(setProducts([...sortedData]));
  };

  return (
    <Container onClick={() => setIsVisible(!isVisible)}>
      <span>
        <Text color="grey_v5">{getSelectBoxText(isLowSort, isHighSort)}</Text>
      </span>
      <Select width={10} />

      {isVisible && (
        <ItemList>
          <ul>
            <li onClick={() => onClickHandle(FILTER_KEYS[0])}>
              <IconWrapper>{isLowSort && <Tick width={12} />}</IconWrapper>
              En Düşük Fiyat
            </li>
            <li onClick={() => onClickHandle(FILTER_KEYS[1])}>
              <IconWrapper>{isHighSort && <Tick width={12} />}</IconWrapper>
              En Yüksek Fiyat
            </li>
          </ul>
        </ItemList>
      )}
    </Container>
  );
};

export default SelectBox;
