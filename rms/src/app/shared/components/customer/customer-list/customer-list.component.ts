import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
interface Country {
  name: string;
}

interface Representative {
  name: string;
}

interface Customer {
  id: number; // Optional for new customers
  name: string;
  country: Country;
  company: string;
  representative: Representative;
}

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    TableModule

  ],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss'
})
export class CustomerListComponent implements OnInit {

  customers: Customer[] = [];
  first: number = 0;
  constructor(private router: Router) { }
  ngOnInit(): void {
    this.customers = [
      {
        id: 1,
        name: 'John Doe',
        country: { name: 'USA' },
        company: 'Tech Corp',
        representative: { name: 'Jane Smith' },
      },
      {
        id: 2,
        name: 'Alice Chan',
        country: { name: 'Singapore' },
        company: 'Innovate Ltd',
        representative: { name: 'Tom Lim' },
      },
      {
        id: 3,
        name: 'Carlos Vega',
        country: { name: 'Mexico' },
        company: 'Global Inc.',
        representative: { name: 'Luisa Moreno' },
      },
      {
        id: 4,
        name: 'Sara Yamada',
        country: { name: 'Japan' },
        company: 'Nippon Tech',
        representative: { name: 'Kenji Ito' },
      },
      {
        id: 5,
        name: 'Linda Müller',
        country: { name: 'Germany' },
        company: 'Bavaria Solutions',
        representative: { name: 'Hans Becker' },
      },
      {
        id: 6,
        name: 'Mohammed Ali',
        country: { name: 'UAE' },
        company: 'Desert Stars',
        representative: { name: 'Khalid Zayed' },
      },
      {
        id: 7,
        name: 'Emily Brown',
        country: { name: 'Canada' },
        company: 'Maple Labs',
        representative: { name: 'Rachel Green' },
      },
    ];
  }

  next(): void {
    this.first = this.first + 5;
  }

  prev(): void {
    this.first = this.first - 5;
  }

  reset(): void {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.customers ? this.first >= this.customers.length - 5 : true;
  }

  isFirstPage(): boolean {
    return this.first === 0;
  }

  pageChange(event: any): void {
    this.first = event.first;
  }

  onView(customer: any) {
    // Logic to view customer
    this.router.navigate(['/customer/view', customer.id]);
  }

  onAddCustomer() {
    this.router.navigate(['/customer/create']);
  }

  onEdit(customer: any) {
    // Logic to edit customer
    console.log('Edit customer:', customer);
    this.router.navigate(['/customer/edit', customer.id]);
  }

  onDelete(customer: any) {
    // Logic to delete customer
    console.log('Delete customer:', customer);
  }


}
