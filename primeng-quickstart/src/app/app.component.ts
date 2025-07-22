import { Component, OnInit } from '@angular/core';
import { AppTopbar } from './components/app.topbar';
import { StatsWidget } from "./components/dashboard/statswidget";
import { SalesTrendWidget } from "./components/dashboard/salestrendwidget";
import { RecentActivityWidget } from "./components/dashboard/recentactivitywidget";
import { ProductOverviewWidget } from "./components/dashboard/productoverviewwidget";
import { AppFooter } from "./components/app.footer";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AppTopbar, StatsWidget, SalesTrendWidget, RecentActivityWidget, ProductOverviewWidget, AppFooter],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loading = true;

  ngOnInit(): void {
    // Wait just long enough for CSS to load
    setTimeout(() => {
      this.loading = false;
    }, 100); // You can adjust this duration (e.g., 200ms or 300ms)
  }
}
