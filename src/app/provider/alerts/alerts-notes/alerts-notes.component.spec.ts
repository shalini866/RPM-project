import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertsNotesComponent } from './alerts-notes.component';

describe('AlertsNotesComponent', () => {
  let component: AlertsNotesComponent;
  let fixture: ComponentFixture<AlertsNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertsNotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertsNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
