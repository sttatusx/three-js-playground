/**
 * @returns {Object} View port sizes
 */

export function getViewPortSizes() {
  return { width: window.innerWidth, height: window.innerHeight };
}

/**
 * @param width
 * @param height
 * @returns {Number} Aspect ratio of the current page
 */

export function getViewPortAspectRatio(width?: number, height?: number) {
  return width && height ? width / height : window.innerWidth / window.innerHeight;
}
