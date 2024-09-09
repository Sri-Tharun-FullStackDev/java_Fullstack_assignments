package com.example.webpage;


import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WebController {

    @GetMapping("/home")
    public String homePage(Model model) {
        // Adding data to the model to display in the template
        model.addAttribute("title", "Welcome to Spring Boot");
        model.addAttribute("message", "This is a simple webpage created using Spring Boot and Thymeleaf.");
        return "home";  // This refers to the 'home.html' file in 'src/main/resources/templates'
    }
}
