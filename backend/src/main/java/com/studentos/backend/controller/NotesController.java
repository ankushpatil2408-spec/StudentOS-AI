package com.studentos.backend.controller;

import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/api/notes")
@CrossOrigin(origins = "*")
public class NotesController {

    @PostMapping("/generate")
    public String generateNotes(@RequestBody Map<String, String> body) {

        String topic = body.get("topic");

        return "AI Notes for: " + topic +
                "\n\n1. Definition" +
                "\n2. Important concepts" +
                "\n3. Real-world example" +
                "\n4. Exam points" +
                "\n5. Interview questions";
    }
}
