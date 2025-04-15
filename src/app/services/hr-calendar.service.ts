import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HrCalendarService {
  private tasks: { title: string; date: Date; meetLink: string }[] = [];
  addTask(title: string, date: Date): void {
    const meetLink = this.generateGoogleMeetLink();
    const task = { title, date, meetLink };
    this.tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    this.scheduleAlert(task);
  }

  generateGoogleMeetLink(): string {
    return 'https://meet.google.com/' + Math.random().toString(36).substring(2, 10);
  }

  scheduleAlert(task: { title: string; date: Date; meetLink: string }): void {
    const alertTime = new Date(task.date.getTime() - 5 * 60000);
    const now = new Date();
    if (alertTime > now) {
      const timeout = alertTime.getTime() - now.getTime();
      setTimeout(() => {
        //alert(Upcoming Task: ${task.title}\nGoogle Meet: ${task.meetLink});
      }, timeout);
    }
  }
}