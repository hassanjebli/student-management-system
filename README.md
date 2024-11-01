# Student Management System

A simple web application to manage student records with functionalities to add, delete, and sort student entries based on multiple columns (ID, Name, Age, and Note). Built with HTML, JavaScript, and Bootstrap, this project demonstrates basic CRUD operations and dynamic sorting in a table format.

## Features

- **Add Student**: Allows users to add a new student with name, date of birth, and grade.
- **Delete Student**: Delete a student record by clicking the delete button.
- **Sort Records**: Sort students by ID, Name, Age, or Note, with ascending or descending options.
- **Dynamic Badge**: Display a success badge if the student is admitted (grade >= 10) or a danger badge if not.

## Tech Stack

- **Frontend**: HTML, CSS, Bootstrap, JavaScript
- **Backend**: JSON API endpoint
- **JavaScript Modules**: Includes ES6+ syntax and modules

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/hassanjebli/student-management-system.git
   ```

2. Install the necessary packages using **npm** (Bootstrap):

   ```bash
   npm install
   ```

3. Run the application by opening `index.html` in a web browser.

## File Structure

- `index.html`: The main HTML page with a form for adding students and a table for displaying them.
- `js/script.js`: The main JavaScript file for handling DOM interactions, sorting, and event listeners.
- `js/Etudiant.js`: Contains the `Etudiant` class with CRUD operations and student-related methods.
- `js/constants.js`: Contains the API endpoint for data retrieval.
- `css/style.css`: Custom CSS for styling (optional).
- `node_modules/`: Contains Bootstrap and dependencies installed via npm.

## Usage

1. Open `index.html` in your browser.
2. Use the **Add Student** form to enter new student information (Name, Date of Birth, and Note).
3. The **List of Students** section displays all students with options to:
   - Sort by clicking the column headers (ID, Name, Age, or Note).
   - Delete an entry by clicking the "Delete" button.
4. Click **Refresh** to reload the student list from the API.

## API Endpoint

The application uses a JSON API endpoint to perform CRUD operations.

- **Endpoint**: Defined in `js/constants.js`
- **Methods**:
  - **GET**: Retrieve all students
  - **POST**: Add a new student
  - **DELETE**: Remove a student by ID


## License

This project is open-source and available under the MIT License.

---
