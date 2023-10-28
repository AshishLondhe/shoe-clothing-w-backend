function submitForm() {
    // Fetching values from the form
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    
    window.location.href = 'index.html';

    // Displaying the values (you can modify this part according to your needs)
    // alert('Name: ' + name + '\nEmail: ' + email + '\nMessage: ' + message );
    alert(' Successful !!');
    window.location.href = 'index.html';
    
  
    // You can also send the form data to a server using AJAX or fetch API
    // Here, we are just displaying an alert with the collected data
  }
    function validateForm() {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;

        if (!name || !email || !message) {
            alert("All fields must be filled out");
            return false;
        }
        return true;
        
    }
