import { TestBed } from '@angular/core/testing';

import { ResumeRankingService } from './resume-ranking.service';

describe('ResumeRankingService', () => {
  let service: ResumeRankingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResumeRankingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
