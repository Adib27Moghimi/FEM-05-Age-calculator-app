"use strict";

export default function initialState() {
  return `
     <form
      action=""
      autocomplete="off"
      class="form bg-Neutral-white rounded-3xl rounded-br-[6rem] flex flex-col justify-between px-4 py-12 w-11/12 max-w-max h-3/5 relative max259:h-[91.66%] tablet1:max-w-[58.33%] tablet2:h-2/3 laptop:form-laptop"
    >
      <section
        class="inputs-wrapper flex justify-center border-b border-b-Neutral-grey-light pb-11 gap-x-4 tablet1:justify-evenly max259:inputs-wrapper-max259 laptop:gap-x-7 laptop:justify-start"
      >
        <div class="input-day-box flex flex-col">
          <label for="day" class="label label-day">DAY</label>
          <input
            id="day"
            type="text"
            placeholder="DD"
            class="input laptop:input-laptop input-day"
          />
          <span class="error-text-day text-[0.7rem] mt-1 text-red-300"></span>
        </div>
        <div class="input-month-box flex flex-col">
          <label for="month" class="label label-month">MONTH</label>
          <input
            id="month"
            type="text"
            placeholder="MM"
            class="input laptop:input-laptop input-month"
          />
          <span class="error-text-month text-[0.7rem] mt-1 text-red-300"></span>
        </div>
        <div class="input-year-box flex flex-col">
          <label for="year" class="label label-year">YEAR</label>
          <input
            id="year"
            type="text"
            placeholder="YYYY"
            class="input laptop:input-laptop input-year"
          />
          <span class="error-text-year text-[0.7rem] mt-1 text-red-300"></span>
        </div>
      </section>
      <div class="img-wrapper flex justify-center laptop:justify-end">
        <button
          type="submit"
          class="arrow-box bg-primary-purple active:bg-Neutral-black-off rounded-full p-4 absolute top-[30.5%] max259:top-[45%] tablet2:top-[26.5%] laptop:top-[25.5%] laptop:p-5"
        >
          <img
            src="./assets/images/icon-arrow.svg"
            alt="arrow icon"
            class="arrow-icon size-6 laptop:size-10"
          />
        </button>
      </div>
      <ul
        class="list text-[3.375rem] font-extrabold italic max221:text-xl max221:leading-[4] min222:text-3xl min222:leading-[3] min260:text-4xl min260:leading-[2] min280:text-[2.5rem] min280:leading-[1.5] mobile1:text-[3.125rem] mobile1:leading-[1.3] tablet1:text-[4rem] tablet2:text-[4.75rem] laptop:list-laptop"
      >
        <li><span class="year-date">--</span>years</li>
        <li><span class="month-date">--</span>months</li>
        <li><span class="day-date">--</span>days</li>
      </ul>
    </form>
    `;
}
