// Smooth Scroll for Navbar Links
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Alert when resume is downloaded
const resumeBtn = document.querySelector('.about-content .btn');
if (resumeBtn) {
  resumeBtn.addEventListener('click', () => {
    alert("Your resume is being downloaded!");
  });
}
