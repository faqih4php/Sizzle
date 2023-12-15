const menuToggle = document.querySelector('.menu-toggle input');
const navigation = document.querySelector('.navigation ul');

menuToggle.addEventListener('click' , function() {
    navigation.classList.toggle('slide')
});