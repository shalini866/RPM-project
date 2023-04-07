import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupMeetingComponent } from './group-meeting.component';

describe('GroupMeetingComponent', () => {
  let component: GroupMeetingComponent;
  let fixture: ComponentFixture<GroupMeetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupMeetingComponent ]
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
