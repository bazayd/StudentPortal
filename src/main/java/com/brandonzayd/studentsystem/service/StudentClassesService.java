package com.brandonzayd.studentsystem.service;

import com.brandonzayd.studentsystem.model.Student;
import com.brandonzayd.studentsystem.model.StudentClasses;

import java.util.List;

public interface StudentClassesService {

    public String addStudentClass(StudentClasses studentClasses);

    public List<StudentClasses> getStudentClasses(String userName);

    public List<StudentClasses> getAllStudentClassInfo();

}
