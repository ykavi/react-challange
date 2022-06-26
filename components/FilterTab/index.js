import { useRouter } from 'next/router';
import { Text } from '@components';
import { PRODUCT_LIST, TAB_DATA } from '@mock';
import { TAB_TYPE } from '@enums';
import { Container, ItemWrapper } from './style';
import { useDispatch } from 'react-redux';
import { setProducts } from '../../redux/actions/main';

const FilterTab = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { filterKey } = router.query;

  const onClickHandle = (key, type) => {
    router.push({
      pathname: '/',
      query: {
        filterKey: key,
      },
    });

    if (type === TAB_TYPE.FILTER) {
      const filteredData = PRODUCT_LIST.filter((item) => item.brand.toLowerCase() === key.toLowerCase());
      dispatch(setProducts(filteredData));
    }
  };

  const getFilterTab = (item) => (
    <ItemWrapper key={item.title}>
      <ul>
        <Text margin="0 0 24px 0" weight="medium" color="black_v1">
          {item.title}
        </Text>

        {item.subTitle.map((subItem) => (
          <li key={subItem.title}>
            <Text
              hoverColor="brand_color"
              margin="0 52px 6px 0"
              size="small"
              color={filterKey === subItem.key ? 'brand_color' : 'black_v2'}
              onClickHandle={() => onClickHandle(subItem.key, item.type)}
            >
              {subItem.title}
            </Text>
          </li>
        ))}
      </ul>
    </ItemWrapper>
  );

  return <Container>{TAB_DATA.map(getFilterTab)}</Container>;
};

export default FilterTab;
