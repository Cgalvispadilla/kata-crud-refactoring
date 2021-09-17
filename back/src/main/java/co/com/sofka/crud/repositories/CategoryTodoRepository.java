package co.com.sofka.crud.repositories;

import co.com.sofka.crud.entities.CategoryTodo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryTodoRepository extends JpaRepository<CategoryTodo, Long> {

}
