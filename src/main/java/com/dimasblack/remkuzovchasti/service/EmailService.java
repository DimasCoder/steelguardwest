package com.dimasblack.remkuzovchasti.service;

import com.dimasblack.remkuzovchasti.model.Email;
import com.dimasblack.remkuzovchasti.repo.EmailRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    EmailRepo emailRepo;

    public Iterable<Email> findAllEmails(){
        return emailRepo.findAll();
    }

    public Email createEmail(Email email){
        Iterable<Email> emails = emailRepo.findAll();
        boolean alreadyInDb = false;
        for(Email m: emails){
            if(email.getEmail().equals(m.getEmail())){
                alreadyInDb = true;
                break;
            }
        }
        return !alreadyInDb ? emailRepo.save(email) : null;
    }
}
