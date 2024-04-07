import { DevelopersArrayPipe } from './developers-array.pipe';
import { Developer } from '../interfaces/game-detail.interface';

describe('DevelopersArrayPipe', () => {
  let pipe: DevelopersArrayPipe;

  beforeEach(() => {
    pipe = new DevelopersArrayPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should correctly transform an array of developers into a comma-separated string', () => {
    const mockDevelopers: Developer[] = [
      { id: 1, name: 'Developer 1', slug: 'developer-1', games_count: 10, image_background: 'url1' },
      { id: 2, name: 'Developer 2', slug: 'developer-2', games_count: 20, image_background: 'url2' }
    ];

    const result = pipe.transform(mockDevelopers);
    expect(result).toBe('Developer 1, Developer 2');
  });

  it('should return an empty string if the input is an empty array', () => {
    const result = pipe.transform([]);
    expect(result).toBe('');
  });

  it('should correctly handle an array with a single developer', () => {
    const mockDevelopers: Developer[] = [
      { id: 3, name: 'Solo Developer', slug: 'solo-developer', games_count: 5, image_background: 'url3' }
    ];

    const result = pipe.transform(mockDevelopers);
    expect(result).toBe('Solo Developer');
  });
});
