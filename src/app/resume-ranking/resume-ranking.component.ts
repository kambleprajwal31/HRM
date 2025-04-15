import { Component } from '@angular/core';
import { ResumeRankingService } from '../services/resume-ranking.service';

@Component({
  selector: 'app-resume-ranking',
  templateUrl: './resume-ranking.component.html',
  standalone: false,
  styleUrls: ['./resume-ranking.component.css']
})
export class ResumeRankingComponent {
  
  jobDescFile: File | null = null;
  resumeFiles: File[] = [];
  rankedResults: any[] = []; 

  constructor(private resumeRankingService: ResumeRankingService) {}

  onJobDescFileSelected(event: any): void {
    this.jobDescFile = event.target.files[0];
  }

  onResumeFilesSelected(event: any): void {
    this.resumeFiles = event.target.files;
  }

  rankResume(): void {
    if (this.jobDescFile && this.resumeFiles.length > 0) {
      this.resumeRankingService.rankResumes(this.jobDescFile, this.resumeFiles)
        .subscribe(
          (data) => {
            console.log('Ranking Results:', data);
            // Handle the ranked results here, e.g., display in the UI
          },
          (error) => {
            console.error('Error ranking resumes:', error);
          }
        );
    } else {
      alert('Please select both the Job Description and at least one resume file!');
    }
  }
}

