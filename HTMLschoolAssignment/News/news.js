//calendar
//calendar
const calendarGrid = document.getElementById('calendar');
const current = document.getElementById('currentDate');
const eventBox = document.getElementById("events-box")
let currentDate = new Date();

const events = {
    '2025-4-1': ['School Meeting at 2 PM', 'Dinner at 7 PM'],
    '2025-8-22': ['Welcome Back Assembly at 9:00 AM'],
    '2025-9-5': ['Back-to-School Picnic at 12:00 PM'],
    '2025-10-16': ['Science Fair at 10:00 AM'],
    '2025-11-7': ['Homecoming Football Game at 6:00 PM', 'Homecoming Dance at 9:00 PM'],
    '2025-12-12': ['Winter Concert at 7:00 PM'],
    '2026-4-10': ['Spring Carnival at 11:00 AM'],
    '2026-5-3': ['Student-Teacher Volleyball Match at 1:30 PM'],
    '2026-6-15': ['Graduation Ceremony at 10:00 AM'],
    '2025-10-20': ['Parent-Teacher Conferences at 3:00 PM'],
    '2025-10-21': ['Parent-Teacher Conferences at 3:00 PM'],
    '2025-11-16': ['Mid-Term Exams at 8:00 AM'],
    '2025-11-17': ['Mid-Term Exams at 8:00 AM'],
    '2025-11-18': ['Mid-Term Exams at 8:00 AM'],
    '2025-11-19': ['Mid-Term Exams at 8:00 AM'],
    '2025-11-20': ['Mid-Term Exams at 8:00 AM'],
    '2025-9-28': ['Student Council Elections at 8:00 AM'],
    '2025-10-25': ['College Information Night at 6:00 PM'],
    '2026-5-17': ['Spring Semester Exams at 8:00 AM'],
    '2026-5-18': ['Spring Semester Exams at 8:00 AM'],
    '2026-5-19': ['Spring Semester Exams at 8:00 AM'],
    '2026-5-20': ['Spring Semester Exams at 8:00 AM'],
    '2026-5-21': ['Spring Semester Exams at 8:00 AM'],
    '2026-1-22': ['Teacher Professional Development Day at 8:30 AM'],
    '2026-3-5': ['Annual Talent Show at 7:00 PM'],
    '2026-4-23': ['Community Service Day at 9:00 AM'],
    '2026-5-10': ['Spring Sports Day at 9:00 AM'],
    '2026-6-10': ['End-of-Year Awards Ceremony at 1:00 PM']
};


function renderCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();
    const firstDay = firstDayOfMonth.getDay();

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    current.textContent = months[month]+" "+year;
    //Clear the calender
    calendarGrid.innerHTML = ''; 
    
    //Print days
    for(let i=0;i<7;i++){
        const newCell = document.createElement("div");
        newCell.innerHTML = days[i];
        newCell.classList = "calendar-days";
        calendarGrid.appendChild(newCell);
    }

    // Fill in the empty cells for leading spaces
    for (let i = 0; i < firstDay; i++) {
        const newCell = document.createElement("div");
        calendarGrid.appendChild(newCell);
        
    }

    // Generate the days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        var newCell = document.createElement("div");
        let dateToday = new Date();
        newCell.innerHTML=day;

        if(day === dateToday.getDate() && month === dateToday.getMonth() && year === dateToday.getFullYear()){
            newCell.classList.add("today");
        }

        let shortDate = year+"-"+(month+1)+"-"+day;

        if(events[shortDate] !== undefined){
            newCell.classList.add("calendar-events");
        }

        calendarGrid.appendChild(newCell);
        
    }

    // Add event listeners to days
    const dayCells = calendarGrid.querySelectorAll('div');
    for(let i=0;i<dayCells.length;i++){
        dayCells[i].addEventListener('click', function() {
            if (this.innerText !== "") {
                let date = this.innerText;
                showEvents(this,date);
            }
        });
    }
        
}
function showEvents(element,day){
    if(element.classList !== "" && element.classList.contains('calendar-events')){
        eventBox.innerHTML = "<h3>Events</h3><br>";
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        let shortDate = year+"-"+(month+1)+"-"+day;
        let array = events[shortDate];

        let ul = document.createElement('ul');
        
        for (let index = 0; index < array.length; index++) {
            let li =document.createElement('li');
            li.innerHTML =array[index];
            ul.appendChild(li);  
        }
        eventBox.appendChild(ul);

        const rect = element.getBoundingClientRect();
        const calendarRect = calendarGrid.getBoundingClientRect();
        eventBox.style.top = (rect.bottom - calendarRect.top - 350) + 'px';
        eventBox.style.left = (rect.left - calendarRect.left) + 'px';
        eventBox.classList.add("show");
    };
}
document.addEventListener('click', (e) => {
    if (!calendarGrid.contains(e.target) && e.target !== eventBox) {
        eventBox.classList.remove("show"); 
    }
});
function changeMonth(change) {
    currentDate.setMonth(currentDate.getMonth() + change);
    renderCalendar();
}
function todayDate() {
    currentDate = new Date();
    renderCalendar();
}
document.addEventListener('DOMContentLoaded', function () {
    renderCalendar();
});