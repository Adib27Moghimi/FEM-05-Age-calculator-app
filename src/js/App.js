"use strict";

import ErrorMessage from "./components/ErrorMessage.js";

//// ! Selections
const inputYear = document.querySelector(".input-year");
const inputMonth = document.querySelector(".input-month");
const inputDay = document.querySelector(".input-day");

const ageYearEl = document.querySelectorAll(".age-year");
const ageMonthEl = document.querySelectorAll(".age-month");
const ageDayEl = document.querySelectorAll(".age-day");

const ageYearEls = Array.from(ageYearEl, (el) => el);
const ageMonthEls = Array.from(ageMonthEl, (el) => el);
const ageDayEls = Array.from(ageDayEl, (el) => el);

const form = document.querySelector(".form");
//// ! Initial values of inputs
function initInput() {
  inputYear.value = "";
  inputMonth.value = "";
  inputDay.value = "";
}
//// ! Initial values of age
function initAge() {
  ageYearEls.map((span) => (span.textContent = "--"));
  ageMonthEls.map((span) => (span.textContent = "--"));
  ageDayEls.map((span) => (span.textContent = "--"));
}

initInput();
//// ! Functions
function checkInputEligibility(input, type) {
  initAge();

  //// ! Input empty
  if (input.value.trim() === "") {
    renderError(input, "This is required");
    return false;
  }

  //// ! Year input error
  if (type === "year" && +input.value < 100) {
    renderError(input, `Must be from 100 to ${new Date().getFullYear()}`);
    return false;
  }

  //// ! Month input error
  if (type === "month" && (+input.value > 12 || +input.value < 1)) {
    renderError(input, "Must be a valid month");
    return false;
  }

  //// ! The last day of the month of the year of birth
  const lastDay = new Date(+inputYear.value, +inputMonth.value, 0).getDate();

  //// ! Day input error
  if (type === "day" && (+input.value > 31 || +input.value < 1)) {
    renderError(input, "Must be a valid day");
    return false;
  }
  if (
    type === "day" &&
    +inputYear.value &&
    +inputMonth.value &&
    +input.value > lastDay
  ) {
    renderError(input, `Must be from 1 to ${lastDay}`);
    return false;
  }

  //// ! 1- Future date error
  if (+inputYear.value > new Date().getFullYear()) {
    inputMonth.nextElementSibling?.remove();
    inputDay.nextElementSibling?.remove();
    renderError(
      inputYear,
      `This is future date, must be from 100 to ${new Date().getFullYear()}`
    );
    return false;
  }

  if (
    +inputYear.value === new Date().getFullYear() &&
    +inputMonth.value > new Date().getMonth() + 1 &&
    +inputMonth.value <= 12
  ) {
    inputYear.nextElementSibling?.remove();
    inputDay.nextElementSibling?.remove();
    renderError(
      inputMonth,
      `This is future date, must be from 1 to ${new Date().getMonth() + 1}`
    );
    return false;
  }

  //// ! 1- Future date error (added)
  if (
    +inputYear.value === new Date().getFullYear() &&
    +inputMonth.value === new Date().getMonth() + 1 &&
    +inputDay.value > new Date().getDate()
  ) {
    inputYear.nextElementSibling?.remove();
    inputMonth.nextElementSibling?.remove();
    renderError(
      inputDay,
      `This is future date, must be from 1 to ${new Date().getDate()}`
    );
    return false;
  }

  //// ! All eligible => Delete all errors and get date
  input.nextElementSibling?.remove();
  return +input.value;
}

function calcAge(year, month, day) {
  const today = new Date();
  const birthDate = new Date(year, month - 1, day);
  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  //// ! Checking the negativity of the months value
  if (months < 0) {
    years--;
    months += 12;
  }
  //// ! Checking the negativity of the days value
  if (days < 0) {
    months--;
    const tempDate = new Date(today.getFullYear(), today.getMonth(), 0);
    days += tempDate.getDate();
    //// ! Checking the negativity of the months value (added)
    if (months < 0) {
      years--;
      months += 12;
    }
  }

  return { years, months, days };
}

function renderError(input, message) {
  const errorEl = input.nextElementSibling;
  if (errorEl) {
    errorEl.textContent = message;
    return;
  }

  input.insertAdjacentHTML("afterend", ErrorMessage(message));
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const year = checkInputEligibility(inputYear, "year");
  const month = checkInputEligibility(inputMonth, "month");
  const day = checkInputEligibility(inputDay, "day");

  if (year && month && day) {
    const { days, months, years } = calcAge(year, month, day);

    ageYearEls.map((span) => (span.textContent = `${years}`.padStart(2, 0)));
    ageMonthEls.map((span) => (span.textContent = `${months}`.padStart(2, 0)));
    ageDayEls.map((span) => (span.textContent = `${days}`.padStart(2, 0)));
  }
});
