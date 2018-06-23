// Re-enable scrolling
document.querySelectorAll('*').forEach((el) => {
    if (window.getComputedStyle(el).overflow === 'hidden') {
         el.style.overflow = 'auto'
    }
});

// TODO: Find and destroy adblock blocker modals
// TODO: Close cookie messages
