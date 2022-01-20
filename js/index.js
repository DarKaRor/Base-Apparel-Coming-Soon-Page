let form = document.querySelector('#emailForm');

// Reg for email
let reg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/


form.addEventListener('submit', function(e) {
    let text = document.querySelector('#email').value;
    text = text.trim();
    if(!reg.test(text) || text.indexOf(' ') !== -1) {
        form.classList.add('error');
        e.preventDefault();
    }

})