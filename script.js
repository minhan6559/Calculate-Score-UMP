const form = document.getElementById('form');
const result = document.getElementById('result');
const commentEle = document.getElementById('comment');
const scoreEle = document.getElementById('score');
const calulateAgain = document.getElementById('calculate-again');

const calculateScore = (x, y) => {
    const n = x / y;
    let ans = 0;
    let comment = '';
    switch (true) {
        case (n < 0.5):
            ans = 8 * x / y;
            comment = "I didn\"t fail the test, I just found 100 ways to do it wrong.";
            break;
        case (n == 0.5):
            ans = 4;
            comment = 'I was expecting a battle, but this exam was more like a massacre.';
            break;
        case (n > 0.5 && n < 0.6):
            ans = 4 + (10 * x - 5 * y) / y;
            comment = "It\"s not about how hard you hit the books, it\"s about how hard the books hit you.";
            break;
        case (n == 0.6):
            ans = 5;
            comment = 'Whatever you do, do well, and success will attend to your efforts.';
            break;
        case (n > 0.6 && n <= 1):
            ans = 5 + 12.5 * (x - 0.6 * y) / y;
            comment = 'With a heart as brave as yours, I am sure no test can take you down. Wish you all the luck for success.';
            break;
        default:
            ans = 0;
            comment = "Something went wrong. Check the numbers and try again."
            break;
    }

    return ({
        score: parseFloat(ans.toFixed(2)),
        comment: comment
    });
};

form.addEventListener('submit', (e) => {
    e.preventDefault();

    result.classList.toggle('hide');
    form.classList.toggle('hide');
    const num1 = parseFloat(document.getElementById('input-1').value);
    const num2 = parseFloat(document.getElementById('input-2').value);

    const finalScore = calculateScore(num1, num2);

    scoreEle.innerText = finalScore.score;
    commentEle.innerText = finalScore.comment;
});

calulateAgain.addEventListener('click', () => {
    result.classList.toggle('hide');
    form.classList.toggle('hide');
    document.getElementById('input-1').value = '';
    document.getElementById('input-2').value = '';
});