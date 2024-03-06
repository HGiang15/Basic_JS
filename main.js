

// document.method().events = function() {
//     // Khối lệnh thực thi
// }
// method(): Là hàm xử lý DOM để chỉ định một phần tử HTML
// events: Là tên sự kiện sẽ được thực thi (tham khảo sự kiện ở bảng trên)
// function(){ ... }: Là code JavaScript mà khi sự kiện được kích hoạt thì hàm này sẽ thực thi.
// Lấy các phần tử có class là menu


{/* <ul>
    <li class="menu">JAVA</li>
    <li class="menu">JAVASCRIPT</li>
    <li class="menu">PHP</li>
    <li class="menu">PYTHON</li>
</ul> */}
// let x = document.getElementsByClassName("menu");

// // Lặp qua các phần tử có class là menu
// for (let i = 0; i < x.length; i++) {
    
//     // Lắng nghe sự kiện click
//     // và đổi màu chữ thành màu đỏ
//     x[i].onclick = function() {
//         this.style.color = "red";
//     };
// }




// -----B1Built - in--------
// /** để coment nhiều
// 1. alert(fullName);
// alert(age);
// 2. Console
//var fullName = 'Giang';
//console.log(fullName);
// consolde.warn() : in ra dấu tam giác vàng
// console.error() : in dấu tích đỏ lỗi
// 3. confirm('Xac nhan du tuoi'); 
// 4.prompt("Xac nhan du tuoi");
// cho doan code chay sau 1 khoang thoi gian mili giay
// setTimeout(function () {
//     alert('Thong bao')
// }, 1000);

// // thuc thi lien tuc, cach 1 s chay 1 lan
// setInterval(function () {
//     console.log('Day la log')
// }, 1000);



// ----- B2 Toan tu so hoc, gan, ss, logic
// var a = 1 + 2;
// console.log(a);
// var FullName = 'Giang';
// var a = 1;
// var b = 2;
// ss
// if (a < b) {
//     alert('dung');
// }
//logic
// if (a > 0 && b > 0) {
//     alert('a & b lon hon 0');
// }


// ----- If else
// if (true) {
//     console.log('Dung');
// } else {
    
// }
// Các đk sai 
/*
    0, false, '' "", undefined, NaN, null
*/
// var number = 13;
// var remain = number % 2;
// var isOdd = remain === 1;
// console.log(isOdd);

// Toan tu logic

// -------------------------B3. Kieu du lieu
// Number type 
// var a = 1;

// // string type
// var fullName = 'giang';
// // Boolean
// var isSuccess = true; 

// // Symbol
// var id = Symbol('id');
// // Function
// var myFunction = function() {
//     alert('Hello');
// }
// // myFunction();

// //  object types: chua nhieu dang du lieu
// var myObject = {
//     name: 'giang',
//     age: 18,
//     adress: 'Ha Noi',
//     myFunction: function () {

//     }
// };
// console.log('myObject', myObject);

// var myArray = [
//     'java',
//     'phb',
//     'ruby'
// ];
// // Kiem tra kieu du lieu la gi
// console.log(typeof a);

// --Toan tu logic va cau lenh if

// var a = 1;
// var b = 2;
// 0, false, '' "", undefined, NaN, null

// Đọc từ trái qua phải ko nằm trong 6 giá trị trên
// thì đọc tiếp sang phải nếu vẫn ko có 6 gtri trên thì in ra kq bên phải cuối
// Nếu gặp 1 trong 6 gtri tren thi in luôn giá trị đấy
// or thì gặp đầu tiên phát in gtri đấy luôn
//  ko cần quan tâm 6 gtri kia
// var result = 'A' && 'B' && 'C';
// console.log(result); // in ra C


// ---------B4.Hàm 
// function showDialog() {
//     alert('hello');
// }

