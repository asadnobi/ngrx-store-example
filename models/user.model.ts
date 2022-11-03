import { TakeawayAddress } from "./order.model";

export interface Card {
  id: string;
  type: string;
}

export interface Address {
  address1: string | null;
  address2: string | null;
  town_or_city: string | null;
  postcode: string | null;
  country: string | null;
}

export interface Userdata {
  first_name: string;
  last_name: string;
  phone_no: string | null;
  mobile_no: string | null;
  email: string | null;
  isVerified: boolean;
  date_of_birth: string | null;
  primary_address: Address | null;
  order_address: TakeawayAddress[] | null;
  parcel_address: TakeawayAddress[] | null;
  card_info: Card[] | null;
  // registered_platform: number;
  // registered_restaurant_id: string;
  total_orders: number;
  user_role: number;
  _id: string;
  user_type: string;
}

export interface User {
  isLogged: boolean;
  token: string | null;
  data: Userdata | null;
}