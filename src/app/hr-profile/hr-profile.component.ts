import { Component, OnInit } from '@angular/core';
import { HRService, HRDetails } from '../services/hr.service';
@Component({
  selector: 'app-hr-profile',
  standalone: false,
  templateUrl: './hr-profile.component.html',
  styleUrl: './hr-profile.component.css'
})
export class HRProfileComponent implements OnInit {
  hr!: HRDetails;

  constructor(private hrService: HRService) {}

  ngOnInit(): void {
    this.hrService.getDetails().subscribe(data => {
      this.hr = data;
      console.log(this.hr)
      const image = this.hr.image;
      const isValidImage = image && image !== 'http://localhost:8080/uploads/hr/';
      this.hr.image = `http://localhost:8080/uploads/hr/${image}`;
      console.log(this.hr.image)
    });
  }

  // get imageUrl() {
  //   return this.hr.image ? `/uploads/hr/${this.hr.image}` : 'default.jpg';
  // }

  get imageUrl() {
    debugger;
    const image = this.hr.image;
    const isValidImage = image && image !== 'http://localhost:8080/uploads/hr/';
    return isValidImage
      ? `/uploads/hr/${image}`
      : 'default.jpg';
  }
  
}
