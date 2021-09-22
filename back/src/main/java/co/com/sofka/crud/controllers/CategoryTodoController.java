package co.com.sofka.crud.controllers;

import co.com.sofka.crud.converter.TodoConverter;
import co.com.sofka.crud.dto.CategoryTodoDTO;
import co.com.sofka.crud.dto.TodoDTO;
import co.com.sofka.crud.entities.Todo;
import co.com.sofka.crud.services.CategoryTodoService;
import co.com.sofka.crud.services.TodoService;
import co.com.sofka.crud.utils.InvalidDataException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CategoryTodoController {

    @Autowired
    private CategoryTodoService listService;
    @Autowired
    private TodoService todoService;
    @Autowired
    private TodoConverter converterTodo;

    @PostMapping(value = "api/crearlista")
    @ResponseStatus(HttpStatus.CREATED)
    public CategoryTodoDTO saveCategory(@Valid @RequestBody CategoryTodoDTO categoryTodoDTO, BindingResult result) {
       if(result.hasErrors()){
           throw new InvalidDataException(result);
       }
        return listService.save(categoryTodoDTO);
    }

    @PostMapping(value = "api/{id}/agregartodoList")
    @ResponseStatus(HttpStatus.CREATED)
    public TodoDTO saveTodoOnList(@Valid @RequestBody TodoDTO todoDTO, @PathVariable("id") long id, BindingResult result) {
        if(result.hasErrors()){
            throw new InvalidDataException(result);
        }
        CategoryTodoDTO categoryTodoDTO = listService.get(id);
        Todo todo = converterTodo.convertToEntity(todoDTO);
        List<Todo> t = new ArrayList<>();
        t.add(todo);
        categoryTodoDTO.getTodoList().add(todo);
        listService.save(categoryTodoDTO);
        return todoDTO;
    }
    @GetMapping("api/listarcategoria")
    public Iterable<CategoryTodoDTO> listTodoOnCategory(){
        return listService.list();
    }
    @GetMapping("api/obtenerlistatodo/{id}")
    public Iterable<TodoDTO> listTodoOnCategory(@PathVariable("id")long id){
        List<TodoDTO> list= new ArrayList<>();
        listService.get(id).getTodoList().stream().forEach(todo -> list.add(converterTodo.convertToDto(todo)));
        return list;
    }
    @PutMapping(value = "api/editartodoList/{id}")
    public TodoDTO UpdateTodoOnList(@RequestBody TodoDTO todoDTO, @PathVariable("id") long id) {
        CategoryTodoDTO categoryTodoDTO = listService.get(id);
        Todo todo = converterTodo.convertToEntity(todoDTO);
        for (Todo t : categoryTodoDTO.getTodoList()) {
            if (t.getId() == todo.getId()) {
                t.setId(todo.getId());
                t.setName(todo.getName());
                t.setCompleted(todo.isCompleted());
            }
        }
        listService.save(categoryTodoDTO);
        return todoDTO;
    }
    @DeleteMapping(value = "api/{id}/eliminarcategoria")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteCatedory(@PathVariable("id") long id) {
       listService.delete(id);
    }
    @DeleteMapping(value = "api/{id}/eliminartodos/{idTodo}")
    public void delete(@PathVariable("id") long idCategory,@PathVariable("idTodo") long idTodo) {
        CategoryTodoDTO categoryTodoDTO = listService.get(idCategory);
        Todo todo = converterTodo.convertToEntity(todoService.get(idTodo));
        categoryTodoDTO.getTodoList().removeIf(todo1 -> todo1.getId() ==todo.getId());
        listService.save(categoryTodoDTO);
        todoService.delete(idTodo);
    }

}
