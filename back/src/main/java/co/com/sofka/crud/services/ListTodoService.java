package co.com.sofka.crud.services;

import co.com.sofka.crud.converter.ListTodoConverter;
import co.com.sofka.crud.dto.ListTodoDTO;
import co.com.sofka.crud.dto.TodoDTO;
import co.com.sofka.crud.entities.ListTodo;
import co.com.sofka.crud.repositories.ListTodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ListTodoService implements InterfaceServiceTodo<ListTodoDTO>{

    @Autowired
    private ListTodoRepository repository;
    @Autowired
    private ListTodoConverter converter;

    @Override
    public ArrayList<ListTodoDTO> list() {
        ArrayList<ListTodoDTO> listTodoDTOList = new ArrayList<>();
        repository.findAll().forEach(listTodo -> listTodoDTOList.add(converter.convertToDto(listTodo)));
        return listTodoDTOList;
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
