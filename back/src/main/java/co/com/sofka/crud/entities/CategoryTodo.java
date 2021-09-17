package co.com.sofka.crud.entities;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@Table(name = "categories_todos")
public class CategoryTodo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_category")
    private Long id;
    @Column(name = "name", nullable = false)
    @NotNull(message = "Para guardar una categoria se necesita el nombre")
    @Size(min = 3,message = "Se necesita minimo tres caracteres en el nombre")
    private String name;
    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Todo> todoList = new ArrayList<>();



}
