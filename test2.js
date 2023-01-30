var flag = true;
console.log("Value assigned to flag is: " + flag);
var decimal = 6;
console.log("Cost of book is " + decimal + " euro");
var color = "blue";
console.log("The colour of the balloon is " + color);
var myArray = [1, 2, 3];
for (var i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}
var x;
x = ["hello", 10];
console.log(x[0]);
console.log(x[1]);
var ColorList;
(function (ColorList) {
    ColorList[ColorList["Red"] = 1] = "Red";
    ColorList[ColorList["Green"] = 2] = "Green";
    ColorList[ColorList["Blue"] = 3] = "Blue";
})(ColorList || (ColorList = {}));
var colorName = ColorList[2];
console.log("The grass is " + colorName);
