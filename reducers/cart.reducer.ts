import { createReducer, on } from '@ngrx/store';

import { retrieveCart, addItemInCart, updateItemInCart, removeFromCart, clearCart } from "../actions/cart.actions";
import { Cart } from '../models/cart.model';

export const initialState: Array<Cart> = [];


export const cartReducer = createReducer(
  initialState,
  on(retrieveCart, (state, { payload }) => {
    return payload;
  }),
  on(addItemInCart, (state, { payload }) => {
    let new_data = [...state, payload];
    return new_data;
  }),
  on(updateItemInCart, (state, { payload }) => {
    let new_data = state.map(dish => dish.dish_id !== payload.dish_id ? dish : payload);
    return new_data;
  }),
  on(removeFromCart, (state, { dishId }) => {
    let new_data = state.filter((dish) => dish.dish_id !== dishId);
    return new_data;
  }),
  on(clearCart, (state) => {
    return initialState;
  })
);
