package com.brandonzayd.studentsystem.controller;

import com.brandonzayd.studentsystem.model.Student;
import com.brandonzayd.studentsystem.service.StudentService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/student")
@CrossOrigin
public class StudentController {
    @Autowired
    private StudentService studentService;

    // Code for saving data into our database
    // Uses POST method
    @PostMapping("/add")
    public String add(@RequestBody Student student) {
        return studentService.registerStudent(student);
    }

    // Uses GET method for getting data (Following method is for getting all students from table)
    @GetMapping("/getAll")
    public List<Student> getAllStudents() {
         return studentService.getAllStudents();
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody Student student, HttpSession session){
        Student loggedInStudent = studentService.loginStudent(student.getEmail(), student.getPassword());
        if (loggedInStudent == null) {
            return new ResponseEntity<>("Invalid Credentials", HttpStatus.UNAUTHORIZED);
        }
        session.setAttribute("loggedInStudent", loggedInStudent);
        return new ResponseEntity<>("Login Successful", HttpStatus.OK);
    }

    @GetMapping("/current")
    public ResponseEntity<Student> getCurrentUser(HttpSession session) {
        Student loggedInStudent = (Student) session.getAttribute("loggedInStudent");
        if (loggedInStudent != null) {
            return new ResponseEntity<>(loggedInStudent, HttpStatus.OK);
        }else {
            return new ResponseEntity<>(null, HttpStatus.UNAUTHORIZED);
        }
    }
}
