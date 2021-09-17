package co.com.sofka.crud.converter;

import co.com.sofka.crud.dto.CategoryTodoDTO;
import co.com.sofka.crud.entities.CategoryTodo;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class CategoryTodoConverter {
    @Autowired
    private ModelMapper mapper;

    public CategoryTodoDTO convertToDto(CategoryTodo categoryTodo) {
        CategoryTodoDTO categoryTodoDTO = mapper.map(categoryTodo, CategoryTodoDTO.class);
        return categoryTodoDTO;
    }
    public CategoryTodo convertToEntity(CategoryTodoDTO categoryTodoDTO){
        CategoryTodo categoryTodo = mapper.map(categoryTodoDTO, CategoryTodo.class);
        return categoryTodo;
    }
}
