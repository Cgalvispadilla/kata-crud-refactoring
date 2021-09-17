package co.com.sofka.crud.services;

import co.com.sofka.crud.dto.CategoryTodoDTO;

import java.util.ArrayList;


public interface InterfaceServiceCategoryTodo<T extends CategoryTodoDTO>{
    public ArrayList<T> list();
    public T save(T dto);
    public void delete(Long id);
    public T get(Long id);
}
