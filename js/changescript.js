"use strict";

const $ = selector => document.querySelector(selector);

const makeChange = changeDue => {
    const quarters = Math.floor(changeDue / 25);
    const remainingChangeAfterQuarters = changeDue % 25;

    const dimes = Math.floor(remainingChangeAfterQuarters / 10);
    const remainingChangeAfterDimes = remainingChangeAfterQuarters % 10;

    const nickels = Math.floor(remainingChangeAfterDimes / 5);
    const pennies = remainingChangeAfterDimes % 5;

    $("#quarters").value = quarters;
    $("#dimes").value = dimes;
    $("#nickels").value = nickels;
    $("#pennies").value = pennies;
};

const processEntry = event => {
    event.preventDefault();
    const changeDue = parseInt($("#changeDue").value);

    if (isNaN(changeDue) || changeDue < 0 || changeDue > 99) {
        alert("Change due should be >= 0 and <= 99");
    } else {
        makeChange(changeDue);
    }
};

document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", processEntry);
});