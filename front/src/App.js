import React from "react";
import { StoreProvider } from "./Providers/StoreProvider";
import FormCategory from "./components/components_category/FormCategory";
import ListCategories from "./components/components_category/ListCategories";

function App() {
  return (
    <StoreProvider>
      <div className="col-md-12 p-1 center shadow-lg p-3 mb-5 bg-whiteshadow-lg p-3 mb-5 bg-white rounded">
        <FormCategory />
        <h3 className="form-inline justify-content-center ">Actividades</h3>
        <ListCategories />
      </div>
    </StoreProvider>
  );
}

export default App;
