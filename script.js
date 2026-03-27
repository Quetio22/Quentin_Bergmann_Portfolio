// Active nav link based on current page
document.addEventListener('DOMContentLoaded', () => {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === page) {
      link.classList.add('active');
    }
  });
});

// Typing effect
function typeWriter(el, texts, speed = 65, pause = 2000) {
  let ti = 0, ci = 0, deleting = false;

  function tick() {
    const text = texts[ti];
    el.textContent = deleting ? text.slice(0, ci - 1) : text.slice(0, ci + 1);
    deleting ? ci-- : ci++;

    if (!deleting && ci === text.length) {
      setTimeout(() => { deleting = true; tick(); }, pause);
      return;
    }
    if (deleting && ci === 0) {
      deleting = false;
      ti = (ti + 1) % texts.length;
    }
    setTimeout(tick, deleting ? speed / 2 : speed);
  }
  tick();
}
