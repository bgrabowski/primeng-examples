import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'stats-widget',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
    <div *ngFor="let stat of stats; let i = index" class="layout-card">
      <div class="stats-header">
        <span class="stats-title">
          {{ stat.title }}
        </span>
        <span class="stats-icon-box">
          <i [ngClass]="['pi', stat.icon]"></i>
        </span>
      </div>
      <div class="stats-content">
        <div class="stats-value">
          {{ stat.value }}
        </div>
        <div class="stats-subtitle">
          {{ stat.subtitle }}
        </div>
      </div>
    </div>
  `,
  host: {
    class: 'stats',
  },
})
export class StatsWidget {
  
  stats = [
    {
      title: 'Total Contract Value',
      icon: 'pi-dollar',
      value: '$5.6M',
      subtitle: '485 total contracts',
    },
    {
      title: 'Contracts Expiring in 30 days',
      icon: 'pi-clock',
      value: '$24.5K',
      subtitle: '12 contracts',
    },
    {
      title: 'Contracts Expiring in 60 days',
      icon: 'pi-clock',
      value: '$82.6K',
      subtitle: '28 contracts',
    },
  
  ];
}
