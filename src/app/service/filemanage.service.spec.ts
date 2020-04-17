import { TestBed } from '@angular/core/testing';

import { FilemanageService } from './filemanage.service';

describe('FilemanageService', () => {
  let service: FilemanageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilemanageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
