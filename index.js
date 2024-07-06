document.getElementById('login').addEventListener('click', function() {
    // Toggle display of button container
    let buttonContainer = document.querySelector('.buttonContainer.btnCon1');
    buttonContainer.innerHTML = ''; // Clear any existing buttons
    buttonContainer.style.display = buttonContainer.style.display === 'block' ? 'none' : 'block';
    
    // Create the first additional button
    let button1 = document.createElement('button');
    button1.innerText = 'Login as a Teacher';
    button1.classList.add('button');
    
    // Create the second additional button
    let button2 = document.createElement('button');
    button2.innerText = 'Login as a Student';
    button2.classList.add('button');
    
    // Append the buttons to the container
    buttonContainer.appendChild(button1);
    buttonContainer.appendChild(button2);
});

document.getElementById('signup').addEventListener('click', function() {
    // Toggle display of button container
    let buttonContainer = document.querySelector('.buttonContainer.btnCon2');
    buttonContainer.innerHTML = ''; // Clear any existing buttons
    buttonContainer.style.display = buttonContainer.style.display === 'block' ? 'none' : 'block';
    
    // Create the first additional button
    let button1 = document.createElement('button');
    button1.innerText = 'Sign Up as a Teacher';
    button1.classList.add('button');
    
    // Create the second additional button
    let button2 = document.createElement('button');
    button2.innerText = 'Sign Up as a Student';
    button2.classList.add('button');
    
    // Append the buttons to the container
    buttonContainer.appendChild(button1);
    buttonContainer.appendChild(button2);
});
