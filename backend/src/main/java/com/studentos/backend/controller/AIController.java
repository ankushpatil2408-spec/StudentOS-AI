package com.studentos.backend.controller;

import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/api/ai")
@CrossOrigin(origins = "*")
public class AIController {

    @PostMapping("/chat")
    public String chat(@RequestBody Map<String, String> body) {
        String question = body.get("question");

        return "AI Response: " + question +
                " | React is a JavaScript library used for building UI.";
    }
}
