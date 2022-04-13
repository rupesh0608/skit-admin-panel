/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AdminserviceService } from './adminservice.service';

describe('Service: Adminservice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminserviceService]
    });
  });

  it('should ...', inject([AdminserviceService], (service: AdminserviceService) => {
    expect(service).toBeTruthy();
  }));
});
