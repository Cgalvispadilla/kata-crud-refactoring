package co.com.sofka.crud.converter;

import co.com.sofka.crud.dto.ListTodoDTO;
import co.com.sofka.crud.entities.ListTodo;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ListTodoConverter {
    @Autowired
    private ModelMapper mapper;

    public ListTodoDTO convertToDto(ListTodo listTodo) {
        ListTodoDTO listTodoDTO = mapper.map(listTodo, ListTodoDTO.class);
        return listTodoDTO;
    }
    public ListTodo convertToEntity(ListTodoDTO listTodoDTO){
        ListTodo listTodo = mapper.map(listTodoDTO, ListTodo.class);
        return listTodo;
    }
}
