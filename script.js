// code for  javascript  
function showTopic(topic) {
    // Hide all topics
    const topics = document.querySelectorAll('.topic');
    topics.forEach(topicElement => {
        topicElement.style.display = 'none';
    });
    // Show the selected topic
    const selectedTopic = document.getElementById(topic);
    if (selectedTopic) {
        selectedTopic.style.display = 'block';
    }
}
// Display the introduction by default
window.onload = function() {
    showTopic('intro');
}
function showTopic(topic) {
    const topics = document.querySelectorAll('.topic');
    topics.forEach((topicElement) => {
        if (topicElement.id === topic) {
            topicElement.style.display = 'block';
        } else {
            topicElement.style.display = 'none';
        }
    });
}

function checkAnswers() {
    const answers = {
        q1: 'a',
        q2: 'a',
        q3: 'b'
    };

    let score = 0;
    const form = document.getElementById('quiz-form');

    // Check answers
    for (let i = 1; i <= 3; i++) {
        const answer = form.querySelector(`input[name="q${i}"]:checked`);
        if (answer && answer.value === answers[`q${i}`]) {
            score++;
        }
    }

    // Display the result
    const resultElement = document.getElementById('quiz-result');
    resultElement.innerHTML = `You scored ${score} out of 3.`;
    resultElement.style.color = score === 3 ? 'green' : (score > 0 ? 'orange' : 'red');
}

