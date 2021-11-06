//changing bg-color and font-color on mouseover
let orderBtn = document.getElementById('order-form-but');
orderBtn.onmouseover = function (event) {
    let target = event.target;
    target.style.background = '#cd9b33';
    target.style.color = 'white';
};

orderBtn.onmouseout = function (event) {
    let target = event.target;
    target.style.background = '';
    target.style.color = '';
};

//changing box-shadow and border on giving input to form fields
let formInp = document.getElementsByClassName('order-form-input');
Array.from(formInp).forEach(e => {
    e.addEventListener('input', (ele) => {
        ele.target.style.boxShadow = '0 0px 10px rgba(149, 240, 122, 0.75)';
        ele.target.style.border = '2px solid rgba(235, 98, 98, 0.4)';
    })
})
Array.from(formInp).forEach(e => {
    e.addEventListener('key', (ele) => {
        console.log('lksdk');
        ele.target.style.boxShadow = '';
        ele.target.style.border = '';
    })
})

//chevking whether the form is filled or not completely
document.getElementById('order-form-but').addEventListener('click', (e) => {
    const validName = document.getElementById('order-name').value;
    const validMail = document.getElementById('order-email').value;
    const validNum = document.getElementById('order-num').value;
    if (validName === '' || validMail === '' || validNum === '') {
        const div = document.createElement('div');
        div.className = 'error';
        div.appendChild(document.createTextNode('Please, fill all details'));
        const main = document.querySelector('.order-form-flex-right');
        const before = document.getElementById('odr_form');
        main.insertBefore(div, before);
        e.preventDefault();
        setTimeout(() => {
            document.querySelector('.error').remove()
        }, 2000);
    }
    else {
        const div = document.createElement('div');
        div.className = 'success';
        div.appendChild(document.createTextNode('Form filled'));
        const main = document.querySelector('.order-form-flex-right');
        const before = document.getElementById('odr_form');
        main.insertBefore(div, before);
        e.preventDefault();
        setTimeout(() => {
            document.querySelector('.error').remove()
        }, 2000);
    }
});
