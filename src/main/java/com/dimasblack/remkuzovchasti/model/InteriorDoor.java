package com.dimasblack.remkuzovchasti.model;

import lombok.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
public class InteriorDoor {

    @Id
    @GeneratedValue(generator="optimized-sequence")
    private Long id;

    private String model;

    private String color;

    private String coating;

    private int priceCommon;

    private int priceStandard;

    private int priceProfi;

    private boolean available;

    private String date;

    private int count;

    private String image;

    private String additionalImage;

    @OneToOne(cascade = CascadeType.ALL)
    private FileEntity file;

}
