package com.dimasblack.remkuzovchasti.repo;

import com.dimasblack.remkuzovchasti.model.FlatDoor;
import com.dimasblack.remkuzovchasti.model.InteriorDoor;
import org.springframework.data.jpa.repository.JpaRepository;


public interface InteriorDoorRepo extends JpaRepository<InteriorDoor, Long> {

}
