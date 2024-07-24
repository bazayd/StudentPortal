package com.brandonzayd.studentsystem.service;

import com.brandonzayd.studentsystem.model.Student;
import com.brandonzayd.studentsystem.model.StudentClasses;
import com.brandonzayd.studentsystem.repository.StudentClassesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class StudentClassesImpl implements  StudentClassesService{

    @Autowired
    private StudentClassesRepository studentClassesRepository;
    @Override
    public String addStudentClass(StudentClasses studentClasses) {
        // If both student username and class aren't registered together then user has not added class (avoids duplicates)
        if (studentClassesRepository.findByUserName(studentClasses.getUserName()) != null &&
                studentClassesRepository.findByClassName(studentClasses.getClassName()) != null) {
            return "Student has already added class.";
        }else {
            studentClassesRepository.save(studentClasses);
            return "Student has added class";
        }
    }

    @Override
    public List<StudentClasses> getStudentClasses(String userName) {
        if (studentClassesRepository.findAllByUserName(userName) == null) {
            return Collections.emptyList();
        }else {
            return studentClassesRepository.findAllByUserName(userName);
        }
    }

    @Override
    public List<StudentClasses> getAllStudentClassInfo() {
        return studentClassesRepository.findAll();
    }


}
