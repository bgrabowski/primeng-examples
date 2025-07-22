import { Component, computed, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { LayoutService } from '../../service/layout.service';

interface Product {
  name: string;
  department: string;
  unitCost: number;
  quantity: number;
  totalCost: number;
  status: 'In Stock' | 'Low Stock' | 'Out of Stock';
  vendor?: string;
  currency?: string;
}
@Component({
  selector: 'product-overview-widget',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    FormsModule,
    TableModule,
    TagModule,
    RatingModule,
  ],
  template: `
    <div class="products-header">
      <span class="products-title">Recent Products</span>
      <p-iconfield class="search-field">
        <p-inputicon class="pi pi-search" />
        <input
          pInputText
          [(ngModel)]="searchQuery"
          placeholder="Search products..."
          class="products-search"
          (ngModelChange)="searchProducts()"
        />
      </p-iconfield>
    </div>
    <div class="products-table-container">
      <p-table
        [value]="filteredProducts"
        selectionMode="single"
        [(selection)]="selectedProduct"
        [loading]="loading"
        [rows]="5"
        [paginator]="true"
        [rowsPerPageOptions]="[5,10,20]"
        [showCurrentPageReport]="true"
        [showJumpToPageDropdown]="true"
        styleClass="products-table"
        [ngClass]="{ 'p-dark': isDarkMode() }"
      >
        <ng-template #header>
          <tr>
            <th pSortableColumn="name">Name <p-sortIcon field="name" /></th>
            <th pSortableColumn="department">
              Department <p-sortIcon field="department" />
            </th>
            <th pSortableColumn="unitCost">Unit Cost <p-sortIcon field="unitCost" /></th>
            <th pSortableColumn="quantity">Quantity <p-sortIcon field="quantity" /></th>
            <th pSortableColumn="totalCost">Total Cost <p-sortIcon field="totalCost" /></th>
          </tr>
        </ng-template>
        <ng-template #body let-product>
          <tr>
            <td>
              <span class="product-vendor" *ngIf="product.vendor">{{ product.vendor }}</span>
              <span class="product-name">{{ product.name }}</span>
            </td>
            <td>{{ product.department }}</td>
            <td>{{ product.unitCost | number:'1.0-0' }} {{ product.currency }}</td>
            <td>{{ product.quantity }}</td>
            <td>{{ product.totalCost | number:'1.0-0' }} {{ product.currency }}</td>
          </tr>
        </ng-template>
      </p-table>
    </div>
  `,
  host: {
    class: 'layout-card',
  },
  styles: `
  :host ::ng-deep  {
    .p-datatable-mask {
      backdrop-filter: blur(4px) !important;
      background-color: color-mix(in srgb, var(--p-surface-0), transparent 80%) !important;
    }
    .p-dark .p-datatable-mask {
      background-color: color-mix(in srgb, var(--p-surface-900), transparent 80%) !important;
    }
    .p-datatable-loading-icon {
      color: var(--p-primary-500) !important;
    }
    .product-vendor {
      display: block;
      font-size: 0.85em;
      color: #6b7280;
      font-weight: 500;
      margin-bottom: 2px;
    }
    .product-name {
      display: block;
      font-size: 1em;
      font-weight: 600;
    }
}

`})
export class ProductOverviewWidget {
  layoutService = inject(LayoutService);

  isDarkMode = computed(() => this.layoutService.appState().darkMode);

  selectedProduct!: Product;

  products: Product[] = [
    {
      name: 'Salesforce CRM',
      vendor: 'Salesforce',
      department: 'CRM',
      unitCost: 120,
      quantity: 10,
      totalCost: 1200,
      currency: 'USD',
      status: 'In Stock',
    },
    {
      name: 'Workday HCM',
      vendor: 'Workday',
      department: 'HR',
      unitCost: 95,
      quantity: 10,
      totalCost: 950,
      currency: 'USD',
      status: 'Low Stock',
    },
    {
      name: 'ServiceNow ITSM',
      vendor: 'ServiceNow',
      department: 'ITSM',
      unitCost: 180,
      quantity: 10,
      totalCost: 1800,
      currency: 'USD',
      status: 'Out of Stock',
    },
    {
      name: 'SAP S/4HANA Cloud',
      vendor: 'SAP',
      department: 'ERP',
      unitCost: 220,
      quantity: 10,
      totalCost: 2200,
      currency: 'USD',
      status: 'In Stock',
    },
    {
      name: 'Oracle Fusion Cloud ERP',
      vendor: 'Oracle',
      department: 'ERP',
      unitCost: 210,
      quantity: 10,
      totalCost: 2100,
      currency: 'USD',
      status: 'In Stock',
    },
    {
      name: 'Microsoft Dynamics 365',
      vendor: 'Microsoft',
      department: 'CRM',
      unitCost: 130,
      quantity: 10,
      totalCost: 1300,
      currency: 'USD',
      status: 'Low Stock',
    },
    {
      name: 'Adobe Creative Cloud',
      vendor: 'Adobe',
      department: 'Productivity',
      unitCost: 80,
      quantity: 10,
      totalCost: 800,
      currency: 'USD',
      status: 'In Stock',
    },
    {
      name: 'Google Workspace',
      vendor: 'Google',
      department: 'Productivity',
      unitCost: 60,
      quantity: 10,
      totalCost: 600,
      currency: 'USD',
      status: 'In Stock',
    },
    {
      name: 'Atlassian Jira Software',
      vendor: 'Atlassian',
      department: 'Project Management',
      unitCost: 90,
      quantity: 10,
      totalCost: 900,
      currency: 'USD',
      status: 'In Stock',
    },
    {
      name: 'Zendesk Support Suite',
      vendor: 'Zendesk',
      department: 'Customer Support',
      unitCost: 85,
      quantity: 10,
      totalCost: 850,
      currency: 'USD',
      status: 'Low Stock',
    },
    {
      name: 'Slack Business+',
      vendor: 'Slack',
      department: 'Collaboration',
      unitCost: 70,
      quantity: 10,
      totalCost: 700,
      currency: 'USD',
      status: 'In Stock',
    },
    {
      name: 'Box Enterprise',
      vendor: 'Box',
      department: 'Cloud Storage',
      unitCost: 65,
      quantity: 10,
      totalCost: 650,
      currency: 'USD',
      status: 'In Stock',
    },
    {
      name: 'DocuSign eSignature',
      vendor: 'DocuSign',
      department: 'eSignature',
      unitCost: 78,
      quantity: 10,
      totalCost: 780,
      currency: 'USD',
      status: 'Out of Stock',
    },
  ];

  searchQuery = '';

  loading = false;
  
  filteredProducts: any = [];

  ngOnInit() {
    this.filteredProducts = [...this.products];
  }

  searchProducts = () => {
    this.loading = true;
    this.filteredProducts = this.products.filter(
      (product) =>
        product.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        product.department
          .toLowerCase()
          .includes(this.searchQuery.toLowerCase()) ||
        product.status.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
    setTimeout(() => {
      this.loading = false;
    }, 300);
  };
}
