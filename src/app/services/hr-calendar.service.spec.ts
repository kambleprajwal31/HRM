import { TestBed } from '@angular/core/testing';

import { HrCalendarService } from './hr-calendar.service';

describe('HrCalendarService', () => {
  let service: HrCalendarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HrCalendarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
