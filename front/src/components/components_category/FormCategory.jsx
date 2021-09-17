import React, { useRef, useContext, useState } from "react";
import { Store } from "../../Store/Store";
import validarCampos from "../../helpers/validation";
const HOST_API = "http://localhost:8080/api";

function ListCategory() {
  const [errores, setErrores] = useState(null);

  const formRef = useRef(null);
  const {
    state: { category },
    dispatch,
  } = useContext(Store);
  const item = category.item;

  const [state, setState] = useState(item);

  const onAdd = (event) => {
    event.preventDefault();
    const request = {
      name: state.name,
      id: null,
    };
    try {
      setErrores(null);
      validarCampos(request)
        ? fetch(HOST_API + "/crearlista", {
            method: "POST",
            body: JSON.stringify(request),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((response) => response.json())
            .then((categoryList) => {
              dispatch({ type: "add-categoryList", item: categoryList });
              setState({ name: "" });
              formRef.current.reset();
            })
        : setErrores("Ocurrio un error");
    } catch (e) {
      setErrores("Ocurrio un error");
    }
  };

  return (
    <form className="form-inline" ref={formRef}>
      <div className="justify-content-center mx-1">Crea tu lista</div>
      <div className="form-group">
        <input
          type="text"
          name="name"
          placeholder="Nombre de la lista"
          defaultValue={item.name}
          onChange={(event) => {
            setState({ ...state, name: event.target.value });
          }}
        ></input>
      </div>
      <button
        type="button"
        className="btn btn-outline-primary btn-sm ml-2"
        onClick={onAdd}
      >
        Nueva Lista
      </button>
      {errores && (
        <span className="badge badge-pill badge-danger mx-2">{errores}</span>
      )}
    </form>
  );
}

export default ListCategory;
