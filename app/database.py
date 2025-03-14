# in-memory storage
symptom_entries = []


# makes a new id for each new symptom entry
def get_next_id():
    if not symptom_entries:
        return 1
    return max(entry["id"] for entry in symptom_entries) + 1
