const form = document.getElementById('form');
const result = document.getElementById('result');
const commentEle = document.getElementById('comment');
const scoreEle = document.getElementById('score');
const gradeEle = document.getElementById('grade');
const gpaEle = document.getElementById('gpa');
const calulateAgain = document.getElementById('calculate-again');

const calculateScore = (x, y) => {
    const n = x / y;
    let score = 0;
    let comment = '';
    switch (true) {
        case (n >= 0 && n <= 0.5):
            score = 8 * x / y;
            comment = 'I was expecting a battle, but this exam was more like a massacre.';
            break;
        case (n > 0.5 && n <= 0.6):
            score = 4 + (10 * x - 5 * y) / y;
            comment = "It\"s not about how hard you hit the books, it\"s about how hard the books hit you.";
            break;
        case (n > 0.6 && n <= 1):
            score = 5 + 12.5 * (x - 0.6 * y) / y;
            comment = 'With a heart as brave as yours, I am sure no test can take you down. Wish you all the luck for success.';
            break;
        default:
            score = -1.0;
            comment = "Something went wrong. Check the numbers and try again."
            break;
    }

    score = parseFloat(score.toFixed(2));

    let lastDigit = score * 100 % 10;
    if(lastDigit >= 5)
    {
        score += 0.1;
    }

    score = parseFloat(score.toFixed(1));
    return ({
        score: score,
        comment: comment
    });
};

const convertToGPA = (score) => {
    const listConvert = [
        ["A+", 4.0],
        ["A", 4.0],
        ["B+", 3.5],
        ["B", 3.0],
        ["C+", 2.5],
        ["C", 2.0],
        ["D+", 1.5],
        ["D", 1.0],
        ["F", 0.0]
    ];

    let i = -1;
    switch (true) {
        case (score >= 9.5):
            i = 0;
            break;
        case (score >= 8.5):
            i = 1;
            break;
        case (score >= 8):
            i = 2;
            break;
        case (score >= 7):
            i = 3;
            break;
        case (score >= 6.5):
            i = 4;
            break;
        case (score >= 5.5):
            i = 5;
            break;
        case (score >= 5):
            i = 6;
            break;
        case (score >= 4):
            i = 7;
            break;
        case (score < 4):
            i = 8;
            break;
        default:
            break;
    };

    return listConvert[i];
};

form.addEventListener('submit', (e) => {
    e.preventDefault();

    result.classList.toggle('hide');
    form.classList.toggle('hide');
    const num1 = parseFloat(document.getElementById('input-1').value);
    const num2 = parseFloat(document.getElementById('input-2').value);

    const finalScore = calculateScore(num1, num2);

    if(finalScore.score !== -1.0)
    {
        scoreEle.innerText = "Score: " + finalScore.score;
        commentEle.innerText = finalScore.comment;

        const gpa = convertToGPA(finalScore.score);
        gradeEle.innerText = "Grade: " + gpa[0];
        gpaEle.innerText = "GPA: " + gpa[1].toFixed(1);
    }
    else
    {
        commentEle.innerText = finalScore.comment;
    }
});

calulateAgain.addEventListener('click', () => {
    result.classList.toggle('hide');
    form.classList.toggle('hide');
    document.getElementById('input-1').value = '';
    document.getElementById('input-2').value = '';
    scoreEle.innerText = '';
    commentEle.innerText = '';
    gradeEle.innerText = '';
    gpaEle.innerText = '';
});