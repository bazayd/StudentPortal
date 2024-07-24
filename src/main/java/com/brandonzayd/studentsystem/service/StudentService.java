package com.brandonzayd.studentsystem.service;

import com.brandonzayd.studentsystem.model.Student;

import java.util.List;

public interface StudentService {
    public Student saveStudent(Student student);

    public List<Student> getAllStudents();

    public String registerStudent(Student student);

    public Student loginStudent(String email, String password);

    public String addClassToStudent(Student student, String className, String time, String room);
}
