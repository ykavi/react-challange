import * as t from '../types';

export const setProducts = (data) => (dispatch) => {
  dispatch({
    type: t.SET_PRODUCTS,
    payload: data,
  });
};

export const setBasket = (data) => (dispatch) => {
  dispatch({
    type: t.SET_BASKET,
    payload: data,
  });
};

export const setSearchKey = (data) => (dispatch) => {
  dispatch({
    type: t.SET_SEARCH_KEY,
    payload: data,
  });
};
