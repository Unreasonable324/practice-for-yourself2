const form = document.getElementById('form');
const name = document.getElementById('name');
const surName = document.getElementById('surName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const data = document.getElementById('dateOfBirth')
const inputs = document.querySelectorAll('.input-control')




let inputNameAndSurname = document.querySelectorAll('.text');
inputNameAndSurname.forEach(function (inputText) {
    inputText.addEventListener('input', () => {
        inputText.value = inputText.value.replace(/[^a-zа-яё]/, '');
    });
})

let inputPasswords = document.querySelectorAll('.password');
inputPasswords.forEach(function (inputPassword) {
    inputPassword.onkeyup = function () {
        if (this.value.search(/[а-яА-ЯёЁ]/g) != -1) {
            this.value = this.value.replace(/[а-яА-ЯёЁ]/g, '');
        }
    }
})

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
    formValidation();

});
const formValidation = () => {
    let valid = true
    inputs.forEach(function (input) {
        if (input.classList.contains('error')) {
            valid = false
        }
    })
    if (valid === true) {
        alert('Регистрация прошла успешно!')
    }
    console.log(valid);
}
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const nameValue = name.value.trim();
    const surNameValue = surName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const dataValue = data.value.trim()

    var today = new Date();
    var day1 = today.getDate();
    var month1 = today.getMonth();
    month1++;
    var year1 = today.getFullYear()
    var year11 = today.getFullYear() - 18;
    var current = month1 + '/' + day1 + '/' + year11;
    var currentAtribute = month1 + '-' + day1 + '-' + year11;
    console.log(currentAtribute);
    var noTime = month1 + '/' + day1 + '/' + year1;
    var fullAge = Math.abs(new Date(noTime) - new Date(current) - 25200000)
    var diff = Math.abs(new Date(noTime) - new Date(dataValue));

    console.log(fullAge);
    console.log(diff);
    console.log((fullAge - diff));


    if (nameValue === '') {
        setError(name, 'Заполните поле имя');

    } else {
        setSuccess(name);
    }
    if (surNameValue === '') {
        setError(surName, 'Заполните поле фамилия');
    } else {
        setSuccess(surName);
    }

    if (emailValue === '') {
        setError(email, 'Заполните поле Email');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Укажите действительный адрес электронной почты');
    } else {
        setSuccess(email);
    }

    if (passwordValue === '') {
        setError(password, 'Заполните поле пароль');
    } else if (passwordValue.length < 8) {
        setError(password, 'Пароль должен состоять не менее чем из 8 символов.')
    } else if (!passwordValue.match(/[a-z]/g)) {
        setError(password, 'Пароль должен содержать минимум один строчный символ')
    } else if (!passwordValue.match(/[A-Z]/g)) {
        setError(password, 'Пароль должен содержать минимум один заглавный символ')
    } else if (!passwordValue.match(/[0-9]/g)) {
        setError(password, 'Пароль должен содержать минимум одну цифру')
    } else if (!passwordValue.match(/[^a-zA-Z\d]/g)) {
        setError(password, 'Пароль должен содержать минимум один специальный символ(?!|/...)')
    } else {
        setSuccess(password);
    }

    if (password2Value === '') {
        setError(password2, 'Заполните поле подтверждение пароля');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Поле подтверждение пароля не совпадает с полем пароль");
    } else {
        setSuccess(password2);
    }
    if (dataValue === '') {
        setError(dateOfBirth, 'Заполните поле Дата рождения');
    } else if (diff < fullAge) {
        setError(dateOfBirth, 'Вам нет 18 лет');
    }
    else {
        setSuccess(dateOfBirth)
    }
};

const eyeslash = document.querySelector('.fa-eye-slash')
const eye = document.querySelector('.fa-eye')
const inputsPassword = document.querySelectorAll('.password')
eyeslash.addEventListener('click', function () { 
    eyeslash.style.display = 'none'
    eye.style.display = 'block'
    inputsPassword.forEach(function(inputPassword){
        inputPassword.type = "text"
    })
    console.log(inputPassword); 
})
eye.addEventListener('click', function () { 
    eyeslash.style.display = 'block'
    eye.style.display = 'none'
    inputsPassword.forEach(function(inputPassword){
        inputPassword.type = "password"
    })
    console.log(inputPassword); 
})

