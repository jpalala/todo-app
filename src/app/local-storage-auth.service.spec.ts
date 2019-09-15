import { TestBed } from '@angular/core/testing';

import { LocalStorageAuthService } from './local-storage-auth.service';

describe('LocalStorageAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocalStorageAuthService = TestBed.get(LocalStorageAuthService);
    expect(service).toBeTruthy();
  });
});
