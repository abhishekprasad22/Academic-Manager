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
    subjectButtons.forEach(button => {
        // Adds a click event listener to each subject button element
        button.addEventListener('click', function () {
            // Retrieves the subject ID from the button's data-subject attribute
            const subjectId = this.getAttribute('data-subject');
            // Calls the function to load content based on the subject ID
            loadSubjectContent(subjectId);
        });
    });

    // For popup window:
    // Get the button element that opens the popup
    const openPopupBtn = document.getElementById('open-popup');
    // Get the popup element
    const popup = document.getElementById('popup');
    // Get the close button inside the popup
    const closeBtn = document.querySelector('.close-button');
    // Get the element where the content will be inserted inside the popup
    const popupInnerContent = document.getElementById('popup-inner-content');

    // Add a click event listener to the open popup button
    openPopupBtn.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default action (useful if button is inside a form)
        // Fetch the HTML content from the specified file
        fetch('../StudentMarks.html')
            .then(response => response.text()) // Convert the response to text
            .then(data => {
                popupInnerContent.innerHTML = data; // Insert the fetched HTML content into the popup
                // Create a new link element for the CSS file
                const link = document.createElement('link');
                link.rel = 'stylesheet'; // Set the relationship to stylesheet
                link.href = '../StudentMarks.css'; // Set the href to the CSS file
                document.head.appendChild(link); // Append the link to the document's head
                popup.style.display = 'block'; // Display the popup
            });
    });

    // Add a click event listener to the close button
    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none'; // Hide the popup
    });

    // Add a click event listener to the window to close the popup when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === popup) { // Check if the click was outside the popup content
            popup.style.display = 'none'; // Hide the popup
        }
    });

    // Defines the function to load content based on the subject ID
    function loadSubjectContent(subjectId) {
        // Initializes a variable to store the HTML content for the subject
        let content = '';

        // Uses a switch statement to define different content for each subject based on the subject ID
        switch (subjectId) {
            case '1':
                content = `
                <div class="header">
                    <h1>Subject 1</h1>
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
                break;
            case '2':
                content = `
                <div class="header">
                    <h1>Subject 2</h1>
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
                break;
            case '3':
                content = `
                <div class="header">
                    <h1>Subject 3</h1>
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
                break;
            case '4':
                content = `
                <div class="header">
                    <h1>Subject 4</h1>
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
                break;
        }

        // Updates the innerHTML of the "main-content" element with the generated content for the selected subject
        mainContent.innerHTML = content;
    }

    // Function to generate student rows for the table
    function generateStudentRows() {
        const studentRows = [];
        for (let i = 1; i <= 15; i++) {
            studentRows.push(`
            <tr>
                <td>Student Name ${i}</td>
                <td>Roll Number</td>
                <td><a href="#">More Details</a></td>
            </tr>`);
        }
        return studentRows.join('');
    }
});
