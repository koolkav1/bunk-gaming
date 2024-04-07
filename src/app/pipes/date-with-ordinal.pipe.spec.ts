import { DateWithOrdinalPipe } from './date-with-ordinal.pipe';
import { DatePipe } from '@angular/common';

describe('DateWithOrdinalPipe', () => {
  let pipe: DateWithOrdinalPipe;
  let mockDatePipe: jest.Mocked<DatePipe>;

  beforeEach(() => {
    // Create a mock DatePipe
    mockDatePipe = new DatePipe('en-US') as jest.Mocked<DatePipe>;
    // Mock the transform method
    mockDatePipe.transform = jest.fn();

    // Instantiate the pipe with the mocked DatePipe
    pipe = new DateWithOrdinalPipe(mockDatePipe);
  });

  it('should format date with ordinal suffix "st" for 1st day of the month', () => {
    // Adjust the mock implementation to correctly handle optional parameters
    mockDatePipe.transform.mockImplementation(
      (date: string | number | Date | null | undefined,
       format?: string,
       timezone?: string,
       locale?: string): string | null => {
        if (format === 'MMMM d') return 'January 1';
        if (format === 'd') return '1';
        if (format === 'y') return '2023';
        return null; // Return null for cases not handled, or adjust as needed
      }
    );

    const result = pipe.transform(new Date('2023-01-01'));
    expect(result).toBe('January 1st, 2023');
    expect(mockDatePipe.transform).toHaveBeenCalledTimes(3);
  });
});
