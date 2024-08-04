window.addEventListener('scroll', function() {
    const scrollTotal = document.body.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;
    const scrollPercentage = (scrollPosition / scrollTotal) * 100;
    document.querySelector('.indicator-bar').style.width = `${scrollPercentage}%`;
  });
  