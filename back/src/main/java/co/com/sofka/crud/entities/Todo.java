package co.com.sofka.crud.entities;

import javax.persistence.*;

@Entity
public class Todo {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private boolean completed;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="group_list_id")
    private ListTodo groupListId;


    public ListTodo getGroupListId() {
        return groupListId;
    }

    public void setGroupListId(ListTodo groupListId) {
        this.groupListId = groupListId;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean isCompleted() {
        return completed;
    }

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }
}
