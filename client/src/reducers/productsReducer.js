export default (state = [], action) => {

  switch(action.type) {

    case 'LOADING_PRODUCTS':
      return state

    case 'FETCH_PRODUCTS':
      return action.products

    case 'FETCH_PRODUCT':
      return action.product

    case 'ADD_PRODUCT':
      return state.concat(action.product);

    case 'REMOVE_PRODUCT':
      return state.filter(product => product.id !== action.id)

    case 'LIKE_PRODUCT':
      return state.map((product) => {
        if (product.id === action.product.id) {
          return action.product
        } else {
          return product
        }
      });

  default:
    return state;
  }
}
