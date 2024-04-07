import { DevelopersArrayPipe } from './developers-array.pipe';

describe('DevelopersArrayPipe', () => {
  it('create an instance', () => {
    const pipe = new DevelopersArrayPipe();
    expect(pipe).toBeTruthy();
  });
});
