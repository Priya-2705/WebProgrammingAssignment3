"use strict";

const $ = selector => document.querySelector(selector);

const processEntries = event => {
    event.preventDefault();
    const subTotal = parseFloat($("#subTotal").value);
    const taxRate = parseFloat($("#taxRate").value);

    if (isNaN(subTotal) || subTotal <= 0 || subTotal >= 10000) {
        alert("Subtotal must be > 0 and < 10000");
        return;
    }

    if (isNaN(taxRate) || taxRate <= 0 || taxRate >= 12) {
        alert("Tax Rate must be > 0 and < 12");
        return;
    }

    const salesTax = subTotal * (taxRate / 100);
    const total = subTotal + salesTax;

    $("#salesTax").value = salesTax.toFixed(2);
    $("#total").value = total.toFixed(2);

    $("#subTotal").focus();
}

document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", processEntries);
    $("#subTotal").focus();
});

const clearFields = () => {
    $("#subTotal").value = "";
    $("#taxRate").value = "";
    $("#salesTax").value = "";
    $("#total").value = "";
    $("#subTotal").focus();
};

$("#clearForm").addEventListener("click", clearFields);

$("#subTotal").addEventListener("click", () => {
    $("#subTotal").value = "";
});

$("#taxRate").addEventListener("click", () => {
    $("#taxRate").value = "";
});