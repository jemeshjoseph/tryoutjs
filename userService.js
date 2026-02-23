// file: userService.js

// 🔴 PR Review Comment:
// Avoid using var. Use let or const for block scoping.
var users = [];

// 🟡 PR Review Comment:
// Consider validating input parameters before processing.
function addUser(name, age, email) {

    // 🔴 PR Review Comment:
    // No input validation. What if name is empty or age is negative?
    if (age > 0) {

        // 🟡 PR Review Comment:
        // Email format should be validated using regex or a validation library.
        const user = {
            id: Math.random(), // 🔴 PR Review Comment:
                              // Math.random() is not safe for unique IDs. Use UUID instead.
            name: name,
            age: age,
            email: email
        };

        users.push(user);
    }

    // 🔴 PR Review Comment:
    // Function does not return anything. Should return the created user or throw an error.
}

// 🟡 PR Review Comment:
// Consider using async/await properly and handling errors.
async function fetchUserData(userId) {

    // 🔴 PR Review Comment:
    // No error handling. What happens if fetch fails?
    const response = await fetch("https://api.example.com/users/" + userId);

    // 🔴 PR Review Comment:
    // Missing response status check (response.ok).
    const data = await response.json();

    return data;
}

// 🔴 PR Review Comment:
// Avoid using ==, use strict equality (===)
function findUser(id) {
    return users.find(user => user.id == id);
}

// 🟡 PR Review Comment:
// Logging sensitive information (email) could be a security concern.
function printUsers() {
    users.forEach(user => {
        console.log("User:", user.name, user.email);
    });
}

module.exports = {
    addUser,
    fetchUserData,
    findUser,
    printUsers
};
