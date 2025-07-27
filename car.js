// HOME SCROLL
  let currentSlide = 0;

  function scrollSlides(direction) {
    const slider = document.getElementById('slider');
    const totalSlides = slider.children.length;

    currentSlide += direction;

    // Wrap around
    if (currentSlide < 0) currentSlide = totalSlides - 1;
    if (currentSlide >= totalSlides) currentSlide = 0;

    slider.scrollTo({
      left: currentSlide * window.innerWidth,
      behavior: 'smooth'
    });
  }

// Cars scroll
    let currSlide = 0;
    const slides = document.querySelectorAll('.car-slide');
    const totalSlides = slides.length;
    const slider = document.getElementById('carSlider');

    function updateSlider() {
        // Remove active class from all slides
        slides.forEach(slide => slide.classList.remove('active'));
            
        // Add active class to current slide
        slides[currSlide].classList.add('active');
            
        // Calculate transform to center the active slide
        const slideWidth = slides[0].offsetWidth + 20; // width + gap
        const offset = -currSlide * slideWidth + (window.innerWidth / 2) - (slideWidth / 2);
        slider.style.transform = `translateX(${offset}px)`;
    }

    function nextSlide() {
        currSlide = (currSlide + 1) % totalSlides;
        updateSlider();
    }

    function prevSlide() {
        currSlide = (currSlide - 1 + totalSlides) % totalSlides;
        updateSlider();
    }

    // Initialize the slider
    updateSlider();

    // Update on window resize
    window.addEventListener('resize', updateSlider);

//FORM 
function openChat(e) {
            e.preventDefault();
            alert('Live chat integration would open here');
        }

        function toggleForm() {
            const form = document.getElementById('quickForm');
            const title = document.querySelector('.form-title');
            const desc = document.querySelector('.form-description');
            
            if (form.style.display === 'block') {
                form.style.display = 'none';
                title.textContent = 'Send a Message';
                desc.textContent = 'Quick contact form';
            } else {
                form.style.display = 'block';
                title.textContent = 'Hide Form';
                desc.textContent = 'Fill out below';
                form.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }

        function submitForm(e) {
            e.preventDefault();
            const btn = document.querySelector('.form-submit');
            const originalText = btn.textContent;
            
            btn.textContent = 'Sending...';
            btn.disabled = true;
            
            setTimeout(() => {
                btn.textContent = 'Sent ✓';
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.disabled = false;
                    document.getElementById('quickForm').style.display = 'none';
                    document.querySelector('.form-title').textContent = 'Send a Message';
                    document.querySelector('.form-description').textContent = 'Quick contact form';
                    e.target.reset();
                }, 2000);
            }, 1500);
        } 