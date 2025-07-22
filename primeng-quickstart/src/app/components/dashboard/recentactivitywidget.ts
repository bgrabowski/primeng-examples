import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'recent-activity-widget',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
    <span class="chart-title">Recent Activity</span>
    <div class="activity-list">
      <div
        *ngFor="let activity of activities; let i = index"
        class="activity-item"
      >
        <i
          [ngClass]="['activity-icon', activity.color, 'pi', activity.icon]"
        ></i>
        <div class="activity-content">
          <span class="activity-label" *ngIf="activity.label">{{
            activity.label
          }}</span>
          <span class="activity-text">
            <ng-container *ngIf="activity.link; else plainText">
              <a
                [href]="activity.link"
                target="_blank"
                rel="noopener"
                class="activity-link"
                >{{ activity.text }}</a
              >
            </ng-container>
            <ng-template #plainText>{{ activity.text }}</ng-template>
          </span>
          <span class="activity-time">{{ activity.time }}</span>
        </div>
      </div>
    </div>
  `,

  host: {
    class: 'layout-card col-item-2',
  },
})
export class RecentActivityWidget {
  activities = [
    {
      icon: 'pi-user-plus',
      label: 'New user added',
      text: 'Jeremy Smith',
      link: 'https://www.terzo.ai',
      time: '15 minutes ago',
      color: 'yellow',
    },
    {
      icon: 'pi-file-pdf',
      label: 'New contract updated',
      text: 'Oracle Enterprise SaaS Subscription',
      link: 'https://www.terzo.ai',
      time: '2 days ago',
      color: 'blue',
    },
    {
      icon: 'pi-file-pdf',
      label: 'New contract updated',
      text: 'Oracle Cloud Infrastructure Usage Agreement',
      link: 'https://www.terzo.ai',
      time: '3 days ago',
      color: 'blue',
    },
    {
      icon: 'pi-file-pdf',
      label: 'New contract updated',
      text: 'Oracle SaaS Master Services Agreement (MSA)',
      link: 'https://www.terzo.ai',
      time: '4 days ago',
      color: 'blue',
    },
    {
      icon: 'pi-user-plus',
      label: 'New user added',
      text: 'Marcus Oberman',
      link: 'https://www.terzo.ai',
      time: '5 days ago',
      color: 'yellow',
    },
  ];
}
