import os
from fastapi import FastAPI, HTTPException
from app.models import SymptomEntryRequest
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from app.crud import (
    create_entry,
    get_all_entries,
    get_entry_by_id,
    update_entry,
    delete_entry,
)

app = FastAPI()


# deletes a symptom entry by its ID
@app.delete("/entries/{entry_id}")
def remove_entry(entry_id: int):
    existing_entry = get_entry_by_id(entry_id)
    if not existing_entry:
        raise HTTPException(status_code=404, detail="Entry not found")

    delete_entry(entry_id)
    return {"message": "Entry deleted"}


# serves static files from the "app/static" directory
app.mount(
    "/static",
    StaticFiles(directory="app/static"),
    name="static",
)


# serves the frontend HTML file
@app.get("/")
def serve_frontend():
    file_path = "app/static/index.html"
    if not os.path.exists(file_path):
        raise HTTPException(status_code=404, detail="index.html not found")
    return FileResponse(file_path, media_type="text/html")


# adds a new symptom entry to the database
@app.post("/entries/")
def add_entry(entry: SymptomEntryRequest):
    return create_entry(entry)


# updates an existing symptom entry
@app.put("/entries/{entry_id}")
def modify_entry(entry_id: int, entry: SymptomEntryRequest):
    print(f"Received update request: ID={entry_id}, Description='{entry.description}'")

    updated_entry = update_entry(entry_id, entry.description)
    if not updated_entry:
        print("Entry not found!")
        raise HTTPException(status_code=404, detail="Entry not found")

    print(f"Successfully updated entry: {updated_entry}")
    return updated_entry


# gets all symptom entries from the database
@app.get("/entries/")
def read_entries():
    return get_all_entries()
