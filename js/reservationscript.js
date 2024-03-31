"use strict";

document.addEventListener("DOMContentLoaded", function () {
    // Declaration of constant for email pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Move focus to the "Arrival date" text box
    document.getElementById("arrivalDate").focus();

    // Event handler for form submission
    document.querySelector("form").addEventListener("submit", function (event) {
        // Prevent the default form submission
        event.preventDefault();

        // Validate user entries
        const arrivalDate = document.getElementById("arrivalDate").value.trim();
        const nights = document.getElementById("nights").value.trim();
        const email = document.getElementById("email").value.trim();

        // Check if all fields are filled
        if (arrivalDate === "" || nights === "" || email === "") {
            alert("Please fill in all the fields.");
            return;
        }

        // Check if the number of nights is numeric
        if (isNaN(nights)) {
            alert("Number of nights must be numeric.");
            return;
        }

        // Check if email matches the pattern
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // If all validations pass, submit the form
        alert("Form submitted successfully!");
        this.submit();
    });
});