import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, expect, it,beforeEach } from '@jest/globals';
import { VitalsComponent } from './vitals.component';

describe('VitalsComponent', () => {
  let component: VitalsComponent;
  let fixture: ComponentFixture<VitalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VitalsComponent ],
      imports:[HttpClient]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
