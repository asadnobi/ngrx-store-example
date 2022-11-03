import { createAction, props } from '@ngrx/store';
import { Cart } from '../models/cart.model';

export const retrieveCart = createAction( '[Cart Data] Retrieve Cart Data', props<{payload: Array<Cart>}>() );
export const addItemInCart = createAction( '[Cart Data] Add Dish Into Cart', props<{payload: Cart}>() );
export const updateItemInCart = createAction( '[Cart Data] Update Dish In Cart', props<{payload: Cart}>() );
export const removeFromCart = createAction( '[Cart Data] Remove Dish From Cart', props<{dishId: String}>() );
export const clearCart = createAction( '[Cart Data] Clear Cart Data');

