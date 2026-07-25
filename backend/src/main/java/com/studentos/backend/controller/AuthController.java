package com.studentos.backend.controller;

import com.studentos.backend.model.User;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    @PostMapping("/register")
    public String register(@RequestBody User user) {
        return "Registration successful";
    }

    @PostMapping("/login")
    public String login(@RequestBody User user) {
        return "Login successful";
    }
}
