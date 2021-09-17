package co.com.sofka.crud.utils;

import lombok.*;

import java.util.Date;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ErrorResponse {
    private int status;

    private String message;

    private Date timestamp;

    List<String> errors;

    ErrorResponse(String message) {
        this.message = message;
    }
}
