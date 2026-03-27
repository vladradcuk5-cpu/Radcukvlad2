let input = document.getElementById("inputText");
let addBtn = document.getElementById("addBtn");
let sortBtn = document.getElementById("sortBtn");
let list = document.getElementById("list");

addBtn.addEventListener("click", function () {
    let value = input.value;

    if (value === "") {
        return;
    }

    let li = document.createElement("li");
    li.textContent = value;

    li.addEventListener("click", function () {
        list.removeChild(li);
    });

    list.appendChild(li);

    input.value = "";
});

sortBtn.addEventListener("click", function () {
    let items = list.getElementsByTagName("li");
    let arr = [];

    for (let i = 0; i < items.length; i++) {
        arr.push(items[i].textContent);
    }

    arr.sort();

    list.innerHTML = "";

    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement("li");
        li.textContent = arr[i];

        li.addEventListener("click", function () {
            list.removeChild(li);
        });

        list.appendChild(li);
    }
});