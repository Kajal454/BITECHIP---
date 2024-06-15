const display = document.getElementById('display');

const appendToDisplay = (value) => {
    display.value += value;
}

const clearDisplay = () => {
    display.value = '';
}

const calculateResult = () => {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}
