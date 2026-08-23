// Database of images for each category
// --- 1. Prevent Auto-Scroll on Refresh ---
if (history.scrollRestoration) {
    history.scrollRestoration = "manual";
}
window.addEventListener('beforeunload', function() {
    window.scrollTo(0, 0);
});
window.onload = function() {
    window.scrollTo(0, 0);
};

const projectData = {
    'social': ['img/social.png', 'img/social1.png', 'img/social3.png', 'img/social4.png', 'img/social5.png', 'img/social6.png', 'img/social7.png', 'img/social8.png', 'img/social9.png', 'img/social10.png', 'img/social11.png', 'img/social12.png', 'img/social13.png', 'img/social14.png', 'img/social15.png'],
    'posters': ['Posters/poster (1).png', 'Posters/poster (2).png', 'Posters/poster (3).png', 'Posters/poster (4).png', 'Posters/poster (5).png', 'Posters/poster (6).png', 'Posters/poster (7).png', 'Posters/poster (8).png'],
    'logos': ['logos/logo (2).png', 'logos/logo (3).png', 'logos/logo (4).png', 'logos/logo (5).png', 'logos/logo (6).png', 'logos/logo (7).png', 'logos/logo (8).png', 'logos/logo (9).png', 'logos/logo (10).png', 'logos/logo (11).png', 'logos/logo (12).png', 'logos/logo (13).png', 'logos/logo (14).png', 'logos/logo (15).png', 'logos/logo (16).png', 'logos/logo (17).png'],
     'leaflets': ['leaflets/leaflet (1).jpg', 'leaflets/leaflet (1).png', 'leaflets/leaflet (2).png', 'leaflets/leaflet (3).png', 'leaflets/leaflet (4).png', 'leaflets/leaflet (5).png'],
    'packaging': ['pack/pack (1).png' ,'pack/pack (2).png','pack/pack (3).png','pack/pack (4).png','pack/pack (5).png','pack/pack (6).png','pack/pack (7).png'],
    'project1': ['latest/youngroma/1.png','latest/youngroma/2.png','latest/youngroma/3.png','latest/youngroma/4.png','latest/youngroma/5.png',],
     'project2': ['latest/NIMZ/1.png','latest/NIMZ/2.png','latest/NIMZ/3.png','latest/NIMZ/4.png','latest/NIMZ/5.png',],
     'project3': ['latest/G26/1.png','latest/G26/2.png','latest/G26/3.png','latest/G26/4.png','latest/G26/5.png',],
      'project4': ['latest/MOI/1.png','latest/MOI/2.png','latest/MOI/3.png','latest/MOI/4.png',],
       'project5': ['latest/APEX/1.png','latest/APEX/2.png','latest/APEX/3.png','latest/APEX/4.png','latest/APEX/5.png',],
       'project6': ['latest/SANKA/1.png','latest/SANKA/2.png','latest/SANKA/3.png',]
    
    
};

const categoryTitles = {
    'social': 'Social Media Campaigns',
    'posters': 'Event & Marketing Posters',
    'logos': 'Brand Identities',
    'leaflets': 'Leaflets / Z folds',
    'packaging': 'Product Packaging',
    'project1': 'YOUNGROMA',
    'project2': 'NIMZ',
    'project3': 'G26',
     'project4': 'MOI',
     'project5': 'APEX',
     'project6': 'SANKA'
};

// --- Mobile Navigation Toggle ---
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');
const navItems = document.querySelectorAll('.nav-item');

// Toggle menu open/close
if (mobileMenu) {
    mobileMenu.addEventListener('click', function(e) {
        e.preventDefault(); // Stops weird browser behaviors
        mobileMenu.classList.toggle('menu-open');
        navLinks.classList.toggle('menu-open');
    });
}

// Close menu when a link is clicked
navItems.forEach(item => {
    item.addEventListener('click', () => {
        mobileMenu.classList.remove('menu-open');
        navLinks.classList.remove('menu-open');
    });
});

// --- Modal Logic ---
function openPopup(category) {
    const modal = document.getElementById('projectPopup');
    const gallery = document.getElementById('modalGallery');
    const modalTitle = document.getElementById('modalTitle');
    
    // Clear previous
    gallery.innerHTML = '';
    
    // Set Title
    modalTitle.innerText = categoryTitles[category] || 'Project View';

    // Load new images
    if (projectData[category]) {
        projectData[category].forEach((imgSrc, index) => {
            const img = document.createElement('img');
            img.src = imgSrc;
            
            img.style.width = "100%";
            img.style.maxWidth = "900px";
            img.style.borderRadius = "8px";
            img.style.boxShadow = "0 10px 30px rgba(0,0,0,0.5)";
            img.style.opacity = "0";
            img.style.transform = "translateY(20px)";
            img.style.transition = "all 0.5s ease";
            img.style.transitionDelay = `${index * 0.1}s`; 
            
            // Fade image in once it loads
            img.onload = () => {
                img.style.opacity = "1";
                img.style.transform = "translateY(0)";
            };

            gallery.appendChild(img);
        });
    }

    modal.style.display = 'flex';
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
    
    document.body.style.overflow = 'hidden'; 
}

function closePopup() {
    const modal = document.getElementById('projectPopup');
    modal.classList.remove('active');
    
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; 
    }, 400); 
}

// Esc key to close modal
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closePopup();
    }
});

// --- Scroll Reveal Animations ---
document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));
});
