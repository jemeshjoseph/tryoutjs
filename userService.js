var users = [];

function addUser(name, age, email) {
    if (age > 0) {
        const user = {
            id: Math.random(),
            name: name,
            age: age,
            email: email
        };

        users.push(user);
    }
}

async function fetchUserData(userId) {
    const response = await fetch("https://api.example.com/users/" + userId);
    const data = await response.json();
    return data;
}

function findUser(id) {
    return users.find(user => user.id == id);
}

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
