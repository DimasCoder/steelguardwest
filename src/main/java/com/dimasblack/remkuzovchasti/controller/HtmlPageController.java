package com.dimasblack.remkuzovchasti.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

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
}
