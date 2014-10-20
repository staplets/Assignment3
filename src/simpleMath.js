SimpleMath = function() {};
/**
 * @param {number} number - input into the factorial function
 *
 * @return {number} factorial of number, throw an error
 * if the number is negative
*/
SimpleMath.prototype.getFactorial = function(number) {
  if (typeof number !== 'number') {
    throw new Error('There is no factorial for non-numbers');
  }
  else if (number < 0) {
    throw new Error('There is no factorial for negative numbers');
  }
  //your code here
  var fact = 1;
  var i = 0;
  for(i = 1; i <= number; i++) {
    fact *= i;
  }
  return fact;
  //end your code
};

/**
* @param {number} number - number to test
*
* @return {number} - 1 if `number` is positive, 0 if 0, -1 if negative.
* Behaviour on non-numbers is undefined.
*/
SimpleMath.prototype.signum = function(number) {
 //your code here
  if(number > 0) {
    return 1;
  }
  else if(number === 0) {
    return 0;
  }
  else if(number < 0) {
    return -1;
  }
  else if(isNaN(number)) {
    return undefined;
  }
 //end your code
};

/**
* @param {number} number1 - first number to average
* @param {number} number2 - second number to average
*
* @return {number} the mathematical average of the two numbers.
*/
SimpleMath.prototype.average = function(number1, number2) {
  //your code here
  return ((number1 + number2) / 2);
  //end your code
};

