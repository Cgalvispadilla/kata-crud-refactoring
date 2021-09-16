import React, {
  useContext,
  useRef,
  useState,
  useEffect,
  useCallback,
} from "react";
import { Store } from "../../Store/Store";

const HOST_API = "http://localhost:8080/api";

const Form = () => {
  const formRef = useRef(null);
  const [errores, setErrores] = useState(null);
  const {
    dispatch,
    state: { todo },
  } = useContext(Store);
  const item = todo.item;
  const [state, setState] = useState(item);
  const validarCampos = (request) => {
    var patt = new RegExp(/^[A-Za-z0-9\s]+$/g);
    if (
      request.name.length > 3 &&
      request.name !== null &&
      patt.test(request.name)
    ) {
      return true;
    }
    return false;
  };
  const onAdd = (event) => {
    event.preventDefault();

    const request = {
      name: state.name,
      id: null,
      completed: false,
    };
    console.log(request.name);

    try {
      setErrores(null);
      validarCampos(request)
        ? fetch(HOST_API + "/todo", {
            method: "POST",
            body: JSON.stringify(request),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((response) => response.json())
            .then((todo) => {
              dispatch({ type: "add-item", item: todo });
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
      isCompleted: item.isCompleted,
    };
    try {
      setErrores(null);
      validarCampos(request)
        ? fetch(HOST_API + "/todo", {
            method: "PUT",
            body: JSON.stringify(request),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((response) => response.json())
            .then((todo) => {
              dispatch({ type: "update-item", item: todo });
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
          defaultValue={item.name}
          onChange={(event) => {
            setState({ ...state, name: event.target.value });
          }}
        ></input>
      </div>
      {item.id && (
        <button className="btn btn-primary mb-2" onClick={onEdit}>
          Actualizar
        </button>
      )}
      {!item.id && (
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
