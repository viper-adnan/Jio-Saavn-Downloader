if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register(jiosaavn.url)
            .then(function(registration) {
                console.log('JioSaavn Service worker ready');
                registration.update();
            })
            .catch(function(error) {
                console.log('Registration failed with ' + error);
            });
    });
}
