const divClick = document.getElementById('div_click');
const divAparecer = document.getElementById('div_aparecer');

divClick.addEventListener('click', () => {
    if (divAparecer.classList.contains('show')) {
        divAparecer.classList.remove('show'); 
    } else {
        divAparecer.classList.add('show'); 
    }
});

const divClick2 = document.getElementById('Reloaded');
const divAparecer2 = document.getElementById('Reloaded_Aparecer');

divClick2.addEventListener('click', () => {
    if (divAparecer2.classList.contains('show')) {
        divAparecer2.classList.remove('show'); 
    } else {
        divAparecer2.classList.add('show'); 
    }
});

const divClick3 = document.getElementById('Revolutions');
const divAparecer3 = document.getElementById('Revolutions_Aparecer');

divClick3.addEventListener('click', () => {
    if (divAparecer3.classList.contains('show')) {
        divAparecer3.classList.remove('show'); 
    } else {
        divAparecer3.classList.add('show'); 
    }
});

const divClick4 = document.getElementById('Resurrections');
const divAparecer4 = document.getElementById('Resurrections_Aparecer');

divClick4.addEventListener('click', () => {
    if (divAparecer4.classList.contains('show')) {
        divAparecer4.classList.remove('show'); 
    } else {
        divAparecer4.classList.add('show'); 
    }
});


