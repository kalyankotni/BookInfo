import { TestBed } from '@angular/core/testing';

import { BookinfoService } from './bookinfo.service';

describe('BookinfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookinfoService = TestBed.get(BookinfoService);
    expect(service).toBeTruthy();
  });
});
