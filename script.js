// script.js
function showPage(pageId) {
    const pages = document.getElementsByClassName('page');
    for (let i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none';
    }

    document.getElementById(pageId).style.display = 'block';
}


   

      // function performSearch(query) {
      //   // In a real scenario, you would send an API request or perform server-side processing
      //   // Here, we'll just return a simple array of results for demonstration purposes
      //   const results = [
      //     'Result 1 for ' + query,
      //     'Result 2 for ' + query,
      //     'Result 3 for ' + query,
      //   ];
    
      //   return results;
      // }
    
      function displayResults(results) {
        const resultsContainer = document.getElementById('searchResults');
        resultsContainer.innerHTML = ''; // Clear previous results
    
        if (results.length === 0) {
          resultsContainer.innerHTML = 'No results found.';
        } else {
          const ul = document.createElement('ul');
          results.forEach(result => {
            const li = document.createElement('li');
            li.textContent = result;
            ul.appendChild(li);
          });
          resultsContainer.appendChild(ul);
        }
      }

    

      function searchProducts() {
        var inputElement = document.getElementById('searchInput');
        var searchTerm = inputElement.value.toLowerCase(); // Convert to lowercase for case-insensitive comparison
        
        var datalist = document.getElementById('input');
        var options = datalist.getElementsByTagName('option');
        
        for (var i = 0; i < options.length; i++) {
            var optionValue = options[i].value.toLowerCase();
            if (optionValue.includes(searchTerm)) {
                var location = options[i].getAttribute('data-location');
                if (location) {
                    window.location.href = location;
                    return; // Return to exit the function after redirecting.
                }
            }
        }

        // If the selected option is not found, you can display an alert or handle it as needed.
        alert("Product not found!");
    }




function showReviews(productId) {
    // Implement show reviews functionality
    showPage('reviews');
}
// Add more JavaScript functions as needed for product details, sign-in, cart functionality, etc.
