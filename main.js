

function numToRoman(number) {
  var M = "1000";
  var CM = "900";
  var D = "500";
  var CD = "400";
  var C = "100";
  var XC = "90";
  var L = "50";
  var XL = "40";
  var X = "10";
  var IX = "9";
  var V = "5";
  var IV = "4";
  var I = "1";
  var stringNum = number.toString().split("").reverse();

    return stringNum;
  }

  
function showNum() {
  var regularNum = document.getElementById('number-input').value;
  var message = "You typed " + regularNum + ".";

  document.getElementById("show-num").innerHTML = message;
  
  // return message;

  // document.getElementById('show-num').innerHTML = message;
}






