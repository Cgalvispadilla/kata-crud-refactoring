package co.com.sofka.crud.repositories;

import co.com.sofka.crud.entities.ListTodo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ListTodoRepository extends JpaRepository<ListTodo, Long> {

}
