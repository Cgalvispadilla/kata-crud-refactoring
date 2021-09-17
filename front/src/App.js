import React from "react";
import { StoreProvider } from "./Providers/StoreProvider";
import FormCategory from "./components/components_category/FormCategory";
import ListCategories from "./components/components_category/ListCategories";

function App() {
  return (
    <StoreProvider>
      <div className="col-md-12 center">
        <FormCategory />
        <h3 className="form-inline justify-content-center">To-Do List</h3>
        {/* <Form /> */}
        <ListCategories />
      </div>
      <div className="form-inline justify-content-center">{/* <List /> */}</div>
    </StoreProvider>
  );
}

export default App;
