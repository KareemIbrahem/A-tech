import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierWorkingHoursComponent } from './supplier-working-hours.component';

describe('SupplierWorkingHoursComponent', () => {
  let component: SupplierWorkingHoursComponent;
  let fixture: ComponentFixture<SupplierWorkingHoursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupplierWorkingHoursComponent]
    });
    fixture = TestBed.createComponent(SupplierWorkingHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
