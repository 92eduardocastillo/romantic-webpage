// script.js

// Add your JavaScript code here

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    
    // Example function to change the background color
    function changeBackgroundColor(color) {
        document.body.style.backgroundColor = color;
    }

    // Call the function with a color of your choice
    changeBackgroundColor('lightblue');

    const startDate = new Date('2017-11-12T00:00:00');
    const yearsElement = document.getElementById('years');
    const monthsElement = document.getElementById('months');
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');

    function updateRelationshipTime() {
        const now = new Date();
        const diff = now - startDate;

        const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
        const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
        const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        yearsElement.textContent = years;
        monthsElement.textContent = months;
        daysElement.textContent = days;
        hoursElement.textContent = hours;
        minutesElement.textContent = minutes;
        secondsElement.textContent = seconds;
    }

    setInterval(updateRelationshipTime, 1000);
    updateRelationshipTime();
});