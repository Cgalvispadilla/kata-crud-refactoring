import React, { useReducer } from "react";
import reducer from "../reducers/TodoReducer";
import { initialState } from "../Store/Store";
import { Store } from "../Store/Store";
export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};
export default Store;
