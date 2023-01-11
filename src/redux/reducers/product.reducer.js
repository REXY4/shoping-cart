const initialState = {
    product : null
  };
  
  const productReducers = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case 'ALL_PRODUCT':
        return {
          ...state,
          product : payload
        };
      default:
        return state;
    }
  };
  
  export default productReducers;
  