package com.brandonzayd.studentsystem.service;

import com.brandonzayd.studentsystem.model.Classes;

import java.util.List;

public interface ClassesService {

    public String addClass(Classes classes);

    public List<Classes> showClasses();
}
