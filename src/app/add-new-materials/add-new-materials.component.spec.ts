import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewMaterialsComponent } from './add-new-materials.component';

describe('AddNewMaterialsComponent', () => {
  let component: AddNewMaterialsComponent;
  let fixture: ComponentFixture<AddNewMaterialsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewMaterialsComponent]
    });
    fixture = TestBed.createComponent(AddNewMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
