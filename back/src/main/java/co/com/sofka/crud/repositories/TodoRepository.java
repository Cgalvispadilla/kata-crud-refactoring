package co.com.sofka.crud.repositories;

import co.com.sofka.crud.entities.Todo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface TodoRepository extends JpaRepository<Todo, Long> {
}
