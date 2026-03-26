const sealButton = document.getElementById('sealButton');
const overlay = document.getElementById('landingGate');

if (sealButton && overlay) {
  sealButton.addEventListener('click', () => {
    overlay.style.transition = 'opacity 0.5s';
    overlay.style.opacity = 0;
    setTimeout(() => {
      overlay.style.display = 'none';
    }, 500);
  });
}