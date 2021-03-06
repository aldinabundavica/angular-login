import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  constructor(private studentService: StudentService,
    private router: Router, private formBuilder: FormBuilder) { }

    addForm: FormGroup;
    firstName: FormControl;
    bsConfig: any;
    isFailed: boolean;
    today: Date;

    errorMessage = '';
    


   ngOnInit(): void {
     this.addForm=this.formBuilder.group({
        id: [],
        name: new FormControl('', 
        Validators.compose([Validators.required, Validators.minLength(3)])),
        lastname: ['', Validators.required],
        birthDate: ['', Validators.required]
     });
     this.bsConfig = {
      dateInputFormat: 'MM-dd-yyyy'
    };
    this.today = new Date();
    this.isFailed = false;
   }


  onSubmit(){
    this.studentService.createStudent(this.addForm.value).subscribe(data=>{
      this.router.navigate(['allstudents']);
    },
    err => {
      this.errorMessage = err.error.message;
      this.isFailed = true;
    }
    );
  }    
}