// // Tham số hàm
// function writelog(log) {
//     var myString = '';
//     for(var param of arguments) {
//         myString += `${param} - `
//     }
//     console.log(myString)
// }
// // in ra dòng 1: haha dòng 2: hihi
// // in ra có dấu gạch
// writelog('haha','hihi'); 


// ----------B5 Chuỗi
// var Fullname = 'Giang hoàng';
// var name1 = 'HaHa';

// console.log(`Toi la: ${Fullname} ${name1}`);
// Lam viec voi chuoi
// var myString = 'Hoc JS tai JS Day';
// 1.Length 
// console.log(myString.length);
// 2.Find index Tim vi tri cua 1 ki tu trong 1 chuoi
// console.log(myString.indexOf('JS', 5));
// console.log(myString.lastIndexOf('JS'));
// console.log(myString.search('JS'));

// 3.Cut string 
// console.log(myString.slice(4,6))
// console.log(myString.slice(4))  
// console.log(myString.slice(-3))

// 4.Replace
// console.log(myString.replace('JS', 'script'))
// tìm tat ca
// console.log(myString.replace(/JS/g, 'script'))

// 5. To Upper case
// console.log(myString.toUpperCase())
// 6. To lower case
// console.log(myString.toLowerCase())

// 7.Trim
// console.log(myString.trim())

// 8.Split
// var languae = 'JV, PHP, ruby';
// var languae2 = 'Javascript';

// console.log(languae.split(', '))
// console.log(languae2.split(''))

// 9. Get a character by index: Tìm xem vị trí là chữ gì
// const myString2 = 'Giang H';
// console.log(myString2.charAt(0))
// C2
// console.log(myString2[1])

// Bài tập
// function getContentLength(content) {
//     return content.length;
// }

// console.log(getContentLength('JavaScript'));
// console.log(getContentLength('Hello World'));
// B2
// var coursesStr = 'HTML & CSS, JavaScript, ReactJS';
// function strToArray(str) {
//     var arr = str.split(', ');
//     return arr;
// }
// Expected results
// console.log(strToArray(coursesStr)) 


//  Làm việc với số
// Hàm kiểm tra xem phải là số ko
// function isNumber(value) {
//     return (typeof value == 'number')
// }

// Expected results:
// console.log(isNumber(999)); // true


// -----------Mảng 
// var languaes = [
//     'Java',
//     'Java2',
//     'Java3',
// ];

// console.log(languaes)
// // kiem tra array
// console.log(Array.isArray(languaes))



// Làm việc với mảng

// var languaes = [
//     'java',
//     'php',
//     'ruby'
// ];

// var languaes2 = [
//     'dart',
//     'ruby'
// ]

// 1. toString(), join()chuyển sang string
// console.log(typeof languaes.toString())
// nối
// console.log(languaes.join(' - '))

// 2. pop() Xóa pt cuối mảng và trả về pt đã xóa
// console.log(languaes.pop()) 

// 3. Push() thêm 1 hoặc nhiều ptu vào cuối mảng
// trả về độ dài mới
// console.log(languaes.push('giang')) 
// console.log(languaes)

// 4. Shift() xóa ptu đầu mảng và trả về pt đầu
// console.log(languaes.shift())
// console.log(languaes)


// 5. Unshift() thêm ptu vào đầu mảng trả về ptu đầu
// console.log(languaes.unshift('hà'))
// console.log(languaes)

// 6. Splicing() xóa , cut
// xóa đi 1 ptu tính từ vị trí trỏ con chuột đến mấy ptu
// languaes.splice(1, 1)
// xóa từ vtri1 đến 0 nghĩa là ko xóa, xong chèn từ vị trí đấy
// languaes.splice(1, 0, 'haha')
// languaes.splice(1, 1, 'hihi') // xóa vị trí 1 thay = thg khác
// console.log(languaes)

// 7. concat() hợp nhất lg2 vào lg1
// console.log(languaes.concat(languaes2))

