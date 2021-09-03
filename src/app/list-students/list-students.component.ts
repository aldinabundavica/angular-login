import { Component, OnInit } from '@angular/core';
import { Observable,Subject } from 'rxjs';
import { StudentService } from '../service/student.service';

import {FormControl,FormGroup,Validators} from '@angular/forms';  
import { Student } from '../model/student';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {
  formBuilder: any;

  constructor(private studentService:StudentService, 
    private router: Router) { }

  studentsArray:any[]=[];

  students: Array<Student>;
  stud:Student=new Student();
  deleteMessage=false;
  studentlist:any;


  ngOnInit(): void {  
    this.studentService.getStudentList().subscribe(data =>{  
    this.students = data;
    })
  }  

  deleteStudent(id: number) {
    this.studentService.deleteStudent(id).subscribe(
      data=>{
        console.log(data);
        this.studentService.getStudentList().subscribe(data=>{
          this.students=data})
      }
    )
  }

  updateStudent(id: number) {
    this.router.navigate(['edit-student', id]);
  }
}
