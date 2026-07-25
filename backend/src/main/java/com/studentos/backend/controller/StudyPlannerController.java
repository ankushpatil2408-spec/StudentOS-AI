package com.studentos.backend.controller;

import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/api/study")
@CrossOrigin(origins = "*")
public class StudyPlannerController {

    @PostMapping("/plan")
    public String generateStudyPlan(@RequestBody Map<String, String> body) {

        String goal = body.get("goal");

        return "Study Plan for: " + goal +
                "\n\nDay 1: Basics and definitions" +
                "\nDay 2: Important concepts" +
                "\nDay 3: Practice questions" +
                "\nDay 4: Revision and short notes" +
                "\nDay 5: Mock test and improvement";
    }
}
