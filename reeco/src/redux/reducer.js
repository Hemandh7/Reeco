
import { FETCH_ITEMS_SUCCESS, APPROVE_ITEM, MARK_ITEM_MISSING, UPDATE_ITEM } from './action';

const initialState = {
  products: [],
};

const ItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        products: action.payload.products,
      };
    case APPROVE_ITEM:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.productId ? { ...product, status: 'approved' } : product
        ),
      };
    case MARK_ITEM_MISSING:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.productId
            ? { ...product, status: action.payload.urgent ? 'Missing - Urgent' : 'Missing' }
            : product
        ),
      };
    case UPDATE_ITEM:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.productId
            ? { ...product, price: action.payload.price, quantity: action.payload.quantity }
            : product
        ),
      };
    default:
      return state;
  }
};

export default ItemReducer;
