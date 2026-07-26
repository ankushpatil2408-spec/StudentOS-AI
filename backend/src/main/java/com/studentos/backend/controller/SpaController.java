package com.studentos.backend.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SpaController {

    @RequestMapping(value = {
            "/",
            "/login",
            "/register",
            "/dashboard",
            "/profile",
            "/{path:^(?!api$).*$}",
            "/**/{path:^(?!api$).*$}"
    })
    public String forward() {
        return "forward:/index.html";
    }
}
