document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {
      // Toggle Nav
      nav.classList.toggle('nav-active');

      // Animate Links
      navLinks.forEach((link, index) => {
          link.style.animation = link.style.animation ? '' : `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
      });

      // Burger Animation
      burger.classList.toggle('toggle');
  });

  // Smooth Scrolling for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
      });
  });

  // Testimonial Slider
  const testimonials = [
      { name: 'John Doe', company: 'Tech Co', text: 'Autobrand delivered an outstanding website that exceeded our expectations.', image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
      { name: 'Jane Smith', company: 'Design Inc', text: 'The team at Autobrand is professional, creative, and a joy to work with.', image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
      { name: 'Mike Johnson', company: 'Marketing Pro', text: 'Our new website has significantly improved our online presence and lead generation.', image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }
  ];

  const testimonialSlider = document.querySelector('.testimonial-slider');
  const prevButton = document.querySelector('.prev-testimonial');
  const nextButton = document.querySelector('.next-testimonial');
  let currentTestimonial = 0;

  function renderTestimonials() {
      testimonialSlider.innerHTML = '';
      testimonials.forEach((testimonial, index) => {
          const testimonialElement = document.createElement('div');
          testimonialElement.classList.add('testimonial');
          if (index === currentTestimonial) {
              testimonialElement.classList.add('active');
          }
          testimonialElement.innerHTML = `<img src="${testimonial.image}" alt="${testimonial.name}">
                                          <p>${testimonial.text}</p>
                                          <h4>${testimonial.name}</h4>
                                          <p class="testimonial-company">${testimonial.company}</p>`;
          testimonialSlider.appendChild(testimonialElement);
      });
  }

  function showTestimonial(index) {
      const testimonials = document.querySelectorAll('.testimonial');
      testimonials[currentTestimonial].classList.remove('active');
      currentTestimonial = (index + testimonials.length) % testimonials.length;
      testimonials[currentTestimonial].classList.add('active');
  }

  function nextTestimonial() {
      showTestimonial(currentTestimonial + 1);
  }

  function prevTestimonial() {
      showTestimonial(currentTestimonial - 1);
  }

  renderTestimonials();
  setInterval(nextTestimonial, 7000); // Change testimonial every 7 seconds

  prevButton.addEventListener('click', prevTestimonial);
  nextButton.addEventListener('click', nextTestimonial);

  // Portfolio Grid
  const portfolioItems = [
      { title: 'Project 1', image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg', description: 'Modern e-commerce website' },
      { title: 'Project 2', image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg', description: 'Corporate website redesign' },
      { title: 'Project 3', image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg', description: 'Mobile app development' },
      { title: 'Project 4', image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg', description: 'SEO optimization campaign' },
      { title: 'Project 5', image: 'https://images.pexels.com/photos/6224/hands-people-woman-working.jpg', description: 'Branding and identity design' },
      { title: 'Project 6', image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg', description: 'Social media marketing strategy' }
  ];

  const portfolioGrid = document.querySelector('.portfolio-grid');

  portfolioItems.forEach(item => {
      const portfolioItem = document.createElement('div');
      portfolioItem.classList.add('portfolio-item');
      portfolioItem.innerHTML = `<img src="${item.image}" alt="${item.title}">
                                 <div class="portfolio-item-content">
                                     <h3>${item.title}</h3>
                                     <p>${item.description}</p>
                                 </div>`;
      portfolioGrid.appendChild(portfolioItem);
  });

  // Newsletter Form Submission
  const newsletterForm = document.querySelector('.newsletter-form');
  newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = newsletterForm.querySelector('input[type="email"]').value;
      console.log(`Subscribed: ${email}`);
      alert('Thank you for subscribing to our newsletter!');
      newsletterForm.reset();
  });

  // Theme toggle functionality
  const themeToggle = document.querySelector('.theme-toggle');
  const body = document.body;

  themeToggle.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
  });

  // Check for saved theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
      body.classList.add('dark-mode');
  }
});