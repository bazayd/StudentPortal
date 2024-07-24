package com.brandonzayd.studentsystem.controller;

import com.brandonzayd.studentsystem.model.Student;
import com.brandonzayd.studentsystem.model.StudentClasses;
import com.brandonzayd.studentsystem.repository.StudentClassesRepository;
import com.brandonzayd.studentsystem.service.StudentClassesImpl;
import com.brandonzayd.studentsystem.service.StudentClassesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/studentclasses")
@CrossOrigin
public class StudentClassesController {

    @Autowired
    private StudentClassesService studentClassesService;

    @PostMapping("/add")
    public String addStudentClass(@RequestBody StudentClasses studentClasses) {
        return studentClassesService.addStudentClass(studentClasses);
    }

    @GetMapping(value = "/getStudentClasses/{userName}")
    public List<StudentClasses> getStudentClasses(@PathVariable String userName) {
        return studentClassesService.getStudentClasses( userName);
    }

    @GetMapping(value = "/getAll")
    public List<StudentClasses> getAllStudentClasses() {
        return studentClassesService.getAllStudentClassInfo();
    }
}
