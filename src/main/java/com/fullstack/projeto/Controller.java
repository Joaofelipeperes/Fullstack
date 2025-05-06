package com.fullstack.projeto;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {
    
    @GetMapping("/welcome")
    public String welcome(){
        return "Welcome to Spring Boot";
    }
}
