import { DateWithOrdinalPipe } from './date-with-ordinal.pipe';

describe('DateWithOrdinalPipe', () => {
  it('create an instance', () => {
    const pipe = new DateWithOrdinalPipe();
    expect(pipe).toBeTruthy();
  });
});
