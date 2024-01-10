/**
 * Updates the source of the hero image based on the window width.
 */
function updateHeroImageSrc(width) {

  if (width >= 768 && width < 1024) {
    document.getElementById("hero-keyboard").src = "assets/images/tablet/image-keyboard.jpg";
    document.getElementById("hero-keyboard").width = "478";
    document.getElementById("hero-keyboard").height = "425";
  } else if (width >= 1024) {
    document.getElementById("hero-keyboard").src = "assets/images/desktop/image-keyboard.jpg";
    document.getElementById("hero-keyboard").width = "540";
    document.getElementById("hero-keyboard").height = "480";
  } else {
    document.getElementById("hero-keyboard").src = "assets/images/mobile/image-keyboard.jpg";
    document.getElementById("hero-keyboard").width = "372";
    document.getElementById("hero-keyboard").height = "331";
  }
}

/**
 * Updates product images
 */
function updateProductImagesSrcs(width) {
    if (width >= 768 && width < 1024) {
        document.getElementById("left-product-image").src = "assets/images/tablet/image-phone-and-keyboard.jpg";
        document.getElementById("left-product-image").width = "214";
        document.getElementById("left-product-image").height = "320";

        document.getElementById("right-product-image").src = "assets/images/tablet/image-glass-and-keyboard.jpg";
        document.getElementById("right-product-image").width = "445";
        document.getElementById("right-product-image").height = "320";
      } else if (width >= 1024) {
        document.getElementById("left-product-image").src = "assets/images/desktop/image-phone-and-keyboard.jpg";
        document.getElementById("left-product-image").width = "255";
        document.getElementById("left-product-image").height = "480";

        document.getElementById("right-product-image").src = "assets/images/desktop/image-glass-and-keyboard.jpg";
        document.getElementById("right-product-image").width = "445";
        document.getElementById("right-product-image").height = "480";
      } else {
        document.getElementById("left-product-image").src = "assets/images/mobile/image-phone-and-keyboard.jpg";
        document.getElementById("left-product-image").width = "129";
        document.getElementById("left-product-image").height = "193";

        document.getElementById("right-product-image").src = "assets/images/mobile/image-glass-and-keyboard.jpg";
        document.getElementById("right-product-image").width = "220";
        document.getElementById("right-product-image").height = "193";
      }
}

/** 
 * Updates all images
 */
function updateImagesSrcs() {
    var width = window.innerWidth;

    updateHeroImageSrc(width);
    updateProductImagesSrcs(width);
}

// Updates images once the script is loaded
updateImagesSrcs();

// Event listener to call the function on window resize
window.addEventListener("resize", updateImagesSrcs);