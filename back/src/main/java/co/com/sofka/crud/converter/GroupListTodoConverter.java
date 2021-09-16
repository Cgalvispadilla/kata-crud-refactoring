package co.com.sofka.crud.converter;

import co.com.sofka.crud.dto.GroupListTodoDTO;
import co.com.sofka.crud.entities.GroupListTodo;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class GroupListTodoConverter {
    @Autowired
    private ModelMapper mapper;

    public GroupListTodoDTO convertToDto(GroupListTodo groupListTodo) {
        GroupListTodoDTO groupListTodoDTO = mapper.map(groupListTodo, GroupListTodoDTO.class);
        return groupListTodoDTO;
    }
    public GroupListTodo convertToEntity(GroupListTodoDTO groupListTodoDTO){
        GroupListTodo groupListTodo = mapper.map(groupListTodoDTO, GroupListTodo.class);
        return groupListTodo;
    }
}
