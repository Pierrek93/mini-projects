const imageElement = document.querySelector('#image-container');
let isZoomedIn = false;

// Tilt effect on mousemove
imageElement.addEventListener('mousemove', (event) => {
  const rect = imageElement.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = ((y - centerY) / centerY) * 15; 
  const rotateY = ((x - centerX) / centerX) * -15;

  // Apply both tilt and zoom if zoomed in, otherwise just tilt
  imageElement.style.transform = isZoomedIn
    ? `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.5)`
    : `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

// Reset transform on mouseleave when not zoomed in
imageElement.addEventListener('mouseleave', () => {
  if (!isZoomedIn) {
    imageElement.style.transform = 'scale(1)';
  }
});

// Toggle zoom on double-click
imageElement.addEventListener('click', () => {
  isZoomedIn = !isZoomedIn;

  if (isZoomedIn) {
    // Apply initial zoom without rotation
    imageElement.style.transform = 'perspective(600px) scale(1.5)';
  } else {
    // Reset to normal scale and rotation
    imageElement.style.transform = 'scale(1)';
  }
});
