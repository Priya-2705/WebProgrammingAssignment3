"use strict";

// Function to select elements by their CSS selector
const $ = selector => document.querySelector(selector);

// Function to calculate the number of quarters, dimes, nickels, and pennies
const makeChange = changeDue => {
    // Calculate the number of quarters
    const quarters = Math.floor(changeDue / 25);
    // Calculate the remaining change after using quarters
    const remainingChangeAfterQuarters = changeDue % 25;

    // Calculate the number of dimes
    const dimes = Math.floor(remainingChangeAfterQuarters / 10);
    // Calculate the remaining change after using dimes
    const remainingChangeAfterDimes = remainingChangeAfterQuarters % 10;

    // Calculate the number of nickels
    const nickels = Math.floor(remainingChangeAfterDimes / 5);
    // Calculate the number of pennies
    const pennies = remainingChangeAfterDimes % 5;

    // Set the values of quarters, dimes, nickels, and pennies in the form
    $("#quarters").value = quarters;
    $("#dimes").value = dimes;
    $("#nickels").value = nickels;
    $("#pennies").value = pennies;
};

// Function to process form entry and calculate change
const processEntry = event => {
    event.preventDefault(); // Prevent default form submission behavior
    const changeDue = parseInt($("#changeDue").value);

    // Validate the input for change due
    if (isNaN(changeDue) || changeDue < 0 || changeDue > 99) {
        alert("Change due should be >= 0 and <= 99");
    } else {
        makeChange(changeDue); // Call the function to calculate change
    }
};

// Event listener for when the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Event listener for the "Calculate" button
    $("#calculate").addEventListener("click", processEntry);
});

