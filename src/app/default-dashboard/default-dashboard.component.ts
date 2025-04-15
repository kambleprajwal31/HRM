import { Component, AfterViewInit, ViewChild, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Chart } from 'chart.js/auto';
import { Router } from '@angular/router';
import { DashboardService } from '../services/dashboard.service';
import { AuthService } from '../services/auth.service';
import { DepartmentService } from '../services/department.service';
import { RoleService } from '../services/role.service';
declare var bootstrap: any;
declare let gapi: any;
interface Announcement {
  id: number;
  title: string;
  description: string;
  createdAt: string;
}  


@Component({
  selector: 'app-default-dashboard',
  templateUrl: './default-dashboard.component.html',
  standalone:false,
  styleUrls: ['./default-dashboard.component.css']
})
export class DefaultDashboardComponent implements AfterViewInit {
  @ViewChild('barCanvas') barCanvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild('pieCanvas') pieCanvas!: ElementRef<HTMLCanvasElement>;
  

  // Charts
  barChart?: Chart;
  pieChart?: Chart;

  // Dashboard data
  employeeSize = 0;
  departmentCount = 0;
  roleCount = 0;
  dashboardCards: any[] = [];

  // Announcements
  announcements: Announcement[] = [];
  highlightedId: number | null = null;
  editingAnnouncementId: number | null = null;
  announcement = { title: '', description: '' };

  // UI
  isSidebarVisible = true;
  username: string = 'User';


  // Sample data
  // jobApplications = [
  //   { name: 'Sophia Hall', position: 'Frontend Developer' },
  //   { name: 'Emma Smith', position: 'Backend Developer' },
  //   { name: 'Olivia Clark', position: 'UI/UX Designer' }
  // ];

