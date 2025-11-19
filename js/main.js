// 1. SELECT the elements we want to work with
const contactButton = document.getElementById("contact-btn");
const emailDisplay = document.getElementById("email-display");

// 2. LISTEN for an event
contactButton.addEventListener("click", function() {
    
    // 3. RUN this function when the click happens
    emailDisplay.textContent = "erik.larsen@ttu.edu"; // Change this!
    contactButton.textContent = "Email Displayed!";
});

// 1. SELECT the elements
const toggleButton = document.getElementById("toggle-btn");
const interestsList = document.getElementById("interests-list");

// 2. LISTEN for an event
toggleButton.addEventListener("click", function() {

    // 3. RUN this function
    // This time, we "toggle" the .hidden class on the list
    interestsList.classList.toggle("hidden");
});

// 1. SELECT
const highlightButton = document.getElementById("highlight-btn");
const aboutSection = document.getElementById("about-section");

// 2. LISTEN
highlightButton.addEventListener("click", function() {

    // 3. RUN
    aboutSection.classList.toggle("highlight");
});