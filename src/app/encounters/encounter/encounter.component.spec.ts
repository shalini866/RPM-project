import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, expect, it,beforeEach } from '@jest/globals';
import { EncounterComponent } from './encounter.component';

describe('EncounterComponent', () => {
  let component: EncounterComponent;
  let fixture: ComponentFixture<EncounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncounterComponent ],
      imports:[HttpClient]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
