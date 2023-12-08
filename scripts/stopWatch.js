let number = document.getElementById('number')
let value = number.innerText;
let previousValue = parseInt(value);

const startWatch = () => {
    
    const interValId = setInterval(() => {
        previousValue++
        number.innerText = previousValue;
    }, 1000)

    document.getElementById('stop-btn').addEventListener('click', function () {
        clearInterval(interValId);
    })
}

const resetWatch = () => {
    previousValue = 0;
    number.innerText = previousValue;
}