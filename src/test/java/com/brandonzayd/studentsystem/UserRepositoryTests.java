package com.brandonzayd.studentsystem;

import static org.assertj.core.api.Assertions.assertThat;

import com.brandonzayd.studentsystem.model.Student;
import com.brandonzayd.studentsystem.repository.StudentRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.annotation.Rollback;

@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
@Rollback(false)
public class UserRepositoryTests {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private StudentRepository studentRepository;

    @Test
    public void testCreateStudent() {
        Student student = new Student();
        student.setUserName("treeliam");
        student.setPassword("pass");
        student.setFirstName("Liam");
        student.setLastName("Tree");

        Student savedStudent = studentRepository.save(student);
        Student studentExist = entityManager.find(Student.class, savedStudent.getId());

        assertThat(student.getId()).isEqualTo(studentExist.getId());
    }
}
