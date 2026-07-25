package com.studentos.backend.controller;

import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/api/quiz")
@CrossOrigin(origins = "*")
public class QuizController {

    @PostMapping("/generate")
    public String generateQuiz(@RequestBody Map<String, String> body) {
        String topic = body.get("topic");

        return "AI Quiz for: " + topic +
                "\n\n1. What is " + topic + "?" +
                "\nA. Concept\nB. Tool\nC. Language\nD. None" +
                "\nAnswer: A" +
                "\n\n2. Why is " + topic + " important?" +
                "\nA. For exams\nB. For interviews\nC. For real-world use\nD. All of these" +
                "\nAnswer: D";
    }
}
