function calculateDayInYear(date) {
  var splitDate = date.split('/');
  var year = Number(splitDate[0]);
  var month = Number(splitDate[1]);
  var day = Number(splitDate[2]);
  var febDays = daysInFeb(year);
  var daysInMonth = [31, febDays, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  console.log('valid day: ', validDay(month, day))

  if (year && validMonth(month) && validDay(month, day)) {
    console.log(date, "is day", calculateDayNumber(month, day), "of the year", year);
  } else {
    console.log("Invalid date");
  }

  function validMonth(month) {
    // first error found: Dec not included if < 12.
    return month && month >= 1 && month <= 12;
  }

  function validDay(month, day) {
    // second error found: day returns as invalid because < 31 is not 31, which is valid
    // removed [month - 1]
    return day && day >= 1 && day <= daysInMonth[month];
  }

  function calculateDayNumber(month, day) {
    // third error found: giving wrong day number
    var dayOfYear = day;
    if (isLeapYear(year)) console.log('hey')
    for (var i = 1; i < month; i++) {
      dayOfYear += daysInMonth[i - 1];
    }

    return dayOfYear;
  }

  function daysInFeb(year) {
    return 28;
  }

  function isLeapYear(year) {
    return isMultiple(year, 400) || !isMultiple(year, 100) && isMultiple(year, 4);
  }
}

function isMultiple(numerator, denominator) {
  return numerator % denominator === 0;
}

// var date = process.argv[2];
var date = '2000/3/2';

if (!date) {
  console.log("Please provide a date in the format YYYY/MM/DD");
} else {
  calculateDayInYear(date);
}
