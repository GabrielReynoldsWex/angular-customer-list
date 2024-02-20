import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

// Customer Data Interface

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})

export class CustomerListComponent {

  // Not strongly typed but works well enough
  customerData: any[] = [];

  ngOnInit(): void {

    var dataString = localStorage.getItem('customerData');
    if (dataString !== null) {
      this.customerData = JSON.parse(dataString);
    }
  }
}