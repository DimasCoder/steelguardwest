package com.dimasblack.remkuzovchasti.repo;

import com.dimasblack.remkuzovchasti.model.AutoModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface AutoModelRepo extends JpaRepository<AutoModel, Long> {

    AutoModel getById(Long id);
}