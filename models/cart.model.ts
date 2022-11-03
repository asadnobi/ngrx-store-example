export interface Cart {
  _id: string;
  dish_id: string;
  dish_name: string;
  dish_short_name: string;
  alt_dish_name: string;
  dish_instruction: string;
  category_id: string;
  course_id: number;
  sort_order: number;
  exclude_from_offer: boolean;
  is_vat_included: boolean;
  combination: any[];
  group: any[];
  vat_rate: number;
  vat_amount: number;
  minQuantity: number;
  quantity: number;
  unit_price: number;
  summation_price: number;
  package_price: number;
  total_price: number;
  hash_key: string;
}
