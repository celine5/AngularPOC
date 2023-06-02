import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http:HttpClient) { }

  addEmployee(data :any) : Observable<any>  {
    return this._http.post('http://localhost:3000/employees',data);
  }
  updateEmployee(id:number,data :any) : Observable<any>  {
    return this._http.put(`http://localhost:3000/employees/${id}`,data);
  }
  getEmployeeList() : Observable<any>  {
    return this._http.get('http://localhost:3000/employees');
  }
  deleteEmployee(id: number) : Observable<any> {
    return this._http.delete(`http://localhost:3000/employees/${id}`);
  }
 

  addClient(data :any) : Observable<any>  {
    return this._http.post(' http://localhost:3000/clients',data);
  }
  updateClient(id:number,data :any) : Observable<any>  {
    return this._http.put(`http://localhost:3000/clients/${id}`,data);
  }
  getClientList() : Observable<any>  {
    return this._http.get(' http://localhost:3000/clients');
  }
  deleteClient(id: number) : Observable<any> {
    return this._http.delete(`http://localhost:3000/clients/${id}`);
  }


  addEmployeeList(data :any) : Observable<any>  {
    return this._http.post(' http://localhost:4203/addEmployee',data);
  }


  addProject(data :any) : Observable<any>  {
    return this._http.post('http://localhost:4201/project',data);
  }

  addClientList(data :any) : Observable<any>  {
    return this._http.post('http://localhost:4204/ClientsList',data);
  }
  
  
  
}
