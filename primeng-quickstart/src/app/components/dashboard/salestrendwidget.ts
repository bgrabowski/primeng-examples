import { Component, inject } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { ChipModule } from 'primeng/chip';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { LayoutService } from '../../service/layout.service';
import { debounceTime, Subscription } from 'rxjs';
import 'primeicons/primeicons.css';

@Component({
  selector: 'sales-trend-widget',
  standalone: true,
  imports: [CommonModule, ChartModule, ChipModule, ButtonModule, TagModule],
  template: `
    <div class="chart-header">
      <span class="chart-title">Agreement Type</span>
      <div class="dashboard-filters-actions">
        <p-tag class="dashboard-filters-chip" icon="pi pi-filter" value="3"></p-tag>
        <button pButton type="button" icon="pi pi-chart-bar" class="p-button-text p-button-rounded dashboard-filters-action"></button>
        <button pButton type="button" icon="pi pi-palette" class="p-button-text p-button-rounded dashboard-filters-action" (click)="toggleYellow()" [ngClass]="{ 'active': useYellow }" [title]="useYellow ? 'Use Primary Colors' : 'Use Yellow Colors'"></button>
        <button pButton type="button" icon="pi pi-ellipsis-v" class="p-button-text p-button-rounded dashboard-filters-action"></button>
      </div>
    </div>
    <div class="chart-content">
      <p-chart
        type="bar"
        height="300px"
        [data]="chartData"
        [options]="chartOptions"
      />
    </div>
  `,
  host: {
    class: 'layout-card col-item-2',
  },
})
export class SalesTrendWidget {
  layoutService = inject(LayoutService);

  subscription!: Subscription;

  chartData: any;

  chartOptions: any;

  selectedRevenueMonth: any = { name: 'January - July 2021', code: '0' };

  revenueMonth: any = [
    { name: 'January - July 2021', code: '0' },
    { name: 'August - December 2020', code: '1' },
  ];

  useYellow: boolean = false;

  constructor() {
    this.subscription = this.layoutService.appStateUpdate$
      .pipe(debounceTime(25))
      .subscribe(() => {
        this.initChart();
      });
  }

  ngOnInit() {
    this.initChart();
  }

  initChart() {
    const documentStyle = getComputedStyle(document.documentElement);
    const barColors = this.useYellow
      ? [
          documentStyle.getPropertyValue('--p-yellow-400'),
          documentStyle.getPropertyValue('--p-yellow-300'),
          documentStyle.getPropertyValue('--p-yellow-200'),
        ]
      : [
          documentStyle.getPropertyValue('--p-primary-400'),
          documentStyle.getPropertyValue('--p-primary-300'),
          documentStyle.getPropertyValue('--p-primary-200'),
        ];

    this.chartData = {
      labels: ['Q1', 'Q2', 'Q3', 'Q4'],
      datasets: [
        {
          type: 'bar',
          label: 'Subscriptions',
          backgroundColor: barColors[0],
          data: [4000, 10000, 15000, 4000],
          barThickness: 32,
        },
        {
          type: 'bar',
          label: 'Services',
          backgroundColor: barColors[1],
          data: [2100, 8400, 2400, 7500],
          barThickness: 32,
        },
        {
          type: 'bar',
          label: 'Licenses',
          backgroundColor: barColors[2],
          data: [4100, 5200, 3400, 7400],
          borderRadius: {
            topLeft: 8,
            topRight: 8,
          },
          barThickness: 32,
        },
      ],
    };

    this.chartOptions = {
      maintainAspectRatio: false,
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
      },
      scales: {
        x: {
          stacked: true,
          grid: {
            color: 'transparent',
            borderColor: 'transparent',
          },
        },
        y: {
          stacked: true,
          grid: {
            color: 'transparent',
            borderColor: 'transparent',
            drawTicks: false,
          },
        },
      },
    };
  }

  changeRevenueChart(event: any) {
    const dataSet1 = [
      [37, 34, 21, 27, 10, 18, 15],
      [31, 27, 30, 37, 23, 29, 20],
      [21, 7, 13, 3, 19, 11, 6],
      [47, 31, 35, 20, 46, 39, 25],
    ];
    const dataSet2 = [
      [31, 27, 30, 37, 23, 29, 20],
      [47, 31, 35, 20, 46, 39, 25],
      [37, 34, 21, 27, 10, 18, 15],
      [21, 7, 13, 3, 19, 11, 6],
    ];

    if (event.value.code === '1') {
      this.chartData.datasets[0].data = dataSet2[parseInt('0')];
      this.chartData.datasets[1].data = dataSet2[parseInt('1')];
      this.chartData.datasets[2].data = dataSet2[parseInt('2')];
      this.chartData.datasets[3].data = dataSet2[parseInt('3')];
    } else {
      this.chartData.datasets[0].data = dataSet1[parseInt('0')];
      this.chartData.datasets[1].data = dataSet1[parseInt('1')];
      this.chartData.datasets[2].data = dataSet1[parseInt('2')];
      this.chartData.datasets[3].data = dataSet1[parseInt('3')];
    }
  }

  toggleYellow() {
    this.useYellow = !this.useYellow;
    this.initChart();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
