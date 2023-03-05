const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    console.log('beforeinstallprompt fired');
    window.delayedPrompt = event; //Save prompt display for custom install button click
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const installPrompt = window.delayedPrompt;
    if(!installPrompt) {
        // console.log('App already installed!');
        return;
    }
    installPrompt.prompt();
    window.delayedPrompt = null;
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    // console.log('appinstalled event fired.');
    window.delayedPrompt = null;
});
