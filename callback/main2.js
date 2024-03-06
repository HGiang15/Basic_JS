// 1. Call back
// Chạy 3
function myFunc (param) {
    // Kiểm tra phải là function
    if (typeof param === 'function') {
        param('Học bài');
    }
}

// Chạy 1
function myCallback(value) {
    // console.log('Value: ', value)
}
// Chạy 2
// myFunc(myCallback);

// Part 2
Array.prototype.map2 = function(callBack) {
    var output = [], arrayLength = this.length;
    for (var i = 0; i < arrayLength; i++) {
        var result = callBack(this[i]);
        // console.log('result: ', result)
        output.push(result);
    }
    return output;
}

var courses = [
    'javscript',
    'php',
    'ruby'
];

var htmls = courses.map2(function(course, index) {
    return `<h2>${course}</h2>`
});
// console.log(htmls.join(''));


// var htmls = courses.map(function(course) {
//     return `<h2>${course}</h2>`
// })
// console.log(htmls.join(''));

// Bài tập các phương thức array: forEach, find, filter, some, every, reduce
// 1. forEach
Array.prototype.forEach2 = function(callback) {
    for(var index in this) {
        if (this.hasOwnProperty(index)) {
            callback(this[index], index, this);
        }
    }
}

var coursess = [
    'java',
    'php',
    'ruby'
];

coursess.forEach2(function(course, index, arr) {
    // console.log(course, index, arr)
});
