import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  empForm!: FormGroup;
  successMessage : string ='';
  errorMessage : string = '';
  empArr : any[] = [];
  enableUpdatebtn : boolean = false;
  constructor(public formBuilder : FormBuilder,public homeService : HomeService) { }

  ngOnInit(): void {
    this.enableUpdatebtn = false;
    this.successMessage='';
    this.empForm = this.formBuilder.group({
      EmployeeId : ['',Validators.required],
      FullName : ['',Validators.required],
      Salary : ['',Validators.required],
      Designation : ['',Validators.required],
      MobileNo : ['',Validators.required],
      Email : ['',Validators.required],
      Address : this.formBuilder.group({
        City : ['',Validators.required],
        State : ['',Validators.required]
      })
    });
    // console.log(this.empForm);
    // console.log(this.empForm.controls.Address.get('City')?.errors)
    this.getAllEmployees();
  }

  submitForm(){
    let empData = this.empForm.value;
    this.homeService.submitForm(empData).subscribe(
      (success)=>{
        this.successMessage = success.message;
        this.errorMessage='';
        this.getAllEmployees();
      },
      (error)=>{
        this.errorMessage = error.error.message;
        this.successMessage='';
      }
    )
  }

  getAllEmployees(){
    this.homeService.getAllEmployees().subscribe(
      (success)=>{
        this.empArr = success.message;
        this.errorMessage='';
      },
      (error)=>{
        this.errorMessage = error.error.message;
        this.empArr=[];
      }
    )
  }

  deleteEmployee(eid:string){
    this.homeService.deleteEmployee(eid).subscribe(
      (success)=>{
        this.getAllEmployees();
      },
      (error)=>{
        this.errorMessage=error.error.message;
        this.successMessage='';
      }
    )
  }

  readById(eid:string){
    this.homeService.readEmployee(eid).subscribe(
      (success)=>{
        // console.log(success.message);
        this.enableUpdatebtn=true;
        for(let property in success.message){
          console.log(property)
          if(property !=='_id'){
            this.empForm.get(property)?.setValue(success.message[property]);
          }
            
        }
      },
      (error)=>{
        this.errorMessage=error.error.message;
      }
    )
  }
  updateEmployee(){
    let empData = this.empForm.value;
    this.homeService.updateEmployee(empData).subscribe(
      (success)=>{
            this.successMessage = success.message;      
      },
      (error)=>{
        this.errorMessage=error.error.message;
        this.successMessage='';
      }
    );
    setTimeout(()=>{
      this.ngOnInit();
    },3000); 
  }
}