// 8. slicing() cut chữ php từ vtri1 den het vtri2
// console.log(languaes.slice(1, 2))
// cut den het mang
// console.log(languaes.slice(1))
// copy mảng
// console.log(languaes.slice(0))

// Bài tập 
// function joinWithCharacter(array, charactor) {
//     array = array.join(charactor)
//     return array
// }


// Ví dụ khi sử dụng
// var cars = ['Honda', 'Mazda', 'Mercedes'];

// var result = joinWithCharacter(cars, ' - ');

// console.log(result); // Expected: "Honda - Mazda - Mercedes"

// function getLastElement(array) {
//     return array.slice(-1)
// }



// Ví dụ sử dụng, hàm này sẽ trả về phần tử cuối cùng trong mảng.
// var animals = ['Monkey', 'Tiger', 'Elephant'];
// var result = getLastElement(animals);

// console.log(result); // Expected: "Elephant"
// console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']

// function getFirstElement(array) {
//     return array.slice(0,1)
// }



// Ví dụ sử dụng, hàm này sẽ trả về phần tử đầu tiên trong mảng.
// var animals = ['Monkey', 'Tiger', 'Elephant'];
// var result = getFirstElement(animals);

// console.log(result); // Expected: "Monkey"
// console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']


// ---------------- Object
// var myInfo = {
//     name: 'Giang',
//     age: 18,
//     add: 'Hà Noi',
//     getName: function() {
//         return this.name;
//     }
// };

// Function -- > Phương thức/method
// Others -- > Thuộc tính/property

// 1. Thêm key mới vào object có sẵn
// myInfo.email = 'giang@gmail.com'

// 2. Xóa cặp key value 
// delete myInfo.age

// 3. để thêm value này vào object trên
// var emailKey = 'email';
// -- > [emailKey] : 'giang@gmail'


// 4. Lấy biến add khi đặt add = biến khác
// var myKey = 'add'
// console.log(myInfo[myKey])

// 5. Lấy value ra ngoài hoặc lấy hàm trong object ra ngoài
// console.log(myInfo.name)
// console.log(myInfo.getName())



// -------------- Object constructor
// function User(firstName, lastName, avatar) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avatar = avatar;

//     this.getName = function() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

//  User.prototype.className = 'f8'
//  User.prototype.getclassName = function() {
//     return this.className;
//  }

// // Tạo đối tượng
// var author = new User('Giang', 'Hoang', 'Ava');
// var user = new User('Giang', '2', 'Ava');

// // Thêm thuộc tính riêng vào
// author.tittle = 'Chia sẻ kinh nghiệm';
// user.comment = 'Rất hay';

// console.log(author);
// console.log(user);

// // This trong function gọi từ ông nào là từ ông đó
// console.log(author.getName());
// console.log(user.getName());


// // -----------Prototype
// function Student(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// Student.prototype.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`;
// }

// // Ví dụ khi sử dụng
// var student = new Student('Long', 'Bui');

// console.log(student.firstName);  // 'Long'
// console.log(student.lastName);  // 'Bui'
// console.log(student.getFullName());  // 'Long Bui'



// ------------Đối tượng Date
// var date = new Date(); //object
// var date = Date();  // string
// var month = date.getMonth() + 1; // trả về tháng từ 0 - 11
// var day = date.getDay();
// var year = date.getFullYear();

// console.log(date);
// console.log(date.getFullYear); // lấy ra năm
// console.log(`${day}/${month}/${year}`);


// ----------- Math object 

// console.log(Math.PI);
// console.log(Math.round(1.3));
// console.log(Math.abs(-4)); GTTD
// console.log(Math.PI);
// console.log(Math.ceil()); // làm tròn trên
// console.log(Math.floor()); // làm tròn dưới
// console.log(Math.floor(Math.random()*10)); // random nhỏ hơn 1 or từ 0 - 9

