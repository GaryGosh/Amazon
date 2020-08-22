export const initialState = {
    basket: [],
    user: null,
};

export const getBasketTotal = (basket) =>
basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'ADD_TO_BASKET':
            // Logic for adding item to basket
            return {
                ...state, //return how it exactly at current stage
                basket:  [...state.basket, action.item],
                // action.item = the item we despatched on add to cart button click

            };
            
        case 'REMOVE_FROM_BASKET':
            // Logic for removing item from basket
            
            // we cloned the basket
            let newBasket = [...state.basket];

            // we check to see if product if product exisits
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

            if(index >= 0) {
                // item exists in basket, remove it.
                newBasket.splice(index, 1);
            } else {
                console.warn(`Cant remove product (id: ${action.id}) as its not on basket`);
            }

            return { ...state, basket: newBasket };
            
        default:
            return state;
    }
}

export default reducer;