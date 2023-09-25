const form = document.getElementById('form');
const result = document.getElementById('result');

const calculateScore = (x, y) => {
    const n = x / y;
    let ans = 0;
    switch(true)
    {
        case (n < 0.5):
            ans = 8 * x / y; 
            break;
        case (n == 0.5):
            ans = 4;
            break;
        case (n > 0.5 && n < 0.6):
            ans = 4 + (10 * x - 5 * y) / y;
            break;
        case (n == 0.6):
            ans = 5;
            break;
        case (n > 0.6 && n <= 1):
            ans = 5 + 12.5 * (x - 0.6 * y) / y;
            break;
        default:
            ans = 0;
            break;
    }

    return parseFloat(ans.toFixed(10));
};

form.addEventListener('submit', (e) => {
    e.preventDefault();

    result.classList.toggle('hide');
    form.classList.toggle('hide');
    const num1 = parseFloat(document.getElementById('input-1').value);
    const num2 = parseFloat(document.getElementById('input-2').value);

    const scoreEle = document.getElementById('score');
    scoreEle.innerText = calculateScore(num1, num2);
});