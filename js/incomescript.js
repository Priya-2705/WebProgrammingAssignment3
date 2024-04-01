"use strict";

// Function to select elements by their CSS selector
const $ = selector => document.querySelector(selector);

// Function to process form entry and calculate income tax
const processEntry = event => {
    event.preventDefault(); // Prevent default form submission behavior
    const taxableIncome = parseFloat($("#taxableIncome").value);

    // Validate taxable income
    if (isNaN(taxableIncome) || taxableIncome < 0) {
        alert("Taxable income must be > 0");
        return;
    } else {
        calculateIncomeTax(taxableIncome); // Call the function to calculate income tax
    }
};

// Function to calculate income tax based on taxable income
const calculateIncomeTax = taxableIncome => {
    let incomeTaxOwed = 0;

    // Determine income tax based on tax brackets
    if (taxableIncome <= 9875) {
        incomeTaxOwed = taxableIncome * 0.10;
    } else if (taxableIncome >= 9875 && taxableIncome <= 40125) {
        incomeTaxOwed = 987.50 + (taxableIncome - 9875) * 0.12;
    } else if (taxableIncome >= 40125 && taxableIncome <= 85525) {
        incomeTaxOwed = 4617.50 + (taxableIncome - 40125) * 0.22;
    } else if (taxableIncome <= 85525 && taxableIncome <= 163300) {
        incomeTaxOwed = 14605.50 + (taxableIncome - 85525) * 0.24;
    } else if (taxableIncome <= 163300 && taxableIncome <= 207350) {
        incomeTaxOwed = 33271.50 + (taxableIncome - 163300) * 0.32;
    } else if (taxableIncome <= 207350 && taxableIncome <= 518400) {
        incomeTaxOwed = 47367.50 + (taxableIncome - 207350) * 0.35;
    } else if (taxableIncome <= 518400) {
        incomeTaxOwed = 156235.00 + (taxableIncome - 518400) * 0.37;
    } else {
        // Alert if tax brackets not defined for income greater than $1,562,350
        alert("Tax brackets not defined for income greater than $1,562,350.");
        return;
    }

    // Display the calculated income tax
    displayIncomeTax(incomeTaxOwed);
};

// Function to display income tax on the page
const displayIncomeTax = incomeTaxOwed => {
    $("#incomeTaxOwed").value = incomeTaxOwed.toFixed(2);
};

// Event listener for when the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Event listener for the "Calculate" button
    $("#calculate").addEventListener("click", processEntry);
});