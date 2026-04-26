// ========================================
// SCROLL-DRIVEN FRAME ANIMATION
// ========================================

class ScrollDrivenAnimation {
  constructor(options = {}) {
    this.productName = options.productName || 'manual';
    this.frameCount = options.frameCount || 61;
    this.canvasSelector = options.canvasSelector || '.scroll-canvas';
    this.preloadSelector = options.preloadSelector || '.frame-preload';

    this.canvas = document.querySelector(this.canvasSelector);
    this.preloadBar = document.querySelector(this.preloadSelector);
    this.ctx = this.canvas ? this.canvas.getContext('2d') : null;

    this.frames = [];
    this.currentFrame = 0;
    this.isLoading = false;
    this.isReady = false;

    if (this.canvas) {
      this.init();
    }
  }

  async init() {
    this.isLoading = true;
    await this.preloadFrames();
    this.isLoading = false;
    this.isReady = true;
    this.renderFrame(0);
    this.attachScrollListener();
  }

  async preloadFrames() {
    const baseUrl = 'videos/frames/' + this.productName;

    for (let i = 1; i <= this.frameCount; i++) {
      const frameNum = String(i).padStart(3, '0');
      const img = new Image();
      img.src = baseUrl + '/' + frameNum + '.jpg';

      await new Promise((resolve) => {
        img.onload = () => {
          this.frames.push(img);
          if (this.preloadBar) {
            const progress = (i / this.frameCount) * 100;
            this.preloadBar.style.width = progress + '%';
          }
          resolve();
        };
        img.onerror = () => {
          console.error('Failed to load frame: ' + frameNum);
          resolve();
        };
      });
    }

    if (this.preloadBar) {
      setTimeout(() => {
        this.preloadBar.parentElement.style.opacity = '0';
      }, 500);
    }
  }

  renderFrame(frameIndex) {
    if (!this.ctx || frameIndex >= this.frames.length) return;

    const img = this.frames[frameIndex];
    const canvas = this.canvas;

    // Set canvas size to match image
    if (canvas.width !== img.width || canvas.height !== img.height) {
      canvas.width = img.width;
      canvas.height = img.height;
    }

    this.ctx.drawImage(img, 0, 0);
  }

  attachScrollListener() {
    window.addEventListener('scroll', () => {
      if (!this.isReady) return;

      // Find the product section
      const section = this.canvas.closest('section');
      if (!section) return;

      const sectionRect = section.getBoundingClientRect();
      const sectionTop = sectionRect.top;
      const sectionHeight = sectionRect.height;
      const windowHeight = window.innerHeight;

      // Calculate scroll progress within the section
      let scrollProgress = 0;

      if (sectionTop < 0) {
        // Section is above viewport
        scrollProgress = Math.abs(sectionTop) / (sectionHeight - windowHeight);
      } else if (sectionTop < windowHeight) {
        // Section is entering viewport
        scrollProgress = 1 - (sectionTop / windowHeight);
      }

      scrollProgress = Math.max(0, Math.min(1, scrollProgress));

      const frameIndex = Math.floor(scrollProgress * (this.frameCount - 1));

      if (frameIndex !== this.currentFrame) {
        this.currentFrame = frameIndex;
        this.renderFrame(frameIndex);
      }
    });
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const productName = document.body.dataset.product || 'manual';

  new ScrollDrivenAnimation({
    productName: productName,
    frameCount: 61,
    canvasSelector: '.scroll-canvas',
    preloadSelector: '.frame-preload',
  });
});
