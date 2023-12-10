// include-sidebar.js
document.addEventListener("DOMContentLoaded", function() {
    // Fetch and include the sidebar HTML
    fetch("sidebar.html")
        .then(response => response.text())
        .then(data => {
            // Insert the sidebar HTML into the current page
            document.body.insertAdjacentHTML("afterbegin", data);
        })
        .catch(error => console.error("Error fetching sidebar:", error));
});
