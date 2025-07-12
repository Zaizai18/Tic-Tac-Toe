function calculateScore() {
    let score = 0;

    // Question 1 (radio)
    const q1 = document.querySelector('input[name="q1"]:checked');
    if (q1 !== null) {
        // If the user selected an answer for question 1, add its value to the score
        score = score + parseInt(q1.value);
    } else {
        // If nothing is selected, don't add anything
        score = score + 0;
    }

    // Question 2 (checkboxes)
    const q2 = document.querySelectorAll('input[name="q2"]:checked');
    let q2score = 0;
    let none = false;
    if (q2.length > 0) {
        // If the user checked at least one box for question 2
        for (let i = 0; i < q2.length; i++) {
            if (q2[i].value === "1") {
                // If the "None" box is checked, set none to true
                none = true;
            } else {
                // Otherwise, add the value of the checked box to q2score
                q2score = q2score + parseInt(q2[i].value);
            }
        }
        if (none === true) {
            // If "None" is checked, only add 1 point for question 2
            score = score + 1;
        } else {
            // If "None" is not checked, add up all the points from the checked boxes
            score = score + q2score;
        }
    } else {
        // If nothing is checked, don't add anything
        score = score + 0;
    }

    // Question 3 (radio)
    const q3 = document.querySelector('input[name="q3"]:checked');
    if (q3 !== null) {
        // If the user selected an answer for question 3, add its value to the score
        score = score + parseInt(q3.value);
    } else {
        // If nothing is selected, don't add anything
        score = score + 0;
    }

    // Question 4 (radio)
    const q4 = document.querySelector('input[name="q4"]:checked');
    if (q4 !== null) {
        // If the user selected an answer for question 4, add its value to the score
        score = score + parseInt(q4.value);
    } else {
        // If nothing is selected, don't add anything
        score = score + 0;
    }

    // Show result message based on score
    let msg = "";
    if (score >= 10) {
        // If the score is 10 or higher, show a positive message
        msg = "You're doing great! 🌟";
    } else if (score >= 7) {
        // If the score is between 7 and 9, show an okay message
        msg = "You're doing okay! 😊";
    } else {
        // If the score is less than 7, show a caring message
        msg = "You might need some extra care 💙";
    }

    // Show the result and hide the form
    document.getElementById('quiz-result').innerHTML = "Your Score: " + score + "/18<br>" + msg;
    document.getElementById('quiz-result').style.display = 'block';
    document.getElementById('quiz-form').style.display = 'none';
}