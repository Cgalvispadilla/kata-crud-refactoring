function reducer(state, action) {
  switch (action.type) {
    case "update-item":
      const todoUpItem = state.category;
      const listUpdateEdit = todoUpItem.list.map((category) => {
        if (category.id === action.idCategory) {
          category.todoList = category.todoList.map((todo) => {
            if (todo.id === action.updateTodo.id) {
              todo = action.updateTodo;
            }
            return todo;
          });
        }
        return category;
      });
      return { ...state, category: { list: listUpdateEdit, item: {} } };
    case "delete-item":
      const todoUpDelete = state.category;
      const listUpdate = todoUpDelete.list.map((category) => {
        if (category.id === action.idCategory) {
          category.todoList = category.todoList.filter((item) => {
            return item.id !== action.idItem;
          });
        }
        return category;
      });
      return { ...state, category: { list: listUpdate, item: {} } };
    case "update-list":
      const todoUpList = state.todo;
      todoUpList.list = action.list;
      return { ...state, todo: todoUpList };
    case "edit-item":
      //const todoUpEdit = state.editingCategoryTodo;
      return { ...state, editingCategoryTodo: action.editingCategoryTodo };
    case "no edit":
      return { ...state, editingCategoryTodo: action.editingCategoryTodo };
    case "add-item":
      const todoUp = state.category.list;
      const categories = todoUp.map((category) => {
        if (category.id === action.id) {
          category.todoList.push(action.item);
        }
        return category;
      });

      return { ...state, category: { list: categories, item: {} } };
    case "add-categoryList":
      const todoListUp = state.category.list;
      todoListUp.push(action.item);
      return { ...state, category: { list: todoListUp, item: {} } };

    case "update-list-categoryList":
      const categoryListUpList = state.category;
      categoryListUpList.list = action.list;
      return { ...state, category: categoryListUpList };
    case "delete-categoryList":
      const categoryListUpDelete = state.category;
      const categoryListUpdate = categoryListUpDelete.list.filter((item) => {
        return item.id !== action.id;
      });
      categoryListUpDelete.list = categoryListUpdate;
      return { ...state, category: categoryListUpDelete };
    default:
      return state;
  }
}

export default reducer;
