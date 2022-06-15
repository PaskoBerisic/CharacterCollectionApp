import { TestBed } from '@angular/core/testing';

import { CharacterCollectionService } from './character-collection.service';

describe('CharacterCollectionService', () => {
  let service: CharacterCollectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterCollectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
