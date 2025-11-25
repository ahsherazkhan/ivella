/**
 * Instagram Redirect Utility
 * Handles redirecting users to Instagram profile for purchases
 */

// Instagram handle
const INSTAGRAM_HANDLE = 'ivellaofficial';

/**
 * Redirect to Instagram profile
 * @param {string} handle - Instagram handle (optional, uses default if not provided)
 */
export const redirectToInstagram = (handle = INSTAGRAM_HANDLE) => {
  const instagramUrl = `https://www.instagram.com/${handle}/`;
  window.open(instagramUrl, '_blank');
};

/**
 * Get Instagram URL for a specific handle
 * @param {string} handle - Instagram handle
 * @returns {string} Instagram URL
 */
export const getInstagramUrl = (handle = INSTAGRAM_HANDLE) => {
  return `https://www.instagram.com/${handle}/`;
};

export default {
  redirectToInstagram,
  getInstagramUrl
};