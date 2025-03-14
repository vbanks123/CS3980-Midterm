const API_URL = "http://127.0.0.1:8000/entries/";
let symptomList = [];

// fetches all symptom entries from the backend and updates the UI
async function fetchEntries() {
    try {
        let response = await fetch(API_URL);
        if (!response.ok) throw new Error("Failed to fetch symptoms");

        let entries = await response.json();
        symptomList = entries;
        updateList(entries);
    } catch (error) {
        console.error("Error fetching symptoms:", error);
    }
}

// adds a new symptom entry to the backend
async function addEntry() {
    let userInput = document.getElementById("entryInput").value.trim();
    
    if (!userInput) {
        alert("Please enter a symptom!");
        return;
    }

    let data = {
        "issue_type": "Medical",
        "description": userInput
    };

    try {
        let response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            let entry = await response.json();
            symptomList.push(entry);
            updateList(symptomList);
        } else {
            alert("Failed to add symptom! :/");
        }
    } catch (error) {
        console.error("Error connecting to API:", error);
    }

    document.getElementById("entryInput").value = "";
}

// deletes a symptom entry by its ID
async function deleteEntry(id) {
    try {
        const response = await fetch(`${API_URL}${id}`, { method: "DELETE" });

        if (response.ok) {
            const listItem = document.getElementById(`entry-${id}`);
            if (listItem) listItem.remove();

            fetchEntries();
        } else {
            alert("Couldn't delete entry!");
        }
    } catch (error) {
        console.error("Error deleting entry:", error);
    }
}

// updates the displayed list of symptom entries
function updateList(entries) {
    let list = document.getElementById("entriesList");
    list.innerHTML = "";

    entries.forEach(entry => {
        if (!entry.id) {
            console.warn("Missing ID for entry:", entry); 
            return; 
        }

        let li = document.createElement("li");
        li.id = `entry-${entry.id}`; 
        li.className = "list-group-item d-flex justify-content-between align-items-center";
        li.innerHTML = `
            ${entry.description} 
            <button class="btn btn-danger btn-sm" onclick="deleteEntry(${entry.id})">Delete</button>
        `;
        list.appendChild(li);
    });
}

// updates an existing symptom entry in the backend
async function updateEntry(id, newText) {
    console.log(`Attempting to update: ID=${id}, New Text="${newText}"`);

    try {
        let response = await fetch(`${API_URL}${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ "issue_type": "Medical", "description": newText })
        });

        if (!response.ok) {
            throw new Error("Failed to update entry");
        }

        console.log("Update successful! Fetching updated list...");
        fetchEntries();
    } catch (error) {
        console.error("Error updating entry:", error);
    }
}

// toggles between editing mode and display mode for a symptom entry
function editEntry(id) {
    const desc = document.getElementById(`desc-${id}`);
    const input = document.getElementById(`edit-input-${id}`);
    const editButton = document.querySelector(`#entry-${id} .btn-edit`);
    
    if (input.classList.contains("d-none")) {
        input.classList.remove("d-none");
        desc.classList.add("d-none");
        editButton.textContent = "Save";
    } else {
        const newText = input.value.trim();
        console.log(`Saving update for ID=${id}: "${newText}"`);

        if (newText !== "") {
            updateEntry(id, newText).then(() => {
                desc.textContent = newText;
                input.classList.add("d-none");
                desc.classList.remove("d-none");
                editButton.textContent = "Edit";
            });
        } else {
            alert("Text cannot be empty!");
        }
    }
}

// loads all symptom entries when the page loads
document.addEventListener("DOMContentLoaded", fetchEntries);