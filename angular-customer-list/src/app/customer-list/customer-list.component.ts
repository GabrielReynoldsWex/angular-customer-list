import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

// Customer Data Interface

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [ NgFor ],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})

export class CustomerListComponent {

  ngOnInit() : void {

    var customerString = localStorage.getItem('customerList');
    console.log("testing: " + customerString );

  }

}