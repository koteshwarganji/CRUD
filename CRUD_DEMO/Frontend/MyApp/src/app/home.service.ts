import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(public http : HttpClient) { }
  submitForm(empData:any){
    return this.http.post<any>('http://localhost:3000/addEmployee',empData);
  }

  getAllEmployees(){
    return this.http.get<any>('http://localhost:3000/getAllEmployees');
  }

  deleteEmployee(eid:string){
    return this.http.delete<any>('http://localhost:3000/deleteEmployee/'+eid);
  }
  readEmployee(eid:string){
    return this.http.get<any>('http://localhost:3000/getEmployee/'+eid);
  }
  updateEmployee(empData:any){
    return this.http.put<any>('http://localhost:3000/updateEmployee',empData)
  }
}
