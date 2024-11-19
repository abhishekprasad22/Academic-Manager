// Listens for the "DOMContentLoaded" event, which fires when the HTML document has been completely loaded and parsed.
document.addEventListener('DOMContentLoaded', function () {
    // Selects all elements with the class "section-title" and loops through them
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
        // Adds a click event listener to each section title element.
        title.addEventListener('click', function () {
            // Retrieves the next sibling element (the content section related to the title)
            const content = this.nextElementSibling;
            // Toggles the visibility of the content section based on its current state
            if (content.style.maxHeight) {
                content.style.maxHeight = null; // If content is visible, hide it
            } else {
                content.style.maxHeight = content.scrollHeight + "px"; // If content is hidden, show it
            }
        });
    });

    // Selects all elements with the class "subject-button" and loops through them
    const subjectButtons = document.querySelectorAll('.subject-button');
    const mainContent = document.getElementById('main-content');
    const attendanceButtons = document.querySelectorAll('.attendance-subject-button');
    
    // Add event listeners to subject buttons for loading content
    subjectButtons.forEach(button => {
        button.addEventListener('click', function () {
            const subjectId = this.getAttribute('data-subject');
            loadSubjectContent(subjectId);
        });
    });

    // Add event listeners to attendance buttons for loading attendance table
    attendanceButtons.forEach(button => {
        button.addEventListener('click', function () {
            const subjectId = this.getAttribute('data-subject');
            loadAttendanceTable(subjectId);
        });
    });

    // For popup window:
    const openPopupBtn = document.getElementById('open-popup');
    const popup = document.getElementById('popup');
    const closeBtn = document.querySelector('.close-button');
    const popupInnerContent = document.getElementById('popup-inner-content');

    openPopupBtn.addEventListener('click', (e) => {
        e.preventDefault();
        fetch('../StudentMarks.html')
            .then(response => response.text())
            .then(data => {
                popupInnerContent.innerHTML = data;
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = '../StudentMarks.css';
                document.head.appendChild(link);
                popup.style.display = 'block';
            });
    });

    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.style.display = 'none';
        }
    });

    // Function to load regular subject content
    function loadSubjectContent(subjectId) {
        let content = '';
        switch (subjectId) {
            case '1':
                content = generateSubjectHTML(1);
                break;
            case '2':
                content = generateSubjectHTML(2);
                break;
            case '3':
                content = generateSubjectHTML(3);
                break;
            case '4':
                content = generateSubjectHTML(4);
                break;
        }
        mainContent.innerHTML = content;
    }

    // Generate the subject-specific HTML content dynamically
    function generateSubjectHTML(subjectId) {
        return `
        <div class="header">
            <h1>Subject ${subjectId}</h1>
            <div class="search-bar">
                <input type="text" placeholder="Search">
            </div>
            <div class="profile">
                <span>Professor's Name</span>
            </div>
        </div>
        <div class="student-list" id="subject-content">
            <table>
                <tr>
                    <th>Student Name</th>
                    <th>Roll Number</th>
                    <th>More Details</th>
                </tr>
                ${generateStudentRows()}
            </table>
        </div>`;
    }

    // Function to dynamically generate the attendance table for a specific subject
    function loadAttendanceTable(subjectId) {
        mainContent.innerHTML = `
        <div class="header">
            <h1>Attendance for Subject ${subjectId}</h1>
            <div class="search-bar">
                <input type="text" placeholder="Search" id="search-input">
            </div>
            <div class="profile">
                <span>Professor's Name</span>
            </div>
        </div>
        <div class="student-list" id="subject-content">
            <table>
                <thead>
                    <tr>
                        <th>Student Name</th>
                        <th>Roll Number</th>
                        <th>Classes Attended</th>
                        <th>Total Classes</th>
                        <th>Percentage</th>
                        <th>Save Changes</th>
                    </tr>
                </thead>
                <tbody>
                    ${generateAttendanceRows()}
                </tbody>
            </table>
        </div>`;
    }

    // Generate rows for the regular subject content
    function generateStudentRows() {
        const studentRows = [];
        for (let i = 1; i <= 20; i++) {
            studentRows.push(`
            <tr>
                <td>Student Name ${i}</td>
                <td>Roll Number</td>
                <td><a href="../StudentMarks.html" target="_blank">More Details</a></td>
            </tr>`);
        }
        return studentRows.join('');
    }

    // Generate rows for the attendance table
    function generateAttendanceRows() {
        const rows = [];
        for (let i = 1; i <= 20; i++) {
            rows.push(`
            <tr>
                <td>Student Name ${i}</td>
                <td>Roll Number</td>
                <td><input type="number" id="a${i}"></td>
                <td><input type="number" id="b${i}"></td>
                <td><input type="text" class="res" id="result${i}" disabled></td>
                <td><button class="per" onclick="calculatePercentage(${i})">Save</button></td>
            </tr>`);
        }
        return rows.join('');
    }

    // Function to calculate and display attendance percentage
    window.calculatePercentage = (studentId) => {
        const number1 = parseFloat(document.getElementById(`a${studentId}`).value);
        const number2 = parseFloat(document.getElementById(`b${studentId}`).value);
        const resultField = document.getElementById(`result${studentId}`);
        
        if (isNaN(number1) || isNaN(number2) || number2 === 0) {
            alert("Please enter valid numbers.");
            return;
        }
        const percentage = (number1 / number2) * 100;
        resultField.value = `${percentage.toFixed(2)}%`;
    }
});
