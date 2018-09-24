import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnRegisteredVehiclesComponent } from './un-registered-vehicles.component';

describe('UnRegisteredVehiclesComponent', () => {
  let component: UnRegisteredVehiclesComponent;
  let fixture: ComponentFixture<UnRegisteredVehiclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnRegisteredVehiclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnRegisteredVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
