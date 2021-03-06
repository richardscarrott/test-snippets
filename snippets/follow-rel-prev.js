function goTo(url) {
    window.location.href = url;
}

function goToPrev() {
    const prevLink = document.querySelector('link[rel=prev]');
    if (!prevLink) {
        console.warn('Prev link not found');
        return;
    }
    goTo(prevLink.href);
}

goToPrev();
