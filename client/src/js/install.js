const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault(); //Prevent prompt from immediately appearing 
    window.delayedPrompt = event; //Save prompt display for custom install button click
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const installPrompt = window.delayedPrompt;
    if(!installPrompt) {
        console.log('App already installed!');
        return;
    }
    installPrompt();
    window.delayedPrompt = null;
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    window.delayedPrompt = null;
});
