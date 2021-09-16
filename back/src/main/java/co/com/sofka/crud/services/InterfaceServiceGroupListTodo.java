package co.com.sofka.crud.services;

import co.com.sofka.crud.dto.ListTodoDTO;

public interface InterfaceServiceGroupListTodo <T extends ListTodoDTO>{
    public Iterable<T> list();
    public T save(T dto);
    public void delete(Long id);
    public T get(Long id);
}
