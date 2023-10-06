function addTask() {
    var inputText = document.getElementById("input-text");

    if (inputText === null) {
        console.error("Element with ID 'input-text' not found.");
        return;
    }

    var textValue = inputText.value;

    if (textValue === '') {
        alert("You must write something!");
    } else {
        var listContainer = document.getElementById("list-container");
        var listItem = document.createElement("li");
        listItem.textContent = textValue;
        listContainer.appendChild(listItem);
        inputText.value = '';
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

}

listContainer.addEventListenser("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}, false);
