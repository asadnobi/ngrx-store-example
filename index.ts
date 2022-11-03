import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "./app.state";

import { cartReducer } from "./reducers/cart.reducer";
import { userReducer } from "./reducers/user.reducer";

export const reducers: ActionReducerMap<AppState> = {
  cart: cartReducer,
  user: userReducer,
};
