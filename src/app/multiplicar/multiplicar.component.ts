import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-multiplicar',
  templateUrl: './multiplicar.component.html',
  styleUrls: ['./multiplicar.component.css']
})
export class MultiplicarComponent implements OnInit {
form: FormGroup;
  constructor(private fb: FormBuilder) { }

  onSubmit(){
    if(this.form.valid){
      console.log(this.form.value.n1);
      console.log(this.form.value.n2);
    }else{
      console.log("Verifique sus datos");
      
    }
  }

  ngOnInit(): void {
  }

}
