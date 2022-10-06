import Actions from './actions';
import { CategoryItem } from '../type';

export type State = {
  isLoading: boolean;
  itemsByCategory: Record<string, CategoryItem[]>
}

const initialState: State = {
    isLoading: false,
    itemsByCategory: {}
 };
 
 const reducer = (state = initialState, action: any) => {
    switch (action.type) {
       case Actions.ITEMS_REQUEST:
          return Object.assign({}, state, {
             isLoading: action.payload.isLoading
          })
        case Actions.SET_ITEMS_BY_CATEGORY:
          return {
            ...state,
            itemsByCategory: {
              [action.payload.name]: action.payload.items
            },
          }
       default:
          return state;
    }
 }
 export default reducer;