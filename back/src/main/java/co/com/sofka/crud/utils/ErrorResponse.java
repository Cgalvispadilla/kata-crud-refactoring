package co.com.sofka.crud.utils;

import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
public class ErrorResponse {
    private int status;

    private String message;

    private Date timestamp;

    List<String> errors;

    ErrorResponse(String message) {
        this.message = message;
    }
}
