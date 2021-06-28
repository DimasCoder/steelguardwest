package com.dimasblack.remkuzovchasti.service;

import com.dimasblack.remkuzovchasti.model.FileEntity;
import com.dimasblack.remkuzovchasti.model.InteriorDoor;
import com.dimasblack.remkuzovchasti.repo.InteriorDoorRepo;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

@Service
public class InteriorDoorService {
    @Autowired
    InteriorDoorRepo interiorDoorRepo;

    public Iterable<InteriorDoor> findAllDoors(){
        return interiorDoorRepo.findAll(Sort.by(Sort.Direction.ASC, "id"));
    }

    public InteriorDoor createDoor(String model,
                                   String color,
                                   String coating,
                                   int priceCommon,
                                   int priceStandard,
                                   int priceProfi,
                                   int count,
                                   String additionalImage,
                                   MultipartFile file) throws IOException {
        InteriorDoor door = new InteriorDoor();


        door.setModel(model);
        door.setColor(color);
        door.setCoating(coating);
        door.setPriceCommon(priceCommon);
        door.setPriceStandard(priceStandard);
        door.setPriceProfi(priceProfi);
        door.setAdditionalImage(additionalImage.length() > 0 ? additionalImage : null);
        door.setCount(count);
        door.setAvailable(count > 0);

        Date dateNow = new Date();
        SimpleDateFormat formatForDateNow = new SimpleDateFormat("dd MMMM HH:mm");
        String date = String.format(formatForDateNow.format(dateNow));
        door.setDate(date);

        FileEntity fileEntity = new FileEntity();
        fileEntity.setName(StringUtils.cleanPath(file.getOriginalFilename()));
        fileEntity.setContentType(file.getContentType());
        fileEntity.setData(file.getBytes());
        fileEntity.setSize(file.getSize());
        door.setFile(fileEntity);

        return interiorDoorRepo.save(door);
    }


    public InteriorDoor updateDoor(InteriorDoor doorFromDb, InteriorDoor door){
        BeanUtils.copyProperties(door, doorFromDb, "id");
        return door;
    }

    public void deleteDoor(InteriorDoor door){
        interiorDoorRepo.delete(door);
    }
}

