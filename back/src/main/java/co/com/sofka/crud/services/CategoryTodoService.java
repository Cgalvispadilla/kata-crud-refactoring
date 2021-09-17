package co.com.sofka.crud.services;

import co.com.sofka.crud.converter.CategoryTodoConverter;
import co.com.sofka.crud.dto.CategoryTodoDTO;
import co.com.sofka.crud.entities.CategoryTodo;
import co.com.sofka.crud.repositories.CategoryTodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class CategoryTodoService implements InterfaceServiceCategoryTodo<CategoryTodoDTO>{

    @Autowired
    private CategoryTodoRepository repository;
    @Autowired
    private CategoryTodoConverter converter;


    @Override
    public ArrayList<CategoryTodoDTO> list() {
        ArrayList<CategoryTodoDTO> listTodoDTOCategory = new ArrayList<>();
        repository.findAll().forEach(categoryTodo -> listTodoDTOCategory.add(converter.convertToDto(categoryTodo)));
        return listTodoDTOCategory;
    }

    @Override
    public CategoryTodoDTO save(CategoryTodoDTO dto) {
        CategoryTodo categoryTodo = converter.convertToEntity(dto);
        return converter.convertToDto(repository.save(categoryTodo));
    }

    @Override
    public void delete(Long id) {
        repository.delete(converter.convertToEntity(get(id)));
    }

    @Override
    public CategoryTodoDTO get(Long id) {
        Optional<CategoryTodo> optionalListTodo = repository.findById(id);
        return  converter.convertToDto(optionalListTodo.get());
    }
}
