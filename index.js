document.getElementById('login').addEventListener('click', function() {
    // Create the first additional button
    let button1 = document.createElement('button');
    button1.innerText = 'Login as a Techer';
    button1.classList.add('button');
    
    // Create the second additional button
    let button2 = document.createElement('button');
    button2.innerText = 'Login as a Student';
    button2.classList.add('button');
    
    // Append the buttons to the container
    let buttonContainer = document.getElementsByClassName('.buttonContainer.btnCon1');
    buttonContainer.appendChild(button1);
    buttonContainer.appendChild(button2);
});
