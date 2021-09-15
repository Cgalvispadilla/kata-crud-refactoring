import React from "react";
import Form from "./components/components_todo/formTodo";
import { StoreProvider } from "./Providers/StoreProvider";
import List from "./components/components_todo/TablaTodo";

function App() {
  return (
    <StoreProvider>
      <div className="col-md-12 center">
        <h3 className="form-inline justify-content-center">To-Do List</h3>
        <Form />
      </div>
      <div className="form-inline justify-content-center">
        <List />
      </div>
    </StoreProvider>
  );
}

export default App;
