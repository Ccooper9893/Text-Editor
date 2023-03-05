const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
butInstall.style.display = 'none';
window.addEventListener('beforeinstallprompt', (event) => { //Fires if a PWA can be installed
    console.log('beforeinstallprompt fired');
    window.delayedPrompt = event; //Save prompt display for custom install button click
    butInstall.style.display = 'block';
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const installPrompt = window.delayedPrompt;
    if(!installPrompt) {
        // console.log('App already installed!');
        return;
    }
    installPrompt.prompt();
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    // console.log('appinstalled event fired.');
    window.delayedPrompt = null; //Don't need prompt anymore
    butInstall.style.display = 'none';
});
