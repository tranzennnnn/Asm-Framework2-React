import type { ICartStore } from "../interface/carttype";

export const CartReducerFn = (state: ICartStore, action: any) => {
  switch (action.type) {
    case "addtocart":
      const isExists = state.items.find(
        (item) => item.id === action.payload.id,
      );
      let newItems = [...state.items];
      if (!isExists) {
        newItems.push(action.payload);
      }
      return {
        ...state,
        items: newItems,
        count: newItems.length,
      };
    case "removefromcart":
      const filteredItems = state.items.filter(
        (item) => item.id !== action.payload,
      );
      return {
        ...state,
        items: filteredItems,
        count: filteredItems.length,
      };
    case "closeOpen":
      return { ...state, isCloseSidebar: action.payload };
    default:
      return state;
  }
};
