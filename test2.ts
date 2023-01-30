let flag: boolean = true;
console.log("Value assigned to flag is: " + flag);

let decimal: number = 6;
console.log("Cost of book is " + decimal + " euro");

let color: string = "blue";
console.log("The colour of the balloon is " + color);

let myArray: number[] = [1, 2, 3];
for(let i: number = 0; i < myArray.length; i++) {

    console.log(myArray[i]);

}

let x: [string, number];
x = ["hello", 10];
console.log(x[0]);
console.log(x[1]);

enum ColorList {
    
    Red = 1,
    Green,
    Blue,

}

let colorName: string = ColorList[2];
console.log("The grass is " + colorName);