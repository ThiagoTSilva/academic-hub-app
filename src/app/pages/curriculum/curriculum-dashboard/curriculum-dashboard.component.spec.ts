import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumDashboardComponent } from './curriculum-dashboard.component';

describe('CurriculumDashboardComponent', () => {
  let component: CurriculumDashboardComponent;
  let fixture: ComponentFixture<CurriculumDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurriculumDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurriculumDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
