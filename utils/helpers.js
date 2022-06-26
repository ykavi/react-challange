import { DISCOUNT_TYPE } from '../enums';

export const sortByPrice = (a, b) => {
  if (a.price.buyPrice < b.price.buyPrice) return -1;
  if (a.price.buyPrice > b.price.buyPrice) return 1;
  return 0;
};

export const formatPrice = (value) => {
  const price = new Intl.NumberFormat('tr-TR', {
    currency: 'TRY',
    style: 'currency',
  }).format(value);

  return `${price.replace('₺', '')} TL`;
};

export const formatDiscount = (discount) => {
  try {
    const { type, amount } = discount;

    if (amount && type === DISCOUNT_TYPE.PERCENT) {
      return `%${amount}`;
    }

    if (amount && type === DISCOUNT_TYPE.PRICE) {
      return `${amount} TL`;
    }

    return amount;
  } catch (error) {
    console.error(`logFor=function-err function=formatDiscount error=${error}`);
  }

  return null;
};

export const setLocalStorage = (key, data) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error(`logFor=function-err function=setLocalStorage error=${error}`);
  }
};

export const getLocalStorage = (key) => {
  try {
    JSON.parse(window.localStorage.getItem(key));
  } catch (error) {
    console.error(`logFor=function-err function=getLocalStorage error=${error}`);
  }
};

export const getSelectBoxText = (isLowSort, isHighSort) => {
  if (isHighSort) return `Azalan`;
  if (isLowSort) return `Artan`;

  return `Sıralama`;
};
