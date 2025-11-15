/**
 * Adaptive Image Loading
 * Serves high-quality images on fast connections, optimized images on slow connections
 */

(function() {
  'use strict';

  // Check if Network Information API is available
  function getConnectionSpeed() {
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

    if (!connection) {
      // If API not available, assume good connection
      return 'fast';
    }

    // Check effective connection type
    const effectiveType = connection.effectiveType;
    const downlink = connection.downlink; // Mbps

    // Determine if connection is fast
    // 4g or downlink > 2 Mbps = fast, otherwise slow
    if (effectiveType === '4g' || (downlink && downlink > 2)) {
      return 'fast';
    } else if (effectiveType === '3g' || effectiveType === 'slow-2g' || effectiveType === '2g') {
      return 'slow';
    }

    // Default to fast if unclear
    return 'fast';
  }

  // Check if user has data saver enabled
  function isDataSaverEnabled() {
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    return connection && connection.saveData;
  }

  // Load appropriate images based on connection
  function loadAdaptiveImages() {
    const connectionSpeed = getConnectionSpeed();
    const dataSaver = isDataSaverEnabled();

    // If data saver is on, always use optimized images
    const useFast = !dataSaver && connectionSpeed === 'fast';

    console.log(`Connection: ${connectionSpeed}, Data Saver: ${dataSaver}, Using: ${useFast ? 'HQ' : 'Optimized'} images`);

    // Handle picture elements with source tags
    const pictures = document.querySelectorAll('picture.responsive-image');
    pictures.forEach(picture => {
      const sources = picture.querySelectorAll('source[data-srcset]');
      sources.forEach(source => {
        if (useFast && source.dataset.srcset) {
          source.srcset = source.dataset.srcset;
        } else if (source.dataset.srcsetSlow) {
          source.srcset = source.dataset.srcsetSlow;
        } else if (source.dataset.srcset) {
          source.srcset = source.dataset.srcset;
        }
      });

      // Handle img tags
      const img = picture.querySelector('img.adaptive-image');
      if (img) {
        if (useFast && img.dataset.srcFast) {
          img.src = img.dataset.srcFast;
        }
        // Otherwise keep the default optimized src
      }
    });

    // Handle standalone adaptive images (not in picture elements)
    const standaloneImages = document.querySelectorAll('img.adaptive-image:not(picture img)');
    standaloneImages.forEach(img => {
      if (useFast && img.dataset.srcFast) {
        img.src = img.dataset.srcFast;
      }
    });
  }

  // Run on page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadAdaptiveImages);
  } else {
    loadAdaptiveImages();
  }

  // Listen for connection changes
  if (navigator.connection) {
    navigator.connection.addEventListener('change', loadAdaptiveImages);
  }
})();
