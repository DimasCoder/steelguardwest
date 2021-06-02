package com.dimasblack.remkuzovchasti.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class HtmlPageController {

    @GetMapping("/")
    public String main(){
        return "index.html";
    }

    @GetMapping("/reviews")
    public String reviews(){
        return "index.html";
    }
    @GetMapping("/admin")
    public String admin(){
        return "index.html";
    }

    @GetMapping("/admin-panel")
    public String adminPage(){
        return "index.html";
    }

    @GetMapping("/register")
    public String register(){
        return "index.html";
    }

    @RequestMapping(value = {"flat-door/*", "/flat-door/*"}, method = RequestMethod.GET)
    public String flatDoor(){
        return "index.html";
    }
}
