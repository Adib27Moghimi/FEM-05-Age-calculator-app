import initialState from "./components/initialState.js";

//// ! Selections
const body = document.querySelector("body");

body.innerHTML = "";
body.insertAdjacentHTML("afterbegin", initialState());

//// ! Selections
const arrowButton = document.querySelector(".arrow-box");

const outputDay = document.querySelector(".day-date");
const outputMonth = document.querySelector(".month-date");
const outputYear = document.querySelector(".year-date");

const inputDay = document.querySelector(".input-day");
const inputMonth = document.querySelector(".input-month");
const inputYear = document.querySelector(".input-year");

const errorTextDay = document.querySelector(".error-text-day");
const errorTextMonth = document.querySelector(".error-text-month");
const errorTextYear = document.querySelector(".error-text-year");

//// ! Now date
const dateNow = new Date();

//// ! Date calculation
arrowButton.addEventListener("click", function (e) {
  e.preventDefault();

  //// ! Current date
  const currentDay = dateNow.getDate();
  const currentMonth = dateNow.getMonth() + 1;
  const currentYear = dateNow.getFullYear();

  //// ! The difference between the entered date and the current date
  const diffDayEntered = currentDay - inputDay.value;
  const diffMonthEntered = currentMonth - inputMonth.value;
  const diffYearEntered = currentYear - inputYear.value;

  //// ! The initial output date
  const initOutputDate = function () {
    outputDay.textContent = "--";
    outputMonth.textContent = "--";
    outputYear.textContent = "--";
  };
  //// ! The initial errors text
  const initError = function () {
    errorTextDay.textContent = "";
    errorTextMonth.textContent = "";
    errorTextYear.textContent = "";
  };
  //// ! Calculate age and display it
  const finalOutputDate = function () {
    initOutputDate();
    initError();
    if (
      diffYearEntered < 0 ||
      (diffYearEntered === 0 && diffMonthEntered < 0) ||
      (diffYearEntered === 0 && diffMonthEntered === 0 && diffDayEntered < 0)
    )
      return;

    if (
      (diffYearEntered === 0 &&
        diffMonthEntered === 0 &&
        (diffDayEntered === 0 || diffDayEntered > 0)) ||
      (diffYearEntered === 0 &&
        diffMonthEntered > 0 &&
        (diffDayEntered === 0 || diffDayEntered > 0)) ||
      (diffYearEntered > 0 &&
        diffMonthEntered === 0 &&
        (diffDayEntered === 0 || diffDayEntered > 0)) ||
      (diffYearEntered > 0 &&
        diffMonthEntered > 0 &&
        (diffDayEntered === 0 || diffDayEntered > 0))
    ) {
      outputDay.textContent = diffDayEntered;
      outputMonth.textContent = diffMonthEntered;
      outputYear.textContent = diffYearEntered;
    }

    if (
      (diffYearEntered === 0 && diffMonthEntered > 0 && diffDayEntered < 0) ||
      (diffYearEntered > 0 && diffMonthEntered > 0 && diffDayEntered < 0)
    ) {
      outputDay.textContent = 30 - Math.abs(diffDayEntered);
      outputMonth.textContent = diffMonthEntered - 1;
      outputYear.textContent = diffYearEntered;
    }

    if (
      (diffYearEntered > 0 && diffMonthEntered < 0 && diffDayEntered < 0) ||
      (diffYearEntered > 0 && diffMonthEntered === 0 && diffDayEntered < 0)
    ) {
      outputDay.textContent = 30 - Math.abs(diffDayEntered);
      outputMonth.textContent = 11 - Math.abs(diffMonthEntered);
      outputYear.textContent = diffYearEntered - 1;
    }

    if (
      diffYearEntered > 0 &&
      diffMonthEntered < 0 &&
      (diffDayEntered === 0 || diffDayEntered > 0)
    ) {
      outputDay.textContent = diffDayEntered;
      outputMonth.textContent = 12 - Math.abs(diffMonthEntered);
      outputYear.textContent = diffYearEntered - 1;
    }
  };

  //// ! The validation of the entered date
  let validEntryDate = true;

  if (
    !inputDay.value ||
    !inputMonth.value ||
    !inputYear.value ||
    inputDay.value < 1 ||
    inputDay.value > 30 ||
    inputMonth.value < 1 ||
    inputMonth.value > 12 ||
    (inputYear.value &&
      (inputYear.value < currentYear - 99 || inputYear.value > currentYear))
  ) {
    //// ! The invalidation of the entered date
    validEntryDate = false;

    //// ! The initial output date
    initOutputDate();
    //// ! The initial errors text
    initError();

    //// ! Displays the text of errors
    if (!inputDay.value) errorTextDay.textContent = "This is required";
    if (!inputMonth.value) errorTextMonth.textContent = "This is required";
    if (!inputYear.value) errorTextYear.textContent = "This is required";

    if (inputDay.value && (inputDay.value < 1 || inputDay.value > 30))
      errorTextDay.textContent = "Day is invalid";

    if (inputMonth.value && (inputMonth.value < 1 || inputMonth.value > 12))
      errorTextMonth.textContent = "Month is invalid";

    if (
      inputYear.value &&
      (inputYear.value < currentYear - 99 || inputYear.value > currentYear)
    )
      errorTextYear.textContent = "Year is invalid";
  }

  if (!validEntryDate) return;
  finalOutputDate();
});
