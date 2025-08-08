document.addEventListener('DOMContentLoaded', function() {
    // Add animation to rule sections when they come into view
    const ruleSections = document.querySelectorAll('.rule-section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }, { threshold: 0.1 });
    
    ruleSections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateX(-50px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(section);
    });
    
    // Add hover effects to helmets in headers
    const helmetIcons = document.querySelectorAll('.helmet-icon');
    
    helmetIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'rotate(20deg) scale(1.2)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'rotate(0) scale(1)';
        });
    });
    
    // Add click effect to offenses
    const offenses = document.querySelectorAll('.offense');
    
    offenses.forEach(offense => {
        offense.addEventListener('click', function() {
            this.style.backgroundColor = 'rgba(213, 10, 10, 0.7)';
            setTimeout(() => {
                this.style.backgroundColor = '';
            }, 300);
        });
    });
    
    // Football field effect on scroll
    window.addEventListener('scroll', function() {
        const yardLines = document.querySelector('.yard-lines');
        const scrollPosition = window.scrollY;
        yardLines.style.backgroundPositionY = `-${scrollPosition * 0.2}px`;
    });
    
    // Animate title on load
    const title = document.querySelector('.title');
    setTimeout(() => {
        title.style.letterSpacing = '5px';
    }, 500);
    
    // Rotate prize amounts on hover
    const prizes = document.querySelectorAll('.prize span');
    
    prizes.forEach(prize => {
        prize.addEventListener('mouseenter', function() {
            this.style.display = 'inline-block';
            this.style.transform = 'rotate(360deg)';
            this.style.transition = 'transform 0.5s ease';
        });
        
        prize.addEventListener('mouseleave', function() {
            this.style.transform = 'rotate(0)';
        });
    });
    
    // Football bounce animation for list items
    const listItems = document.querySelectorAll('.rule-content li');
    
    listItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const football = this.querySelector('::before');
            if (football) {
                football.style.animation = 'bounce 0.5s';
            }
        });
    });
    
    // Add a confetti effect when clicking on prizes
    const prizeElements = document.querySelectorAll('.prize');
    
    prizeElements.forEach(prize => {
        prize.addEventListener('click', function() {
            createConfetti(this);
        });
    });
    
    function createConfetti(element) {
        const rect = element.getBoundingClientRect();
        const colors = ['#013369', '#D50A0A', '#FFD100', '#FFFFFF'];
        
        for (let i = 0; i < 20; i++) {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.borderRadius = '50%';
            confetti.style.left = `${rect.left + rect.width/2}px`;
            confetti.style.top = `${rect.top}px`;
            confetti.style.zIndex = '1000';
            document.body.appendChild(confetti);
            
            const animation = confetti.animate([
                { transform: 'translateY(0) rotate(0)', opacity: 1 },
                { transform: `translateY(${Math.random() * 200 - 100}px) translateX(${Math.random() * 200 - 100}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
            ], {
                duration: 1000,
                easing: 'cubic-bezier(0.1, 0.8, 0.9, 1)'
            });
            
            animation.onfinish = () => confetti.remove();
        }
    }
});
