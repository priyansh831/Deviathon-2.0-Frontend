// 1. Countdown Logic
const updateCountdown = () => {
    // Set target to a future date
    const targetDate = new Date("June 1, 2026 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = targetDate - now;

    if (gap > 0) {
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        document.getElementById("days").innerText = Math.floor(gap / day);
        document.getElementById("hours").innerText = Math.floor((gap % day) / hour);
        document.getElementById("mins").innerText = Math.floor((gap % hour) / minute);
        document.getElementById("secs").innerText = Math.floor((gap % minute) / second);
    }
};
setInterval(updateCountdown, 1000);
updateCountdown(); // Run immediately on load

// 2. FAQ Accordion Logic
document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        const body = button.nextElementSibling;
        const icon = button.querySelector('i');
        
        // Toggle visibility
        body.classList.toggle('active');
        
        // Rotate Icon
        icon.style.transform = body.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
        icon.style.transition = '0.3s';
    });
});

// 3. Dark Mode Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

themeToggle.addEventListener('click', () => {
    const isDark = htmlElement.getAttribute('data-theme') === 'dark';
    
    if (isDark) {
        htmlElement.removeAttribute('data-theme');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        htmlElement.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
});

// 4. Smooth scroll Reveal (Bonus Touch)
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});