// var random = Math.floor(Math.random()*3);
// var bonus = [
//     '10',
//     '20',
//     '30'
// ];
// console.log(bonus[random])

// tỉ lệ random vào số nhỏ hơn 5 là 5% khi random 100
// var random = Math.floor(Math.random()*100);

// if (random < 5) {
//     console.log('cường hóa')
// }

// console.log(Math.min(-100, 1, 3, 5, 6));

// ----------------------------------------------------
// ******************* If else 
// var date = 2;
// if (date === 2) {
//     console.log("Hôm nay là T2");
// } else if (date === 3) {
//     console.log("Hôm nay là T3");
// } else {
//     console.log("haha");
// }

// ---------------- switch case
// var date = 2;

// switch (date) {
//     case 2:
//         console.log('T2');
//         break;
//     case 3:
//         console.log('T3');
//         break;
//     case 4:
//         console.log('T4');
//         break;
// }

// ----------------Toán tử 3 ngôi

// var course = {
//     name1: 'java',
//     coin: 250 
// }

// if (course.coin > 0) {
//     console.log(`${course.coin} coins`)
// } else {
//     console.log('free')
// }

// var result = course.coin > 0 ? `${course.coin} coins` : 'free';

// var a = 1;
// var b = 2;
// var c = a > 0 ? a : b;


// --------------- Vong lap
// 1. For 
// for (var i = 1; i <= 10; i++) {
//     console.log(i)
// }

// Bài tập Hãy tạo hàm getRandNumbers có 3 tham số là min, max, length. 
// Hàm này sẽ trả về một mảng gồm length phần tử, 
//các giá trị trong mảng là số ngẫu nhiên, giá trị trong khoảng từ min tới max.
// function getRandNumbers (min, max, length) {
//     var arrNumbers = []; //Dùng để lưu các số đã random ra

// ------ Phân tích ---------
//- Vd: min = 3, max = 8;
//- Giờ muốn lấy phạm vi random: max - min = 8 - 3 = 5
// -> Cho nên nó random trong khoảng từ 0 -> 5
    // var range = max - min + 1; // + 1 để không bỏ xót max
//Vì nếu không + 1 thì chỉ random ra được từ 3 -> 7 thôi
//Chạy vòng for để nó random đúng số lượng tham số length nhập vào
// ví dụ length = 5 thì nó sẽ chạy 5 lần vòng lặp
//     for (var i = 0; i < length; i++) {
//         var numRandom = Math.floor(Math.random() * range);
//     // sau khi random ra ở trên vd: nó ra 2;
//     // Nhưng mình cần nó chạy trong khoảng min -> max tức 3 -> 8
//     // nên phải + thêm min cho nó nằm trong khoảng min max
//     // vd1: rd ra 2 -> + thêm min = 2 + 3 = 5 => numRandom = 5
//     // vd2: rd ra 5 -> + min = 5 + 3 = 8 => numRandom = 8 
//         arrNumbers.push(numRandom + min); //luu vao mang
//     }
//     return arrNumbers
// }

// // --- For part 2
// // Hàm tính tổng trong mảng
// function getTotal(arr) {
//     var sum = 0
//     for (var i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     return sum
// }
// // console.log(getTotal([1, 2, 3])) // Output: 6

// // for part 3
// var myArray = [
//     'java',
//     'php',
//     'dart',
//     'python'
// ];
// // lưu độ dài của mảng vào biến
// var arrayLength = myArray.length;


// for (var i = 0; i < arrayLength; i++) {
//     // console.log(i);
//     // console.log(myArray[i]);
// }

// // BT
// var orders = [
//     {
//         name: 'Khóa học HTML - CSS Pro',
//         price: 3000000
//     },
//     {
//         name: 'Khóa học Javascript Pro',
//         price: 2500000
//     },
//     {
//         name: 'Khóa học React Pro',
//         price: 3200000
//     }
// ]

