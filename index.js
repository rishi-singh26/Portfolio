let submitted = false;

document.getElementById("hidden_iframe").addEventListener('load', () => {
    if (submitted) {
        window.location = '#';
        document.getElementById("connect-form").reset();
    }
})

document.getElementById("connect-form").addEventListener('submit', () => {
    submitted = true;
});