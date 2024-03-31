"use strict";

const $ = selector => document.querySelector(selector);

const processEntry = event => {
    event.preventDefault();
    const taxableIncome = parseFloat($("#taxableIncome").value);

    if (isNaN(taxableIncome) || taxableIncome < 0) {
        alert("Taxable income must be > 0");
        return;
    } else {
        calculateIncomeTax(taxableIncome);
    }
};

const calculateIncomeTax = taxableIncome => {
    let incomeTaxOwed = 0;

    if (taxableIncome <= 9875) {
        incomeTaxOwed = taxableIncome * 0.10;
    } else if (taxableIncome >= 9875 && taxableIncome <= 40125) {
        incomeTaxOwed = 987.50 + (taxableIncome - 9875) * 0.12;
    } else if (taxableIncome >= 40125 && taxableIncome <= 85525) {
        incomeTaxOwed = 4617.50 + (taxableIncome - 40125) * 0.22;
    } else if (taxableIncome <= 85525 && taxableIncome <= 163300) {
        incomeTaxOWed = 14605.50 + (taxableIncome - 85525) * 0.24;
    } else if (taxableIncome <= 163300 && taxableIncome <= 207350) {
        incomeTaxOwed = 33271.50 + (taxableIncome - 163300) * 0.32;
    } else if (taxableIncome <= 207350 && taxableIncome <= 518400) {
        incomeTaxOwed = 47367.50 + (taxableIncome - 207350) * 0.35;
    } else if (taxableIncome <= 518400) {
        incomeTaxOwed = 156235.00 + (taxableIncome - 518400) * 0.37;
    } else {
        alert("Tax brackets not defined for income greater than $1,562,350.");
        return;
    }

    displayIncomeTax(incomeTaxOwed);
};

const displayIncomeTax = incomeTaxOwed => {
    $("#incomeTaxOwed").value = incomeTaxOwed.toFixed(2);
};

document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", processEntry);
});