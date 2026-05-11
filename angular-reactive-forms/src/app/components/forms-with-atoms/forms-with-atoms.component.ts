import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-forms-with-atoms',
  templateUrl: './forms-with-atoms.component.html',
  styleUrls: ['./forms-with-atoms.component.scss']
})
export class FormsWithAtomsComponent implements OnInit {
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

  onChangeGeneralFields(value: string, field: string): void {
    const updatedValues: { [key: string]: string } = {};
    updatedValues[field] = value;
    this.generalInfoForm.patchValue(updatedValues);
  }

  onChangeFormlistFields(value: string, field: string, index: number): void {
    const updatedValues: { [key: string]: string } = {};
    updatedValues[field] = value;
    this.formList[index].patchValue(updatedValues);
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
