package com.brandonzayd.studentsystem.service;

import com.brandonzayd.studentsystem.controller.StudentClassesController;
import com.brandonzayd.studentsystem.model.Student;
import com.brandonzayd.studentsystem.model.StudentClasses;
import com.brandonzayd.studentsystem.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

// For service classs
@Service
public class StudentServiceImpl implements StudentService{

    // Auto wire the repository
    @Autowired
    private StudentRepository studentRepository;

    @Override
    public Student saveStudent(Student student) {
        return studentRepository.save(student);
    }

    @Override
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    @Override
    public String registerStudent(Student student) {
        if (studentRepository.findByEmail(student.getEmail()) != null) {
            return "STUDENT EXISTS!";
        }else {
            studentRepository.save(student);
            return "STUDENT ADDED";
        }
    }

    @Override
    public Student loginStudent(String email, String password) {
        Student student = studentRepository.findByEmail(email);
        if (student == null || !student.getPassword().equals(password)) {
            return null;
        }else{
            return student;
        }
    }

    @Override
    public String addClassToStudent(Student student, String className, String time, String room) {
        StudentClasses studentClasses = new StudentClasses();
        studentClasses.setClassName(className);
        studentClasses.setTime(time);
        studentClasses.setRoom(room);
        return "Class successfully added";
    }
}
