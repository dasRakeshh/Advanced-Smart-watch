function updateWatch() {
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');
    const stepsElement = document.getElementById('steps');

    // Update the time
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    timeElement.textContent = `${hours}:${minutes}:${seconds}`;

    // Update the date
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    dateElement.textContent = `${year}-${month}-${day}`;

    // Update the steps (Simulated)
    // Replace with real step count logic as needed
    const steps = Math.floor(Math.random() * 10000); // Simulate step count
    stepsElement.textContent = `Steps: ${steps}`;
}

// Update the watch every second
setInterval(updateWatch, 1000);
