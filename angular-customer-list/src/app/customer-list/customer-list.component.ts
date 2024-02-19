import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [ NgFor ],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})

export class CustomerListComponent {

  protected CustomerList: string[][] = [ 
    ["1", "John Smith", "1111111111"],
    ["2", "Greg Davies", "2222222222"],
    ["3", "Alex Horne", "3333333333"],
    ["3", "James Acaster", "4444444444"] 
  ];
}