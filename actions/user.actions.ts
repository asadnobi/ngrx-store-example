import { createAction, props } from '@ngrx/store';
import { User } from '../models/user.model';

export const retrieveUser = createAction( '[User Data] Retrieve User', props<{payload: User}>() );
export const addUser = createAction( '[User Data] Add User', props<{payload: User}>() );
export const updateUser = createAction( '[User Data] Update User', props<{payload: User}>() );
export const clearUser = createAction( '[User Data] Clear User');

