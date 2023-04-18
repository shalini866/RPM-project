import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { of } from 'rxjs';
import { AlertsNotesComponent } from './alerts-notes.component';
import { CareMangerService } from 'src/app/shared/shared/service/care-manger.service';
import { describe, expect, it,beforeEach } from '@jest/globals';
// import '@types/jest';


describe('AlertsNotesComponent', () => {
  let component: AlertsNotesComponent;
  let fixture: ComponentFixture<AlertsNotesComponent>;
  let dialogService: NbDialogService;
  let dialogRef: NbDialogRef<AlertsNotesComponent>;
  let careService: CareMangerService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlertsNotesComponent],
      providers: [
        NbDialogService,
        { provide: NbDialogRef, useValue: {} },
        { provide: CareMangerService, useValue: { alertlistApi: jest.fn() } },
       
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertsNotesComponent);
    component = fixture.componentInstance;
    dialogService = TestBed.inject(NbDialogService);
    dialogRef = TestBed.inject(NbDialogRef);
    careService = TestBed.inject(CareMangerService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('viewNotes', () => {
    it('should call the alertlistApi method of the careService with the correct argument', () => {
      component.alertData = { id: 1 };
      const mockData = { list: [] };
      jest.spyOn(careService, 'alertlistApi').mockReturnValue(of(mockData));
      component.viewNotes();
      expect(careService.alertlistApi).toHaveBeenCalledWith(1);
    });

    it('should set the alertsDataList property to the value returned by the alertlistApi method', () => {
      component.alertData = { id: 1 };
      const mockData = { list: [{}, {}] };
      jest.spyOn(careService, 'alertlistApi').mockReturnValue(of(mockData));
      component.viewNotes();
      expect(component.alertsDataList).toEqual(mockData.list);
    });
  });
});


