from app.database import symptom_entries, get_next_id
from app.models import SymptomEntryRequest


# creates a new symptom entry and adds it to the list
def create_entry(entry_data: SymptomEntryRequest):
    entry = {
        "id": get_next_id(),
        "description": entry_data.description,
    }
    symptom_entries.append(entry)
    return entry


# gets all stored symptom entries
def get_all_entries():
    return symptom_entries


# generates the next available id for a new symptom entry
def get_next_id():
    return max([entry["id"] for entry in symptom_entries], default=0) + 1


# retrieves a specific symptom entry by id
def get_entry_by_id(entry_id: int):
    print(f"Checking for entry with ID: {entry_id}")
    for entry in symptom_entries:
        print(f"Existing entry: {entry}")

    return next((entry for entry in symptom_entries if entry["id"] == entry_id), None)


# updates an existing symptom entry
def update_entry(entry_id: int, new_description: str):
    for entry in symptom_entries:
        if entry["id"] == entry_id:
            # for debugging
            print(
                f"Updating entry {entry_id} from '{entry['description']}' to '{new_description}'"
            )
            entry["description"] = new_description
            return entry

    print("Entry not found!")
    return None


# deletes a symptom entry by id
def delete_entry(entry_id: int):
    global symptom_entries
    # remove the entry by filtering
    symptom_entries = [entry for entry in symptom_entries if entry["id"] != entry_id]
    return {"message": "Entry deleted"}
