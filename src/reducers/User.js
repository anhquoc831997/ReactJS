import * as Types from './../constants/ActionTypes';
var initialState = [];

var findIndex = (products, id) => {
    var result = -1;
    products.forEach((product, index) => {
        if (product.id === id) {
            result = index;
        }
    });
    return result;
}

const User = (state = initialState, action) => {
    var index = -1;
    var { id, product } = action;
    switch (action.type) {
        case Types.FETCH_USER:
            state = action.User;
            return [...state];
        case Types.DELETE_USER:
            index = findIndex(state, id);
            state.splice(index, 1);
            return [...state];
        case Types.ADD_USER:
            state.push(action.User);
            return [...state];
        case Types.UPDATE_USER:
            index = findIndex(state, product.id);
            state[index] = product;
            return [...state];
        default: return [...state];
    }
};

export default User;