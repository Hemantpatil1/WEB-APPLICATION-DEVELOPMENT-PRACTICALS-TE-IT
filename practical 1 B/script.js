// Array to store users
let users = JSON.parse(localStorage.getItem("users")) || [];

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("regForm");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let password = document.getElementById("password").value;

            let user = { name, email, password };

            // Push to array
            users.push(user);

            // Save to localStorage
            localStorage.setItem("users", JSON.stringify(users));

            // AJAX POST (using fetch)
            fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            })
                .then(response => response.json())
                .then(data => {
                    console.log("Data sent successfully:", data);
                    alert("Student Registered Successfully!");
                })
                .catch(error => {
                    console.error("Error:", error);
                });

            form.reset();
        });
    }

    // Display page logic
    if (window.location.pathname.includes("display.html")) {
        displayUsers();
    }
});

// Function to display users
function displayUsers() {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let table = document.getElementById("userTable");

    users.forEach((user, index) => {
        let row = table.insertRow();

        row.insertCell(0).innerText = index + 1;
        row.insertCell(1).innerText = user.name;
        row.insertCell(2).innerText = user.email;
        row.insertCell(3).innerText = user.password;
    });
}