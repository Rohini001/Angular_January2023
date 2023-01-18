//1)Create an arrow function by which will take multiple strings and you have print each string along with length of each string.
var names = [
    'rohini',
    'mohini',
    'bhushan'
];
console.log(names.map(function (names) { return names.length; }));
var values = ["rohini", "mohini", "bhushan", "shivansh", "omkar"];
var printStrLength = function (values) {
    for (var i = 0; i < values.length; i++) {
        console.log("Name is " + values[i] + " and its length is : " + values[i].length);
    }
};
printStrLength(values);
