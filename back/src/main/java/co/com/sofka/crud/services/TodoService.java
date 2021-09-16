package co.com.sofka.crud.services;

import co.com.sofka.crud.converter.TodoConverter;
import co.com.sofka.crud.dto.TodoDTO;
import co.com.sofka.crud.repositories.TodoRepository;
import co.com.sofka.crud.entities.Todo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class TodoService implements InterfaceServiceTodo<TodoDTO> {

    @Autowired
    private TodoRepository repository;
    @Autowired
    private TodoConverter converter;
    @Override
    public Iterable<TodoDTO> list(){
        List<TodoDTO> todoDTOList = new ArrayList<>();
        repository.findAll().forEach(todo -> todoDTOList.add(converter.convertToDto(todo)));
        return todoDTOList;
    }
    @Override
    public TodoDTO save(TodoDTO todoDTO){
        Todo todo = converter.convertToEntity(todoDTO);
        return converter.convertToDto(repository.save(todo));
    }
    @Override
    public void delete(Long id){
        repository.delete(converter.convertToEntity(get(id)));
    }
    @Override
    public TodoDTO get(Long id){
        Optional<Todo> optionalTodo = repository.findById(id);
        return  converter.convertToDto(optionalTodo.get());
    }

}
