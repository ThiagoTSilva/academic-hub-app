import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemesterDashboardComponent } from '../semester-dashboard/semester-dashboard.component';

describe('SemesterComponent', () => {
  let component: SemesterDashboardComponent;
  let fixture: ComponentFixture<SemesterDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SemesterDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemesterDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
