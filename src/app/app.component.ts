import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ServerStatusComponent } from './dashboard/server-status/server-status.component';
import { TrafficComponent } from './dashboard/traffic/traffic.component';
import { TicketComponent } from './dashboard/ticket/ticket.component';
import { DashboardItemComponent } from './dashboard/dashboard-item/dashboard-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ServerStatusComponent, TrafficComponent, TicketComponent, DashboardItemComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
 
}
