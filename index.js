// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  // TODO: real code goes here!
  const [hours, minutes] = time.split(':').map(num => parseInt(num));

  if (hours === 0 && minutes === 0) return 'midnight';
  if (hours === 12 && minutes === 0) return 'midday';

  const normalisedHour = hours % 12 || 12;

  if (minutes === 0) {
    return `${HoursToWords[normalisedHour]} o'clock`
  };
  if (minutes <= 30) {
    // '2:11' > 'eleven past two'
    return `${MinutesToHours[minutes]} past ${HoursToWords[normalisedHour]}`;
  } else {
    const MinutesToNextHours = 60 - minutes;
    // '2:55' > 'five to three'
    const NextHour = (normalisedHour % 12) + 1;

    return `${MinutesToHours[MinutesToNextHours]} to ${HoursToWords[NextHour]}`;
  };
}

const HoursToWords = {
  0: 'midnight',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven'
};

const MinutesToHours = 
  { 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'quarter', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen', 20: 'twenty', 21: 'twenty-one', 22: 'twenty-two', 23: 'twenty-three', 24: 'twenty-four', 25: 'twenty-five', 26: 'twenty-six', 27: 'twenty-seven', 28: 'twenty-eight', 29: 'twenty-nine', 30: 'half' };

module.exports = { convertTimeToWords };