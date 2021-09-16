package co.com.sofka.crud.converter;

import co.com.sofka.crud.dto.TodoDTO;
import co.com.sofka.crud.entities.Todo;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class TodoConverter {

    @Autowired
    private ModelMapper mapper;

    public TodoDTO convertToDto(Todo todo) {
        TodoDTO todoDto = mapper.map(todo, TodoDTO.class);
        return todoDto;
    }
    public Todo convertToEntity(TodoDTO dto){
       Todo todo = mapper.map(dto, Todo.class);
       return todo;
    }
}
