import { useState } from 'react';
import { Text } from '@components';
import { TAB_DATA } from '@mock';
import { Container, ItemWrapper } from './style';

const FilterTab = () => {
  const [isActive, setActive] = useState();
  const [tabData, setTabData] = useState(TAB_DATA);

  const onClickHandle = (key) => {
    console.log(tabData.find((item) => item.key === key)); // TODO: tıklanan item aktif olacak
  };

  const getFilterTab = (item) => (
    <ItemWrapper>
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
              color={subItem.active ? 'brand_color' : 'black_v2'}
              onClick={() => onClickHandle(subItem.key)}
            >
              {subItem.title}
            </Text>
          </li>
        ))}
      </ul>
    </ItemWrapper>
  );

  return <Container>{tabData.map(getFilterTab)}</Container>;
};

export default FilterTab;
