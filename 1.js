const list = document.getElementById("usersList");

async function loadUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error("error");
        }

        const data = await response.json();

        data.forEach(user => {
            const li = document.createElement("li");
            li.textContent = user.name + " (" + user.email + ")";
            list.appendChild(li);
        });

    } catch (e) {
        list.innerHTML = "Помилка завантаження";
    }
}

loadUsers();