import { PlatformsArrayPipe } from './platforms-array.pipe';
import { Platform } from '../interfaces/games.interface';
describe('PlatformsArrayPipe', () => {
  // Instantiate the pipe before each test
  let pipe: PlatformsArrayPipe;

  beforeEach(() => {
    pipe = new PlatformsArrayPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return a comma-separated string of platform names', () => {
    const platforms = [
      { platform: { id: 1, slug: 'pc', name: 'PC' } },
      { platform: { id: 2, slug: 'xbox', name: 'Xbox One' } },
      { platform: { id: 3, slug: 'playstation', name: 'PlayStation 4' } }
    ];

    const transformed = pipe.transform(platforms);
    expect(transformed).toBe('PC, Xbox One, PlayStation 4');
  });

  it('should return an empty string if the input array is empty', () => {
    const platforms: { platform: { id: number; slug: string; name: string; }; }[] = [] ;
    const transformed = pipe.transform(platforms);
    expect(transformed).toBe('');
  });

  it('should handle input with missing or undefined name properties gracefully', () => {
    const platforms = [
      { platform: { id: 1, slug: 'pc', name: 'PC' } },
      { platform: {} }, // Missing name
      { platform: { id: 2, slug: 'xbox' } } // Undefined name
    ] as Platform[];

    const transformed = pipe.transform(platforms);
    expect(transformed).toBe('PC, , '); // Depending on desired behavior, you might want to filter these out
  });
});
