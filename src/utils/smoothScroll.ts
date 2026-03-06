/**
 * Smooth scroll utility with custom easing for better performance and fluidity
 * Uses requestAnimationFrame for 60fps smooth scrolling
 */

// Custom easing function - ease-out-expo for smooth, natural feel
const easeOutExpo = (t: number): number => {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
};

// Alternative easing - cubic bezier matching the design system
const easeInOutCubic = (t: number): number => {
  return t < 0.5
    ? 4 * t * t * t
    : 1 - Math.pow(-2 * t + 2, 3) / 2;
};

// Premium easing curve matching the design system's cubic-bezier(0.16, 1, 0.3, 1)
const premiumEase = (t: number): number => {
  // Approximation of cubic-bezier(0.16, 1, 0.3, 1)
  // This creates a smooth, premium feel with a subtle ease-in and strong ease-out
  return t === 0 ? 0 : t === 1 ? 1 : t < 0.5 
    ? 4 * t * t * (1.5 * t - 0.5)
    : 1 - Math.pow(-2 * t + 2, 2.5) / 2;
};

interface SmoothScrollOptions {
  duration?: number;
  offset?: number;
  easing?: (t: number) => number;
  block?: ScrollLogicalPosition;
}

/**
 * Smoothly scrolls to an element with custom easing and duration
 * @param element - The target element or element ID
 * @param options - Scroll options
 */
export const smoothScrollTo = (
  element: HTMLElement | string,
  options: SmoothScrollOptions = {}
): Promise<void> => {
  return new Promise((resolve) => {
    const {
      duration = 800,
      offset = 0,
      easing = premiumEase,
      block = 'start',
    } = options;

    // Get the target element
    const targetElement =
      typeof element === 'string'
        ? document.getElementById(element)
        : element;

    if (!targetElement) {
      console.warn(`Element not found: ${element}`);
      resolve();
      return;
    }

    // Get current scroll position
    const startPosition = window.pageYOffset || window.scrollY || document.documentElement.scrollTop;
    
    // Calculate target position
    const elementPosition = targetElement.getBoundingClientRect().top + startPosition;
    const offsetPosition = elementPosition - offset;

    // Calculate distance to scroll
    const distance = offsetPosition - startPosition;

    // Return early if distance is too small
    if (Math.abs(distance) < 1) {
      resolve();
      return;
    }

    // Start time
    let startTime: number | null = null;

    // Animation function
    const animateScroll = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      // Apply easing
      const easedProgress = easing(progress);

      // Calculate current position
      const currentPosition = startPosition + distance * easedProgress;

      // Scroll to position
      window.scrollTo({
        top: currentPosition,
        behavior: 'auto', // Use 'auto' since we're manually controlling the scroll
      });

      // Continue animation if not complete
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      } else {
        // Ensure we end at exactly the target position
        window.scrollTo({
          top: offsetPosition,
          behavior: 'auto',
        });
        resolve();
      }
    };

    // Start animation
    requestAnimationFrame(animateScroll);
  });
};

/**
 * Smoothly scrolls to top of the page
 * @param options - Scroll options
 */
export const smoothScrollToTop = (
  options: SmoothScrollOptions = {}
): Promise<void> => {
  return smoothScrollTo(document.documentElement, {
    ...options,
    offset: 0,
  });
};

/**
 * Smoothly scrolls to a section by ID
 * @param sectionId - The ID of the section to scroll to
 * @param options - Scroll options
 */
export const smoothScrollToSection = (
  sectionId: string,
  options: SmoothScrollOptions = {}
): Promise<void> => {
  // Default offset accounts for navbar height
  const defaultOffset = options.offset ?? 100;
  
  return smoothScrollTo(sectionId, {
    ...options,
    offset: defaultOffset,
  });
};

