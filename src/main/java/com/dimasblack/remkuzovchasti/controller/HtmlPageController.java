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

    @GetMapping("/delivery")
    public String delivery(){return "index.html";}

    @GetMapping("/doors/filter/flatDoor")
    public String flatDoor(){return "index.html";}

    @GetMapping("/doors/51")
    public String doorId(){return "index.html";}

    @GetMapping("/flatDoor")
    public String flDr(){return "index.html";}

    @GetMapping("/streetDoor")
    public String stDr(){return "index.html";}

    @RequestMapping(value = {"/techDoor", "/fireDoor", "/{filter}"}, method = RequestMethod.GET)
    public String flatDoors(){
        return "index.html";
    }

}
