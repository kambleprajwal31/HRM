import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import {ProgressBar} from 'progressbar.js';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';


@Component({
  selector: 'app-circular-progress',
  template: `<div #progressContainer class="progress-circle" style="width:100px;height:100px;"></div>`,
  standalone:false,
  styles: [`.progress-circle { display: inline-block; }`]
})
export class CircularProgressComponent implements AfterViewInit {
  @Input() value: number = 0; // percent (0-100)
  @Input() color: string = '#2563EB'; // default: blue
  @ViewChild('progressContainer', { static: true }) progressContainer!: ElementRef;
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const ProgressBar = require('progressbar.js');
  
      const circle = new ProgressBar.Circle(this.progressContainer.nativeElement, {
        color: this.color,
        strokeWidth: 6,
        trailWidth: 2,
        duration: 1400,
        easing: 'easeInOut',
        text: {
          autoStyleContainer: false
        },
        from: { color: '#aaa', width: 2 },
        to: { color: this.color, width: 6 },
        step: function (_: any, circle: any) {
          circle.setText(`${Math.round(circle.value() * 100)}%`);
        }
      });
  
      circle.animate(this.value / 100);
    }
  }
}  

