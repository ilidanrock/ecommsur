

const initialState = {
  products: [],
  productDetail: {}
  };

  function rootReducer(state = initialState, action) {
    switch (action.type) {
      case "GET-PRODUCTS":
        return {
          ...state,
          products: action.payload
        };
        case "GET-DETAIL":
          return {
            ...state,
            productDetail: action.payload
          };
      default:
        return state;
    }
  }
  
  export default rootReducer;
  