//EASY
const average = function (array) {
    let num = 0;
    for(let i = 0; i < array.length; i++) {
        return num = num + array[i];
    }
    return num / array.length;
}


console.log(average([1, 2, 3]));

//MEDIUM
const number1 = [4, 5, 6, 7, 0, 1, 2]; // Target 0
const number2 = [4, 5, 6, 7, 0, 1, 2]; // Target 3

const findTheNumber = (array, target) => array.indexOf(target);

console.log(findTheNumber(number1, 0));
console.log(findTheNumber(number2, 3));


//HARD
const body = document.querySelector("body");


window.updateTheBackground = function (className) {
    body.className = className;
};
