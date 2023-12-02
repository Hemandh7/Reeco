
export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS';
export const APPROVE_ITEM = 'APPROVE_ITEM';
export const MARK_ITEM_MISSING = 'MARK_ITEM_MISSING';
export const UPDATE_ITEM = 'UPDATE_ITEM';

export const fetchProductsSuccess = (products) => ({
  type: FETCH_ITEMS_SUCCESS,
  payload: { products },
});

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
     
      const response = await fetch('https://quiz-9asr.onrender.com/products');
      const products = await response.json();
      dispatch(fetchProductsSuccess(products));
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
};

export const approveProduct = (productId) => ({
  type: APPROVE_ITEM,
  payload: { productId },
});

export const markProductMissing = (productId, urgent) => ({
  type: MARK_ITEM_MISSING,
  payload: { productId, urgent },
});

export const updateProduct = (productId, price, quantity, ) => ({
  type: UPDATE_ITEM,
  payload: { productId, price, quantity },
});