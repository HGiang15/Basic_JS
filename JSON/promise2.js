// Promise.resolve
// Promise.reject
// Promise.all

// var promise = Promise.resolve("thanh cong");

// promise
//     .then(function(result) {
//         console.log(result);
//     })
//     .catch(function(err) {

//     })

var promise1 = new Promise(function(resolve) {
    setTimeout(function() {
        resolve([1]);
    }, 2000);
});

var promise2 = new Promise(function(resolve) {
    setTimeout(function() {
        resolve([2,3]);
    }, 5000);
});

var promise3 = Promise.reject('có lỗi');

//
Promise.all([promise1, promise2])
    .then(function(result) {
        console.log(result);
        var result1 = result[0];
        var result2 = result[1];
        // noi mang
        console.log(result1.concat(result2));
    })
    .catch(function(err) {
        console.log(err);
    })