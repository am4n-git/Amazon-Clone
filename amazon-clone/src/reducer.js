export const initialState = {
  basket: [],
  user:null
};

//Selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_CART":
        const index = state.basket.findIndex(
            (basketItem) => basketItem.name === action.name
        );
        let newBasket = [...state.basket];
        if (index >= 0){
                newBasket.pop(index,1);
        }
        else{
            console.warn(`Can't remove product ${action.name} not in cart`)
        }

        return{
            ...state,
            basket: newBasket
        }

        case 'SET_USER':
          return{
            ...state,
            user:action.user
          }

    default:
      return state;
  }
};

export default reducer;
