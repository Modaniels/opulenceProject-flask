// Function to animate the counting effect
function animateCount(element, start, end, duration) {
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = value + (element.dataset.suffix || "");
        if (progress < 1) {
            requestAnimationFrame(animation);
        }
    }
    requestAnimationFrame(animation);
}

// Wait until the DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    // Select all elements that need counting
    const counters = document.querySelectorAll(".count-number");

    // Apply animation to each counter
    counters.forEach(counter => {
        const endValue = parseInt(counter.getAttribute("data-target"));
        const duration = parseInt(counter.getAttribute("data-duration")) || 2000;
        animateCount(counter, 0, endValue, duration);
    });
});
