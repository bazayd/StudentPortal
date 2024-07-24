package com.brandonzayd.studentsystem.controller;

import com.brandonzayd.studentsystem.model.Classes;
import com.brandonzayd.studentsystem.service.ClassesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/classes")
@CrossOrigin
public class ClassesController {
    @Autowired
    private ClassesService classesService;

    @PostMapping("/add")
    public String add(@RequestBody Classes classes) {
        return classesService.addClass(classes);
    }

    @GetMapping("/getAll")
    public List<Classes> getClasses() {
        return classesService.showClasses();
    }

}
