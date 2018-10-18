function goTo(url) {
    window.location.href = url;
}

function goToNext() {
    const nextLink = document.querySelector('link[rel=next]');
    if (!nextLink) {
        console.warn('Next link not found');
        return;
    }
    goTo(nextLink.href);
}

goToNext();
