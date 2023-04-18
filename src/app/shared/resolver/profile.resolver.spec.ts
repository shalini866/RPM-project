import { TestBed } from '@angular/core/testing';
import { describe, expect, it,beforeEach } from '@jest/globals';
import { ProfileResolver } from './profile.resolver';

describe('ProfileResolver', () => {
  let resolver: ProfileResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ProfileResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  }); 
});
