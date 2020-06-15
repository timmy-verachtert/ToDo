import { TestBed } from '@angular/core/testing';

import { TaakService } from './taak.service';

describe('TaakService', () => {
  let service: TaakService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaakService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
