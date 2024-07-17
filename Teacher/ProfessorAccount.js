// Listens for the "DOMContentLoaded" event, which fires when the HTML document has been completely loaded and parsed.
document.addEventListener('DOMContentLoaded', function() {
    // Selects all elements with the class "section-title" and loops through them
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {

        // Adds a click event listener to each section title element.
        title.addEventListener('click', function() {
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
        button.addEventListener('click', function() {
            // Retrieves the subject ID from the button's data-subject attribute
            const subjectId = this.getAttribute('data-subject');
            // Calls the function to load content based on the subject ID
            loadSubjectContent(subjectId);
        });
    });

    // Defines the function to load content based on the subject ID
    function loadSubjectContent(subjectId) {
        // Initializes a variable to store the HTML content for the subject
        let content = '';

        // Uses a switch statement to define different content for each subject based on the subject ID
        switch(subjectId) {
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
                    <div class="student-list">
                        <table>
                            <tr>
                                <th>Student Name</th>
                                <th>Roll Number</th>
                                <th>More Details</th>
                            </tr>
                            <tr>
                                <td>Student Name 1</td>
                                <td>Roll Number</td>
                                <td><a href="#">More Details</a></td>
                            </tr>
                            <!-- Add more students here -->
                        </table>
                    </div>
                `;
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
                    <div class="student-list">
                        <p>Content for Subject 2</p>
                    </div>
                `;
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
                    <div class="student-list">
                        <p>Content for Subject 3</p>
                    </div>
                `;
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
                    <div class="student-list">
                        <p>Content for Subject 4</p>
                    </div>
                `;
                break;
        }
        
        // Updates the innerHTML of the "main-content" element with the generated content for the selected subject
        mainContent.innerHTML = content;
    }
});
