const colors = ['#78cdd7', '#4e9ac9', '#f6d365', '#fda085', '#d6a4ff', '#ffffff'];
const particleCount = 140;
const animationDuration = 3200;

export function launchConfetti() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  if (!context) {
    throw new Error('Unable to create a canvas context for the confetti animation.');
  }

  canvas.className = 'confetti-canvas';
  canvas.setAttribute('aria-hidden', 'true');
  document.body.append(canvas);

  const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
  const particles = Array.from({ length: particleCount }, () => ({
    x: Math.random() * window.innerWidth,
    y: -Math.random() * window.innerHeight * 0.6,
    width: 5 + Math.random() * 7,
    height: 7 + Math.random() * 9,
    velocityX: (Math.random() - 0.5) * 3,
    velocityY: 2 + Math.random() * 4,
    rotation: Math.random() * Math.PI * 2,
    rotationSpeed: (Math.random() - 0.5) * 0.16,
    color: colors[Math.floor(Math.random() * colors.length)]
  }));
  const startTime = performance.now();

  function resizeCanvas() {
    canvas.width = window.innerWidth * pixelRatio;
    canvas.height = window.innerHeight * pixelRatio;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  }

  function animate(now) {
    const elapsed = now - startTime;
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);

    particles.forEach(particle => {
      particle.x += particle.velocityX;
      particle.y += particle.velocityY;
      particle.velocityY += 0.035;
      particle.rotation += particle.rotationSpeed;

      context.save();
      context.translate(particle.x, particle.y);
      context.rotate(particle.rotation);
      context.fillStyle = particle.color;
      context.fillRect(-particle.width / 2, -particle.height / 2, particle.width, particle.height);
      context.restore();
    });

    if (elapsed < animationDuration) {
      requestAnimationFrame(animate);
    } else {
      canvas.remove();
    }
  }

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  window.setTimeout(() => window.removeEventListener('resize', resizeCanvas), animationDuration);
  requestAnimationFrame(animate);
}