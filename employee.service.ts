import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,of,Subject } from 'rxjs';
import { map } from 'rxjs/operators';


import { Employee } from './employee.model';

@Injectable()
export class EmployeeService {
  selectedEmployee: Employee;
  employees: Employee[];
  readonly baseURl = 'http://localhost:3000/employees';

  constructor(private http : HttpClient) { }

  postEmployee(emp : Employee){
    return this.http.post(this.baseURl, emp);
  }

  getEmployeeList() {
    return this.http.get(this.baseURl);
  }

  putEmployee(emp: Employee) {
    return this.http.put(this.baseURl + `/${emp._id}` ,emp);
  }

  deleteEmployee(_id: string) {
    return this.http.delete(this.baseURl + `/${_id}`);
  }
}
