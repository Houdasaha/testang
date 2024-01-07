import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl} from '@angular/forms'

@Component({
  selector: 'app-terrain',
  templateUrl: './terrain.component.html',
  styleUrls: ['./terrain.component.css']
})
export class TerrainComponent {
  empDetail !: FormGroup;

  constructor(private formBuilder : FormBuilder) {}

  ngOnInit(): void {
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
  }
}
