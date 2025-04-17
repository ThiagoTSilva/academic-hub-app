import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectDashboardComponent } from './subject-dashboard/subject-dashboard.component';

describe('SubjectDashboardComponent', () => {
  let component: SubjectDashboardComponent;
  let fixture: ComponentFixture<SubjectDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjectDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
