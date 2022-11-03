import { Cart } from "./models/cart.model";
import { User } from "./models/user.model";

export interface AppState {
  cart: Array<Cart>;
  user: User;
}