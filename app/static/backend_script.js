// sets the API endpoint for symptom entries
const API_URL = "http://127.0.0.1:8000/entries/";


// fetches all symptom entries from the backend and updates the UI
async function fetchEntries() {
    try {
        let response = await fetch(API_URL);
        if (!response.ok) throw new Error("Can't get entries :/");

        let entries = await response.json();
        let entryList = document.getElementById("entriesList"); 
        entryList.innerHTML = ""; 

        entries.forEach(entry => {
            let li = document.createElement("li");
            li.className = "list-group-item d-flex justify-content-between align-items-center";
            li.innerHTML = `
                ${entry.description}
                <button class="btn btn-danger btn-sm" onclick="deleteEntry(${entry.id})">Delete</button>
            `;
            entryList.appendChild(li);
        });
    } catch (error) {
        console.error("Error fetching entries:", error);
    }
}


// adds a new symptom entry to the backend
async function addEntry() {
    let input = document.getElementById("entryInput").value.trim();
    if (!input) {
        alert("Please enter a symptom!");
        return;
    }

    let entry = { issue_type: "Medical", description: input };

    try {
        let response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(entry)
        });

        if (!response.ok) throw new Error("Failed to add entry");

        fetchEntries();
    } catch (error) {
        console.error("Error adding entry:", error);
    }

    document.getElementById("entryInput").value = ""; 
}


// loads all symptom entries when the page loads
document.addEventListener("DOMContentLoaded", fetchEntries);