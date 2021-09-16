package co.com.sofka.crud.entities;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
public class GroupListTodo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "name")
    private String name;
    @OneToMany(mappedBy = "groupListId",cascade = CascadeType.ALL, orphanRemoval=true)
    private List<Todo> todoList;



}