// function getTotal (arr) {
//     var sum = 0;
//     var arrLength = arr.length;
//     for (var i = 0; i < arrLength; i++) {
//         sum = sum + arr[i].price;
//     }
//     return sum
// }
// console.log(getTotal(orders)); // Output: 8700000

// --------- For/in
// 1.Lấy từ object
// var myInfo = {
//     name: 'Giang',
//     age: 18,
//     add: 'Ha Noi'
// };
// for (var key in myInfo) {
//     console.log(key); // lấy key
//     console.log(myInfo[key]); // lấy value

// }

// 2.lấy từ mảng 

// var languaes = [
//     'java',
//     'php',
//     'ruby'
// ]

// for (var key in languaes) {
//     console.log(key);
//     console.log(languaes[key]);
// }

// 3.Lấy từ string
// var languaes = 'java';


// for (var key in languaes) {
//     console.log(key);
//     console.log(languaes[key]);
// }

// // For loop
// // ko sd dc object
// var languaess = [
//     'java',
//     'php',
//     'dart'
// ]
// // or
// var string = 'java';

// for (var value of languaess) {
//     // console.log(value)
// }

// var myInfo = {
//     name: 'Giang',
//     age: 18,
//     add: 'Ha Noi'
// };

// for (var value of Object.values(myInfo)) {
//     // console.log(value)
// }

// // while
// var i = 0;
// while (i < 1000) {
//     i++;
//     // console.log(i);
// }

// // Do while
// var i = 0;
// do {
//     i++;
//     // console.log(i);
// } while (i < 10);

// // Break, continue
// for (var i = 0; i < 10; i++) {
//     // console.log(i);
//     if (i >= 5) {
//         break;
//     }
// }

// for (var i = 0; i < 10; i++) {
//     if (i % 2 !== 0) {
//         continue
//     }
//     // console.log(i);
// }

// // Vòng lặp lồng
// var myArray = [
//     [1,2],
//     [3,4],
//     [5,6]
// ]

// for (var i = 0; i < myArray.length; i++) {
//     // console.log(myArray[i]);
//     for (var j = 0; j < myArray[i]; j++) {
//         // console.log(myArray[i][j]);
//     }
// }

// -------------------------------------- Array Part2 
var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 250
    },
    {
        id: 2,
        name: 'html.css',
        coin: 0
    },
    {
        id: 3,
        name: 'Ruby',
        coin:0
    },
    {
        id: 4,
        name: 'php',
        coin: 400
    }, 
    {
        id: 5,
        name: 'ReactJS',
        coin: 500
    }
]

// 1. For each
courses.forEach(function(course, index) {
    // console.log(index, course)
}); 

// 2.Every
// Kiem tra đk đúng kiểm tra cái tiếp theo
// cái tiếp theo sai trả về false
// chỉ cần 1 cái sai ngừng luôn
var isFree = courses.every(function(course, index) {
    return course.coin === 0;
}); 
// console.log(isFree);

// 3. some 
// Chỉ cần 1 đk đúng ngừng
var isFree = courses.some(function(course, index) {
    return course.coin === 0;
}); 

// 4.Find chỉ tìm 1
// Tim kiem name 
var course = courses.find(function(course, index) {
    return course.name === 'Ruby';
}); 

// 5. Filter tìm tất cả phần tử thỏa mãn
var course = courses.filter(function(course, index) {
    return course.name === 'Ruby';
}); 

// 6. Map (thay đổi ptu của array)
// Thay đổi element trong mảng trên
function courseHandler(course, index) {
    return {
        id: course.id,
        name: `Khoá học ${course.name}`,
        coin: course.coin,
        coinText: `Gía: ${course.coin}`,
        index: index
    }
}

var newCourse = courses.map(courseHandler);
// console.log(newCourse)
// bt: muốn lấy tên ra một mảng mới
function courseHandle(course) {
    return course.name;
}
var newCourse2 = courses.map(courseHandle);
// console.log(newCourse2)


