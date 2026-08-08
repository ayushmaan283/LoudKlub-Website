/* ==========================================================================
   Full Screen 210-Frame Canvas Scroll Animation Engine
   ========================================================================== */

const TOTAL_FRAMES = 210;
const FRAME_FOLDER = 'ezgif-8e8e46678a6e04f4-jpg';
const images = [];
let loadedFrames = 0;

const canvas = document.getElementById('animation-canvas');
const ctx = canvas.getContext('2d');

let currentFrameIndex = 0;
let targetFrameIndex = 0;

const preloader = document.getElementById('preloader');
const loaderText = document.getElementById('loader-text');

function resizeCanvas() {
  const dpr = window.devicePixelRatio || 1;
  canvas.width = window.innerWidth * dpr;
  canvas.height = window.innerHeight * dpr;
  ctx.scale(dpr, dpr);
  renderFrame(currentFrameIndex);
}

function renderFrame(index) {
  const clampedIndex = Math.max(0, Math.min(TOTAL_FRAMES - 1, Math.round(index)));
  const img = images[clampedIndex];

  if (!img || !img.complete || img.naturalWidth === 0) return;

  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  const imgWidth = img.naturalWidth;
  const imgHeight = img.naturalHeight;
  const imgRatio = imgWidth / imgHeight;
  const viewportRatio = viewportWidth / viewportHeight;

  let drawWidth, drawHeight, x, y;

  if (viewportRatio > imgRatio) {
    drawWidth = viewportWidth;
    drawHeight = viewportWidth / imgRatio;
  } else {
    drawHeight = viewportHeight;
    drawWidth = viewportHeight * imgRatio;
  }

  x = (viewportWidth - drawWidth) / 2;
  y = (viewportHeight - drawHeight) / 2;

  ctx.clearRect(0, 0, viewportWidth, viewportHeight);
  ctx.drawImage(img, x, y, drawWidth, drawHeight);
}

function getFramePath(index) {
  const frameNum = String(index + 1).padStart(3, '0');
  return `./${FRAME_FOLDER}/ezgif-frame-${frameNum}.jpg`;
}

function preloadFrames() {
  for (let i = 0; i < TOTAL_FRAMES; i++) {
    const img = new Image();
    img.src = getFramePath(i);

    img.onload = () => {
      loadedFrames++;
      const percent = Math.floor((loadedFrames / TOTAL_FRAMES) * 100);
      if (loaderText) loaderText.textContent = `Loading ${percent}%`;

      if (loadedFrames === TOTAL_FRAMES) {
        onPreloadComplete();
      }
    };

    img.onerror = () => {
      loadedFrames++;
      if (loadedFrames === TOTAL_FRAMES) {
        onPreloadComplete();
      }
    };

    images.push(img);
  }
}

function onPreloadComplete() {
  if (preloader) preloader.classList.add('loaded');
  resizeCanvas();
  renderFrame(0);
  startAnimationLoop();
}

function updateScrollTarget() {
  const track = document.getElementById('scroll-animation-track');
  const canvasContainer = document.getElementById('canvas-container');
  if (!track || !canvasContainer) return;

  const trackRect = track.getBoundingClientRect();
  const trackTotalScroll = track.offsetHeight - window.innerHeight;
  const currentTrackScroll = -trackRect.top;

  const scrollFraction = Math.max(0, Math.min(1, currentTrackScroll / trackTotalScroll));
  targetFrameIndex = scrollFraction * (TOTAL_FRAMES - 1);

  // Transition canvas visibility smoothly into the landing page
  if (currentTrackScroll > trackTotalScroll) {
    const fadeDistance = window.innerHeight * 0.4;
    const pastOffset = currentTrackScroll - trackTotalScroll;
    const opacity = Math.max(0, 1 - pastOffset / fadeDistance);
    canvasContainer.style.opacity = opacity;
  } else {
    canvasContainer.style.opacity = 1;
  }
}

function startAnimationLoop() {
  function loop() {
    currentFrameIndex += (targetFrameIndex - currentFrameIndex) * 0.15;

    if (Math.abs(targetFrameIndex - currentFrameIndex) > 0.01) {
      renderFrame(currentFrameIndex);
    }

    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
}

window.addEventListener('scroll', updateScrollTarget, { passive: true });
window.addEventListener('resize', resizeCanvas);

preloadFrames();
