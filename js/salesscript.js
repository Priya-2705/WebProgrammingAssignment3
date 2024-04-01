"use strict";

// Function to select elements by their CSS selector
const $ = selector => document.querySelector(selector);

// Function to process form entries and calculate sales tax
const processEntries = event => {
    event.preventDefault(); // Prevent default form submission behavior

    // Retrieve values from input fields and convert them to numbers
    const subTotal = parseFloat($("#subTotal").value);
    const taxRate = parseFloat($("#taxRate").value);

    // Validate subtotal input
    if (isNaN(subTotal) || subTotal <= 0 || subTotal >= 10000) {
        alert("Subtotal must be > 0 and < 10000");
        return;
    }

    // Validate tax rate input
    if (isNaN(taxRate) || taxRate <= 0 || taxRate >= 12) {
        alert("Tax Rate must be > 0 and < 12");
        return;
    }

    // Calculate sales tax and total
    const salesTax = subTotal * (taxRate / 100);
    const total = subTotal + salesTax;

    // Update display with calculated values
    $("#salesTax").value = salesTax.toFixed(2);
    $("#total").value = total.toFixed(2);

    // Set focus back to the subtotal input field
    $("#subTotal").focus();
}

// Event listener for DOMContentLoaded event
document.addEventListener("DOMContentLoaded", () => {
    // Add event listener to the "Calculate" button
    $("#calculate").addEventListener("click", processEntries);
    // Set focus to the subtotal input field when the page loads
    $("#subTotal").focus();
});

// Function to clear all input fields
const clearFields = () => {
    $("#subTotal").value = "";
    $("#taxRate").value = "";
    $("#salesTax").value = "";
    $("#total").value = "";
    $("#subTotal").focus(); // Set focus back to the subtotal input field
};

// Event listener for the "Clear Form" button
$("#clearForm").addEventListener("click", clearFields);

// Event listeners to clear input fields when clicked (for better user experience)
$("#subTotal").addEventListener("click", () => {
    $("#subTotal").value = "";
});

$("#taxRate").addEventListener("click", () => {
    $("#taxRate").value = "";
});
