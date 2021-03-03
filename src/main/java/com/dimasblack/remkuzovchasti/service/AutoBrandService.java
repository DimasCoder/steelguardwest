package com.dimasblack.remkuzovchasti.service;

import com.dimasblack.remkuzovchasti.model.AutoBrand;
import com.dimasblack.remkuzovchasti.repo.AutoBrandRepo;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.UUID;

@Service
public class AutoBrandService {
    @Autowired
    AutoBrandRepo autoBrandRepo;

    @Value("${upload.path}")
    private String uploadPath;

    public Iterable<AutoBrand> findAllBrands(){
        return autoBrandRepo.findAll(Sort.by(Sort.Direction.ASC, "brandName"));
    }

    public AutoBrand createBrand(String brand, MultipartFile file) throws IOException {
        AutoBrand autoBrand = new AutoBrand();
        if(autoBrandRepo.getAutoBrandByBrandName(brand) == null ) {
            autoBrand.setBrandName(brand);
        }else{
            return null;
        }
        if(file != null && !file.getOriginalFilename().isEmpty()){
            File fileDir = new File(uploadPath);
            if(!fileDir.exists()){
                fileDir.mkdir();
            }

            file.transferTo(new File(uploadPath + "/" + brand.toLowerCase().replace(" ", "_") + "_logo.png"));
            String fileUrl = brand.toLowerCase().replace(" ", "_") + "_logo.png";
            autoBrand.setImage(fileUrl);
        }

        return autoBrandRepo.save(autoBrand);
    }

    public AutoBrand updateBrand(AutoBrand brandFromDb, AutoBrand brand){
        BeanUtils.copyProperties(brand, brandFromDb, "id");
        return brand;
    }

    public void deleteBrand(AutoBrand brand){
        autoBrandRepo.delete(brand);
    }
}
