document.addEventListener('DOMContentLoaded', function() {

    const button = document.querySelector('button')
    const body = document.querySelector('body')
    const status = document.querySelector('.status')

    function lightSwitch() {
        if (button.classList.contains('on')) {
            button.classList.remove('on');
            button.classList.add('off');
            body.classList.remove('light');
            body.classList.add('dark');
            status.innerText = 'Hey, who turned off the lights?';
        } else {
            button.classList.remove('off');
            button.classList.add('on');
            body.classList.remove('dark');
            body.classList.add('light');
            status.innerText = "It's so bright in here!";
        }
    }

    button.addEventListener('click', lightSwitch);

});