# Academic Manager 📚🎓

**Academic Manager** is a web application designed to enhance student-teacher interactions by simplifying subject management and academic tracking. It provides an intuitive interface for managing subjects, assignments, and academic progress.

---

## 📖 Overview

The Academic Manager aims to streamline academic processes by offering features like:
- Subject management for teachers and students.
- Real-time academic tracking.
- A user-friendly and responsive interface.

---

## ⚙️ Features

- **Subject Management:** Add, edit, and delete subjects with ease.
- **Real-Time Progress Tracking:** View and update academic progress.
- **Authentication System:** Secure login functionality for students and teachers.
- **Responsive Design:** Optimized for both desktop and mobile devices.

---

## 🖥️ Technologies Used

### Frontend:
- **HTML5, CSS3, JavaScript**
- **EJS (Embedded JavaScript templates)** for dynamic HTML rendering.

### Backend:
- **Node.js** for server-side logic.
- **Express.js** for routing.

### Database:
- **PostgreSQL** for data storage and management.

---

## 🚀 Getting Started

Follow these steps to set up the project locally:

### Prerequisites
- **Node.js** (v14 or higher)
- **npm** (Node Package Manager)
- **PostgreSQL**

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/abhishekprasad22/Academic-Manager.git
    ```

2. Navigate to the project directory:
    ```bash
    cd Academic-Manager
    ```

3. Install Dependencies:
    ```bash
    npm install
    ```

4. Set up the database:
    - Create a PostgreSQL database named `academic_manager`.
    - Run the SQL scripts provided in the `database/` folder to set up tables and seed data.

5. Configure environment variables:
    - Create a `.env` file in the root directory.
    - Add the following variables:
        ```makefile
        DATABASE_URL=your_postgresql_connection_string
        PORT=3000
        ```

## 📂 Database Setup

### academicManagerPostgres.sql
The `academicManagerPostgres.sql` file contains the SQL scripts needed to set up the PostgreSQL database for the Academic Manager application. It includes table definitions, constraints, and initial data.

To set up the database:

1. Create a PostgreSQL database named `academic_manager`.
2. Run the `academicManagerPostgres.sql` script to create the necessary tables and insert sample data.
3. 
    ```bash
    psql -U your_username -d academic_manager -f path_to_academicManagerPostgres.sql
    

## 🏆 Future Enhancements

- Add a calendar feature to track assignments and deadlines.
- Implement real-time chat between students and teachers.
- Create detailed analytics for academic performance.

---


## 📫 Contact

For any queries or feedback, feel free to reach out:

- Email: abhishekprasafofficial1@gmail.com
- GitHub Issues: Open an issue

---

## 🌟 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository.
2. Create a feature branch:
    ```bash
    git checkout -b feature/your-feature-name
    ```
3. Commit your changes:
    ```bash
    git commit -m "Add your feature description"
    ```
4. Push to your branch:
    ```bash
    git push origin feature/your-feature-name
    ```
5. Create a pull request.

---

## 🎥 Demo

Watch the demo video below to see Academic Manager in action:

[![Academic Manager Demo](https://img.youtube.com/vi/DzYXHfHpuog/0.jpg)](https://youtu.be/DzYXHfHpuog)

---

Thank you for exploring Academic Manager! Feel free to star ⭐ the repository if you find it helpful. 😊
