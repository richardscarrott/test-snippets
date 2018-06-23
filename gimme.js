// Re-enable scrolling
document.querySelectorAll('*').forEach((el) => {
    if (window.getComputedStyle(el).overflow === 'hidden') {
         el.style.overflow = 'auto'
    }
});

// TODO: Find and destroy adblock blocker modals -- https://github.com/reek/anti-adblock-killer/?
// https://www.washingtonpost.com/ '.adblocker-root'

// TODO: Close cookie messages
