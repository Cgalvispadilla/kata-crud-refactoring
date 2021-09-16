package co.com.sofka.crud.dto;

import lombok.Data;

@Data
public class TodoDTO {
    private Long id;
    private String name;
    private boolean completed;
    private String groupListId;
}
