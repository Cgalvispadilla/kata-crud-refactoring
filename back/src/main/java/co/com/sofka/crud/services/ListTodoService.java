package co.com.sofka.crud.services;

import co.com.sofka.crud.dto.ListTodoDTO;
import org.springframework.stereotype.Service;

@Service
public class ListTodoService implements InterfaceServiceTodo<ListTodoDTO>{
    @Override
    public Iterable<ListTodoDTO> list() {
        return null;
    }

    @Override
    public ListTodoDTO save(ListTodoDTO dto) {
        return null;
    }

    @Override
    public void delete(Long id) {

    }

    @Override
    public ListTodoDTO get(Long id) {
        return null;
    }
}
