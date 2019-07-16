import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { employee } from './employee.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public myForm: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this._fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      expdetail: this._fb.array([])
    });

    this.addExperience();

    /* subscribe to Experience value changes */
    // this.myForm.controls['expdetail'].valueChanges.subscribe(x => {
    //   console.log(x);
    // })
  }

  initExperience() {
    return this._fb.group({
      pastexperience: ['', Validators.required],
      companyname: ['', Validators.required],
      totalexperience: ['', Validators.required],
      rolename: ['', Validators.required]
    });
  }

  addExperience() {
    const control = <FormArray>this.myForm.get('expdetail');
    const addrCtrl = this.initExperience();

    control.push(addrCtrl);

    /* subscribe to individual experience value changes */
    // addrCtrl.valueChanges.subscribe(x => {
    //   console.log(x);
    // })
  }

  removeExperience(i: number) {
    const control = <FormArray>this.myForm.get('expdetail');
    control.removeAt(i);
  }

  save(model) {
    console.log(model);
  }

}
