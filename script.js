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
    // Correct answers
    const correctAnswers = {
        q1: "a",  // printf("Hello, World!");
        q2: "a",  // int x = 10;
        q3: "b",  // To return a value from a function
        q4: "c",  // for
        q5: "c",  // /* ... */
        q6: "a"   // While
    };
 // Get the selected answers
    let score = 0;
    for (let i = 1; i <= 6; i++) {
        const selectedOption = document.querySelector(`input[name="q${i}"]:checked`);
        if (selectedOption && selectedOption.value === correctAnswers[`q${i}`]) {
            score++;
        }
    }
 // Display the result
    const result = document.getElementById("quiz-result");
    result.innerHTML = `You scored ${score} out of 6.`;
}

