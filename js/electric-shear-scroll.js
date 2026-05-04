class ElectricShearScrollytelling {
  constructor() {
    this.canvas = document.querySelector('.electric-shear-canvas');
    if (!this.canvas) {
      console.error('Canvas not found');
      return;
    }
    this.ctx = this.canvas.getContext('2d');
    this.container = document.querySelector('.electric-shear-scrollytelling');

    this.frames = [];
    this.currentFrameIndex = 0;
    this.totalFrames = 11;
    this.isLoading = true;
    this.preloadProgress = 0;

    this.init();
  }

  async init() {
    this.setupCanvas();
    await this.preloadFrames();
    this.attachScrollListener();
    if (this.frames[0]) {
      this.drawFrame(0);
    }
  }

  async preloadFrames() {
    const promises = [];
    for (let i = 1; i <= this.totalFrames; i++) {
      const frameNum = String(i).padStart(3, '0');
      const src = `images/electric-shear/ezgif-frame-${frameNum}.jpg`;
      promises.push(this.loadImage(src, i));
    }

    try {
      await Promise.all(promises);
      console.log('All frames loaded successfully');
    } catch (error) {
      console.error('Error loading frames:', error);
    }
    this.isLoading = false;
    this.showPreloadComplete();
  }

  loadImage(src, index) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        this.frames[index - 1] = img;
        this.preloadProgress = (index / this.totalFrames) * 100;
        console.log(`Frame ${index} loaded: ${src}`);
        resolve();
      };
      img.onerror = () => {
        console.error(`Failed to load frame ${index}: ${src}`);
        reject(new Error(`Failed to load ${src}`));
      };
      img.src = src;
    });
  }

  setupCanvas() {
    const rect = this.container.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    this.canvas.width = rect.width * dpr;
    this.canvas.height = rect.height * dpr;
    this.ctx.scale(dpr, dpr);

    // Store actual display size
    this.canvas.style.width = `${rect.width}px`;
    this.canvas.style.height = `${rect.height}px`;

    window.addEventListener('resize', () => this.setupCanvas());
  }

  drawFrame(index) {
    if (!this.frames[index]) return;

    const img = this.frames[index];
    const canvas = this.canvas;
    const ctx = this.ctx;

    // Clear canvas
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw image centered
    const scale = Math.min(
      canvas.width / img.width,
      canvas.height / img.height
    );

    const x = (canvas.width - img.width * scale) / 2;
    const y = (canvas.height - img.height * scale) / 2;

    ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
  }

  attachScrollListener() {
    window.addEventListener('scroll', () => this.onScroll());
  }

  onScroll() {
    const rect = this.container.getBoundingClientRect();
    const containerHeight = this.container.offsetHeight;

    // Calculate progress: 0 when container is below viewport, 1 when fully above
    let progress;
    if (rect.bottom < 0) {
      progress = 1;
    } else if (rect.top > window.innerHeight) {
      progress = 0;
    } else {
      // Container is in viewport - map its position to progress
      progress = (window.innerHeight - rect.top) / (window.innerHeight + containerHeight);
    }

    progress = Math.max(0, Math.min(1, progress));

    // Linear mapping to frame index (0 to totalFrames-1)
    const frameIndex = Math.floor(progress * (this.totalFrames - 1));

    if (frameIndex !== this.currentFrameIndex) {
      this.currentFrameIndex = frameIndex;
      this.drawFrame(frameIndex);
    }
  }

  showPreloadComplete() {
    const progressBar = document.querySelector('.electric-shear-preload');
    if (progressBar) {
      progressBar.style.opacity = '0';
      setTimeout(() => {
        progressBar.style.display = 'none';
      }, 300);
    }
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new ElectricShearScrollytelling();
  });
} else {
  new ElectricShearScrollytelling();
}
