import {createFeatureSelector, createSelector } from '@ngrx/store';
import { Cart } from '../models/cart.model';

export const getCartdata = createFeatureSelector<Array<Cart>>('cart');

export const selectCartdata = createSelector( getCartdata, (state) => state );