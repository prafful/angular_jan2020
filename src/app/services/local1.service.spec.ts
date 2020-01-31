import { TestBed } from '@angular/core/testing';

import { Local1Service } from './local1.service';

describe('Local1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Local1Service = TestBed.get(Local1Service);
    expect(service).toBeTruthy();
  });
});
