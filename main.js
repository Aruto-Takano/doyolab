function hamburger() {
    document.getElementById('global-nav').classList.toggle('nav-open');
}

document.getElementById('ham').addEventListener('click', function () {
　　hamburger();
});