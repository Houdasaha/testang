import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl} from '@angular/forms'
import { Employee } from '../model/employee';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent  {

  empDetail !: FormGroup;
  empObj : Employee = new Employee();
  empList : Employee[] = [];

  constructor(private formBuilder : FormBuilder, private empService : EmployeeService) {}

  ngOnInit(): void {
    this.getAllEmployee();
    this.empDetail = this.formBuilder.group({
      id : [''],
      Nom : [''],
      Prenom : [''],
      Contact : [''],
      type_travail : ['']

    })
    
  }
  add(){
    console.log(this.empDetail);
    this.empObj.id = this.empDetail.value.id;
    this.empObj.Nom = this.empDetail.value.Nom;
    this.empObj.Prenom = this.empDetail.value.Prenom;
    this.empObj.Contact = this.empDetail.value.Contact;
    this.empObj.type_travail = this.empDetail.value.type_travail;

    this.empService.add(this.empObj).subscribe(res=>{
      console.log(res);
      this.getAllEmployee();
    },err=>{
      console.log(err);
    });
  }
  modifieremp(){
    
  }
  getAllEmployee() {
  this.empService.getAllEmployee().subscribe(res=>{
    this.empList = res;
  },err=>{
   console.log("error while fetching data")
  });
  }
  
}