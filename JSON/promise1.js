// ---- Promise 
// Sync đồng bộ
// Async ko đồng bộ
// setTimeout, setInterval, fetch, XMLHttpRequest, file reading
// request animation frame
// setTimeout(function() {
//     console.log('Dòng này sẽ in ra sau')
// }, 0)
// setTimeout là tác vụ bất động bộ (async)

console.log('Dòng này sẽ in ra trước') // Đây là tác vụ đồng bộ (sync)

// -- Promise (xử lí những thao tác bất đồng bộ trước khi có promise sẽ có callbak hell)
// Callback hell việc trong phụ thuộc việc ngoài --> nỗi đau
// setTimeout(function () {
//     console.log(1); // viec 1
//     setTimeout(function () {
//         console.log(2); // viec 2
//         setTimeout(function () {
//             console.log(3); // viec 3
//         }, 1000);
//     }, 1000);
// }, 1000);


// Tạo promise
// Trạng thái 1.Pendding: đang chờ
// 2.Fulfilled: resolve()
// 3.Reject

// var promise = new Promise(
//     // Executor
//     function (resolve, reject) {
//         resolve([
//             {
//                 id: 1,
//                 name: 'java'
//             }
//         ]);
//         // reject();
//     }
// );

// promise
//     .then(function(courses) { //resolve()
//         console.log(courses);
//     })
//     .catch(function() { //reject
//         console.log('Failure');
//     })
//     .finally(function() {
//         console.log('Done');
//     });



// var promise = new Promise(
//     // Executor
//     function (resolve, reject) {
//         resolve();
//     }
// );

// promise
//     .then(function() {  //resolve
//         return new Promise(function(resolve) {
//             setTimeout(function() {
//                 resolve([1,2,3]);
//             }, 3000);
//         });
//     })
//     .then(function(data) {  
//         console.log(data);
//         return 2;
//     })
//     .then(function(data) {  
//         console.log(data);
//     })
//     .catch(function() { //reject
//         console.log('Failure');
//     })
//     .finally(function() {
//         console.log('Done');
//     });

function sleep(ms) {
    return new Promise(function(resolve) {
        setTimeout(resolve, ms);
    })
}

sleep(1000)
    .then(function() {
        console.log(1);
        return sleep(1000);
    })
    .then(function() {
        console.log(2);
        return new Promise(function(resolve, reject) {
            reject('lỗi');
        });
    })
    .then(function() {
        console.log(3);
        return sleep(1000);
    })
    .catch(function(err) {
        console.log(err);
    })