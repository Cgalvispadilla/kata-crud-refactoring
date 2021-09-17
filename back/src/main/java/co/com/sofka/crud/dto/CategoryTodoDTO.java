package co.com.sofka.crud.dto;

import co.com.sofka.crud.entities.Todo;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;
@Data
public class CategoryTodoDTO {
    private Long id;
    private String name;
    private List<Todo> todoList= new ArrayList<>();
}
