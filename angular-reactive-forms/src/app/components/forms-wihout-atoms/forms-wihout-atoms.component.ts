import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-forms-wihout-atoms',
  templateUrl: './forms-wihout-atoms.component.html',
  styleUrls: ['./forms-wihout-atoms.component.scss']
})
export class FormsWihoutAtomsComponent implements OnInit {
  public generalInfoForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    dni: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
  });
  public formList: FormGroup[] = [];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit():void {
    this.addRowForm();
  }

  setInitialDate(): string {
    const today = new Date();
    return today.toISOString().split('T')[0];
  }

  addRowForm(): void {
    const newForm = this.formBuilder.group({
      product: ['', Validators.required],
      price: ['', Validators.required],
      currency: ['', Validators.required],
      amount: ['', Validators.required],
      purchaseDate: [this.setInitialDate(), Validators.required],
    });
    this.formList.push(newForm);
  }

  submit(): void {
    const exampleObject = {
      customer_name: this.generalInfoForm.get('name')?.value,
      customer_last_name: this.generalInfoForm.get('lastName')?.value,
      customer_dni: this.generalInfoForm.get('dni')?.value,
      customer_age: this.generalInfoForm.get('age')?.value,
      details: this.formList.map((form) => {
        return {
          product_name: form.get('product')?.value,
          value: form.get('price')?.value,
          currency_type: form.get('currency')?.value,
          quantity: form.get('amount')?.value,
          purchase_Date: form.get('purchaseDate')?.value,
        };
      }),
    };
    console.log(exampleObject); //send object to a service
  }
}
