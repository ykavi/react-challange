import * as t from '../types';
import { PRODUCT_LIST, BASKET_PRODUCTS } from '@mock';

const main = (
  state = {
    products: PRODUCT_LIST,
    basket: BASKET_PRODUCTS,
  },
  action,
) => {
  switch (action.type) {
    case t.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case t.SET_BASKET:
      return {
        ...state,
        basket: action.payload,
      };
    default:
      return { ...state };
  }
};

export default main;
