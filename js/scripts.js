$(document).ready(function() {
  $("form#calculate").submit(function(event) {
    event.preventDefault();
    var num1 = parseInt($("#num1").val());
    var num2 = parseInt($("#num2").val());
    var operator = $("#operators").val();
    operator = parseInt(operator);
    if((num1===null||num2===null)||(num1===NaN||num2===NaN)){
      alert("Please enter a number!");
    } else {
      alert(operatorSelector(operator, num1, num2));
    }
  });
  var operatorSelector = function(operator, number1, number2){
    var result;
    if(operator===1){
      result = add(number1, number2);
    } else if(operator===2) {
      result = subtract(number1, number2);
    } else if(operator===3) {
      result = multiply(number1, number2);
    } else if(operator===4) {
      result = divide(number1, number2);
    } else if(operator===5) {
      result = exponential(number1, number2);
    } else if(operator===6) {
      result = factorial(number1, number2);
    } else {
      result = squareRoot(number1, number2);
    }
    return result;
  }
  var add = function(number1, number2){
    return number1+number2;
  }
  var subtract = function(number1, number2){
    return number1-number2;
  }
  var multiply = function(number1, number2){
    return number1*number2;
  }
  var divide = function(number1, number2){
    return number1/number2;
  }
  var exponential = function(x, y){
    var result = 1;
    for(var i = 1; i < y; i++){
      result *= result*x;
    }
    return result;
  }
  var factorial = function(number1){
    var result = 1;
    for(var i = 1; i <= number1; i ++){
      result *= i;
    }
    return result;
  }
  var squareRoot = function(number1){
    var result = 1;
    return result;
  }

});
