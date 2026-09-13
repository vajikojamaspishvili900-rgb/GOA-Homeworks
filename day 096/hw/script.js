const timeElement = document.getElementById("time");
const greetingElement = document.querySelector(".greeting");
const periodElement = document.querySelector(".period");

const moreButton = document.getElementById("more-button");
const details = document.querySelector(".details");

const dayOfYearElement = document.getElementById("day-of-year");
const dayOfWeekElement = document.getElementById("day-of-week");
const weekNumberElement = document.getElementById("week-number");


function updateClock() {

    const now = new Date();

    let hours = now.getHours();
    const minutes = now.getMinutes();

    // AM / PM
    const period = hours >= 12 ? "PM" : "AM";

    // 12-hour format
    let displayHours = hours % 12;

    if (displayHours === 0) {
        displayHours = 12;
    }

    // Add 0 before minutes
    const displayMinutes = String(minutes).padStart(2, "0");

    // Update clock
    timeElement.textContent =
        `${displayHours}:${displayMinutes}`;

    periodElement.textContent = period;


    // Greeting
    if (hours < 12) {
        greetingElement.textContent = "GOOD MORNING";
    }
    else if (hours < 18) {
        greetingElement.textContent = "GOOD AFTERNOON";
    }
    else {
        greetingElement.textContent = "GOOD EVENING";
    }


    // Day of year
    const startOfYear = new Date(now.getFullYear(), 0, 1);

    const difference =
        now - startOfYear;

    const dayOfYear =
        Math.floor(difference / (1000 * 60 * 60 * 24)) + 1;

    dayOfYearElement.textContent = dayOfYear;


    // Day of week
    const dayOfWeek = now.getDay();

    dayOfWeekElement.textContent =
        dayOfWeek === 0 ? 7 : dayOfWeek;


    // Week number
    const firstDayOfYear =
        new Date(now.getFullYear(), 0, 1);

    const days =
        Math.floor(
            (now - firstDayOfYear) /
            (1000 * 60 * 60 * 24)
        );

    const weekNumber =
        Math.ceil((days + firstDayOfYear.getDay() + 1) / 7);

    weekNumberElement.textContent = weekNumber;


    // Day / Night background
    if (hours >= 6 && hours < 18) {

        document.body.style.background =
            `linear-gradient(
            rgba(0, 0, 0, 0.35),
            rgba(0, 0, 0, 0.35)
        ),
        url("https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1920&q=80")
        center / cover no-repeat`;

    } else {

        document.body.style.background =
            `linear-gradient(
            rgba(0, 0, 0, 0.45),
            rgba(0, 0, 0, 0.45)
        ),
        url("https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1920&q=80")
        center / cover no-repeat`;
    }
}


// MORE button

moreButton.addEventListener("click", () => {

    details.classList.toggle("active");

    if (details.classList.contains("active")) {

        moreButton.innerHTML = `
            LESS
            <span>↑</span>
        `;

    } else {

        moreButton.innerHTML = `
            MORE
            <span>↓</span>
        `;
    }
});


// Run immediately
updateClock();


// Update every second
setInterval(updateClock, 1000);
