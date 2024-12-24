// JavaScript to handle topic display
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
