let inputName = document.querySelectorAll('input[type="text"]');
console.log(inputName);
inputName.forEach(function (inputText) {
    inputText.addEventListener('input', () => {
        inputText.value = inputText.value.replace(/[^a-zа-яё]/, '');
    });
})

