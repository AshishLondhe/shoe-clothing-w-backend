


function submitForm() {
    var name = document.getElementById('name').value;
    var rating = document.querySelector('input[name="rating"]:checked');
    var feedback = document.getElementById('feedback').value;

    if (!rating) {
        alert("Please select a rating.");
        return false;
    }

    var resultDiv = document.getElementById('feedbackResult');
    resultDiv.innerHTML = `
        <h2>Thank you, ${name}!</h2>
        <p>Your ${rating.value}-star feedback:</p>
        <p>${feedback}</p>
    `;

    document.getElementById('feedbackForm').reset();

           ; // Prevent form submission
    alert("Your Reviews Received !! Thank You For Your feedback")
    window.location.href = 'index.html';
}