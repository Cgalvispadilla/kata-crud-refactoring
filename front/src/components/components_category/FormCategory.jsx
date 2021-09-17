import React, { useRef, useContext, useState } from "react";
import { Store } from "../../Store/Store";

const HOST_API = "http://localhost:8080/api";

function ListCategory() {
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

    fetch(HOST_API + "/crearlista", {
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
      });
  };

  return (
    <form className="form-inline" ref={formRef}>
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
        className="btn btn-success btn-sm ml-2"
        onClick={onAdd}
      >
        Nueva Lista
      </button>
    </form>
  );
}

export default ListCategory;
