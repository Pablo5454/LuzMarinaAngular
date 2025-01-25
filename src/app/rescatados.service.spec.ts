import { TestBed } from '@angular/core/testing';

import { RescatadosService } from './rescatados.service';

describe('RescatadosService', () => {
  let service: RescatadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RescatadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
