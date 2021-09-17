package co.com.sofka.crud.dto;

import co.com.sofka.crud.entities.CategoryTodo;
import lombok.Data;

@Data
public class TodoDTO {
    private Long id;
    private String name;
    private boolean completed;

}
