package com.dimasblack.remkuzovchasti.model;

import com.fasterxml.jackson.annotation.*;
import lombok.*;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class AutoModel {

    @Id
    @GeneratedValue(generator="optimized-sequence")
    private Long id;

    private String modelName;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JsonIgnore
    private AutoBrand brand;

    public String getModelName() {
        return modelName;
    }

    public void setModelName(String modelName) {
        this.modelName = modelName;
    }

    public AutoBrand getBrand() {
        return brand;
    }

    public void setBrand(AutoBrand brand) {
        this.brand = brand;
    }

}
