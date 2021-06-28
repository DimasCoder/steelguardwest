package com.dimasblack.remkuzovchasti.controller;

import com.dimasblack.remkuzovchasti.model.InteriorDoor;
import com.dimasblack.remkuzovchasti.service.InteriorDoorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/api/interiorDoors/")
@CrossOrigin(origins = "*", maxAge = 3600)
public class InteriorDoorController {

    @Autowired
    InteriorDoorService interiorDoorService;

    @GetMapping("/all")
    public Iterable<InteriorDoor> allDoors() {
        return interiorDoorService.findAllDoors();
    }

    @GetMapping("{id}")
    public InteriorDoor oneDoor(@PathVariable("id") InteriorDoor door) {
        return door;
    }

    @PostMapping
    public InteriorDoor createDoor(@RequestParam("model") String model,
                                   @RequestParam("color") String color,
                                   @RequestParam("coating") String coating,
                                   @RequestParam("priceCommon") int priceCommon,
                                   @RequestParam("priceStandard") int priceStandard,
                                   @RequestParam("priceProfi") int priceProfi,
                                   @RequestParam("count") int count,
                                   @RequestParam("additionalImage") String additionalImage,
                                   @RequestParam("file") MultipartFile file) throws IOException {
        return interiorDoorService.createDoor(model, color, coating,priceCommon, priceStandard, priceProfi, count, additionalImage, file);
    }

    @DeleteMapping("{id}")
    public void deleteDoor(@PathVariable("id") InteriorDoor door) {
        interiorDoorService.deleteDoor(door);
    }
}
