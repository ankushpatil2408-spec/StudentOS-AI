package com.studentos.backend.controller;

import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/api/resume")
@CrossOrigin(origins = "*")
public class ResumeAnalyzerController {

    @PostMapping("/analyze")
    public String analyzeResume(@RequestBody Map<String, String> body) {
        String text = body.get("text");

        return "Resume Analysis:\n\nATS Score: 78/100\n\nStrengths:\n1. Good technical skills\n2. Project-based profile\n\nImprovements:\n1. Add measurable achievements\n2. Add GitHub/LinkedIn links\n3. Improve project description\n\nInput: " + text;
    }
}
