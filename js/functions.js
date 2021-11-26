window.onload = function(){
    let burger = document.querySelector('.burger');
    
    burger.addEventListener('click', activateBurger);

    function activateBurger(){
        burger.classList.remove('lock-animation');
        burger.classList.toggle('active');
    }
}