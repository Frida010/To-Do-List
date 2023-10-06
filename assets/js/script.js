function addTask() {
    const inputElement = document.getElementById("input-text");

    if (!inputElement) {
        console.error("Element with ID 'input-text' not found.");
        return;
    }

    const textValue = inputElement.value;

    if (textValue === '') {
        alert("You must write something!");
    } else {
        const listContainer = document.getElementById("list-container");
        const taskItem = document.createElement("li");
        taskItem.textContent = textValue;
        listContainer.appendChild(taskItem);
        inputElement.value = '';

        // Lägg till redigeringsfunktion
        taskItem.addEventListener("dblclick", () => {
            taskItem.setAttribute('contenteditable', 'true');
            taskItem.classList.add('editing'); // Lägg till en CSS-klass
            taskItem.focus();
        });

        taskItem.addEventListener("blur", () => {
            taskItem.removeAttribute('contenteditable');
            taskItem.classList.remove('editing'); // Ta bort CSS-klassen
            saveData();
        });

        // Lägg till "Delete" -knapp
        const deleteButton = document.createElement("span");
        deleteButton.innerHTML = "\u00d7";
        taskItem.appendChild(deleteButton);

        // Lägg till "Delete" -knappens funktionalitet
        deleteButton.addEventListener("click", () => {
            taskItem.remove();
            saveData();
        });

        saveData();
    }
}

const listContainer = document.getElementById("list-container");

listContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        addTask();
    }
}
