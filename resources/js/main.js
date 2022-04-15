// MIXITUP

var mixer =mixitup('.work-grid')

//hamburger menu

function openMenu() {
    document.getElementById('hb-menu').style.width = "100%"
}

function closeMenu() {
    document.getElementById('hb-menu').style.width = "0%"
}

//smooth scroll
$('.hb-menu-item li a, .scroll-down a').on('click', function(){
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top 
    },1000);
    return false
});




$('.hb-menu-item li a, .totop-up a').on('click', function(){
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top 
    },1000);
    return false
});

//wow
wow = new WOW(
    {
  
    mobile:       false       // default
  
  }
  )
  wow.init();





