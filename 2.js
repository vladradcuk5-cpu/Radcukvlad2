const form = document.getElementById("postForm");

form.addEventListener("submit", async function(event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const body = document.getElementById("body").value;

    const postData = { title, body };

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(postData)
        });

        const result = await response.json();

        console.log(result);

        form.reset();
    } catch (error) {
        console.log("Помилка");
    }
});