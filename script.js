// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger menu
            const bars = navToggle.querySelectorAll('.bar');
            bars.forEach(bar => bar.classList.toggle('active'));
        });

        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const bars = navToggle.querySelectorAll('.bar');
                bars.forEach(bar => bar.classList.remove('active'));
            });
        });
    }
});

// Search Form Tabs
document.addEventListener('DOMContentLoaded', function() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all tabs
            tabBtns.forEach(tab => tab.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // You can add logic here to show/hide different form fields
            // based on the selected tab (buy, rent, rural)
            const tabType = this.getAttribute('data-tab');
            handleTabChange(tabType);
        });
    });
});

function handleTabChange(tabType) {
    // This function can be expanded to modify the form based on the selected tab
    console.log('Tab changed to:', tabType);
    
    // Example: You could modify available property types based on the tab
    const propertyTypeSelect = document.getElementById('property-type');
    if (propertyTypeSelect) {
        // Clear existing options
        propertyTypeSelect.innerHTML = '<option value="">Selecione o tipo</option>';
        
        let options = [];
        
        switch(tabType) {
            case 'buy':
                options = [
                    { value: 'apartamento', text: 'Apartamento' },
                    { value: 'casa', text: 'Casa' },
                    { value: 'cobertura', text: 'Cobertura' },
                    { value: 'terreno', text: 'Terreno' },
                    { value: 'sala-comercial', text: 'Sala Comercial' }
                ];
                break;
            case 'rent':
                options = [
                    { value: 'apartamento', text: 'Apartamento' },
                    { value: 'casa', text: 'Casa' },
                    { value: 'kitnet', text: 'Kitnet' },
                    { value: 'sala-comercial', text: 'Sala Comercial' },
                    { value: 'loja', text: 'Loja' }
                ];
                break;
            case 'rural':
                options = [
                    { value: 'sitio', text: 'Sítio' },
                    { value: 'chacara', text: 'Chácara' },
                    { value: 'fazenda', text: 'Fazenda' },
                    { value: 'terreno-rural', text: 'Terreno Rural' }
                ];
                break;
        }
        
        options.forEach(option => {
            const optionElement = document.createElement('option');
            optionElement.value = option.value;
            optionElement.textContent = option.text;
            propertyTypeSelect.appendChild(optionElement);
        });
    }
}

// Property Search Form
document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.querySelector('.property-form');
    
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const searchParams = {
                type: formData.get('property-type'),
                bedrooms: formData.get('bedrooms'),
                city: formData.get('city'),
                neighborhood: formData.get('neighborhood'),
                priceMin: formData.get('price-min'),
                priceMax: formData.get('price-max')
            };
            
            // Show loading state
            const submitBtn = this.querySelector('.search-btn');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Buscando...';
            submitBtn.disabled = true;
            
            // Simulate search (replace with actual API call)
            setTimeout(() => {
                console.log('Search parameters:', searchParams);
                alert('Busca realizada! Em um sistema real, os resultados seriam exibidos aqui.');
                
                // Reset button
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }
});

// City/Neighborhood dependency
document.addEventListener('DOMContentLoaded', function() {
    const citySelect = document.getElementById('city');
    const neighborhoodSelect = document.getElementById('neighborhood');
    
    if (citySelect && neighborhoodSelect) {
        const neighborhoods = {
            'lajeado': [
                { value: 'centro', text: 'Centro' },
                { value: 'florestal', text: 'Florestal' },
                { value: 'jardim-botanico', text: 'Jardim Botânico' },
                { value: 'sao-cristovao', text: 'São Cristóvão' },
                { value: 'alto-do-parque', text: 'Alto do Parque' }
            ],
            'estrela': [
                { value: 'centro-estrela', text: 'Centro' },
                { value: 'industrial', text: 'Industrial' },
                { value: 'residencial', text: 'Residencial' }
            ],
            'venancio-aires': [
                { value: 'centro-va', text: 'Centro' },
                { value: 'zona-norte', text: 'Zona Norte' },
                { value: 'zona-sul', text: 'Zona Sul' }
            ],
            'arroio-do-meio': [
                { value: 'centro-am', text: 'Centro' },
                { value: 'vila-nova', text: 'Vila Nova' }
            ]
        };
        
        citySelect.addEventListener('change', function() {
            const selectedCity = this.value;
            
            // Clear neighborhood options
            neighborhoodSelect.innerHTML = '<option value="">Selecione o bairro</option>';
            
            if (selectedCity && neighborhoods[selectedCity]) {
                neighborhoods[selectedCity].forEach(neighborhood => {
                    const option = document.createElement('option');
                    option.value = neighborhood.value;
                    option.textContent = neighborhood.text;
                    neighborhoodSelect.appendChild(option);
                });
                
                neighborhoodSelect.disabled = false;
            } else {
                neighborhoodSelect.disabled = true;
            }
        });
    }
});

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Intersection Observer for animations
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = '0s';
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe property cards and category cards
    const animatedElements = document.querySelectorAll('.property-card, .category-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
});

