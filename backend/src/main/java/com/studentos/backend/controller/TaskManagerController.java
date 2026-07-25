package com.studentos.backend.controller;

import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/api/tasks")
@CrossOrigin(origins = "*")
public class TaskManagerController {

    @PostMapping("/suggest")
    public String suggestTasks(@RequestBody Map<String, String> body) {
        String goal = body.get("goal");

        return "Tasks for: " + goal +
                "\n\n1. Learn basics\n2. Practice examples\n3. Build mini project\n4. Revise daily\n5. Take mock test";
    }
}
