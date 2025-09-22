// Crear efecto de espacio con partículas
function createSpace() {
    const space = document.getElementById('space');
    
    // Crear partículas iniciales
    for (let i = 0; i < 100; i++) {
        createParticle(space);
    }
    
    // Continuar creando partículas
    setInterval(() => {
        createParticle(space);
    }, 200);
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Tamaño aleatorio entre 1 y 3px
    const size = Math.random() * 2 + 1;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    
    // Posición aleatoria en X
    particle.style.left = Math.random() * 100 + '%';
    
    // Duración aleatoria entre 5 y 15 segundos
    const duration = Math.random() * 10 + 5;
    particle.style.animationDuration = duration + 's';
    
    // Retraso aleatorio
    particle.style.animationDelay = Math.random() * 5 + 's';
    
    container.appendChild(particle);
    
    // Eliminar la partícula después de que termine la animación
    setTimeout(() => {
        if (particle.parentNode) {
            particle.remove();
        }
    }, duration * 1000 + 1000);
}

// Mostrar elementos secuencialmente
function showElements() {
    const title = document.getElementById('title');
    const message1 = document.getElementById('message1');
    const message2 = document.getElementById('message2');
    const button = document.getElementById('button');
    
    setTimeout(() => {
        if (title) title.classList.add('visible');
    }, 1000);
    
    setTimeout(() => {
        if (message1) message1.classList.add('visible');
    }, 3000);
    
    setTimeout(() => {
        if (message2) message2.classList.add('visible');
    }, 6000);
    
    setTimeout(() => {
        if (button) button.classList.add('visible');
    }, 9000);
}

// Función para mostrar el regalo (transición a las flores)
function mostrarRegalo() {
    // Ocultar la pantalla principal con efecto de desvanecimiento
    const mainContainer = document.getElementById('main-container');
    const space = document.getElementById('space');
    const flowerGarden = document.getElementById('flower-garden');
    
    // Desvanecer pantalla principal
    mainContainer.style.transition = 'opacity 1.5s ease-out';
    mainContainer.style.opacity = '0';
    
    // Desvanecer partículas del espacio
    space.style.transition = 'opacity 1.5s ease-out';
    space.style.opacity = '0';
    
    // Después de 1.5 segundos, mostrar el jardín de flores
    setTimeout(() => {
        flowerGarden.classList.add('show');
        
        // Iniciar la cascada de partículas brillantes
        startEmojiStars();
        
        // Agregar interactividad a las flores después de que aparezcan
        setTimeout(() => {
            addFlowerInteractivity();
        }, 3000);
        
    }, 1500);
}

// Función para crear cascada de partículas brillantes
function startEmojiStars() {
    const starContainer = document.getElementById('star-particles');
    
    // Crear partículas iniciales
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            createStarParticle(starContainer);
        }, i * 150);
    }
    
    // Continuar creando partículas cada 200ms
    setInterval(() => {
        createStarParticle(starContainer);
    }, 200);
}

function createStarParticle(container) {
    const star = document.createElement('div');
    star.className = 'star-particle';
    
    // Posición aleatoria en X
    star.style.left = Math.random() * 100 + '%';
    
    // Tamaño aleatorio entre 2px y 8px
    const size = Math.random() * 6 + 2;
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    
    // Duración aleatoria entre 3 y 7 segundos
    const duration = Math.random() * 4 + 3;
    star.style.animationDuration = duration + 's';
    
    // Retraso aleatorio
    star.style.animationDelay = Math.random() * 2 + 's';
    
    // Variaciones en el brillo
    const brightness = Math.random() * 0.5 + 0.5; // Entre 0.5 y 1
    star.style.opacity = brightness;
    
    container.appendChild(star);
    
    // Eliminar la partícula después de que termine la animación
    setTimeout(() => {
        if (star.parentNode) {
            star.remove();
        }
    }, (duration + 2) * 1000);
}

// Función para agregar interactividad a las flores
function addFlowerInteractivity() {
    const flowers = document.querySelectorAll('.flower');
    
    flowers.forEach(flower => {
        flower.addEventListener('click', () => {
            // Efecto especial al hacer clic
            flower.style.transform += ' rotate(360deg)';
            flower.style.transition = 'transform 0.8s ease';
            
            setTimeout(() => {
                flower.style.transition = 'all 0.5s ease';
                flower.style.transform = flower.style.transform.replace(' rotate(360deg)', '');
            }, 800);
            
            // Crear partículas especiales al hacer clic
            createFlowerParticles();
        });

        // Efecto hover mejorado
        flower.addEventListener('mouseenter', () => {
            flower.style.filter = 'brightness(1.2) saturate(1.3)';
        });

        flower.addEventListener('mouseleave', () => {
            flower.style.filter = 'brightness(1.1)';
        });
    });
}

// Función para crear partículas de flores
function createFlowerParticles() {
    const flowerGarden = document.getElementById('flower-garden');
    const starContainer = document.getElementById('star-particles');
    
    // Crear partículas doradas tradicionales
    for(let i = 0; i < 8; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.width = '6px';
            particle.style.height = '6px';
            particle.style.background = '#f1c40f';
            particle.style.borderRadius = '50%';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.pointerEvents = 'none';
            particle.style.animation = 'fadeOut 2s ease-out forwards';
            
            flowerGarden.appendChild(particle);
            
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.remove();
                }
            }, 2000);
        }, i * 80);
    }
    
    // Crear partículas brillantes extra al hacer clic
    for(let i = 0; i < 10; i++) {
        setTimeout(() => {
            const starParticle = document.createElement('div');
            starParticle.className = 'star-particle';
            starParticle.style.left = Math.random() * 100 + '%';
            starParticle.style.width = '4px';
            starParticle.style.height = '4px';
            starParticle.style.animationDuration = '1.5s';
            starParticle.style.animationDelay = '0s';
            
            starContainer.appendChild(starParticle);
            
            setTimeout(() => {
                if (starParticle.parentNode) {
                    starParticle.remove();
                }
            }, 1500);
        }, i * 100);
    }
}

// Inicializar cuando la página se carga
window.onload = function() {
    createSpace();
    showElements();
};