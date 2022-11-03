import { createReducer, on } from '@ngrx/store';

import { retrieveUser, addUser, updateUser, clearUser } from "../actions/user.actions";
import { User } from '../models/user.model';

export const initialState: User = {
  isLogged: false,
  token: null,
  data: null
};

export const userReducer = createReducer(
  initialState,
  on(retrieveUser, (state, { payload }) =>  payload),
  on(addUser, (state, { payload }) => {
    localStorage.setItem('user-data', JSON.stringify(payload));
    return payload;
  }),
  on(updateUser, (state, { payload }) => {
    localStorage.setItem('user-data', JSON.stringify(payload));
    return payload;
  }),
  on(clearUser, (state) => {
    localStorage.removeItem('user-data');
    return initialState;
  })
);
