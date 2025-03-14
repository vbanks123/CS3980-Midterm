# Symptom Tracking Web App

## Demo

![Symptom Tracking App Demo](SymptomTracker.mp4)

**NOTE: The *Edit* button is not working correctly. I am acknowledging that error.**

## Project overview

The Symptom Tracker is a web-based and desktop-based application designed to help users log, track, and manage their medical symptoms.


## Key objectives

**FastAPI Backend:**

&nbsp;&nbsp;&nbsp;&nbsp;Provides a REST API for managing symptom entries.

&nbsp;&nbsp;&nbsp;&nbsp;Supports CRUD operations: Create, Read, Update, and Delete.

&nbsp;&nbsp;&nbsp;&nbsp;Stores symptom data using an in-memory list (or JSON-based storage).


**Frontend (HTML, JavaScript, Bootstrap):**

&nbsp;&nbsp;&nbsp;&nbsp;Allows users to add, edit, and delete symptoms.

&nbsp;&nbsp;&nbsp;&nbsp;Dynamically updates the UI without needing a page refresh.

&nbsp;&nbsp;&nbsp;&nbsp;Communicates with the FastAPI backend via fetch API calls.


## Files and folder structure:
### ***Each of these (six) files includes comments explaining the code.***

**app:**

&nbsp;&nbsp;&nbsp;&nbsp;**main.py:** FastAPI backend with CRUD routes.

&nbsp;&nbsp;&nbsp;&nbsp;**models.py:** Database schema.

&nbsp;&nbsp;&nbsp;&nbsp;**crud.py:** Handles database interactions.

&nbsp;&nbsp;&nbsp;&nbsp;**main_index.js:** Frontend interactions.

**static:**

&nbsp;&nbsp;&nbsp;&nbsp;**backend_script.js:** JS for frontend interactions.

&nbsp;&nbsp;&nbsp;&nbsp;**index.html:** Frontend UI.



## As per the midterm project objectives, does my symptom tracker meet the following: 

**Able to create a virtual environment for Python projects -** 

&nbsp;&nbsp;&nbsp;&nbsp;Yes

**Able to set up FastAPI projects -** 

&nbsp;&nbsp;&nbsp;&nbsp;Yes

**Able to create CRUD API endpoints -** 


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Create -** Yes

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Read -** Yes

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Update -** Works in backend, not frontend.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Delete -** Yes

**Able to connect front end with back end using HTTP calls -** 

&nbsp;&nbsp;&nbsp;&nbsp;Yes
