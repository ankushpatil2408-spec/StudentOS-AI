package com.studentos.backend.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/analytics")
@CrossOrigin(origins = "*")
public class AnalyticsController {

    @GetMapping("/summary")
    public String summary() {
        return "Analytics Summary:\n\nStudy Progress: 72%\nInterview Readiness: 80%\nAI Tools Used: 5+\nProject Status: Production Ready";
    }
}
