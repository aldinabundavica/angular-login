import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStudentComponent } from './create-student/create-student.component';
import { ListStudentsComponent } from './list-students/list-students.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EditStudentComponent } from './edit-student/edit-student.component';



const routes: Routes = [
  {
    path: '', 
    pathMatch: 'full', 
    redirectTo: 'home'
  },
  {
    path: 'allstudents', 
    component: ListStudentsComponent
  },
  {
    path: 'login', 
    component: LoginComponent
  },
  {
    path: 'register', 
    component: RegisterComponent
  },
  {
    path: 'create-student', 
    component: CreateStudentComponent
  },
  {
    path: 'login', 
    component: LoginComponent
  },
  {
    path: 'edit-student/:id', 
    component: EditStudentComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
