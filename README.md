# Symptom Tracking Web App

## Demo

![Symptom Tracking App Demo](SymptomTracker.mp4)

***NOTE: The 'Edit' button is not working correctly. I am acknowledging that error.***

## Project overview

The Symptom Tracker is a web-based and desktop-based application designed to help users log, track, and manage their medical symptoms


## Key objectives

_ FastAPI Backend:
    _ Provides a REST API for managing symptom entries.
    _ Supports CRUD operations: Create, Read, Update, and Delete.
    _ Stores symptom data using an in-memory list (or JSON-based storage).

_  Frontend (HTML, JavaScript, Bootstrap):
    _ Allows users to add, edit, and delete symptoms.
    _ Dynamically updates the UI without needing a page refresh.
    _ Communicates with the FastAPI backend via fetch API calls.


## Files and folder structure:

app:
_ main.py: FastAPI backend with CRUD routes.
_ models.py: Database schema.
_ crud.py: Handles database interactions.
_ main_index.js: Frontend interactions.

static:
_ backend_script.js: JS for frontend interactions.
_ index.html: Frontend UI.

***Each of these six files includes comments explaining the code.***


## As per the midterm project objectives, does my symptom tracker meet the following: 

_ Able to create a virtual environment for Python projects - yes
_ Able to set up FastAPI projects - yes
_ Able to create CRUD API endpoints - yes
    _ Create - yes
    _ Read - yes
    _ Update - partially
    _ Delete - yes
_ Able to connect front end with back end using HTTP calls - yes