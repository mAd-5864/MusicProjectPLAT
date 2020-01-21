import { TestBed } from '@angular/core/testing';

import { MusicapiService } from './musicapi.service';

describe('MusicapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MusicapiService = TestBed.get(MusicapiService);
    expect(service).toBeTruthy();
  });
});
