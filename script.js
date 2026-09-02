/* ============================================ */
/* PET JOINVILLE - Main JavaScript              */
/* ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    lucide.createIcons();

    // === Image Lazy Loading ===
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (img.complete) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', () => img.classList.add('loaded'));
            img.addEventListener('error', () => img.classList.add('loaded'));
        }
    });

    // === Navbar Scroll Effect ===
    const navbar = document.getElementById('navbar');
    if (navbar && !navbar.classList.contains('scrolled')) {
        const handleNavScroll = () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        };
        window.addEventListener('scroll', handleNavScroll, { passive: true });
        handleNavScroll();
    }

    // === Mobile Menu Toggle ===
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    let menuOpen = false;

    if (mobileMenuBtn && mobileMenu) {
        const toggleMobileMenu = () => {
            menuOpen = !menuOpen;
            if (menuOpen) {
                mobileMenu.classList.add('open');
                mobileMenuBtn.classList.add('menu-open');
                document.body.style.overflow = 'hidden';
            } else {
                mobileMenu.classList.remove('open');
                mobileMenuBtn.classList.remove('menu-open');
                document.body.style.overflow = '';
            }
        };

        mobileMenuBtn.addEventListener('click', toggleMobileMenu);

        document.querySelectorAll('.mobile-nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (menuOpen) toggleMobileMenu();
            });
        });
    }

    // === Scroll Animations with Intersection Observer ===
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    // Generic scroll-animate elements
    const scrollAnimateElements = document.querySelectorAll('.scroll-animate');
    if (scrollAnimateElements.length > 0) {
        const scrollObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    scrollObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);
        scrollAnimateElements.forEach(el => scrollObserver.observe(el));
    }

    // Service cards with stagger
    const serviceCards = document.querySelectorAll('.service-card');
    if (serviceCards.length > 0) {
        const serviceObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    serviceCards.forEach((card, i) => {
                        setTimeout(() => card.classList.add('visible'), i * 150);
                    });
                    serviceObserver.disconnect();
                }
            });
        }, { threshold: 0.1 });
        serviceObserver.observe(serviceCards[0]);
    }

    // Gallery items with stagger
    const galleryItems = document.querySelectorAll('.gallery-item');
    if (galleryItems.length > 0) {
        const galleryObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    galleryItems.forEach((item, i) => {
                        setTimeout(() => item.classList.add('visible'), i * 100);
                    });
                    galleryObserver.disconnect();
                }
            });
        }, { threshold: 0.1 });
        galleryObserver.observe(galleryItems[0]);
    }

    // Testimonial cards with stagger
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    if (testimonialCards.length > 0) {
        const testimonialObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    testimonialCards.forEach((card, i) => {
                        setTimeout(() => card.classList.add('visible'), i * 200);
                    });
                    testimonialObserver.disconnect();
                }
            });
        }, { threshold: 0.1 });
        testimonialObserver.observe(testimonialCards[0]);
    }

    // === Smooth Scroll for anchor links ===
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const navbarHeight = navbar ? navbar.offsetHeight : 80;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            }
        });
    });

    // === Parallax Effect on Hero ===
    const heroSection = document.getElementById('hero');
    if (heroSection) {
        const heroImage = heroSection.querySelector('img');
        if (heroImage) {
            window.addEventListener('scroll', () => {
                const scrolled = window.scrollY;
                if (scrolled < window.innerHeight) {
                    heroImage.style.transform = `scale(1.05) translateY(${scrolled * 0.15}px)`;
                }
            }, { passive: true });
        }
    }

    // === WhatsApp Float Show/Hide on Scroll ===
    const whatsappFloat = document.getElementById('whatsapp-float');
    if (whatsappFloat) {
        const isHomePage = !!document.getElementById('hero');

        if (isHomePage) {
            whatsappFloat.style.transform = 'scale(0)';
            whatsappFloat.style.opacity = '0';
            whatsappFloat.style.transition = 'all 0.3s ease';

            window.addEventListener('scroll', () => {
                if (window.scrollY > 300) {
                    whatsappFloat.style.transform = 'scale(1)';
                    whatsappFloat.style.opacity = '1';
                } else {
                    whatsappFloat.style.transform = 'scale(0)';
                    whatsappFloat.style.opacity = '0';
                }
            }, { passive: true });
        }
    }

    // === Gallery Filter (galeria.html) ===
    const filterButtons = document.querySelectorAll('.gallery-filter');
    const galleryGrid = document.getElementById('gallery-grid');

    if (filterButtons.length > 0 && galleryGrid) {
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                // Update active button
                filterButtons.forEach(b => {
                    b.classList.remove('bg-gradient-to-r', 'from-primary-500', 'to-lavender-500', 'text-white', 'shadow-lg');
                    b.classList.add('bg-white', 'text-gray-600', 'border', 'border-gray-200');
                });
                btn.classList.remove('bg-white', 'text-gray-600', 'border', 'border-gray-200');
                btn.classList.add('bg-gradient-to-r', 'from-primary-500', 'to-lavender-500', 'text-white', 'shadow-lg');

                const filter = btn.getAttribute('data-filter');
                const items = galleryGrid.querySelectorAll('.gallery-item');

                items.forEach((item, i) => {
                    const category = item.getAttribute('data-category');
                    if (filter === 'all' || category === filter) {
                        item.style.display = '';
                        item.classList.remove('visible');
                        setTimeout(() => item.classList.add('visible'), i * 80);
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    // === Tilt effect on service cards (desktop only) ===
    if (window.matchMedia('(min-width: 768px)').matches && serviceCards.length > 0) {
        serviceCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
            });
        });
    }

    console.log('🐾 Pet Joinville - Site carregado com sucesso!');
});
