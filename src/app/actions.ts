import { CategoryItem } from '../type';

const ITEMS_REQUEST:string = "ITEMS_REQUEST";
const SET_ITEMS_BY_CATEGORY:string = "ITEMS_BY_CATEGORY";

export function itemsRequest(bool: boolean, id: number) {
   let payload = {
      isLoading: bool,
      id
   }
   return {
      type: ITEMS_REQUEST,
      payload
   }
}

export function setItemsByCategory(categoryName: string, categoryItems: CategoryItem[]) {
   let payload = {
      name: categoryName,
      items: categoryItems
   };

   return {
      type: SET_ITEMS_BY_CATEGORY,
      payload
   }
}

export default { ITEMS_REQUEST, SET_ITEMS_BY_CATEGORY };