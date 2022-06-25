import * as t from '../types';
import { PRODUCT_LIST } from '@mock';

const main = (
  state = {
    products: PRODUCT_LIST,
  },
  action,
) => {
  switch (action.type) {
    case t.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return { ...state };
  }
};

export default main;
