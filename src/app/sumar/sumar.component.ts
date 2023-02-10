import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sumar',
  templateUrl: './sumar.component.html',
  styleUrls: ['./sumar.component.css'],
})
export class SumarComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder
    
    
    ) {}

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value.n1);
      console.log(this.form.value.n2);
    }else{
      console.log("Verifique sus datos");

    }
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      n1: ['', Validators.required],
      n2: ['', Validators.required],
    });
  }
}
