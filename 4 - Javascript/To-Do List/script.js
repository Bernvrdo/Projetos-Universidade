//to-do list

function addTask() {
    let text = document.getElementById("text").value;
    let list = document.getElementById("list");
    let item = document.createElement("li");
    item.innerHTML = text;
    list.appendChild(item);

    document.getElementById("text").value = "";
    document.getElementById("text").focus();

    item.addEventListener("click", () => {
        item.style.textDecoration = "line-through";
        item.style.color = "grey";
        
    })
}
