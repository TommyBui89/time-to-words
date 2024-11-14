const  { convertTimeToWords } = require('./index');

describe('Time to words', () => {
  it('Handles midnight', () => {
    const timeInWords = convertTimeToWords('0:00');
    expect(timeInWords).toBe('midnight');
  });

  it('Handles midday', () => {
    const timeInWords = convertTimeToWords('12:00');
    expect(timeInWords).toBe('midday');
  });

  it('Handles 30 - 13:00', () => {
    const timeInWords = convertTimeToWords('13:00');
    expect(timeInWords).toBe("one o'clock");
  });


  it('Handles 30 - 2:11', () => {
    const timeInWords = convertTimeToWords('2:11');
    expect(timeInWords).toBe("eleven past two");
  });

  it('Handles 30 - 2:15', () => {
    const timeInWords = convertTimeToWords('2:15');
    expect(timeInWords).toBe("quarter past two");
  });

  it('Handles 30 - 8:30', () => {
    const timeInWords = convertTimeToWords('8:30');
    expect(timeInWords).toBe('half past eight');
  });

  it('Handles times after 30 mins - 2:45', () => {
    const timeInWords = convertTimeToWords('2:45');
    expect(timeInWords).toBe('quarter to three');
  });
});
