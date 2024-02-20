import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-customer-form',
  standalone: true,
  imports: [ FormsModule, ReactiveFormsModule ],
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.css'
})
export class CustomerFormComponent {

  formData = this.formBuilder.group({
    name: '',
    phone: ''
  })
 
  constructor (
    private formBuilder: FormBuilder
  ) {}

  determineId(customerData : any) {
    var currentId = customerData[customerData.length - 1].id;
    var currentIdNumber = Number(currentId);
    return currentIdNumber += 1;
  }

  addToStorage(customerDataString: string) {
    
    var customerData = JSON.parse(customerDataString);
    var id;

    // If dataset is already an array, then invoke the determine ID method
    if (Array.isArray(customerData)) {
       id = this.determineId(customerData)
    }

    // Else, since we know the ID can only possibly have a value of 1 (as there is only one dataset entry),
    // convert dataset to array and set ID to 2
    else {
      customerData = Array.of(customerData);
      id = 2;
    }

    // Create new JSON Object, push into array and save to localStorage.
    var newCustomer = {id: id, name: this.formData.value.name, phone: this.formData.value.phone};
    customerData.push(newCustomer);
    localStorage.setItem('customerData', JSON.stringify(customerData));
  }

  createStorage() {
    var newCustomer = JSON.stringify({id: '1', name: this.formData.value.name, phone: this.formData.value.phone});
    localStorage.setItem('customerData', newCustomer);
  }
  
  onSubmit() : void {

    var customerDataString = localStorage.getItem('customerData');

    // See if dataset is currently empty
    if(customerDataString !== null)
      this.addToStorage(customerDataString);
    else
      this.createStorage();

    this.formData.reset();
  }
}