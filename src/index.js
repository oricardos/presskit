const btnMobile = document.getElementById('btn-mobile');
const menuItems = document.querySelectorAll('#menu li');


function toggleMenu(event){
    if(event.type === 'touchstart'){
        event.preventDefault();
    }
    const nav = document.getElementById('nav');

    nav.classList.toggle('active');

    menuItems.forEach((item) => {
        item.addEventListener('click', function closeMenu(){
            nav.classList.remove('active');
        })
    });
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu); // evento de touch para mobile