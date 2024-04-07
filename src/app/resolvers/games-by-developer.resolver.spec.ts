import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { gamesByDeveloperResolver } from './games-by-developer.resolver';

describe('gamesByDeveloperResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => gamesByDeveloperResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
