import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncounterdetailsComponent } from './encounterdetails.component';

describe('EncounterdetailsComponent', () => {
  let component: EncounterdetailsComponent;
  let fixture: ComponentFixture<EncounterdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncounterdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncounterdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
