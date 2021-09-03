import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Student } from '../model/student';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})
export class StudentService {

    constructor(private httpClient: HttpClient) {}

    getStudentList(): Observable<Student[]>{
        return this.httpClient.get<Student[]>(`${environment.apiUrl}allstudents`).pipe(
            map(data=>{
                data.map(
                    value => {
                        value.birthDate = new Date(value.birthDate);
                        return value;
                    }
                )
                return data;
            })
        );
    }

    createStudent(student: Student): Observable<Object>{
        return this.httpClient.post(`${environment.apiUrl}` + `create-student`, student);
      }

    deleteStudent(id: number): Observable<Object>{
        return this.httpClient.delete(`${environment.apiUrl}` + `delete-student/${id}`);
    }

    updateStudent(id: number, student: Student): Observable<Object>{
        return this.httpClient.put(`${environment.apiUrl}` + `update-student/${id}`, student);
    }

    getStudent(id: number): Observable<Student>{
        return this.httpClient.get<Student>(`${environment.apiUrl}` + `student/${id}`).pipe(
            map(data=>{
                data.birthDate = new Date(data.birthDate);
                return data;
            })
        );
    }
}