// Property card interactions
document.addEventListener('DOMContentLoaded', function() {
    const propertyCards = document.querySelectorAll('.property-card');
    
    propertyCards.forEach(card => {
        card.addEventListener('click', function() {
            // In a real application, this would navigate to the property detail page
            console.log('Property card clicked');
            // You could extract data from the card and show a modal or navigate
        });
        
        // Add keyboard navigation
        card.setAttribute('tabindex', '0');
        card.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                this.click();
            }
        });
    });
});

// Category card interactions
document.addEventListener('DOMContentLoaded', function() {
    const categoryCards = document.querySelectorAll('.category-card');
    
    categoryCards.forEach(card => {
        card.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Extract category from the card
            const categoryText = this.querySelector('span').textContent;
            console.log('Category selected:', categoryText);
            
            // In a real application, you would filter properties by this category
            // For now, we'll scroll to the properties section
            const propertiesSection = document.getElementById('properties');
            if (propertiesSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = propertiesSection.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Form validation
function validateSearchForm() {
    const form = document.querySelector('.property-form');
    if (!form) return true;
    
    const priceMin = form.querySelector('#price-min').value;
    const priceMax = form.querySelector('#price-max').value;
    
    if (priceMin && priceMax && parseInt(priceMin) > parseInt(priceMax)) {
        alert('O valor mínimo não pode ser maior que o valor máximo.');
        return false;
    }
    
    return true;
}

// WhatsApp integration
function openWhatsApp(message = '') {
    const phoneNumber = '5551981246634';
    const defaultMessage = 'Olá! Gostaria de mais informações sobre os imóveis disponíveis.';
    const finalMessage = message || defaultMessage;
    const url = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${encodeURIComponent(finalMessage)}`;
    window.open(url, '_blank');
}

// Add WhatsApp click handlers
document.addEventListener('DOMContentLoaded', function() {
    const whatsappLinks = document.querySelectorAll('a[href*="whatsapp"]');
    
    whatsappLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            let message = 'Olá! Gostaria de mais informações sobre os imóveis disponíveis.';
            
            // Customize message based on button text
            const buttonText = this.textContent.trim().toLowerCase();
            if (buttonText.includes('vender')) {
                message = 'Olá! Tenho interesse em vender meu imóvel. Gostaria de mais informações.';
            } else if (buttonText.includes('alugar')) {
                message = 'Olá! Tenho interesse em alugar meu imóvel. Gostaria de mais informações.';
            } else if (buttonText.includes('corretor')) {
                message = 'Olá! Gostaria de falar com um corretor sobre imóveis disponíveis.';
            }
            
            openWhatsApp(message);
        });
    });
});

// Lazy loading for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
        img.style.transition = 'opacity 0.3s ease';
    });
});

// Price formatting
function formatPrice(value) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(value);
}

// Add price formatting to inputs
document.addEventListener('DOMContentLoaded', function() {
    const priceInputs = document.querySelectorAll('#price-min, #price-max');
    
    priceInputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.value) {
                const numericValue = parseFloat(this.value.replace(/\D/g, ''));
                if (!isNaN(numericValue)) {
                    // Store numeric value for form submission
                    this.setAttribute('data-numeric-value', numericValue);
                }
            }
        });
    });
});

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // In a production environment, you might want to send errors to a logging service
});

// AI Chat Interface
document.addEventListener('DOMContentLoaded', function() {
    const aiInput = document.getElementById('ai-input');
    const aiSendBtn = document.getElementById('ai-send-btn');
    const suggestionPills = document.querySelectorAll('.suggestion-pill');

    // Handle AI input submission
    function handleAISubmission() {
        const userInput = aiInput.value.trim();
        if (!userInput) return;

        // Show processing state
        aiSendBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
        aiSendBtn.disabled = true;

        // Simulate AI processing
        setTimeout(() => {
            processAIRequest(userInput);
            
            // Reset button
            aiSendBtn.innerHTML = '<i class="fas fa-paper-plane"></i>';
            aiSendBtn.disabled = false;
            aiInput.value = '';
        }, 1500);
    }

    // Process AI request and take appropriate action
    function processAIRequest(input) {
        const lowerInput = input.toLowerCase();
        
        // Keywords for different actions
        const buyKeywords = ['comprar', 'compra', 'venda', 'vendas', 'apartamento', 'casa', 'imóvel'];
        const rentKeywords = ['alugar', 'aluguel', 'locação', 'locar'];
        const sellKeywords = ['vender', 'venda do meu', 'meu imóvel', 'tenho'];
        const contactKeywords = ['corretor', 'falar', 'contato', 'conversar', 'ajuda'];

        let action = 'search'; // default action

        if (sellKeywords.some(keyword => lowerInput.includes(keyword))) {
            action = 'contact-sell';
        } else if (contactKeywords.some(keyword => lowerInput.includes(keyword))) {
            action = 'contact';
        } else if (rentKeywords.some(keyword => lowerInput.includes(keyword))) {
            action = 'rent';
        } else if (buyKeywords.some(keyword => lowerInput.includes(keyword))) {
            action = 'buy';
        }

        executeAIAction(action, input);
    }

    // Execute the appropriate action based on AI analysis
    function executeAIAction(action, originalInput) {
        // For any user input, show the AI results page with filtered apartments
        showAIResults(originalInput);
    }

    // Helper function to scroll to search with specific tab
    function scrollToSearchWithTab(tabType) {
        const searchSection = document.getElementById('search');
        if (searchSection) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = searchSection.offsetTop - headerHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // Set the appropriate tab after a short delay
            setTimeout(() => {
                const targetTab = document.querySelector(`[data-tab="${tabType}"]`);
                if (targetTab) {
                    document.querySelectorAll('.tab-btn').forEach(tab => tab.classList.remove('active'));
                    targetTab.classList.add('active');
                    handleTabChange(tabType);
                }
            }, 800);
        }
    }

    // Show AI Results section
    function showAIResults(userInput) {
        // Hide all other sections
        const sectionsToHide = ['search', 'featured-categories', 'properties', 'about', 'contact'];
        sectionsToHide.forEach(sectionId => {
            const section = document.getElementById(sectionId);
            if (section) {
                section.style.display = 'none';
            }
        });

        // Show AI results section
        const aiResultsSection = document.getElementById('ai-results');
        if (aiResultsSection) {
            aiResultsSection.style.display = 'block';
            
            // Update title and subtitle based on user input
            const title = document.getElementById('ai-results-title');
            const subtitle = document.getElementById('ai-results-subtitle');
            
            if (title) {
                title.textContent = 'Encontrei alguns imóveis perfeitos para você!';
            }
            
            if (subtitle) {
                subtitle.textContent = `Baseado na sua busca: "${userInput}" - Apartamentos com 3 dormitórios, sacada, 2 vagas e acima de 140m²`;
            }

            // Scroll to results section smoothly
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = aiResultsSection.offsetTop - headerHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }



    // Event listeners
    if (aiSendBtn) {
        aiSendBtn.addEventListener('click', handleAISubmission);
    }

    if (aiInput) {
        aiInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                handleAISubmission();
            }
        });

        // Auto-resize and character count
        aiInput.addEventListener('input', function() {
            // Optional: Add character counter or input validation here
        });
    }

    // Suggestion pills
    suggestionPills.forEach(pill => {
        pill.addEventListener('click', function() {
            const suggestionText = this.getAttribute('data-text');
            aiInput.value = suggestionText;
            aiInput.focus();
            
            // Optional: Auto-submit after selecting suggestion
            setTimeout(() => {
                handleAISubmission();
            }, 300);
        });
    });
});

// Make functions globally available
window.showSearchSection = function() {
    // Show all original sections
    const sectionsToShow = ['search', 'featured-categories', 'properties', 'about', 'contact'];
    sectionsToShow.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.style.display = 'block';
        }
    });

    // Hide AI results section
    const aiResultsSection = document.getElementById('ai-results');
    if (aiResultsSection) {
        aiResultsSection.style.display = 'none';
    }

    // Scroll back to hero section
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = heroSection.offsetTop - headerHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
};

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('Imobiliária Azes website loaded successfully!');
    
    // Set initial tab
    const firstTab = document.querySelector('.tab-btn');
    if (firstTab) {
        handleTabChange(firstTab.getAttribute('data-tab'));
    }
});