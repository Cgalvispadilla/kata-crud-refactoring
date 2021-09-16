package co.com.sofka.crud.dto;

import co.com.sofka.crud.entities.Todo;
import lombok.Data;

import java.util.List;
@Data
public class GroupListTodoDTO extends TodoDTO {
    private Long id;
    private String name;
    private List<Todo> todoList;
}
