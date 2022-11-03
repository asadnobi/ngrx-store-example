import {createFeatureSelector, createSelector } from '@ngrx/store';
import { User } from '../models/user.model';

export const getUserdata = createFeatureSelector<User>('user');

export const selectUserdata = createSelector( getUserdata, (state) => state );