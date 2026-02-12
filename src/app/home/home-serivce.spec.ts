import { TestBed } from '@angular/core/testing';

import { HomeSerivce } from './home-serivce';

describe('HomeSerivce', () => {
  let service: HomeSerivce;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeSerivce);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
