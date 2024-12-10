var num1 = 10;
var num2 = 7;
var add_result = num1 + num2;
document.getElementById("add_result").innerHTML = add_result;
var a = 50;
var b = 30;
a -= b;
document.getElementById("assignment").innerHTML = a;

function addtwonum() {
    var x = 30;
    var y = 20;
    document.getElementById('addtwonum').innerHTML = x + y;
}
addtwonum();

function multiplytwonum() {
    var x = 5.6;
    var y = 3.4;
    return x * y;
};
document.getElementById('multiplytwonum').innerHTML = multiplytwonum();

// Parameter
function findEvenOrOdd(num) {
    if (num % 2 == 0) {
        return "Even";
    } else { return 'odd' }
}
//Argument
document.write(findEvenOrOdd(7));