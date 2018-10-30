// Write a function that takes a number up to 999,999,999.99 and returns the
// amount in words. This function will be used to automatically write a check
// after the amount in number is entered.

function convertNumber(number){

  const numbers = {
    0:"zero",
    1:"one",
    2:"two",
    3:"three",
    4:"four",
    5:"five",
    6:"six",
    7:"seven",
    8:"eight",
    9:"nine",
    10:"ten",
    11:"eleven",
    12:"twelve",
    13:"thirteen",
    15:"fifteen",
    20:"twenty",
    30:"thirty",
    40:"forty",
    50:"fifty",
    60:"sixty",
    70:"seventy",
    80:"eighty",
    90:"ninety"
  }

  let cents = Math.round((number % 1) * 100);
  number = Math.floor(number);
  let result;

  if(numbers[number] !== undefined){
    result = numbers[number];
  } else if(number < 20){
    let units = number % 10;
    result = convertNumber(units) + "teen";
  } else if(number < 100){
    let units = number % 10;
    let tens = number - units;
    result = convertNumber(tens) + "-" + convertNumber(units);
  } else if (number < 1000){
    let units = number % 100;
    let hundreds = (number - units) / 100;
    if(units === 0){
      result = convertNumber(hundreds) + " hundred";
    } else{
     result = convertNumber(hundreds) + " hundred" + " and " + convertNumber(units);
    }
  } else if(number < 1000000){
    let units = number % 1000;
    let hundreds = units - units % 100;
    let thousands = (number - units) / 1000;
    if(units === 0){
      result = convertNumber(thousands) + " thousand";
    } else if(hundreds !== 0){
      result = convertNumber(thousands) + " thousand" + ", " + convertNumber(units);
    } else {
      result = convertNumber(thousands) + " thousand " + convertNumber(units);
    }

  } else if(number < 1000000000){
    let units = number % 1000000;
    let hundreds = units - units % 1000;
    let millions = (number - units) / 1000000;
    if(units === 0){
      result = convertNumber(millions) + " million";
    } else if(hundreds !== 0){
      result = convertNumber(millions) + " million" + ", " + convertNumber(units);
    } else {
      result = convertNumber(millions) + " million " + convertNumber(units);
    }

  }else{
    result = null;
  }

  if(cents !== 0){
    return result + " and " + cents + "/100";
  } else{
    return result;
  }
}

console.log(convertNumber(999999999.99));
