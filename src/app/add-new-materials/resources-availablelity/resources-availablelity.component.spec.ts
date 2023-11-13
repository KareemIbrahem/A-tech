import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesAvailablelityComponent } from './resources-availablelity.component';

describe('ResourcesAvailablelityComponent', () => {
  let component: ResourcesAvailablelityComponent;
  let fixture: ComponentFixture<ResourcesAvailablelityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResourcesAvailablelityComponent]
    });
    fixture = TestBed.createComponent(ResourcesAvailablelityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
