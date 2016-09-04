
var romanArray = [["","I","II","III","IV","V","VI","VII","VIII","IX"],        
                    ["","X","XX","XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],   
                    ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"],
                    ["", "M", "MM", "MMM", "MMMM", "MMMMM", "MMMMMM"]];  

var romanNumeral = "";
var romanBackwardsArray = [];
var digits = [];

function test(argument) {
  var n = document.getElementById('number-input').value;
  var digits = n.split("").reverse();
  console.log("you entered ", digits)
  
  for (var i = 0; i < digits.length; i++) {
     romanBackwardsArray.push(romanArray[i][parseInt(digits[i])]);
  }

  document.getElementById('show-num').innerHTML = romanBackwardsArray.reverse().join("");
  romanBackwardsArray = [];
  digits = [];
}








