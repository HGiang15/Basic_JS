// JSON: Number, string, Boolean, null, array, object -> ["",""]
// Stringify: từ js type -> json
// Parse: từ json -> js type


var json = '["java", "php"]';
// var jsonObject = '{"name":"giang", "age":18}';

// Chuyển đổi json sang javascript
var a = '1';
console.log(JSON.parse(a));
console.log(JSON.parse(json));


// Từ js sang json
console.log(JSON.stringify([
    'java',
    'php'
]));

console.log(JSON.stringify( {
    name: 'giang',
    age: 16,
    test: function () {
        
    }
}));

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

var promise = new Promise(
    // Executor
    function (resolve, reject) {
        // Thành công: resolve()
        // Thất bại: reject()
        resolve([
            {
                id: 1,
                name: 'java'
            }
        ]);
        // reject();
    }
);

promise
    .then(function(courses) { //resolve()
        console.log(courses);
    })
    .catch(function() { //reject
        console.log('Failure');
    })
    .finally(function() {
        console.log('Done');
    });
