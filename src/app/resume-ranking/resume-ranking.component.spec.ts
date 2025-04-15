import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeRankingComponent } from './resume-ranking.component';

describe('ResumeRankingComponent', () => {
  let component: ResumeRankingComponent;
  let fixture: ComponentFixture<ResumeRankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResumeRankingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