  leaves = [
    { name: 'William Johnson', days: '2 Days', status: 'Approved' },
    { name: 'Benjamin Martinez', days: '1st Half Day', status: 'Approved' },
    { name: 'Alexander Brown', days: '4 Days', status: 'Rejected' }
  ];

 
  //google calendar
  taskTitle: string = '';
  taskDate: string = '';
  tasks: { title: string; date: Date; meetLink: string }[] = [];
  selectedTask: { title: string; date: Date; meetLink: string } | null = null;
  newTask = { title: '', date: new Date(), meetLink: '' };
  calendarEvents: any[] = [];
  usaHolidays: any[] = [];
  indiaHolidays: any[] = [];
  isModalOpen = false;
  upcomingEvents: { items: any[] } = { items: [] };

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private employeservice: DashboardService,
    private router: Router,
    private authService: AuthService,
    private departmentService: DepartmentService,
    private roleService: RoleService
  ) {this.loadTasks();}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.authService.getLoggedInUser().subscribe({
        next: (user: { firstName?: string; username?: string }) => {
          this.username = user.firstName || user.username || 'User';
        },
        error: () => {
          this.username = 'User';
        }
      });
    }

    this.fetchEmployeeCount();
    this.getDepartments();
    this.getAllRoles();
    this.loadAnnouncements();
    this.loadGoogleCalendarAPI();
    this.loadGoogleTasksAPI();
    this.loadCalendar();
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.renderPieChart();
      }, 300);
    }
  }

  // Sidebar toggle
  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }

  // Navigation
  openEmployeeModal() {
    this.router.navigate(['dashboard/employees']);
  }

  goToAllAnnouncements() {
    this.router.navigate(['/announcements/list']);
  }

  renderPieChart() {
    this.employeservice.getEmployeeTypeList().subscribe(data => {
      const labels = ['On-Site', 'Remote', 'Hybrid'];
      const counts = [data.onSite, data.remote, data.hybrid];
      const colors = ['#0d6efd', '#dc3545', '#ffc107'];

      this.pieChart = new Chart(this.pieCanvas.nativeElement, {
        type: 'doughnut',
        data: {
          labels: labels,
          datasets: [{
            data: counts,
            backgroundColor: colors
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false
        }
      });
    });
  }

  // Dashboard stats
  fetchEmployeeCount() {
    this.employeservice.getAllEmployees().subscribe({
      next: (employees) => {
        this.employeeSize = employees.length;
        this.updateDashboardCards();
      },
      error: (err) => console.error('Failed to fetch employees', err)
    });
  }

  getDepartments() {
    this.departmentService.getAll().subscribe({
      next: (departments) => {
        this.departmentCount = departments.length;
        this.updateDashboardCards();
      },
      error: (err) => console.error('Failed to fetch departments', err)
    });
  }

  getAllRoles() {
    this.roleService.getAll().subscribe({
      next: (roles) => {
        this.roleCount = roles.length;
        this.updateDashboardCards();
      },
      error: (err) => console.error('Failed to fetch roles', err)
    });
  }

  updateDashboardCards() {
    this.dashboardCards = [
      {
        count: this.employeeSize,
        label: 'Total Employees',
        icon: 'bi bi-people-fill',
        bgColor: '#f97316',
        bgTint: '#fff7ed'
      },
      {
        count: this.departmentCount,
        label: 'Total Departments',
        icon: 'bi bi-diagram-3-fill',
        bgColor: '#0ea5e9',
        bgTint: '#f0f9ff'
      },
      {
        count: this.roleCount,
        label: 'Total Roles',
        icon: 'bi bi-person-badge-fill',
        bgColor: '#6366f1',
        bgTint: '#eef2ff'
      }
    ];
  }

  // Announcements
  loadAnnouncements() {
    this.employeservice.getAnnouncements().subscribe({
      next: (data) => {
        this.announcements = data.sort(
          (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      },
      error: (err) => console.error('Error loading announcements', err)
    });
  }

  openAnnouncementModal() {
    const modal = new (window as any).bootstrap.Modal(
      document.getElementById('announcementModal')
    );
    modal.show();
  }
  startEdit(ann: Announcement) {
    this.editingAnnouncementId = ann.id;
    this.announcement = {
      title: ann.title,
      description: ann.description
    };
  
    this.openAnnouncementModal();
  }
  
  submitAnnouncement() {
    const modal = (window as any).bootstrap.Modal.getInstance(
      document.getElementById('announcementModal')
    );

    if (this.editingAnnouncementId) {
      this.employeservice.updateAnnouncement(this.editingAnnouncementId, this.announcement).subscribe({
        next: () => {
          this.loadAnnouncements();
          this.editingAnnouncementId = null;
          this.announcement = { title: '', description: '' };
          modal.hide();
        },
        error: (err) => console.error('Update failed', err)
      });
    } else {
      this.employeservice.createAnnouncement(this.announcement).subscribe({
        next: (res) => {
          const created = res as Announcement;
          this.highlightedId = created.id;
          this.loadAnnouncements();
          this.announcement = { title: '', description: '' };
          modal.hide();
        },
        error: (err) => console.error('Announcement creation failed', err)
      });
    }
  }

  deleteAnnouncement(id: number) {
    this.employeservice.deleteAnnouncement(id).subscribe({
      next: () => {
        this.announcements = this.announcements.filter((a) => a.id !== id);
      },
      error: (err) => console.error('Delete failed', err)
    });
  }
  
  formatDate(date: string): string {
    return new Date(date).toLocaleString();
  }

  //team and department

  teamDepartments = [
    {
      name: 'Marketing',
      members: [
        { name: 'Alice', avatar: 'assets/emp.jpg' },
        { name: 'Bob', avatar: 'assets/male.jpg' },
        { name: 'Charlie', avatar: 'assets/emp.jpg' }
      ]
    },
    {
      name: 'Development',
      members: [
        { name: 'Dev1', avatar: 'assets/emp.jpg' },
        { name: 'Dev2', avatar: 'assets/male.jpg' },
        { name: 'Dev3', avatar: 'assets/emp.jpg' },
        { name: 'Dev4', avatar: 'assets/male.jpg' }
      ]
    },
    {
      name: 'Designing Team',
      members: [
        { name: 'Designer1', avatar: 'assets/emp.jpg' },
        { name: 'Designer2', avatar: 'assets/male.jpg' },
        { name: 'Designer3', avatar: 'assets/emp.jpg' }
      ]
    },
    {
      name: 'Management',
      members: [
        { name: 'Manager1', avatar: 'assets/emp.jpg' },
        { name: 'Manager2', avatar: 'assets/male.jpg' }
      ]
    },
    {
      name: 'Finance',
      members: [
        { name: 'Finance1', avatar: 'assets/emp.jpg' },
        { name: 'Finance2', avatar: 'assets/male.jpg' },
        { name: 'Finance3', avatar: 'assets/emp.jpg' }
      ]
    }
  ];
  
  getCountClass(count: number): string {
    if (count < 3) return 'text-success';
    if (count < 10) return 'text-warning';
    return 'text-danger';
  }

  new_tasks = [
    { id: 1, title: 'Prepare Monthly Financial Report', done: false, time: '04:25PM' },
    { id: 2, title: 'Develop New Marketing Strategy', done: true, time: '04:25PM' },
    { id: 3, title: 'Reply To Customer Emails', done: false, time: '04:25PM' },
    { id: 4, title: 'Update Website Content', done: false, time: '04:25PM' }
  ];

  deleteId: number | null = null;

  openDeleteModal(id: number) {
    this.deleteId = id;
  }
  
  confirmDelete() {
    if (this.deleteId !== null) {
      this.deleteAnnouncement(this.deleteId);
  
      // Close the modal programmatically
      const modalEl = document.getElementById('confirmDeleteModal');
      const modalInstance = bootstrap.Modal.getInstance(modalEl);
      modalInstance.hide();
  
      this.deleteId = null;
    }
  }
  
  loadTasks(): void {
    this.tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
  }

  createTask(): void {
    if (this.taskTitle && this.taskDate) {
      const taskDate = new Date(this.taskDate);
      let meetLink = '';
      if (confirm('Do you want to add a Google Meet link to this task?')) {
        meetLink = this.employeservice.generateGoogleMeetLink();
      }
      this.newTask = { title: this.taskTitle, date: taskDate, meetLink: meetLink };
      this.tasks.push({ ...this.newTask });
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
      alert('Task created successfully!');
      this.taskTitle = '';
      this.taskDate = '';
    } else {
      alert('Please enter both title and date for the task.');
    }
  }

  addTask(): void {
    if (this.newTask.title && this.newTask.date) {
      this.tasks.push({ ...this.newTask });
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
      this.newTask = { title: '', date: new Date(), meetLink: '' };
      alert('Task added successfully!');
    }
  }

  viewTaskDetails(task: { title: string; date: Date; meetLink: string }): void {
    this.selectedTask = task;
  }

  openTaskModal() {
    this.isModalOpen = true;
  }

  closeTaskModal() {
    this.isModalOpen = false;
  }

  loadGoogleCalendarAPI() {
    gapi.load('client', () => {
      gapi.client.init({
        apiKey: 'YOUR_API_KEY',
        discoveryDocs: [
          'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'
        ]
      }).then(() => {
        this.getHolidays('en.usa#holiday@group.v.calendar.google.com', 'usaHolidays');
        this.getHolidays('en.indian#holiday@group.v.calendar.google.com', 'indiaHolidays');
      });
    });
  }

  getHolidays(calendarId: string, holidayType: string) {
    gapi.client.calendar.events.list({
      calendarId: calendarId,
      timeMin: new Date().toISOString(),
      showDeleted: false,
      singleEvents: true,
      orderBy: 'startTime'
    }).then((response: any) => {
      if (holidayType === 'usaHolidays') {
        this.usaHolidays = response.result.items;
      } else if (holidayType === 'indiaHolidays') {
        this.indiaHolidays = response.result.items;
      }
    });
  }

  loadGoogleTasksAPI() {
    gapi.load('client', () => {
      gapi.client.init({
        apiKey: 'YOUR_API_KEY',
        discoveryDocs: [
          'https://www.googleapis.com/discovery/v1/apis/tasks/v1/rest'
        ]
      }).then(() => {
        this.getTasks();
      });
    });
  }

  getTasks() {
    gapi.client.tasks.tasks.list({
      tasklist: '@default',
      showCompleted: false,
      dueMin: new Date().toISOString(),
      orderBy: 'due'
    }).then((response: any) => {
      this.tasks = response.result.items;
      console.log('Tasks:', this.tasks);
    }).catch((error: any) => {
      console.error('Error loading tasks:', error);
    });
  }

  loadCalendar(): void {
    const calendarFrame = document.getElementById('google-calendar') as HTMLIFrameElement;
    if (calendarFrame) {
      calendarFrame.src = 'https://calendar.google.com/calendar/embed?src=en.indian%23holiday%40group.v.calendar.google.com&ctz=Asia%2FCalcutta';
    }
  }
}

