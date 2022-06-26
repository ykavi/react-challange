import { sortByPrice, formatPrice, formatDiscount, getSelectBoxText, paginate } from '../utils/helpers';
import { PRODUCT_LIST, TEST_DATA_PAGINATE } from '../mock';

describe('[helpers]', () => {
  it('Should work sortByPrice method', () => {
    PRODUCT_LIST.sort(sortByPrice);

    expect(PRODUCT_LIST[0].price.buyPrice).toBe(1);
    expect(PRODUCT_LIST[1].price.buyPrice).toBe(2);
    expect(PRODUCT_LIST[2].price.buyPrice).toBe(3);
  });

  it('Should work formatPrice method', () => {
    const formattedPrice1 = formatPrice(1233.23);
    const formattedPrice2 = formatPrice('1000');
    const formattedPrice3 = formatPrice(444);

    expect(formattedPrice1).toBe('1.233,23 TL');
    expect(formattedPrice2).toBe('1.000,00 TL');
    expect(formattedPrice3).toBe('444,00 TL');
  });

  it('Should work formatDiscount method', () => {
    const discount1 = {
      amount: 5,
      type: null,
    };
    const discount2 = {
      amount: null,
      type: 'PERCENT',
    };

    expect(formatDiscount(null)).toBeNull();
    expect(formatDiscount(discount1)).toEqual(5);
    expect(formatDiscount(discount2)).toBeNull();
  });

  it('Should work getSelectBoxText method', () => {
    const string1 = getSelectBoxText(true, false);
    const string2 = getSelectBoxText(false, true);
    const string3 = getSelectBoxText(false, false);

    expect(string1).toEqual('Artan');
    expect(string2).toEqual('Azalan');
    expect(string3).toEqual('Sıralama');
  });

  it('Should work paginate method', () => {
    const pages = paginate(PRODUCT_LIST, 8);

    expect(pages).toEqual(TEST_DATA_PAGINATE);
  });
});
