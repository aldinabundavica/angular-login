import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../model/student';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  constructor(private studentService: StudentService, 
    private route: ActivatedRoute,
    private router: Router) { }

    today: Date = new Date();
    student: Student;
    isUpdated = false;
    id: number;

  ngOnInit(): void {
    this.student = new Student();

    this.id = this.route.snapshot.params['id'];

    this.studentService.getStudent(this.id).subscribe(
      data =>{
        this.student = data;
      },
      error => console.log(error)
    )
  }

  updateStudent() {
    this.studentService.updateStudent(this.id, this.student).subscribe(
      data =>{
        console.log(data);
        this.student = new Student();
        this.router.navigate(['allstudents']);
      }
    )
    this.isUpdated = true;
  }

  onSubmit() {
    this.updateStudent();
  }

}
