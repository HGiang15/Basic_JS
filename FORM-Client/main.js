const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim()
    const password2Value = password2.value.trim()

    if (usernameValue === '') {
        // show error, add class error
        setErrorFor(username, 'Vui lòng nhập tên');
    } else {
        // add success class
        setSuccessFor(username);
    }

    if (emailValue === '') {
        setErrorFor(email, 'Vui lòng nhập email');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Sai định dạng');
    } else {
        setSuccessFor(email)
    }

    if (passwordValue === '') {
        // show error, add class error
        setErrorFor(password, 'Vui lòng mk');
    } else if (passwordValue.length < 8) {
        setErrorFor(password, 'Vui lòng nhập tối thiểu 8 kí tự');
    } else if (!isPasswordValid(passwordValue)) {
        setErrorFor(password, 'Vui lòng nhập kí tự in hoa ở đầu');
    } else if(!containsNumber(passwordValue)) {
        setErrorFor(password, 'Mật khẩu phải chứa ít nhất một kí tự số');
    } else {
        // add success class
        setSuccessFor(password);
    }

    if (password2Value === '') {
        // show error, add class error
        setErrorFor(password2, 'Vui lòng nhập lại mk');
    } else if (passwordValue !== password2Value) {
        setErrorFor(password2, 'Mật khẩu không khớp');
    } else {
        // add success class
        setSuccessFor(password2);
        showSuccessMessage();
    }
}
    

function setErrorFor(input, message) {
    const formControl = input.parentElement; 
    const small = formControl.querySelector('small');

    // add error mess inside small
    small.innerText = message;

    // add error class
    formControl.className = 'form-ctr error'
}

function setSuccessFor(input) {
    const formControl = input.parentElement; 
    formControl.className = 'form-ctr success'
}

// định dạng email
function isEmail (email) {
    return  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
}

// MK chu dau viết hoa
function isPasswordValid(password) {
    return /^[A-Z]/.test(password);
}

// Mk chứa ít nhất 1 kí tự số
function containsNumber(password) {
    return /\d/.test(password);
}

// Cửa sổ thành công
function showSuccessMessage() {
    alert('Đăng ký thành công!');
}