package com.brandonzayd.studentsystem.repository;

import com.brandonzayd.studentsystem.model.Student;
import com.brandonzayd.studentsystem.model.StudentClasses;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StudentClassesRepository extends JpaRepository<StudentClasses, Integer> {
    StudentClasses findByUserName(String userName);
    StudentClasses findByClassName(String className);
    List<StudentClasses> findAllByUserName(String userName);
}
