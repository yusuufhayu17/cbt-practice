function submitQuiz() {
    const quizForm = document.getElementById('quizForm');
    const resultsDiv = document.getElementById('results');
    
    // Correct answers for each question
    const correctAnswers = [
        'B', 'B', 'D', 'B', 'D', 'A', 'C', 'A', 'B', 'D',
        'A', 'C', 'C', 'A', 'C', 'B', 'B', 'B', 'B', 'A',
        'B', 'B', 'D', 'B', 'B', 'B', 'B', 'B', 'A', 'D',
        'A', 'D', 'B', 'C', 'A', 'D', 'C', 'D', 'D', 'B',
        'A', 'B'
    ];

    let score = 0;

    const formData = new FormData(quizForm);

    correctAnswers.forEach((answer, index) => {
        const questionName = `q${index + 1}`;
        if (formData.get(questionName) === answer) {
            score++;
        }
    });

    resultsDiv.innerHTML = `You scored ${score} out of ${correctAnswers.length}`;
}
let timer;
let timeLeft = 50 * 60; // 50 minutes in seconds

function startTimer() {
    const timerElement = document.getElementById('timer');

    timer = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timer);
            alert('Time is up!');
            submitQuiz(); // Automatically submit the quiz when time is up
            return;
        }

        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerElement.textContent = `Time Left: ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        timeLeft--;
    }, 1000);
}

function submitQuiz() {
    clearInterval(timer); // Stop the timer when submitting the quiz

    const quizForm = document.getElementById('quizForm');
    const resultsDiv = document.getElementById('results');
    
    // Correct answers for each question
    const correctAnswers = [
        'B', 'B', 'D', 'B', 'D', 'A', 'C', 'A', 'B', 'D',
        'A', 'C', 'C', 'A', 'C', 'B', 'B', 'B', 'B', 'A',
        'B', 'B', 'D', 'B', 'B', 'B', 'B', 'B', 'A', 'D',
        'A', 'D', 'B', 'C', 'A', 'D', 'C', 'D', 'D', 'B',
        'A', 'B'
    ];

    let score = 0;

    const formData = new FormData(quizForm);

    correctAnswers.forEach((answer, index) => {
        const questionName = `q${index + 1}`;
        if (formData.get(questionName) === answer) {
            score++;
        }
    });

    resultsDiv.innerHTML = `You scored ${score} out of ${correctAnswers.length}`;
}

// Start the timer when the page loads
window.onload = startTimer;

