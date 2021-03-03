package com.dimasblack.remkuzovchasti.model;



import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class AutoBrand {

    @Id
    @GeneratedValue(generator="optimized-sequence")
    private Long id;

    private String brandName;
    private String image;

    @OneToMany(mappedBy = "brand")
    private List<AutoModel> models = new ArrayList<>();

}
