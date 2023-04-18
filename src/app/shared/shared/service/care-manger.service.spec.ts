import { TestBed } from '@angular/core/testing';
import { describe, expect, it,beforeEach } from '@jest/globals';
import { CareMangerService } from './care-manger.service';

describe('CareMangerService', () => {
  let service: CareMangerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CareMangerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
