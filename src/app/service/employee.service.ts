import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  addEmpURL: string;
  getEmpURL : string;
  constructor(private Http : HttpClient) { 
    this.addEmpURL = 'Http//localhost:9091/emp/add'
    this.getEmpURL = 'http//localhost:9091/emp/getAll'
  }
  add(emp : Employee): Observable<Employee>{
    return this.Http.post<Employee>(this.addEmpURL,emp);
  }
  getAllEmployee(): Observable<Employee[]>{
    return this.Http.get<Employee[]>(this.getEmpURL);
  }
 
}
