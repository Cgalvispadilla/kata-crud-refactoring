package co.com.sofka.crud.services;

import co.com.sofka.crud.dto.TodoDTO;
import co.com.sofka.crud.entities.Todo;

public interface InterfaceServiceTodo<T extends TodoDTO> {
    public Iterable<T> list();
    public T save(T dto);
    public void delete(Long id);
    public T get(Long id);
}
