import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectRequirementComponent } from './project-requirement.component';

describe('ProjectRequirementComponent', () => {
  let component: ProjectRequirementComponent;
  let fixture: ComponentFixture<ProjectRequirementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectRequirementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectRequirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
