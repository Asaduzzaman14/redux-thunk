import {
  ADD_PRODUCT,
  ADD_TO_CART,
  LODE_PRODUCT,
  POST_PRODUCT,
  PRODUCT_LOADED,
  REMOVE_FROM_CART,
  REMOVE_PRODUCT,
} from "../actionTypes/actionTypes";

export const lodeProduct = (data) => {
  return {
    type: LODE_PRODUCT,
    payload: data
  }
}

export const postProduct = (productdata) => {
  return {
    type: POST_PRODUCT,
    payload: productdata
  }
}

export const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

export const removeProduct = (id) => {
  return {
    type: REMOVE_PRODUCT,
    payload: id,
  };
};

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const removeFromCart = (product) => {
  return {
    type: REMOVE_FROM_CART,
    payload: product,
  };
};

export const loaded = (products) => {
  return {
    type: PRODUCT_LOADED,
    payload: products,
  };
};
