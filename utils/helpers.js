import { DISCOUNT_TYPE } from '@enums';

export const sortByPrice = (a, b) => {
  if (a.price < b.price) return -1;
  if (a.price > b.price) return 1;
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
