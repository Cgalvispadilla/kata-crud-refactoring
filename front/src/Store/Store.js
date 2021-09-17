import { createContext } from "react";

export const initialState = {
  category: {
    list: [],
    item: {},
  },
  editingCategoryTodo: {
    todo: { name: "" },
    categoryIdTodo: 0,
    isEdit: false,
  },
};
export const Store = createContext(initialState);
