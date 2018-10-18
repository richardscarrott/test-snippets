function goTo(url) {
    window.location.href = url;
}

function goToNext() {
    const nextLink = $('link[rel=next]');
    if (!nextLink) {
        console.warn('Next link not found');
        return;
    }
    goTo(nextLink.href);
}

goToNext();
