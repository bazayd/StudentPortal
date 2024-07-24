package com.brandonzayd.studentsystem.repository;

import com.brandonzayd.studentsystem.model.Classes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClassesRepository extends JpaRepository<Classes, Integer> {
    Classes findByClassName(String className);

    Classes findByInstructor(String instructor);

    Classes findByTime(String time);

    Classes findBySemester(String semester);
}
