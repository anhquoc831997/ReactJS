import { combineReducers } from 'redux';
import products from './products';
import itemEditing from './itemEditing';
import User from './User';

const appReducers = combineReducers({
    products,
    itemEditing,
    User
});

export default appReducers;