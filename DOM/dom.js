// HTML DOM
// 1.Element
// 2.Attribute
// 3.Text


// 1. getElementById -- trả về trực tiếp 1 element 
// 2. getElementsByClassName -- trả html collection giống mảng
// 3. getElementsByTagName -- trả html collection giống mảng
// 4. querySelector -- trả về trực tiếp  1 element 
// 5. querySelectorAll -- Nodelist gồm mấy element trong đó

// Ôn tập
// trả về element
var heading = document.querySelector('#heading')
console.log("Queryselctor: ",heading);

var headings = document.getElementsByTagName('h1')
console.log("getElementsByTagName: " ,headings);
// muốn lấy thẻ 1 hoặc 2
console.log("getElementsByTagName index: ", headings[0]);

var headings2 = document.getElementsByClassName('heading')
console.log("getElementsByClassName: ", headings2);

var headings3 = document.querySelectorAll('.heading')
console.log("querySelectorAll: ", headings3);

// Lấy nodelist và html collection bằng vòng lặp
for (var i = 0; i < headings3.length; i++) {
    console.log("Lấy bằng vòng lặp: ",i, headings3[i]);
}

// Các thẻ có htmlcolection, a, img, form
console.log(document.forms);
console.log(document.forms['form-1']);



// ---------2.BÀI TẬP
var productsListElement = document.querySelector('.products-list');
// console.log(productsListElement); 
var firstProductElement = document.querySelector('.products-list .product:first-child')
// console.log(firstProductElement)
var buttonElements = document.querySelectorAll('button')
// console.log(buttonElements)

// **3.----------- Ul, li
// CV1: SD boxNode
var boxNode = document.querySelector('.box-1')
// console.log(boxNode);

// CV2: SD cá thẻ li con của box-1  
var listItemsNodes = document.querySelectorAll('.box-1 li')
// console.log(boxNode.querySelectorAll('li'));
// console.log(boxNode.querySelector('p'));
// or
// console.log(listItemsNodes);

// -------------------------------------------------------------------------


// **4.------- DOM attributes (thêm các attribute vào element)
// vd thêm thẻ a thì .href ...
var headinghaha = document.querySelector('h2');
// Cách 1 Settor trực tiếp
// headinghaha.id = 'Headinghh';
// headinghaha.className = 'Headinghh';

// Cách 2: Đặt attribute gọi từ phương thức ('tên attribute', 'giá trị') có thể đặt tên attribute tự do
// headinghaha.setAttribute('class', 'headinghh');
// headinghaha.setAttribute('id', 'headinghh');

// Cách 3: Muốn lấy phương thức ra
// console.log(headinghaha.getAttribute('class'));

// Cách 4: Muốn lấy phương thức khi được js thêm vào vẫn như trên
// headinghaha.title = 'title-test'

// console.log(headinghaha)

// -------------------------------------------------------------------------


// **5.------- innerText, textContent (lấy ra nội dung textNode và sửa)
var headingInner = document.querySelector('.heading-inner');

// lấy nd, giá trị của element (or textContent) - getor
// console.log(headingInner.innerText);

// Sửa nội dung cho textnode thành text mới
// C1 settor
// headingInner.innerText = 'New';

// Sự khác biệt inner(lấy đc những gì nhìn thấy - vd: css cho h1 display none thì mình sẽ thấy ẩn đi) 
// và textContent(bỏ qua thẻ tag -lấy cả khoảng trắng, cả code css trong style luôn)
var headingInner2 = document.querySelector('.heading-inner-2');
// console.log(headingInner2.textContent);


// -------------------------------------------------------------------------


// **6.--------- innerHTML vs OuterHTML (Thêm 1 element vào trong 1 element)
var boxElement = document.querySelector('.boxHTML');

// C1: innerHtml Thêm h1 vào trong div trống (Thêm nội dung)
// boxElement.innerHTML = '<h1 title = "haha">Thêm vào h1 inner</h1>'

// C1: innerHtml Lấy geter nội dung bền trong html dạng chuỗi
// console.log(boxElement.innerHTML)

// C2: outerHtml geter lấy từ thẻ cha xong lấy hết thẻ con
// console.log(boxElement.outerHTML)

// C2 thêm vào thì sẽ đè lên luôn thg cha, ko còn tồn tại trong DOM 
// boxElement.outerHTML = '<span>Thêm vào span inner</span>'

// console.log(document.querySelector('h1:last-child').innerText);

// BT Thay doi li goi y sd map
var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']

