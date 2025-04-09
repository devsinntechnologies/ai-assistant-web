// @ts-nocheck

// utils/Browser.ts
export const applySafariFixes = () => {
  if (typeof window !== 'undefined') {
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if (isSafari) {
      document.documentElement.classList.add('safari');
      console.log('Applied Safari-specific fixes');
    }
  }
};