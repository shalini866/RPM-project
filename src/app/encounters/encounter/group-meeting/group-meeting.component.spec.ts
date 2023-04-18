import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, expect, it,beforeEach } from '@jest/globals';
import { GroupMeetingComponent } from './group-meeting.component';

describe('GroupMeetingComponent', () => {
  let component: GroupMeetingComponent;
  let fixture: ComponentFixture<GroupMeetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupMeetingComponent ],
      imports:[HttpClient]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
