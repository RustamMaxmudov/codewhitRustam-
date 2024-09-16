const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const html = document.documentElement;  // HTML element to manipulate class

themeToggle.addEventListener('click', () => {
    if (html.classList.contains('dark')) {
        // Kunduzgi rejim (oq rang) uchun dark klassini olib tashlash
        html.classList.remove('dark');
        themeIcon.classList.replace('fa-sun', 'fa-moon'); // Moon icon for dark mode
        document.body.classList.replace('bg-gray-900', 'bg-white');
        document.body.classList.replace('text-white', 'text-black');
    } else {
        // Tungi rejim (qoramtir rang) uchun dark klassini qo'shish
        html.classList.add('dark');
        themeIcon.classList.replace('fa-moon', 'fa-sun'); // Sun icon for light mode
        document.body.classList.replace('bg-white', 'bg-gray-900');
        document.body.classList.replace('text-black', 'text-white');
    }
});