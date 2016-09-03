
let romanNumerals = [["","I","II","III","IV","V","VI","VII","VIII","IX"],        
                    ["","X","XX","XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],   
                    ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"],
                    ["", "M", "MM", "MMM", "MMMM", "MMMMM"]];  


function numToRoman(number) {
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






