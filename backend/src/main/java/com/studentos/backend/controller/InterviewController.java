package com.studentos.backend.controller;

import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/api/interview")
@CrossOrigin(origins = "*")
public class InterviewController {

    @PostMapping("/practice")
    public String practiceInterview(@RequestBody Map<String, String> body) {
        String role = body.get("role");

        return "Interview Practice for: " + role +
                "\n\n1. Tell me about yourself." +
                "\n2. Why should we hire you?" +
                "\n3. Explain your best project." +
                "\n4. What are your strengths and weaknesses?" +
                "\n5. Where do you see yourself in 5 years?";
    }
}
