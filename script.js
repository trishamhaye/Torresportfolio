const navLinks = document.querySelectorAll('.nav-container a');
const logo = document.querySelector('.logo');

navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        navLinks.forEach(nav => nav.classList.remove('active'));

        this.classList.add('active');

        const targetId = this.getAttribute('href').substring(1);
        if (targetId === 'about') {
            logo.textContent = 'All about MHAYE';
        } else {
            logo.textContent = 'MHAYE';
        }
        document.querySelectorAll('section').forEach(section => {
            section.style.display = 'none';
        });
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.style.display = 'flex';
        }
    });
});
function showCategory(categoryId) {
    const categories = document.querySelectorAll('.category-content');
    categories.forEach(category => {
        category.style.display = 'none';
    });
    const selectedCategory = document.getElementById(categoryId);
    if (selectedCategory) {
        selectedCategory.style.display = 'block';
    }
}
function toggleMenu() {
    const navContainer = document.querySelector('.nav-container');
    if (navContainer.style.display === 'flex') {
        navContainer.style.display = 'none'; 
    } else {
        navContainer.style.display = 'flex'; 
    }
}