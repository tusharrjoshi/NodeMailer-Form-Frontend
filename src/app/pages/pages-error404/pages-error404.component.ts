import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { NgxAgeValidator } from "ngx-age-validator";

@Component({
  selector: 'app-pages-error404',
  templateUrl: './pages-error404.component.html',
  styleUrls: ['./pages-error404.component.css']
})
export class PagesError404Component implements OnInit {

  constructor() { }
  dataForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
    dob: new FormControl('',[Validators.required, NgxAgeValidator(18,100)]),
    mobile: new FormControl('',[Validators.required])
  })
  ngOnInit(): void {
    this.dataForm.controls.dob.valueChanges.subscribe(()=>{
      const controlErrors: ValidationErrors | null = this.dataForm.controls.dob.errors;
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach(keyError => {
          console.log(' keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
        });
      }
    })
  }

  get dataFormControls() {
    return this.dataForm.controls;
  }

  submit(){
    debugger
  }

}
