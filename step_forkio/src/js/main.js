$(document).ready(function(){

    $('a').on('click', function(e) {
        e.preventDefault();
    });

  });
  
  
  document.getElementById('nav-btn').addEventListener('click', openNavMenu);

function openNavMenu() {
    if (!document.getElementById('nav-btn').classList.contains('open')) {
        document.getElementById('nav-btn').classList.add('open');
        document.getElementById('nav-menu').classList.add('active');
    } else {
        document.getElementById('nav-btn').classList.remove('open');
        document.getElementById('nav-menu').classList.remove('active');
    }
}