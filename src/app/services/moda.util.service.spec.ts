import { TestBed } from '@angular/core/testing';

import { ModaUtilService } from './moda.util.service';

describe('ModaUtilService', () => {
  let service: ModaUtilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModaUtilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
