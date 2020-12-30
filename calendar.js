(() => {
    window.onload = () => {
        // Weekday names (ready for translation)
        const weekStrings = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
        ];

        const selectors = {
            dayNames: document.querySelector('.dayNames'),
            days: document.querySelector('.days'),
            monthCal: document.querySelector('.month-nav .month'),
            nextBtn: document.querySelector('.next'),
            prevBtn: document.querySelector('.prev')
        };

        // Date Object and other date data
        const date = new Date();
        const currentDay = date.getDate();
        const currentMonth = date.getMonth(); 
        const currentYear = date.getFullYear();
        let prevClicked = false;
        let nextClicked = false;


        // Create all days of the month
        createDays = (month, year) => {
            const daysMonth = new Date(year, month + 1, 0).getDate(); 

            for (let i = daysMonth; i >= 1; i--) {
                const dateStringOptions = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' }; 
                const fullDate = new Date(year, month, i).toLocaleDateString('en-En', dateStringOptions); // full date string

                let addDay = '<div data-full-date="' + fullDate + '"><span>' + i + '</span><span class="date-tooltip">' + fullDate + '</span></div>';
                if (i == currentDay && month == currentMonth && year == currentYear) {
                    addDay = '<div class="current-day" data-full-date="' + fullDate + '"><span>' + i + '</span><span class="date-tooltip">' + fullDate + '</span></div>';
                }
                selectors.days.insertAdjacentHTML('afterbegin', addDay);
            }
            // leave empty fields for first week until first day of Month 
            let firstDayFirstWeek = new Date(year, month, 1).getDay(); 
            for (let i = 0; i < firstDayFirstWeek; i++) {
                const emptyDate = '<div class="empty-day"></div>';
                selectors.days.insertAdjacentHTML('afterbegin', emptyDate);
            }
            // Add month + year on calendar header
            let monthName = new Date(year, month).toLocaleDateString("en-En", { month: "long" }); 
            if (selectors.monthCal.innerHTML == "") {
                selectors.monthCal.insertAdjacentHTML('afterbegin', '<span>' + monthName + ' ' + year + '</span>');
            } else {
                selectors.monthCal.innerHTML = "";
                selectors.monthCal.insertAdjacentHTML('afterbegin', '<span>' + monthName + ' ' + year + '</span>');
            }
        }

        // Previous/Next Month
        prevNext = () => {
            const activeMonth = date.getMonth();
            if (nextClicked) {
                date.setMonth(activeMonth + 1);
                const nextMonth = date.getMonth();
                const activeYear = date.getFullYear();
                populateDays(nextMonth, activeYear);
            } else {
                // prevClicked is true in this case
                date.setMonth(activeMonth - 1);
                const prevMonth = date.getMonth();
                const activeYear = date.getFullYear();
                populateDays(prevMonth, activeYear);
            }
        }
                
        // Populate days into calendar
        populateDays = (month, year) => {
            if (selectors.days.innerHTML == "") {
                createDays(month, year);
            } else {
                selectors.days.innerHTML = "";
                createDays(month, year);
            }
        }

        // Initialize
        init = () => {
            // Add Weekday names
            for (let i = weekStrings.length - 1; i >= 0; i--) {
                const addDayName = '<div>' + weekStrings[i].slice(0, 3) + '</div>'; // showing just first 3 letters of day name
                selectors.dayNames.insertAdjacentHTML('afterbegin', addDayName);
            }
            // Prev/Next button event listeners
            selectors.nextBtn.addEventListener('click', (e) => {
                nextClicked = true;
                prevClicked = false;
                prevNext();
            });
            selectors.prevBtn.addEventListener('click', (e) => {
                prevClicked = true;
                nextClicked = false;
                prevNext();
            });
            // Default calendar display ( Shows current month view )
            populateDays(currentMonth, currentYear);
        }

        init();
    }
})();