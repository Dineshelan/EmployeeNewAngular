import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseURL = 'http://localhost:8080/api/v1';

  constructor(private httpClient: HttpClient) { }
  
  getEmployeesList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}/getAll`);
  }

  addEmployee(employee: Employee): Observable<Employee>{
    return this.httpClient.post<Employee>(`${this.baseURL}/add`, employee);
  }

  getEmployeeById(id: number): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/find/${id}`);
  }

  updateEmployee(id: number, employee: Employee): Observable<Employee>{
    return this.httpClient.put<Employee>(`${this.baseURL}/update/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<Employee>{
    return this.httpClient.delete<Employee>(`${this.baseURL}/delete/${id}`);
  }

}
