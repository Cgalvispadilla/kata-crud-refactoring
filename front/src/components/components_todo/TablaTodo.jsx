import React, { useContext } from "react";
import { Store } from "../../Store/Store";
const HOST_API = "http://localhost:8080/api";
const List = ({ categoryListId, todos = [] }) => {
  const { dispatch } = useContext(Store);

  const onDelete = (id) => {
    fetch(HOST_API + "/" + categoryListId + "/eliminartodos/" + id, {
      method: "DELETE",
    }).then((list) => {
      dispatch({ type: "delete-item", idItem: id, idCategory: categoryListId });
    });
  };

  const onEdit = (todo) => {
    dispatch({
      type: "edit-item",
      editingCategoryTodo: {
        todo: todo,
        categoryIdTodo: categoryListId,
        isEdit: true,
      },
    });
  };

  const onChange = (event, todo) => {
    const request = {
      name: todo.name,
      id: todo.id,
      completed: event.target.checked,
    };
    fetch(HOST_API + "/editartodoList/" + categoryListId, {
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
      });
  };

  const decorationDone = {
    textDecoration: "line-through",
  };
  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Tarea</th>
            <th scope="col">¿Completado?</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {todos.length > 0 ? (
            todos.map((todo, index) => {
              return (
                <tr key={todo.id} style={todo.completed ? decorationDone : {}}>
                  <th scope="col">{index + 1}</th>
                  <td>{todo.name}</td>
                  <td>
                    <input
                      className="mx-5 p-6"
                      type="checkbox"
                      defaultChecked={todo.completed}
                      onChange={(event) => onChange(event, todo)}
                    ></input>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => onDelete(todo.id)}
                    >
                      Eliminar
                    </button>

                    <button
                      className="btn btn-warning m-1"
                      onClick={() => onEdit(todo)}
                    >
                      Editar
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td className="text-center" colSpan="5">
                No existen tareas aun creadas
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
export default List;
