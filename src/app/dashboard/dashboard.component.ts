import { Component } from '@angular/core';
import { AfterViewInit , ViewChild, ElementRef} from '@angular/core';
import { Chart } from 'chart.js/auto';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { OnInit, Renderer2 } from '@angular/core';
declare var bootstrap: any;


@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})


export class DashboardComponent {
  isSidebarVisible = true;


  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}


  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }

    
  }