// 7.Reduce
// accumulator: biến lưu trữ
// Cộng các giá tiền coin vào
function coinHandler2(accumulator, currentValue) {
        var total = accumulator + currentValue.coin;
        return total;
}

var totalCoin = courses.reduce(coinHandler2, 0);
// console.log(totalCoin);



// 8. Viêt ngắn gọn
var totalCoin = course.reduce(function(total, course) {
    return total + course.coin;
}, 0)

// Tính tổng = reduce
var numbers = [250, 0, 0, 400, 500];
var totalCoins = numbers.reduce(function() {

})



// tạo hàm getMostFavoriteSport có 1 tham số 
//(F8 sẽ gọi hàm này và luôn truyền đối số là 1 array). 
//Hàm getMostFavoriteSport sẽ trả về các môn thể thao có điểm số yêu thích lớn hơn 5.
const sports = [
    {
        name: 'Bóng rổ',
        like: 6
    },
    {
        name: 'Bơi lội',
        like: 5
    },
    {
        name: 'Bóng đá',
        like: 10
    },
]

function getMostFavoriteSport (arr) {
    var filterSport = arr.filter(function(sport){
        return sport.like > 5;
    })
    return filterSport
}

// console.log(getMostFavoriteSport(sports)) 
// Tính tổng số huy chương vàng
var sports2 = [
    {
        name: 'Bơi lội',
        gold: 11
    },
    {
        name: 'Boxing',
        gold: 3
    },
    {
        name: 'Đạp xe',
        gold: 4
    },
    {
        name: 'Đấu kiếm',
        gold: 5
    },
]
function getTotalGold (arr) {
    function total(accumulator, currentValue) {
        return accumulator + currentValue.gold;
    }
    return arr.reduce(total,0)
}

// console.log(getTotalGold(sports2))

// 2 Bài tập kinh điển
// Flat - làm phẳng mảng từ Depth array - Mảng sâu
var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

var flatArray = depthArray.reduce(function(flatOutput, depthItem) {
    return flatOutput.concat(depthItem);
}, []);
// console.log(flatArray);




// Lấy ra các khóa học đưa vào 1 mảng mới
var topics = [
    {
        topic: "Front-end",
        coursess: [
            {
                id: 1,
                title: "HTML, CSS"
            }, 
            {
                id: 2,
                title: "Javascript"
            }
        ]
    },
    {
        topic: "Back-end",
        coursess: [
            {
                id: 1,
                title: "PHP"
            }, 
            {
                id: 2,
                title: "NodeJS"
            }
        ]
    }
];

var newCourses = topics.reduce(function(coures, topic) {
    return coures.concat(topic.coursess);
}, []);
// console.log(newCourses)

var htmls = newCourses.map(function(course) {
    return `
        <div>
            <h2> ${course.title} </h2>
            <p>ID: ${course.id} </p>
        </div>
    `
});
// console.log(htmls.join(''));

// Tính TB tên tác giả
function calculateRating (arr) {
    // Tìm tên tác giả
    var findDirec = arr.filter(function(find) {
      return find.Director === "Christopher Nolan";
    });
    var totalImdb = findDirec.reduce(function(store, current) {
      return store +  Number(current.imdbRating);
    }, 0);
    return totalImdb / findDirec.length;
  }

// 
Array.prototype.reduce2 = function (callback, result) {
    let i = 0
    // Nếu ko truyền innitialvalue
    if (arguments.length < 2) {
        i = 1;
        result = this[0];
    }
    for (; i < this.length; i ++) {
        result = callback(result, this[i], i, this);
    }
}
var numbers = [1, 2, 3, 4, 5];
const result = numbers.reduce2((total, number) => {
    return total + number;
}, 0)
// console.log(result);

// Include methods
var khoaHoc = ['java', 'php', 'dart'];
console.log(khoaHoc.includes('java'));









