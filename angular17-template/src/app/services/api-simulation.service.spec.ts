import { TestBed } from '@angular/core/testing';

import { ApiSimulationService } from './api-simulation.service';

describe('ApiSimulationService', () => {
  let service: ApiSimulationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiSimulationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
