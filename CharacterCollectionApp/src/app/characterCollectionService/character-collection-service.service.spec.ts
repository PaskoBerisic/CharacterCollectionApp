import { TestBed } from '@angular/core/testing';

import { CharacterCollectionServiceService } from './character-collection-service.service';

describe('CharacterCollectionServiceService', () => {
  let service: CharacterCollectionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterCollectionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
