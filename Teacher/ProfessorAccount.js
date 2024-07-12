document.addEventListener('DOMContentLoaded', function() {
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
        title.addEventListener('click', function() {
            const content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });

    const subjectButtons = document.querySelectorAll('.subject-button');
    const mainContent = document.getElementById('main-content');

    subjectButtons.forEach(button => {
        button.addEventListener('click', function() {
            const subjectId = this.getAttribute('data-subject');
            loadSubjectContent(subjectId);
        });
    });

    function loadSubjectContent(subjectId) {
        let content = '';

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

        mainContent.innerHTML = content;
    }
});
