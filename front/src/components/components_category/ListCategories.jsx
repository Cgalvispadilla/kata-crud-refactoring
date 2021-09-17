import React, { useContext, useEffect } from "react";
import { Store } from "../../Store/Store";
import FormTodo from "../components_todo/formTodo";
import TablaTodo from "../components_todo/TablaTodo";

const HOST_API = "http://localhost:8080/api";

function ListCategories() {
  const {
    state: { category },
    dispatch,
  } = useContext(Store);
  const currentList = category.list;

  //console.log(currentList);
  useEffect(() => {
    fetch(HOST_API + "/listarcategoria")
      .then((response) => response.json())
      .then((list) => {
        dispatch({ type: "update-list-categoryList", list });
      });
  }, [dispatch]);

  const onDelete = (id) => {
    fetch(HOST_API + "/" + id + "/eliminarcategoria", {
      method: "DELETE",
    }).then((categoryList) => {
      dispatch({ type: "delete-categoryList", id });
    });
  };
  const algo = JSON.stringify(category.list[0]);
  console.log(algo);
  return (
    <>
      {currentList.map((categoryList, index) => {
        return (
          <div className="p-3 my-3 border" key={categoryList.id}>
            <div className="d-flex justify-content-between mb-4">
              <h4>
                {categoryList.name ? categoryList.name.toUpperCase() : ""}
              </h4>
              <button
                type="button"
                className="btn btn-outline-danger btn-sm"
                onClick={() => onDelete(categoryList.id)}
              >
                Eliminar
              </button>
            </div>
            <FormTodo categoryListId={categoryList.id} />
            <TablaTodo
              categoryListId={categoryList.id}
              todos={categoryList.todoList}
            />
          </div>
        );
      })}
    </>
  );
}

export default ListCategories;
