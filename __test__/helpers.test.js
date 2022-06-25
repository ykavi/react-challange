import { sortByPrice } from '../utils/helpers';
import { PRODUCT_LIST } from '../mock';

describe('[helpers]', () => {
  it('Should work sortByPrice method', () => {
    PRODUCT_LIST.sort(sortByPrice);

    expect(PRODUCT_LIST[0].price.buyPrice).toBe(1);
    expect(PRODUCT_LIST[1].price.buyPrice).toBe(2);
    expect(PRODUCT_LIST[2].price.buyPrice).toBe(3);
  });
});
