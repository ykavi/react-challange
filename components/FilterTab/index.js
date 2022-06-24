import { useRouter } from 'next/router';
import { Text } from '@components';
import { TAB_DATA } from '@mock';
import { Container, ItemWrapper } from './style';

const FilterTab = () => {
  const router = useRouter();
  const { filterKey } = router.query;

  const onClickHandle = (key) => {
    router.push({
      pathname: '/',
      query: {
        filterKey: key,
      },
    });
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
              margin="0 72px 6px 0"
              size="small"
              color={filterKey === subItem.key ? 'brand_color' : 'black_v2'}
              onClickHandle={() => onClickHandle(subItem.key)}
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
