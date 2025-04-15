import { AfterViewInit,Component, OnInit } from '@angular/core';
import { LeaveService } from '../services/leave.service';
import { Chart } from 'chart.js/auto';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-leave',
  standalone: false,
  templateUrl: './leave.component.html',
  styleUrl: './leave.component.css'
})
export class LeaveComponent implements OnInit {
  leaves: any[] = [];
  searchText = '';

  constructor(private leaveService: LeaveService) {}

  ngOnInit() {
    this.leaves = this.leaveService.getLeaves();
  }

  filteredLeaves() {
    return this.leaves.filter(leave =>
      leave.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  addLeave() {
    console.log('Add leave clicked');
    // Open modal or navigate
  }

  openAction(leave: any) {
    console.log('Action for leave:', leave);
  }
}