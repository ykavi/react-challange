import { Text } from '@components';
import { TAB_DATA } from '@mock';
import { Container, ItemWrapper } from './style';

const getFilterTab = (item) => (
  <ItemWrapper>
    <Text margin="0 0 24px 0" weight="medium" color="black_v1">
      {item.title}
    </Text>

    {item.subTitle.map((subItem) => (
      <>
        <Text margin="0 0 6px 0" size="small" color="black_v2">
          {subItem.title}
        </Text>
      </>
    ))}
  </ItemWrapper>
);

const FilterTab = () => {
  return <Container>{TAB_DATA.map(getFilterTab)}</Container>;
};

export default FilterTab;
