package com.brandonzayd.studentsystem.service;

import com.brandonzayd.studentsystem.model.Classes;
import com.brandonzayd.studentsystem.model.Student;
import com.brandonzayd.studentsystem.repository.ClassesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClassesServiceImpl implements  ClassesService{

    @Autowired
    private ClassesRepository classesRepository;


    @Override
    public String addClass(Classes classes) {
        if (classesRepository.findByInstructor(classes.getInstructor()) != null
        && classesRepository.findBySemester(classes.getSemester()) != null
                && classesRepository.findByTime(classes.getTime()) != null) {
            return "Duplicate Class; Cannot add.";
        }else {
            classesRepository.save(classes);
            return "Class Added";
        }
    }

    @Override
    public List<Classes> showClasses() {
        return classesRepository.findAll();
    }
}
