
// Footer Loader Script
document.addEventListener("DOMContentLoaded", function () {
    const footerPlaceholder = document.getElementById("footer-placeholder");

    // Check if footerContent is defined (from footer-content.js)
    if (footerPlaceholder && typeof footerContent !== 'undefined') {
        footerPlaceholder.innerHTML = footerContent;

        // Re-initialize background images for the footer if present
        const footer = footerPlaceholder.querySelector('[data-background]');
        if (footer && userHasBackgroundSetup) {
            // Assuming jQuery is available as per site stack
            $(footer).css("background-image", "url(" + $(footer).attr("data-background") + ") ");
        }
    } else if (footerPlaceholder) {
        // Fallback or error logging
        console.error("footerContent variable is not defined. Make sure footer-content.js is loaded.");
    }
});

// Helper check for background setup function
// This logic mimics what is in main.js
const userHasBackgroundSetup = typeof $ !== 'undefined' && $.fn && $.fn.jquery;
