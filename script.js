// Fonction d'animation au défilement
const sections = document.querySelectorAll('.hero, .galerie, .a-propos, .services, .temoignages, .contact');

function revealOnScroll() {
    const windowHeight = window.innerHeight;
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        
        if (sectionTop < windowHeight - 100) {
            section.classList.add('visible');
        }
    });
}

// Appliquer l'animation d'apparition au défilement
window.addEventListener('scroll', revealOnScroll);

// Fonction pour l'animation au clic sur les liens de navigation
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        
        const targetSection = document.querySelector(link.getAttribute('href'));
        
        window.scrollTo({
            top: targetSection.offsetTop - 70, // Ajuster pour l'espacement du header fixe
            behavior: 'smooth'
        });
    });
});
