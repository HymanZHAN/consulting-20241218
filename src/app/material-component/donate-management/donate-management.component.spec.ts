import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonateManagementComponent } from './donate-management.component';

describe('DonateManagementComponent', () => {
  let component: DonateManagementComponent;
  let fixture: ComponentFixture<DonateManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonateManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DonateManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