function render(courses) {
    var ul = document.querySelector('.courses-list');
    var map = courses.map(function(course) {
        return `<li>${course}</li>`
    })
    return ul.innerHTML = map;
}

// **7.------------Node properties

// **8.----------- DOM CSS
var DOMCSS = document.querySelector('.box-DOMCSS');

Object.assign(DOMCSS.style, {
    width: '200px',
    height: '100px',
    backgroundColor: 'green'
})
// Lấy thuộc tính giá trị
// console.log(DOMCSS.style.backgroundColor);

// **9.--------CLassList property (add, contains, remove, toggle)
var boxClasslist = document.querySelector('.box-classList');

// Thêm class có sẵn vào div
// boxClasslist.classList.add('red');

// Kiểm tra có tồn tại class ko
// console.log(boxClasslist.classList.contains('red'))

// Xóa class sau 2s
// setTimeout(() => {
//     boxClasslist.classList.remove('red');
// }, 2000);

// Nếu có class đó thì bỏ ko có class đó thì thêm
// setInterval chuyển qua chuyển lại
// setTimeout(() => {
//     boxClasslist.classList.toggle('red');
// }, 2000);

// console.log(boxClasslist.classList[0])

// BT thêm class box vào nhiều thẻ div 
var div = document.querySelectorAll('div');
div.forEach(function(box) {
    box.classList.add('box')
})

// **10. ----------Event DOM
// Attribute event
// gán event cho element node

// muốn onlick lên cả nhiều thằng
var h1Element = document.querySelectorAll('.event-dom-2');

for (var i = 0; i < h1Element.length; i++) {
    console.log(h1Element[i]);
    h1Element[i].onclick = function(e) {
        console.log(e.target)
    }
}

// BT: Cho  button, iết code JS sao cho khi click vào button 
// đổi màu chữ button sang màu #fff.
var box = document.querySelector('button')
// box.onclick = function(e) {
//     box.style.color = '#fff'
// }


// **11. -----------DOM events example
// 1. input / select
// input text
var inputEle = document.querySelector('input[type="text"]');
var inputValue;

// inputEle.oninput = function(e) {
//     // Gõ đến đâu lưu vào biến ipvalue
//     inputValue = (e.target.value);
// }

// input checkbox
var inputEle2 = document.querySelector('input[type="checkbox"]');
var inputValue2;

// inputEle2.onchange = function(e) {
//     // inputValue2 = (e.target.checked);
// }

// select
var select = document.querySelector('select');
var selectValue2;

// select.onchange = function(e) {
//     // Gõ đến đâu lưu vào biến ipvalue
//     // console.log(e.target.value);
// }

// Key up/ key down
// ip text
// var inputEle = document.querySelector('input[type="text"]');

// inputEle.onkeyup = function(e) {
//     // Gõ đến đâu lưu vào biến ipvalue
//     console.log(e.which);
//     // Exit
//     switch(e.which) {
//         case 27:
//             console.log('Exit');
//             break;
//         // enter
//         case 13:
//             console.log('send chat');
//             break;
//     }
// }

// **12. preventDefault, stopPropagation
// Thẻ a
var aElement = document.links;
// console.log(aElement)
for (var i = 0; i < aElement.length; i ++) {
    aElement[i].onclick = function(e) {
        // console.log(e.target.href);
        // khi href ko chứa url kia thì sẽ ngăn chặn hành vi mặc định
        if (!e.target.href.startWith('https://fullstack.edu.vn/')) {
            // e.preventDefault();
        }
    }
}


// VD về ul li
var ulElement = document.querySelector('ul');

// Ngăn chặn hành vi mặc định ul khi click ko bị mất 
// ulElement.onmousedown = function(e) {
//     // e.preventDefault();
// }

// ulElement.onclick = function(e) {
//     // console.log(e.target);
// }


// div button
// document.querySelector('.prevent').onclick = function () {
//     // console.log('DIV')
// }

// document.querySelector('.btn').onclick = function (e) {
//     // e.stopPropagation();
//     // console.log('Click me')
// }


// <!-- **13. Event listener -->
// var btn = document.getElementById('btn');

// // 
// function viec1 () {
//     console.log('viec 1')
// }
// function viec2 () {
//     console.log('viec 2')
// }

// btn.addEventListener('click', viec1);
// btn.addEventListener('click', viec2);

// // hủy bỏ lắng nghe việc 1
// setTimeout(function() {
//     btn.removeEventListener('click', viec1)
// }, 3000)





