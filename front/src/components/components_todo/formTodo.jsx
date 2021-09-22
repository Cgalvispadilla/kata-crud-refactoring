import React, { useContext, useRef, useState } from "react";
import { Store } from "../../Store/Store";
import validarCampos from "../../helpers/validation";
const Form = ({ categoryListId }) => {
  const HOST_API = "http://localhost:8080/api";
  const formRef = useRef(null);
  const [errores, setErrores] = useState(null);

  const {
    dispatch,
    state: { editingCategoryTodo },
  } = useContext(Store);

  const item = editingCategoryTodo.todo;

  const [state, setState] = useState(item);

  const onAdd = (event) => {
    event.preventDefault();

    const request = {
      name: state.name,
      id: null,
      completed: false,
    };
    try {
      setErrores(null);
      validarCampos(request)
        ? fetch(HOST_API + "/" + categoryListId + "/agregartodoList", {
            method: "POST",
            body: JSON.stringify(request),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((response) => response.json())
            .then((todo) => {
              dispatch({ type: "add-item", item: todo, id: categoryListId });
              setState({ name: "" });

              formRef.current.reset();
            })
        : setErrores("Ocurrio un error");
    } catch (e) {
      setErrores("Ocurrio un error");
    }
  };

  const onEdit = (event) => {
    event.preventDefault();

    const request = {
      name: state.name,
      id: item.id,
      completed: item.completed,
    };
    try {
      setErrores(null);
      validarCampos(request)
        ? fetch(HOST_API + "/editartodoList/" + categoryListId, {
            method: "PUT",
            body: JSON.stringify(request),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((response) => response.json())
            .then((todo) => {
              dispatch({
                type: "update-item",
                updateTodo: todo,
                idCategory: categoryListId,
              });
              dispatch({
                type: "no edit",
                editingCategoryTodo: {
                  todo: { name: "" },
                  categoryIdTodo: 0,
                  isEdit: false,
                },
              });
              setState({ name: "" });
              formRef.current.reset();
            })
        : setErrores("Ocurrio un error");
    } catch (e) {
      setErrores("Ocurrio un error");
    }
  };
  return (
    <form className="form-inline justify-content-center" ref={formRef}>
      <div className="form-group mx-sm-3 mb-2">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="¿Qué piensas hacer hoy?"
          defaultValue={
            editingCategoryTodo.categoryIdTodo === categoryListId
              ? item.name
              : ""
          }
          onChange={(event) => {
            setState({ ...state, name: event.target.value });
          }}
        ></input>
      </div>
      {item.id &&
        editingCategoryTodo.categoryIdTodo === categoryListId &&
        editingCategoryTodo.isEdit && (
          <button className="btn btn-primary mb-2" onClick={onEdit}>
            Actualizar
          </button>
        )}
      {editingCategoryTodo.categoryIdTodo !== categoryListId && (
        <button className="btn btn-primary mb-2" onClick={onAdd}>
          Crear
        </button>
      )}
      {errores && (
        <span className="badge badge-pill badge-danger mx-2">{errores}</span>
      )}
    </form>
  );
};
export default Form;
