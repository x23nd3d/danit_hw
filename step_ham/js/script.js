$(document).scroll(function () {
    $('.navbar').scrollTop() 
    {
        $('.navbar').addClass('scrolled-down');
        $('.logo-cube').removeClass('show-up').addClass('scrolled');
        $('.navbar-nav-link.selected').addClass('changed');
        $('.navbar-nav-link').addClass('hovered');
    }
});

$(window).scroll(function () {
    let scroll = $(window).scrollTop();
    if (!scroll) {
        $('.navbar').removeClass('scrolled-down');
        $('.logo-cube').removeClass('scrolled').addClass('show-up');
        $('.navbar-nav-link.selected').removeClass('changed');
        $('.navbar-nav-link').removeClass('hovered');
    }
});



$(document).ready(function () {
    $('.services-grid-container .services-items').click(function () {
        switchTabs(this, 'active', 'services-content');
    });

    function switchTabs(elem, switchClass, contentClass) {
        $(elem).addClass(switchClass).siblings().removeClass(switchClass);
        // console.log($(this).index())
        const tabsIndex = $(elem).index();
        $(`.${contentClass}`).removeClass(switchClass).eq(tabsIndex).addClass(switchClass);
    }

});




$(document).ready(function () {

    $(".our-work-images").hide();
    $(".our-work-images").slice(0, 12).show();

        let loadMoreBtn =  $('.btn-load-more');
        loadMoreBtn.on('click', function (e) {
        e.preventDefault();
        $(e.currentTarget).attr('disabled', true);
        let loadAnim = $('.loader');
        loadAnim.toggleClass('hide');


        if (!loadAnim.hasClass('hide')) {

            loadMoreBtn.removeClass('active');
        }

        setTimeout(function () {
            loadAnim.toggleClass('hide');
            $(e.currentTarget).attr('disabled', false);
// Need to correct Load more button
            if (loadAnim.hasClass('hide')) {

                loadMoreBtn.addClass('active');
            }
           
        }, 700)

    });
});



$(".btn-load-more").click(function (event) {

    event.preventDefault();
    const imageType = $(".our-work-items.active").data("filter");
    setTimeout(function () {
        $(`.our-work-images${imageType}:hidden`).slice(0, 6).show();
    }, 800)

});



$('.our-work-items').click(function () {
    $(this).addClass('active').siblings().removeClass("active");
    const imageType = $(this).data("filter");
    $(".our-work-images").hide();

    $(`.our-work-images${imageType}`).slice(0, 6).show();

});









// With Jquerry-->

$('.our-work-images.on-hover').mouseover(function () {
    showToolTip(this, 'here')
});

$('.our-work-images.on-hover').mouseout(function () {
    hideToolTip(this, 'here')
});


function showToolTip(elem, className) {
    $(elem).addClass(className);


    //append(`<span class="${className}">${$(elem).data('words')}</span>`)
}

function hideToolTip(elem, className) {
    $(elem).removeClass(className);

    //find(`.${className}`).remove();
}






$('.slider-fb').hide();
$('.slider-fb.active:hidden').show();

$('.person').hide();
$('.person.active:hidden').show();

$('.logo').hide();
$('.logo.active:hidden').show();

$('.left-arrow').click(previousSlides);
$('.right-arrow').click(nextSlides);
$('.little-logo').click(function () {
    selectSlides(this, 'logo-active')
});

function previousSlides() {

    $('.logo.active').removeClass('active').hide().prev().addClass('active').show().siblings().removeClass('active');
    $('.person.active').removeClass('active').hide().prev().addClass('active').show().siblings().removeClass('active');
    const slideIndex = $('.logo.active').index();
    $(`.little-logo`).removeClass('little-logo-active').eq(slideIndex).addClass('little-logo-active');
    $(`.slider-fb`).removeClass('active').hide().eq(slideIndex).addClass('active').show();

    if (slideIndex == -1) {
        $('.logo').siblings().eq(3).show().addClass('active');
        $('.person').siblings().eq(3).show().addClass('active');
        $(`.little-logo`).removeClass('logo-active').eq(slideIndex).addClass('logo-active');
        $(`.slider-fb`).removeClass('active').hide().eq(3).addClass('active').show();

    }

}

function nextSlides() {

    $('.logo.active').removeClass('active').hide().next().addClass('active').show().siblings().removeClass('active');
    $('.person.active').removeClass('active').hide().next().addClass('active').show().siblings().removeClass('active');
    const slideIndex = $('.logo.active').index();
    $(`.little-logo`).removeClass('little-logo-active').eq(slideIndex).addClass('little-logo-active');
    $(`.slider-fb`).removeClass('active').hide().eq(slideIndex).addClass('active').show();

    if (slideIndex == -1) {
        $('.logo').siblings().eq(0).show().addClass('active');
        $('.person').siblings().eq(0).show().addClass('active');
        $(`.little-logo`).removeClass('little-logo-active').eq(0).addClass('little-logo-active');
        $(`.slider-fb`).removeClass('active').hide().eq(0).addClass('active').show();
    }

}

function selectSlides(elem, switchClass) {
    $(elem).addClass(switchClass).siblings().removeClass(switchClass);
    const slideIndex = $(elem).index() - 1;
    $('.logo').addClass('active').show().eq(slideIndex).siblings().removeClass('active').hide();
    $('.person').siblings().removeClass('active').hide().eq(slideIndex).addClass('active').show();
	$('.little-logo').siblings().removeClass('little-logo-active').eq(slideIndex).addClass('little-logo-active');
    $('.slider-fb').siblings().removeClass('active').hide().eq(slideIndex).addClass('active').show();
}






