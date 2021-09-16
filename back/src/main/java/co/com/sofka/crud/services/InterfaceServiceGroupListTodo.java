package co.com.sofka.crud.services;

import co.com.sofka.crud.dto.ListTodoDTO;

import java.util.ArrayList;


public interface InterfaceServiceGroupListTodo <T extends ListTodoDTO>{
    public ArrayList<T> list();
    public T save(T dto);
    public void delete(Long id);
    public T get(Long id);
}
