    document.getElementById('navTrigger').addEventListener('click', () => {
      document.getElementById('mainListDiv').classList.toggle('show_list');
    });

    window.addEventListener('scroll', () => {
      const nav = document.querySelector('.nav');
      nav.classList.toggle('affix', window.scrollY > 50);
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      });
    });

    document.getElementById('darkModeBtn').addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    });