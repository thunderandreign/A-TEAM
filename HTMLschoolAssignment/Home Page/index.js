 let slideIndex = 0;
 showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 6000); // Change image every 6 seconds
}

function changeSlide(n) {
    slideIndex += n - 1;
    showSlides();
}

 //Dark mode toggle
 document.addEventListener("DOMContentLoaded", function() {
 const darkModeToggle=document.getElementById("dark-mode-toggle");
 darkModeToggle.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
 });
});
document.addEventListener('DOMContentLoaded', () => {
    const modeToggle = document.getElementById('mode-toggle');
    const body = document.body;

    // Check for saved mode in localStorage
    const savedMode = localStorage.getItem('theme');
    if (savedMode === 'dark') {
        body.classList.add('dark-mode');
        modeToggle.textContent = 'Light Mode';
    }

    // Toggle dark and light mode
    modeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            modeToggle.textContent = 'Light Mode';
            localStorage.setItem('theme', 'dark'); // Save mode in localStorage
        } else {
            modeToggle.textContent = 'Dark Mode';
            localStorage.setItem('theme', 'light'); // Save mode in localStorage
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const modeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    // Check for saved mode in localStorage
    const savedMode = localStorage.getItem('theme');
    if (savedMode === 'dark') {
        body.classList.add('dark-mode');
        modeToggle.textContent = 'Light Mode';
    }

    // Toggle dark and light mode
    modeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            modeToggle.textContent = 'Light Mode';
            localStorage.setItem('theme', 'dark'); // Save mode in localStorage
        } else {
            modeToggle.textContent = 'Dark Mode';
            localStorage.setItem('theme', 'light'); // Save mode in localStorage
        }
    });
});