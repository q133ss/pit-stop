//! Header 

$('#headerSliderListItem-1').on('click', function() {
    $('.ind-header__block-title').html('Алмазная полировка автомобильных дисков')
    $('#headerSliderListItem-1').addClass('ind-header__block-slider-list-item-active')
    $('#headerSliderListItem-2').removeClass('ind-header__block-slider-list-item-active')
    $('#headerSliderListItem-3').removeClass('ind-header__block-slider-list-item-active')
    $('#headerSliderListItem-4').removeClass('ind-header__block-slider-list-item-active')
    $('#headerSliderListItem-5').removeClass('ind-header__block-slider-list-item-active')
    $('.ind-header__block-banner-item').attr('src', '/wp-content/themes/pit-stop/img/header-banner-1.png')
    $('.ind-header__block-banner-add img').attr('src', '/wp-content/themes/pit-stop/img/header-banners-1.png')
    $('.ind-header__block-banner-add p').html('002')
    $('#headerSliderPaginationItem-1').addClass('ind-header__block-pagination-item-active')
    $('#headerSliderPaginationItem-2').removeClass('ind-header__block-pagination-item-active')
    $('#headerSliderPaginationItem-3').removeClass('ind-header__block-pagination-item-active')
    $('#headerSliderPaginationItem-4').removeClass('ind-header__block-pagination-item-active')
    $('#headerSliderPaginationItem-5').removeClass('ind-header__block-pagination-item-active')
    // $('#headerSliderListItem-1').addClass('blocking')
    // $('#headerSliderListItem-2').removeClass('blocking')
    // $('#headerSliderListItem-3').removeClass('blocking')
    // $('#headerSliderListItem-4').removeClass('blocking')
    // $('#headerSliderListItem-5').removeClass('blocking')
    changeSlide(0)
});
$('#headerSliderListItem-2').on('click', function() {
    $('.ind-header__block-title').html('Ремонт дисков')
    $('#headerSliderListItem-2').addClass('ind-header__block-slider-list-item-active')
    $('#headerSliderListItem-1').removeClass('ind-header__block-slider-list-item-active')
    $('#headerSliderListItem-3').removeClass('ind-header__block-slider-list-item-active')
    $('#headerSliderListItem-4').removeClass('ind-header__block-slider-list-item-active')
    $('#headerSliderListItem-5').removeClass('ind-header__block-slider-list-item-active')
    $('.ind-header__block-banner-item').attr('src', '/wp-content/themes/pit-stop/img/header-banner-2.png')
    $('.ind-header__block-banner-add img').attr('src', '/wp-content/themes/pit-stop/img/header-banners-2.png')
    $('.ind-header__block-banner-add p').html('003')
    $('#headerSliderPaginationItem-2').addClass('ind-header__block-pagination-item-active')
    $('#headerSliderPaginationItem-1').removeClass('ind-header__block-pagination-item-active')
    $('#headerSliderPaginationItem-3').removeClass('ind-header__block-pagination-item-active')
    $('#headerSliderPaginationItem-4').removeClass('ind-header__block-pagination-item-active')
    $('#headerSliderPaginationItem-5').removeClass('ind-header__block-pagination-item-active')
    // $('#headerSliderListItem-2').addClass('blocking')
    // $('#headerSliderListItem-1').removeClass('blocking')
    // $('#headerSliderListItem-3').removeClass('blocking')
    // $('#headerSliderListItem-4').removeClass('blocking')
    // $('#headerSliderListItem-5').removeClass('blocking')
    changeSlide(1)
});
$('#headerSliderListItem-3').on('click', function() {
    $('.ind-header__block-title').html('Порошковая покраска')
    $('#headerSliderListItem-3').addClass('ind-header__block-slider-list-item-active')
    $('#headerSliderListItem-2').removeClass('ind-header__block-slider-list-item-active')
    $('#headerSliderListItem-1').removeClass('ind-header__block-slider-list-item-active')
    $('#headerSliderListItem-4').removeClass('ind-header__block-slider-list-item-active')
    $('#headerSliderListItem-5').removeClass('ind-header__block-slider-list-item-active')
    $('.ind-header__block-banner-item').attr('src', '/wp-content/themes/pit-stop/img/header-banner-3.png')
    $('.ind-header__block-banner-add img').attr('src', '/wp-content/themes/pit-stop/img/header-banners-3.png')
    $('.ind-header__block-banner-add p').html('004')
    $('#headerSliderPaginationItem-3').addClass('ind-header__block-pagination-item-active')
    $('#headerSliderPaginationItem-2').removeClass('ind-header__block-pagination-item-active')
    $('#headerSliderPaginationItem-1').removeClass('ind-header__block-pagination-item-active')
    $('#headerSliderPaginationItem-4').removeClass('ind-header__block-pagination-item-active')
    $('#headerSliderPaginationItem-5').removeClass('ind-header__block-pagination-item-active')
    // $('#headerSliderListItem-3').addClass('blocking')
    // $('#headerSliderListItem-1').removeClass('blocking')
    // $('#headerSliderListItem-2').removeClass('blocking')
    // $('#headerSliderListItem-4').removeClass('blocking')
    // $('#headerSliderListItem-5').removeClass('blocking')
    changeSlide(2)
});
$('#headerSliderListItem-4').on('click', function() {
    $('.ind-header__block-title').html('Установка шин')
    $('#headerSliderListItem-4').addClass('ind-header__block-slider-list-item-active')
    $('#headerSliderListItem-1').removeClass('ind-header__block-slider-list-item-active')
    $('#headerSliderListItem-2').removeClass('ind-header__block-slider-list-item-active')
    $('#headerSliderListItem-3').removeClass('ind-header__block-slider-list-item-active')
    $('#headerSliderListItem-5').removeClass('ind-header__block-slider-list-item-active')
    $('.ind-header__block-banner-item').attr('src', '/wp-content/themes/pit-stop/img/header-banner-4.png')
    $('.ind-header__block-banner-add img').attr('src', '/wp-content/themes/pit-stop/img/header-banners-4.png')
    $('.ind-header__block-banner-add p').html('001')
    $('#headerSliderPaginationItem-4').addClass('ind-header__block-pagination-item-active')
    $('#headerSliderPaginationItem-3').removeClass('ind-header__block-pagination-item-active')
    $('#headerSliderPaginationItem-2').removeClass('ind-header__block-pagination-item-active')
    $('#headerSliderPaginationItem-1').removeClass('ind-header__block-pagination-item-active')
    $('#headerSliderPaginationItem-5').removeClass('ind-header__block-pagination-item-active')
    // $('#headerSliderListItem-4').addClass('blocking')
    // $('#headerSliderListItem-1').removeClass('blocking')
    // $('#headerSliderListItem-2').removeClass('blocking')
    // $('#headerSliderListItem-3').removeClass('blocking')
    // $('#headerSliderListItem-5').removeClass('blocking')
    changeSlide(3)
});

let activeContentIndex = 0
let elementContentCount = 4

$('#headerSliderArrowPrev').on('click', function() {
    changeSlide('prev')
});
$('#headerSliderArrowNext').on('click', function() {
    changeSlide('next')
});
function changeSlide(id) { 
    if(id === 'next') {
        activeContentIndex++
        if (activeContentIndex === elementContentCount) {
            activeContentIndex = 0
        } 
    } else if (id === 'prev') {
        activeContentIndex--
        if (activeContentIndex < 0) {
            activeContentIndex = elementContentCount - 1
        }
    }
    if(id == 0) {
        activeContentIndex = 0
        $('#headerSliderListItem-1').addClass('blocking')
        $('#headerSliderListItem-2').removeClass('blocking')
        $('#headerSliderListItem-3').removeClass('blocking')
        $('#headerSliderListItem-4').removeClass('blocking')
        $('#headerSliderListItem-5').removeClass('blocking')
    }
    if(id == 1) {
        activeContentIndex = 1
        $('#headerSliderListItem-2').addClass('blocking')
        $('#headerSliderListItem-1').removeClass('blocking')
        $('#headerSliderListItem-3').removeClass('blocking')
        $('#headerSliderListItem-4').removeClass('blocking')
        $('#headerSliderListItem-5').removeClass('blocking')
    }
    if(id == 2) {
        activeContentIndex = 2
        $('#headerSliderListItem-3').addClass('blocking')
        $('#headerSliderListItem-2').removeClass('blocking')
        $('#headerSliderListItem-1').removeClass('blocking')
        $('#headerSliderListItem-4').removeClass('blocking')
        $('#headerSliderListItem-5').removeClass('blocking')
    }
    if(id == 3) {
        activeContentIndex = 3
        $('#headerSliderListItem-4').addClass('blocking')
        $('#headerSliderListItem-2').removeClass('blocking')
        $('#headerSliderListItem-3').removeClass('blocking')
        $('#headerSliderListItem-1').removeClass('blocking')
        $('#headerSliderListItem-5').removeClass('blocking')
    }
    console.log(activeContentIndex)
    if(activeContentIndex == 0) {
        $('.ind-header__block-title').html('Алмазная полировка автомобильных дисков')
        $('#headerSliderListItem-1').addClass('ind-header__block-slider-list-item-active')
        $('#headerSliderListItem-2').removeClass('ind-header__block-slider-list-item-active')
        $('#headerSliderListItem-3').removeClass('ind-header__block-slider-list-item-active')
        $('#headerSliderListItem-4').removeClass('ind-header__block-slider-list-item-active')
        $('#headerSliderListItem-5').removeClass('ind-header__block-slider-list-item-active')
        $('.ind-header__block-banner-item').attr('src', '/wp-content/themes/pit-stop/img/header-banner-1.png')
        $('.ind-header__block-banner-add img').attr('src', '/wp-content/themes/pit-stop/img/header-banners-1.png')
        $('.ind-header__block-banner-add p').html('002')
        $('#headerSliderPaginationItem-1').addClass('ind-header__block-pagination-item-active')
        $('#headerSliderPaginationItem-2').removeClass('ind-header__block-pagination-item-active')
        $('#headerSliderPaginationItem-3').removeClass('ind-header__block-pagination-item-active')
        $('#headerSliderPaginationItem-4').removeClass('ind-header__block-pagination-item-active')
        $('#headerSliderPaginationItem-5').removeClass('ind-header__block-pagination-item-active')
    }
    if(activeContentIndex == 1) {
        $('.ind-header__block-title').html('Ремонт дисков')
        $('#headerSliderListItem-2').addClass('ind-header__block-slider-list-item-active')
        $('#headerSliderListItem-1').removeClass('ind-header__block-slider-list-item-active')
        $('#headerSliderListItem-3').removeClass('ind-header__block-slider-list-item-active')
        $('#headerSliderListItem-4').removeClass('ind-header__block-slider-list-item-active')
        $('#headerSliderListItem-5').removeClass('ind-header__block-slider-list-item-active')
        $('.ind-header__block-banner-item').attr('src', '/wp-content/themes/pit-stop/img/header-banner-2.png')
        $('.ind-header__block-banner-add img').attr('src', '/wp-content/themes/pit-stop/img/header-banners-2.png')
        $('.ind-header__block-banner-add p').html('003')
        $('#headerSliderPaginationItem-2').addClass('ind-header__block-pagination-item-active')
        $('#headerSliderPaginationItem-1').removeClass('ind-header__block-pagination-item-active')
        $('#headerSliderPaginationItem-3').removeClass('ind-header__block-pagination-item-active')
        $('#headerSliderPaginationItem-4').removeClass('ind-header__block-pagination-item-active')
        $('#headerSliderPaginationItem-5').removeClass('ind-header__block-pagination-item-active')
    }
    if(activeContentIndex == 2) {
        $('.ind-header__block-title').html('Порошковая покраска')
        $('#headerSliderListItem-3').addClass('ind-header__block-slider-list-item-active')
        $('#headerSliderListItem-2').removeClass('ind-header__block-slider-list-item-active')
        $('#headerSliderListItem-1').removeClass('ind-header__block-slider-list-item-active')
        $('#headerSliderListItem-4').removeClass('ind-header__block-slider-list-item-active')
        $('#headerSliderListItem-5').removeClass('ind-header__block-slider-list-item-active')
        $('.ind-header__block-banner-item').attr('src', '/wp-content/themes/pit-stop/img/header-banner-3.png')
        $('.ind-header__block-banner-add img').attr('src', '/wp-content/themes/pit-stop/img/header-banners-3.png')
        $('.ind-header__block-banner-add p').html('004')
        $('#headerSliderPaginationItem-3').addClass('ind-header__block-pagination-item-active')
        $('#headerSliderPaginationItem-2').removeClass('ind-header__block-pagination-item-active')
        $('#headerSliderPaginationItem-1').removeClass('ind-header__block-pagination-item-active')
        $('#headerSliderPaginationItem-4').removeClass('ind-header__block-pagination-item-active')
        $('#headerSliderPaginationItem-5').removeClass('ind-header__block-pagination-item-active')
    }
    if(activeContentIndex == 3) {
        $('.ind-header__block-title').html('Установка шин')
        $('#headerSliderListItem-4').addClass('ind-header__block-slider-list-item-active')
        $('#headerSliderListItem-1').removeClass('ind-header__block-slider-list-item-active')
        $('#headerSliderListItem-2').removeClass('ind-header__block-slider-list-item-active')
        $('#headerSliderListItem-3').removeClass('ind-header__block-slider-list-item-active')
        $('#headerSliderListItem-5').removeClass('ind-header__block-slider-list-item-active')
        $('.ind-header__block-banner-item').attr('src', '/wp-content/themes/pit-stop/img/header-banner-4.png')
        $('.ind-header__block-banner-add img').attr('src', '/wp-content/themes/pit-stop/img/header-banners-4.png')
        $('.ind-header__block-banner-add p').html('001')
        $('#headerSliderPaginationItem-4').addClass('ind-header__block-pagination-item-active')
        $('#headerSliderPaginationItem-3').removeClass('ind-header__block-pagination-item-active')
        $('#headerSliderPaginationItem-2').removeClass('ind-header__block-pagination-item-active')
        $('#headerSliderPaginationItem-1').removeClass('ind-header__block-pagination-item-active')
        $('#headerSliderPaginationItem-5').removeClass('ind-header__block-pagination-item-active')
    }
}

//! ---------------------------------------------------------------------------------



//! Example 


$('#indexExampleTabsElement-1').on('click', function() {
    $('#indexExampleTabsElement-1').addClass('ind-examples__block-tabs-item-active')
    $('#indexExampleTabsElement-2').removeClass('ind-examples__block-tabs-item-active')
    $('#indexExampleTabsElement-3').removeClass('ind-examples__block-tabs-item-active')
    $('#indexExampleTabsElement-4').removeClass('ind-examples__block-tabs-item-active')
    $('#indexExampleTabsElement-5').removeClass('ind-examples__block-tabs-item-active')
    $('#indexExampleTabsBlock-1').removeClass('display-n')
    $('#indexExampleTabsBlock-2').addClass('display-n')
    $('#indexExampleTabsBlock-3').addClass('display-n')
    $('#indexExampleTabsBlock-4').addClass('display-n')
    $('#indexExampleTabsBlock-5').addClass('display-n')
});
$('#indexExampleTabsElement-2').on('click', function() {
    $('#indexExampleTabsElement-2').addClass('ind-examples__block-tabs-item-active')
    $('#indexExampleTabsElement-1').removeClass('ind-examples__block-tabs-item-active')
    $('#indexExampleTabsElement-3').removeClass('ind-examples__block-tabs-item-active')
    $('#indexExampleTabsElement-4').removeClass('ind-examples__block-tabs-item-active')
    $('#indexExampleTabsElement-5').removeClass('ind-examples__block-tabs-item-active')
    $('#indexExampleTabsBlock-2').removeClass('display-n')
    $('#indexExampleTabsBlock-1').addClass('display-n')
    $('#indexExampleTabsBlock-3').addClass('display-n')
    $('#indexExampleTabsBlock-4').addClass('display-n')
    $('#indexExampleTabsBlock-5').addClass('display-n')
});
$('#indexExampleTabsElement-3').on('click', function() {
    $('#indexExampleTabsElement-3').addClass('ind-examples__block-tabs-item-active')
    $('#indexExampleTabsElement-2').removeClass('ind-examples__block-tabs-item-active')
    $('#indexExampleTabsElement-1').removeClass('ind-examples__block-tabs-item-active')
    $('#indexExampleTabsElement-4').removeClass('ind-examples__block-tabs-item-active')
    $('#indexExampleTabsElement-5').removeClass('ind-examples__block-tabs-item-active')
    $('#indexExampleTabsBlock-3').removeClass('display-n')
    $('#indexExampleTabsBlock-2').addClass('display-n')
    $('#indexExampleTabsBlock-1').addClass('display-n')
    $('#indexExampleTabsBlock-4').addClass('display-n')
    $('#indexExampleTabsBlock-5').addClass('display-n')
});
$('#indexExampleTabsElement-4').on('click', function() {
    $('#indexExampleTabsElement-4').addClass('ind-examples__block-tabs-item-active')
    $('#indexExampleTabsElement-2').removeClass('ind-examples__block-tabs-item-active')
    $('#indexExampleTabsElement-3').removeClass('ind-examples__block-tabs-item-active')
    $('#indexExampleTabsElement-1').removeClass('ind-examples__block-tabs-item-active')
    $('#indexExampleTabsElement-5').removeClass('ind-examples__block-tabs-item-active')
    $('#indexExampleTabsBlock-4').removeClass('display-n')
    $('#indexExampleTabsBlock-2').addClass('display-n')
    $('#indexExampleTabsBlock-3').addClass('display-n')
    $('#indexExampleTabsBlock-1').addClass('display-n')
    $('#indexExampleTabsBlock-5').addClass('display-n')
});
$('#indexExampleTabsElement-5').on('click', function() {
    $('#indexExampleTabsElement-5').addClass('ind-examples__block-tabs-item-active')
    $('#indexExampleTabsElement-2').removeClass('ind-examples__block-tabs-item-active')
    $('#indexExampleTabsElement-3').removeClass('ind-examples__block-tabs-item-active')
    $('#indexExampleTabsElement-4').removeClass('ind-examples__block-tabs-item-active')
    $('#indexExampleTabsElement-1').removeClass('ind-examples__block-tabs-item-active')
    $('#indexExampleTabsBlock-5').removeClass('display-n')
    $('#indexExampleTabsBlock-2').addClass('display-n')
    $('#indexExampleTabsBlock-3').addClass('display-n')
    $('#indexExampleTabsBlock-4').addClass('display-n')
    $('#indexExampleTabsBlock-1').addClass('display-n')
});




//! ---------------------------------------------------------------------------------



//! Slider 


var indexSliderCars_1 = new Swiper(".indexSliderCars-1", {
    slidesPerView: 4,
    spaceBetween: 16,
    navigation: {
        nextEl: ".ind-slider__block-slider #headerSliderTabsControlsSlider-1 .swiper-button-next",
        prevEl: ".ind-slider__block-slider #headerSliderTabsControlsSlider-1 .swiper-button-prev",
    },
    pagination: {
        el: ".ind-slider__block-slider #headerSliderTabsControlsSlider-1 .swiper-pagination",
    },
    keyboard: true,
    breakpoints: {
        1390: {
            slidesPerView: 4,
            spaceBetweenSlides: 0
        },
        980: {
            slidesPerView: 3,
            spaceBetweenSlides: 0
        },
        690: {
            slidesPerView: 2,
            spaceBetweenSlides: 0
        },
        0: {
            slidesPerView: 1,
            spaceBetweenSlides: 0
        }
    }
});
var indexSliderCars_2 = new Swiper(".indexSliderCars-2", {
    slidesPerView: 4,
    spaceBetween: 0,
    navigation: {
        nextEl: ".ind-slider__block-slider #headerSliderTabsControlsSlider-2 .swiper-button-next",
        prevEl: ".ind-slider__block-slider #headerSliderTabsControlsSlider-2 .swiper-button-prev",
    },
    pagination: {
        el: ".ind-slider__block-slider #headerSliderTabsControlsSlider-2 .swiper-pagination",
    },
    keyboard: true,
    breakpoints: {
        1390: {
            slidesPerView: 4,
            spaceBetweenSlides: 0
        },
        980: {
            slidesPerView: 3,
            spaceBetweenSlides: 0
        },
        690: {
            slidesPerView: 2,
            spaceBetweenSlides: 0
        },
        0: {
            slidesPerView: 1,
            spaceBetweenSlides: 0
        }
    }
});
var indexSliderCars_3 = new Swiper(".indexSliderCars-3", {
    slidesPerView: 4,
    spaceBetween: 16,
    navigation: {
        nextEl: ".ind-slider__block-slider #headerSliderTabsControlsSlider-3 .swiper-button-next",
        prevEl: ".ind-slider__block-slider #headerSliderTabsControlsSlider-3 .swiper-button-prev",
    },
    pagination: {
        el: ".ind-slider__block-slider #headerSliderTabsControlsSlider-3 .swiper-pagination",
    },
    keyboard: true,
    breakpoints: {
        1390: {
            slidesPerView: 4,
            spaceBetweenSlides: 0
        },
        980: {
            slidesPerView: 3,
            spaceBetweenSlides: 0
        },
        690: {
            slidesPerView: 2,
            spaceBetweenSlides: 0
        },
        0: {
            slidesPerView: 1,
            spaceBetweenSlides: 0
        }
    }
});




//! ---------------------------------------------------------------------------------



//! Price 



$(function() {
    $('#type').css('display', 'none')
    $('#type').after('<div class="type-select-item"><div class="type-select-placeholder">Тип диска</div><div id="typePriceSelect" class="type-select-wrapper display-n"></div></div>')
    let count = $('#type').children('option').length
    for( let i = 0; i < count; i++) {
        let arrows = $('#type').children('option').eq(i).val()
        let newElementBlock = document.createElement("button");
        newElementBlock.classList.add("type-select-element")
        newElementBlock.id = `type-select-element-${i}`;
        newElementBlock.innerHTML = `${arrows}`
        document.getElementById("typePriceSelect").appendChild(newElementBlock);
        $(`#type-select-element-${i}`).attr('value', `${arrows}`)
    }
    $('#type-select-element-0').css('display', 'none')
    $('.type-select-item').on('click', function() {
        $('.type-select-wrapper').toggleClass('display-n')
        $(this).toggleClass('type-select-item-active')
    })
    $(".type-select-element").on('click', function() {
        let idElement = this.id
        let valueElement = $(`#${idElement}`).val()
        $('.type-select-placeholder').html(valueElement)
        $('#type option:nth-child(1)').val(valueElement)
        $('#type option:nth-child(1)').html(valueElement)
    })
})
$(function() {
    $('#count').css('display', 'none')
    $('#count').after('<div class="count-select-item"><div class="count-select-placeholder">Количество дисков</div><div id="countPriceSelect" class="count-select-wrapper display-n"></div></div>')
    let count = $('#count').children('option').length
    for( let i = 0; i < count; i++) {
        let arrows = $('#count').children('option').eq(i).val()
        let newElementBlock = document.createElement("button");
        newElementBlock.classList.add("count-select-element")
        newElementBlock.id = `count-select-element-${i}`;
        newElementBlock.innerHTML = `${arrows}`
        document.getElementById("countPriceSelect").appendChild(newElementBlock);
        $(`#count-select-element-${i}`).attr('value', `${arrows}`)
    }
    $('#count-select-element-0').css('display', 'none')
    $('.count-select-item').on('click', function() {
        $('.count-select-wrapper').toggleClass('display-n')
        $(this).toggleClass('count-select-item-active')
    })
    $(".count-select-element").on('click', function() {
        let idElement = this.id
        let valueElement = $(`#${idElement}`).val()
        $('.count-select-placeholder').html(valueElement)
        $('#count option:nth-child(1)').val(valueElement)
        $('#count option:nth-child(1)').html(valueElement)
    })
})
$(function() {
    $('#radios').css('display', 'none')
    $('#radios').after('<div class="radios-select-item"><div class="radios-select-placeholder">Тип диска</div><div id="radiosPriceSelect" class="radios-select-wrapper display-n"></div></div>')
    let count = $('#radios').children('option').length
    for( let i = 0; i < count; i++) {
        let arrows = $('#radios').children('option').eq(i).val()
        let newElementBlock = document.createElement("button");
        newElementBlock.classList.add("radios-select-element")
        newElementBlock.id = `radios-select-element-${i}`;
        newElementBlock.innerHTML = `${arrows}`
        document.getElementById("radiosPriceSelect").appendChild(newElementBlock);
        $(`#radios-select-element-${i}`).attr('value', `${arrows}`)
    }
    $('#radios-select-element-0').css('display', 'none')
    $('.radios-select-item').on('click', function() {
        $('.radios-select-wrapper').toggleClass('display-n')
        $(this).toggleClass('radios-select-item-active')
    })
    $(".radios-select-element").on('click', function() {
        let idElement = this.id
        let valueElement = $(`#${idElement}`).val()
        $('.radios-select-placeholder').html(valueElement)
        $('#radios option:nth-child(1)').val(valueElement)
        $('#radios option:nth-child(1)').html(valueElement)
    })
})



window.addEventListener('scroll', function() {
    if(pageYOffset > 50) {
        $('header').css('background', '#171725')
    } else {
        $('header').css('background', 'transparent')
    }
});



$('#menuOpen').on('click', function() {
    $('.menu').removeClass('display-n')
    $('body').css('overflow', 'hidden')
});
$('#menuClose').on('click', function() {
    $('.menu').addClass('display-n')
    $('body').css('overflow', 'visible')
});




$('#headerSliderTabsElement-1').on('click', function() {
    $('#headerSliderTabsElement-1').addClass('ind-slider__block-tabs-item-active')
    $('#headerSliderTabsElement-2').removeClass('ind-slider__block-tabs-item-active')
    $('#headerSliderTabsElement-3').removeClass('ind-slider__block-tabs-item-active')
    $('#headerSliderTabsSlider-1').removeClass('display-n')
    $('#headerSliderTabsSlider-2').addClass('display-n')
    $('#headerSliderTabsSlider-3').addClass('display-n')
    headerSliderTabsCheck_1()
});
$('#headerSliderTabsElement-2').on('click', function() {
    $('#headerSliderTabsElement-2').addClass('ind-slider__block-tabs-item-active')
    $('#headerSliderTabsElement-1').removeClass('ind-slider__block-tabs-item-active')
    $('#headerSliderTabsElement-3').removeClass('ind-slider__block-tabs-item-active')
    $('#headerSliderTabsSlider-2').removeClass('display-n')
    $('#headerSliderTabsSlider-1').addClass('display-n')
    $('#headerSliderTabsSlider-3').addClass('display-n')
    headerSliderTabsCheck_2()
});
$('#headerSliderTabsElement-3').on('click', function() {
    $('#headerSliderTabsElement-3').addClass('ind-slider__block-tabs-item-active')
    $('#headerSliderTabsElement-2').removeClass('ind-slider__block-tabs-item-active')
    $('#headerSliderTabsElement-1').removeClass('ind-slider__block-tabs-item-active')
    $('#headerSliderTabsSlider-3').removeClass('display-n')
    $('#headerSliderTabsSlider-2').addClass('display-n')
    $('#headerSliderTabsSlider-1').addClass('display-n')
    headerSliderTabsCheck_3()
});

function headerSliderTabsCheck_1() {
    let headerSliderTabsSlider_1 = $('#headerSliderTabsSlider-1 .swiper-slide').length
    if (headerSliderTabsSlider_1 >= 5) {
        $('#headerSliderTabsControlsSlider-1').removeClass('display-n')
        $('#headerSliderTabsControlsSlider-2').addClass('display-n')
        $('#headerSliderTabsControlsSlider-3').addClass('display-n')
    } else {
        $('#headerSliderTabsControlsSlider-1').addClass('display-n')
        $('#headerSliderTabsControlsSlider-2').addClass('display-n')
        $('#headerSliderTabsControlsSlider-3').addClass('display-n')
    }
    if(window.innerWidth <= 980) {
        $('#headerSliderTabsControlsSlider-1').removeClass('display-n')
        $('#headerSliderTabsControlsSlider-2').addClass('display-n')
        $('#headerSliderTabsControlsSlider-3').addClass('display-n')
    }
}
function headerSliderTabsCheck_2() {
    let headerSliderTabsSlider_2 = $('#headerSliderTabsSlider-2 .swiper-slide').length
    if (headerSliderTabsSlider_2 >= 5) {
        $('#headerSliderTabsControlsSlider-2').removeClass('display-n')
        $('#headerSliderTabsControlsSlider-1').addClass('display-n')
        $('#headerSliderTabsControlsSlider-3').addClass('display-n')
    } else {
        $('#headerSliderTabsControlsSlider-1').addClass('display-n')
        $('#headerSliderTabsControlsSlider-2').addClass('display-n')
        $('#headerSliderTabsControlsSlider-3').addClass('display-n')
    }
    if(window.innerWidth <= 980) {
        $('#headerSliderTabsControlsSlider-2').removeClass('display-n')
        $('#headerSliderTabsControlsSlider-1').addClass('display-n')
        $('#headerSliderTabsControlsSlider-3').addClass('display-n')
    }
}
function headerSliderTabsCheck_3() {
    let headerSliderTabsSlider_3 = $('#headerSliderTabsSlider-3 .swiper-slide').length
    if (headerSliderTabsSlider_3 >= 5) {
        $('#headerSliderTabsControlsSlider-3').removeClass('display-n')
        $('#headerSliderTabsControlsSlider-2').addClass('display-n')
        $('#headerSliderTabsControlsSlider-1').addClass('display-n')
    } else {
        $('#headerSliderTabsControlsSlider-1').addClass('display-n')
        $('#headerSliderTabsControlsSlider-2').addClass('display-n')
        $('#headerSliderTabsControlsSlider-3').addClass('display-n')
    }
    if(window.innerWidth <= 980) {
        $('#headerSliderTabsControlsSlider-3').removeClass('display-n')
        $('#headerSliderTabsControlsSlider-2').addClass('display-n')
        $('#headerSliderTabsControlsSlider-1').addClass('display-n')
    }
}

headerSliderTabsCheck_1()




$(function() {
    $('#remove').css('display', 'none')
    $('#remove').after('<div class="remove-select-item"><div class="remove-select-placeholder">Нет</div><div id="removePriceSelect" class="remove-select-wrapper display-n"></div></div>')
    let count = $('#remove').children('option').length
    for( let i = 0; i < count; i++) {
        let arrows = $('#remove').children('option').eq(i).val()
        let newElementBlock = document.createElement("button");
        newElementBlock.classList.add("remove-select-element")
        newElementBlock.id = `remove-select-element-${i}`;
        newElementBlock.innerHTML = `${arrows}`
        document.getElementById("removePriceSelect").appendChild(newElementBlock);
        $(`#remove-select-element-${i}`).attr('value', `${arrows}`)
    }
    $('#remove-select-element-0').css('display', 'none')
    $('.remove-select-item').on('click', function() {
        $('.remove-select-wrapper').toggleClass('display-n')
        $(this).toggleClass('remove-select-item-active')
    })
    $(".remove-select-element").on('click', function() {
        let idElement = this.id
        let valueElement = $(`#${idElement}`).val()
        $('.remove-select-placeholder').html(valueElement)
        $('#remove option:nth-child(1)').val(valueElement)
        $('#remove option:nth-child(1)').html(valueElement)
    })
})



$(function() {
    $('#disk').css('display', 'none')
    $('#disk').after('<div class="disk-select-item"><div class="disk-select-placeholder">Нет</div><div id="diskPriceSelect" class="disk-select-wrapper display-n"></div></div>')
    let count = $('#disk').children('option').length
    for( let i = 0; i < count; i++) {
        let arrows = $('#disk').children('option').eq(i).val()
        let newElementBlock = document.createElement("button");
        newElementBlock.classList.add("disk-select-element")
        newElementBlock.id = `disk-select-element-${i}`;
        newElementBlock.innerHTML = `${arrows}`
        document.getElementById("diskPriceSelect").appendChild(newElementBlock);
        $(`#disk-select-element-${i}`).attr('value', `${arrows}`)
    }
    $('#disk-select-element-0').css('display', 'none')
    $('.disk-select-item').on('click', function() {
        $('.disk-select-wrapper').toggleClass('display-n')
        $(this).toggleClass('disk-select-item-active')
    })
    $(".disk-select-element").on('click', function() {
        let idElement = this.id
        let valueElement = $(`#${idElement}`).val()
        $('.disk-select-placeholder').html(valueElement)
        $('#disk option:nth-child(1)').val(valueElement)
        $('#disk option:nth-child(1)').html(valueElement)
    })
})



$(function() {
    $('#mounting').css('display', 'none')
    $('#mounting').after('<div class="mounting-select-item"><div class="mounting-select-placeholder">Нет</div><div id="mountingPriceSelect" class="mounting-select-wrapper display-n"></div></div>')
    let count = $('#mounting').children('option').length
    for( let i = 0; i < count; i++) {
        let arrows = $('#mounting').children('option').eq(i).val()
        let newElementBlock = document.createElement("button");
        newElementBlock.classList.add("mounting-select-element")
        newElementBlock.id = `mounting-select-element-${i}`;
        newElementBlock.innerHTML = `${arrows}`
        document.getElementById("mountingPriceSelect").appendChild(newElementBlock);
        $(`#mounting-select-element-${i}`).attr('value', `${arrows}`)
    }
    $('#mounting-select-element-0').css('display', 'none')
    $('.mounting-select-item').on('click', function() {
        $('.mounting-select-wrapper').toggleClass('display-n')
        $(this).toggleClass('mounting-select-item-active')
    })
    $(".mounting-select-element").on('click', function() {
        let idElement = this.id
        let valueElement = $(`#${idElement}`).val()
        $('.mounting-select-placeholder').html(valueElement)
        $('#mounting option:nth-child(1)').val(valueElement)
        $('#mounting option:nth-child(1)').html(valueElement)
    })
})


$(function() {
    $('#balance').css('display', 'none')
    $('#balance').after('<div class="balance-select-item"><div class="balance-select-placeholder">Нет</div><div id="balancePriceSelect" class="balance-select-wrapper display-n"></div></div>')
    let count = $('#balance').children('option').length
    for( let i = 0; i < count; i++) {
        let arrows = $('#balance').children('option').eq(i).val()
        let newElementBlock = document.createElement("button");
        newElementBlock.classList.add("balance-select-element")
        newElementBlock.id = `balance-select-element-${i}`;
        newElementBlock.innerHTML = `${arrows}`
        document.getElementById("balancePriceSelect").appendChild(newElementBlock);
        $(`#balance-select-element-${i}`).attr('value', `${arrows}`)
    }
    $('#balance-select-element-0').css('display', 'none')
    $('.balance-select-item').on('click', function() {
        $('.balance-select-wrapper').toggleClass('display-n')
        $(this).toggleClass('balance-select-item-active')
    })
    $(".balance-select-element").on('click', function() {
        let idElement = this.id
        let valueElement = $(`#${idElement}`).val()
        $('.balance-select-placeholder').html(valueElement)
        $('#balance option:nth-child(1)').val(valueElement)
        $('#balance option:nth-child(1)').html(valueElement)
    })
})



$(function() {
    $('#shooting').css('display', 'none')
    $('#shooting').after('<div class="shooting-select-item"><div class="shooting-select-placeholder">Нет</div><div id="shootingPriceSelect" class="shooting-select-wrapper display-n"></div></div>')
    let count = $('#shooting').children('option').length
    for( let i = 0; i < count; i++) {
        let arrows = $('#shooting').children('option').eq(i).val()
        let newElementBlock = document.createElement("button");
        newElementBlock.classList.add("shooting-select-element")
        newElementBlock.id = `shooting-select-element-${i}`;
        newElementBlock.innerHTML = `${arrows}`
        document.getElementById("shootingPriceSelect").appendChild(newElementBlock);
        $(`#shooting-select-element-${i}`).attr('value', `${arrows}`)
    }
    $('#shooting-select-element-0').css('display', 'none')
    $('.shooting-select-item').on('click', function() {
        $('.shooting-select-wrapper').toggleClass('display-n')
        $(this).toggleClass('shooting-select-item-active')
    })
    $(".shooting-select-element").on('click', function() {
        let idElement = this.id
        let valueElement = $(`#${idElement}`).val()
        $('.shooting-select-placeholder').html(valueElement)
        $('#shooting option:nth-child(1)').val(valueElement)
        $('#shooting option:nth-child(1)').html(valueElement)
    })
})




$(function() {
    $('#delivery').css('display', 'none')
    $('#delivery').after('<div class="delivery-select-item"><div class="delivery-select-placeholder">Нет</div><div id="deliveryPriceSelect" class="delivery-select-wrapper display-n"></div></div>')
    let count = $('#delivery').children('option').length
    for( let i = 0; i < count; i++) {
        let arrows = $('#delivery').children('option').eq(i).val()
        let newElementBlock = document.createElement("button");
        newElementBlock.classList.add("delivery-select-element")
        newElementBlock.id = `delivery-select-element-${i}`;
        newElementBlock.innerHTML = `${arrows}`
        document.getElementById("deliveryPriceSelect").appendChild(newElementBlock);
        $(`#delivery-select-element-${i}`).attr('value', `${arrows}`)
    }
    $('#delivery-select-element-0').css('display', 'none')
    $('.delivery-select-item').on('click', function() {
        $('.delivery-select-wrapper').toggleClass('display-n')
        $(this).toggleClass('delivery-select-item-active')
    })
    $(".delivery-select-element").on('click', function() {
        let idElement = this.id
        let valueElement = $(`#${idElement}`).val()
        $('.delivery-select-placeholder').html(valueElement)
        $('#delivery option:nth-child(1)').val(valueElement)
        $('#delivery option:nth-child(1)').html(valueElement)
    })
})


$('.ind-price__block-plus').on('click', function() {
    $('.ind-price__block-catalog').toggleClass('display-n')
});



$('.modelIndexExamplesSlider-close').on('click', function() {
    $('.modelIndexExamplesSlider').addClass('display-n')
    $('body').css('overflow', 'visible')
});

$('#diskSlidersAboutItemsElement-1').on('click', function() {
    $('.modelIndexExamplesSlider').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelIndexExamplesSliderBlockCount = 0
    var modelIndexExamplesSliderBlock = new Swiper(".modelIndexExamplesSliderBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelIndexExamplesSlider__slider   .swiper-controls .swiper-button-next",
            prevEl: ".modelIndexExamplesSlider__slider   .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelIndexExamplesSliderBlockCount,
    });
});
$('#diskSlidersAboutItemsElement-2').on('click', function() {
    $('.modelIndexExamplesSlider').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelIndexExamplesSliderBlockCount = 1
    var modelIndexExamplesSliderBlock = new Swiper(".modelIndexExamplesSliderBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelIndexExamplesSlider__slider   .swiper-controls .swiper-button-next",
            prevEl: ".modelIndexExamplesSlider__slider   .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelIndexExamplesSliderBlockCount,
    });
});
$('#diskSlidersAboutItemsElement-3').on('click', function() {
    $('.modelIndexExamplesSlider').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelIndexExamplesSliderBlockCount = 2
    var modelIndexExamplesSliderBlock = new Swiper(".modelIndexExamplesSliderBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelIndexExamplesSlider__slider   .swiper-controls .swiper-button-next",
            prevEl: ".modelIndexExamplesSlider__slider   .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelIndexExamplesSliderBlockCount,
    });
});
$('#diskSlidersAboutItemsElement-4').on('click', function() {
    $('.modelIndexExamplesSlider').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelIndexExamplesSliderBlockCount = 3
    var modelIndexExamplesSliderBlock = new Swiper(".modelIndexExamplesSliderBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelIndexExamplesSlider__slider   .swiper-controls .swiper-button-next",
            prevEl: ".modelIndexExamplesSlider__slider   .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelIndexExamplesSliderBlockCount,
    });
});
$('#diskSlidersAboutItemsElement-5').on('click', function() {
    $('.modelIndexExamplesSlider').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelIndexExamplesSliderBlockCount = 4
    var modelIndexExamplesSliderBlock = new Swiper(".modelIndexExamplesSliderBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelIndexExamplesSlider__slider   .swiper-controls .swiper-button-next",
            prevEl: ".modelIndexExamplesSlider__slider   .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelIndexExamplesSliderBlockCount,
    });
});
$('#diskSlidersAboutItemsElement-6').on('click', function() {
    $('.modelIndexExamplesSlider').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelIndexExamplesSliderBlockCount = 5
    var modelIndexExamplesSliderBlock = new Swiper(".modelIndexExamplesSliderBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelIndexExamplesSlider__slider   .swiper-controls .swiper-button-next",
            prevEl: ".modelIndexExamplesSlider__slider   .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelIndexExamplesSliderBlockCount,
    });
});
$('#diskSlidersAboutItemsElement-7').on('click', function() {
    $('.modelIndexExamplesSlider').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelIndexExamplesSliderBlockCount = 6
    var modelIndexExamplesSliderBlock = new Swiper(".modelIndexExamplesSliderBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelIndexExamplesSlider__slider   .swiper-controls .swiper-button-next",
            prevEl: ".modelIndexExamplesSlider__slider   .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelIndexExamplesSliderBlockCount,
    });
});
$('#diskSlidersAboutItemsElement-8').on('click', function() {
    $('.modelIndexExamplesSlider').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelIndexExamplesSliderBlockCount = 7
    var modelIndexExamplesSliderBlock = new Swiper(".modelIndexExamplesSliderBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelIndexExamplesSlider__slider   .swiper-controls .swiper-button-next",
            prevEl: ".modelIndexExamplesSlider__slider   .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelIndexExamplesSliderBlockCount,
    });
});
$('#diskSlidersAboutItemsElement-9').on('click', function() {
    $('.modelIndexExamplesSlider').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelIndexExamplesSliderBlockCount = 8
    var modelIndexExamplesSliderBlock = new Swiper(".modelIndexExamplesSliderBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelIndexExamplesSlider__slider   .swiper-controls .swiper-button-next",
            prevEl: ".modelIndexExamplesSlider__slider   .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelIndexExamplesSliderBlockCount,
    });
});
$('#diskSlidersAboutItemsElement-10').on('click', function() {
    $('.modelIndexExamplesSlider').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelIndexExamplesSliderBlockCount = 9
    var modelIndexExamplesSliderBlock = new Swiper(".modelIndexExamplesSliderBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelIndexExamplesSlider__slider   .swiper-controls .swiper-button-next",
            prevEl: ".modelIndexExamplesSlider__slider   .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelIndexExamplesSliderBlockCount,
    });
});
$('#diskSlidersAboutItemsElement-11').on('click', function() {
    $('.modelIndexExamplesSlider').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelIndexExamplesSliderBlockCount = 10
    var modelIndexExamplesSliderBlock = new Swiper(".modelIndexExamplesSliderBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelIndexExamplesSlider__slider   .swiper-controls .swiper-button-next",
            prevEl: ".modelIndexExamplesSlider__slider   .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelIndexExamplesSliderBlockCount,
    });
});
$('#diskSlidersAboutItemsElement-12').on('click', function() {
    $('.modelIndexExamplesSlider').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelIndexExamplesSliderBlockCount = 11
    var modelIndexExamplesSliderBlock = new Swiper(".modelIndexExamplesSliderBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelIndexExamplesSlider__slider   .swiper-controls .swiper-button-next",
            prevEl: ".modelIndexExamplesSlider__slider   .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelIndexExamplesSliderBlockCount,
    });
});
$('#diskSlidersAboutItemsElement-13').on('click', function() {
    $('.modelIndexExamplesSlider').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelIndexExamplesSliderBlockCount = 0
    var modelIndexExamplesSliderBlock = new Swiper(".modelIndexExamplesSliderBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelIndexExamplesSlider__slider   .swiper-controls .swiper-button-next",
            prevEl: ".modelIndexExamplesSlider__slider   .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelIndexExamplesSliderBlockCount,
    });
});
$('#diskSlidersAboutItemsElement-14').on('click', function() {
    $('.modelIndexExamplesSlider').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelIndexExamplesSliderBlockCount = 1
    var modelIndexExamplesSliderBlock = new Swiper(".modelIndexExamplesSliderBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelIndexExamplesSlider__slider   .swiper-controls .swiper-button-next",
            prevEl: ".modelIndexExamplesSlider__slider   .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelIndexExamplesSliderBlockCount,
    });
});
$('#diskSlidersAboutItemsElement-15').on('click', function() {
    $('.modelIndexExamplesSlider').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelIndexExamplesSliderBlockCount = 2
    var modelIndexExamplesSliderBlock = new Swiper(".modelIndexExamplesSliderBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelIndexExamplesSlider__slider   .swiper-controls .swiper-button-next",
            prevEl: ".modelIndexExamplesSlider__slider   .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelIndexExamplesSliderBlockCount,
    });
});
$('#diskSlidersAboutItemsElement-16').on('click', function() {
    $('.modelIndexExamplesSlider').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelIndexExamplesSliderBlockCount = 3
    var modelIndexExamplesSliderBlock = new Swiper(".modelIndexExamplesSliderBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelIndexExamplesSlider__slider   .swiper-controls .swiper-button-next",
            prevEl: ".modelIndexExamplesSlider__slider   .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelIndexExamplesSliderBlockCount,
    });
});
$('#diskSlidersAboutItemsElement-17').on('click', function() {
    $('.modelIndexExamplesSlider').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelIndexExamplesSliderBlockCount = 4
    var modelIndexExamplesSliderBlock = new Swiper(".modelIndexExamplesSliderBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelIndexExamplesSlider__slider   .swiper-controls .swiper-button-next",
            prevEl: ".modelIndexExamplesSlider__slider   .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelIndexExamplesSliderBlockCount,
    });
});
$('#diskSlidersAboutItemsElement-18').on('click', function() {
    $('.modelIndexExamplesSlider').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelIndexExamplesSliderBlockCount = 5
    var modelIndexExamplesSliderBlock = new Swiper(".modelIndexExamplesSliderBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelIndexExamplesSlider__slider   .swiper-controls .swiper-button-next",
            prevEl: ".modelIndexExamplesSlider__slider   .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelIndexExamplesSliderBlockCount,
    });
});
$('#diskSlidersAboutItemsElement-19').on('click', function() {
    $('.modelIndexExamplesSlider').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelIndexExamplesSliderBlockCount = 6
    var modelIndexExamplesSliderBlock = new Swiper(".modelIndexExamplesSliderBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelIndexExamplesSlider__slider   .swiper-controls .swiper-button-next",
            prevEl: ".modelIndexExamplesSlider__slider   .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelIndexExamplesSliderBlockCount,
    });
});
$('#diskSlidersAboutItemsElement-20').on('click', function() {
    $('.modelIndexExamplesSlider').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelIndexExamplesSliderBlockCount = 7
    var modelIndexExamplesSliderBlock = new Swiper(".modelIndexExamplesSliderBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelIndexExamplesSlider__slider   .swiper-controls .swiper-button-next",
            prevEl: ".modelIndexExamplesSlider__slider   .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelIndexExamplesSliderBlockCount,
    });
});
$('#diskSlidersAboutItemsElement-21').on('click', function() {
    $('.modelIndexExamplesSlider').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelIndexExamplesSliderBlockCount = 8
    var modelIndexExamplesSliderBlock = new Swiper(".modelIndexExamplesSliderBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelIndexExamplesSlider__slider   .swiper-controls .swiper-button-next",
            prevEl: ".modelIndexExamplesSlider__slider   .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelIndexExamplesSliderBlockCount,
    });
});
$('#diskSlidersAboutItemsElement-22').on('click', function() {
    $('.modelIndexExamplesSlider').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelIndexExamplesSliderBlockCount = 9
    var modelIndexExamplesSliderBlock = new Swiper(".modelIndexExamplesSliderBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelIndexExamplesSlider__slider   .swiper-controls .swiper-button-next",
            prevEl: ".modelIndexExamplesSlider__slider   .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelIndexExamplesSliderBlockCount,
    });
});
$('#diskSlidersAboutItemsElement-23').on('click', function() {
    $('.modelIndexExamplesSlider').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelIndexExamplesSliderBlockCount = 10
    var modelIndexExamplesSliderBlock = new Swiper(".modelIndexExamplesSliderBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelIndexExamplesSlider__slider   .swiper-controls .swiper-button-next",
            prevEl: ".modelIndexExamplesSlider__slider   .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelIndexExamplesSliderBlockCount,
    });
});
$('#diskSlidersAboutItemsElement-24').on('click', function() {
    $('.modelIndexExamplesSlider').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelIndexExamplesSliderBlockCount = 11
    var modelIndexExamplesSliderBlock = new Swiper(".modelIndexExamplesSliderBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelIndexExamplesSlider__slider   .swiper-controls .swiper-button-next",
            prevEl: ".modelIndexExamplesSlider__slider   .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelIndexExamplesSliderBlockCount,
    });
});
$('#diskSlidersAboutItemsElement-25').on('click', function() {
    $('.modelIndexExamplesSlider').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelIndexExamplesSliderBlockCount = 12
    var modelIndexExamplesSliderBlock = new Swiper(".modelIndexExamplesSliderBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelIndexExamplesSlider__slider   .swiper-controls .swiper-button-next",
            prevEl: ".modelIndexExamplesSlider__slider   .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelIndexExamplesSliderBlockCount,
    });
});
$('#diskSlidersAboutItemsElement-26').on('click', function() {
    $('.modelIndexExamplesSlider').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelIndexExamplesSliderBlockCount = 13
    var modelIndexExamplesSliderBlock = new Swiper(".modelIndexExamplesSliderBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelIndexExamplesSlider__slider   .swiper-controls .swiper-button-next",
            prevEl: ".modelIndexExamplesSlider__slider   .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelIndexExamplesSliderBlockCount,
    });
});
$('#diskSlidersAboutItemsElement-27').on('click', function() {
    $('.modelIndexExamplesSlider').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelIndexExamplesSliderBlockCount = 12
    var modelIndexExamplesSliderBlock = new Swiper(".modelIndexExamplesSliderBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelIndexExamplesSlider__slider   .swiper-controls .swiper-button-next",
            prevEl: ".modelIndexExamplesSlider__slider   .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelIndexExamplesSliderBlockCount,
    });
});












$('.disk-about__block-btn').on('click', function() {
    $('body').css('overflow', 'hidden')
    $('.modelOrderCall').removeClass('display-n')
});
$('.paint-header__block-btn').on('click', function() {
    $('body').css('overflow', 'hidden')
    $('.modelOrderCall').removeClass('display-n')
});
$('.paint-about__block-content-add-btn').on('click', function() {
    $('body').css('overflow', 'hidden')
    $('.modelOrderCall').removeClass('display-n')
});
$('.polishing-about__block-btn').on('click', function() {
    $('body').css('overflow', 'hidden')
    $('.modelOrderCall').removeClass('display-n')
});
$('.polishing-list__btns-btn').on('click', function() {
    $('body').css('overflow', 'hidden')
    $('.modelOrderCall').removeClass('display-n')
});
$('.balance-about__block-content-add-btn').on('click', function() {
    $('body').css('overflow', 'hidden')
    $('.modelOrderCall').removeClass('display-n')
});
$('.balance-ways__btn').on('click', function() {
    $('body').css('overflow', 'hidden')
    $('.modelOrderCall').removeClass('display-n')
});
$('.tires-header__block-btn').on('click', function() {
    $('body').css('overflow', 'hidden')
    $('.modelOrderCall').removeClass('display-n')
});
$('.tires-ways__btn').on('click', function() {
    $('body').css('overflow', 'hidden')
    $('.modelOrderCall').removeClass('display-n')
});
$('.alloy-about__block-btn').on('click', function() {
    $('body').css('overflow', 'hidden')
    $('.modelOrderCall').removeClass('display-n')
});
$('.hernia-about__block-content-add-btn').on('click', function() {
    $('body').css('overflow', 'hidden')
    $('.modelOrderCall').removeClass('display-n')
});
$('.hernia-list__about-banner-btn').on('click', function() {
    $('body').css('overflow', 'hidden')
    $('.modelOrderCall').removeClass('display-n')
});
$('.hernia-work__about-banner-btn').on('click', function() {
    $('body').css('overflow', 'hidden')
    $('.modelOrderCall').removeClass('display-n')
});
$('.season-about__wrapper-banner-btn').on('click', function() {
    $('body').css('overflow', 'hidden')
    $('.modelOrderCall').removeClass('display-n')
});
$('.season-about__block-content-add-btn').on('click', function() {
    $('body').css('overflow', 'hidden')
    $('.modelOrderCall').removeClass('display-n')
});
$('.refill-about__block-content-add-btn').on('click', function() {
    $('body').css('overflow', 'hidden')
    $('.modelOrderCall').removeClass('display-n')
});
$('.refill-about__wrapper-banner-btn').on('click', function() {
    $('body').css('overflow', 'hidden')
    $('.modelOrderCall').removeClass('display-n')
});
$('.conditioner-about__block-content-add-btn').on('click', function() {
    $('body').css('overflow', 'hidden')
    $('.modelOrderCall').removeClass('display-n')
});
$('.conditioner-about__wrapper-banner-btn').on('click', function() {
    $('body').css('overflow', 'hidden')
    $('.modelOrderCall').removeClass('display-n')
});


$('.disk-list__btns-btn').on('click', function() {
    $('body').css('overflow', 'hidden')
    $('.modelOrderCall').removeClass('display-n')
});

$('.modelOrderCall__block-close').on('click', function() {
    $('body').css('overflow', 'visible')
    $('.modelOrderCall').addClass('display-n')
});



var indexShop = new Swiper(".indexShop", {
    navigation: {
        nextEl: ".ind-shop__block-catalog .swiper-controls .swiper-button-next",
        prevEl: ".ind-shop__block-catalog .swiper-controls .swiper-button-prev",
    },
    pagination: {
        el: ".ind-shop__block-catalog .swiper-controls .swiper-pagination",
    },
    keyboard: true,
    slidesPerView: 4,
    breakpoints: {
        1430: {
            slidesPerView: 4,
            spaceBetweenSlides: 0
        },
        930: {
            slidesPerView: 3,
            spaceBetweenSlides: 0
        },
        630: {
            slidesPerView: 2,
            spaceBetweenSlides: 0
        },
        0: {
            slidesPerView: 1,
            spaceBetweenSlides: 0
        }
    }
});
var diskSliderVideo = new Swiper(".diskSliderVideo", {
    navigation: {
        nextEl: ".disk-video__block-slider .swiper-controls .swiper-button-next",
        prevEl: ".disk-video__block-slider .swiper-controls .swiper-button-prev",
    },
    keyboard: true,
});


$('#diskExampleTabsElement-1').on('click', function() {
    $('#diskExampleTabsElement-1').addClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-2').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-3').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-4').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-5').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-6').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-7').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-8').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-9').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-10').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-11').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-12').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-13').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-14').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-15').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-16').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-17').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-18').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-19').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-20').removeClass('disk-examples__block-tabs-item-active')

    $('#diskExampleTabsBlock-1').removeClass('display-n')
    $('#diskExampleTabsBlock-2').addClass('display-n')
    $('#diskExampleTabsBlock-3').addClass('display-n')
    $('#diskExampleTabsBlock-4').addClass('display-n')
    $('#diskExampleTabsBlock-5').addClass('display-n')
    $('#diskExampleTabsBlock-6').addClass('display-n')
    $('#diskExampleTabsBlock-7').addClass('display-n')
    $('#diskExampleTabsBlock-8').addClass('display-n')
    $('#diskExampleTabsBlock-9').addClass('display-n')
    $('#diskExampleTabsBlock-10').addClass('display-n')
    $('#diskExampleTabsBlock-11').addClass('display-n')
    $('#diskExampleTabsBlock-12').addClass('display-n')
    $('#diskExampleTabsBlock-13').addClass('display-n')
    $('#diskExampleTabsBlock-14').addClass('display-n')
    $('#diskExampleTabsBlock-15').addClass('display-n')
    $('#diskExampleTabsBlock-16').addClass('display-n')
    $('#diskExampleTabsBlock-17').addClass('display-n')
    $('#diskExampleTabsBlock-18').addClass('display-n')
    $('#diskExampleTabsBlock-19').addClass('display-n')
    $('#diskExampleTabsBlock-20').addClass('display-n')
});

$('#diskExampleTabsElement-2').on('click', function() {
    $('#diskExampleTabsElement-2').addClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-1').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-3').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-4').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-5').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-6').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-7').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-8').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-9').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-10').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-11').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-12').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-13').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-14').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-15').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-16').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-17').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-18').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-19').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-20').removeClass('disk-examples__block-tabs-item-active')

    $('#diskExampleTabsBlock-2').removeClass('display-n')
    $('#diskExampleTabsBlock-1').addClass('display-n')
    $('#diskExampleTabsBlock-3').addClass('display-n')
    $('#diskExampleTabsBlock-4').addClass('display-n')
    $('#diskExampleTabsBlock-5').addClass('display-n')
    $('#diskExampleTabsBlock-6').addClass('display-n')
    $('#diskExampleTabsBlock-7').addClass('display-n')
    $('#diskExampleTabsBlock-8').addClass('display-n')
    $('#diskExampleTabsBlock-9').addClass('display-n')
    $('#diskExampleTabsBlock-10').addClass('display-n')
    $('#diskExampleTabsBlock-11').addClass('display-n')
    $('#diskExampleTabsBlock-12').addClass('display-n')
    $('#diskExampleTabsBlock-13').addClass('display-n')
    $('#diskExampleTabsBlock-14').addClass('display-n')
    $('#diskExampleTabsBlock-15').addClass('display-n')
    $('#diskExampleTabsBlock-16').addClass('display-n')
    $('#diskExampleTabsBlock-17').addClass('display-n')
    $('#diskExampleTabsBlock-18').addClass('display-n')
    $('#diskExampleTabsBlock-19').addClass('display-n')
    $('#diskExampleTabsBlock-20').addClass('display-n')
});

$('#diskExampleTabsElement-3').on('click', function() {
    $('#diskExampleTabsElement-3').addClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-2').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-1').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-4').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-5').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-6').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-7').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-8').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-9').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-10').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-11').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-12').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-13').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-14').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-15').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-16').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-17').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-18').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-19').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-20').removeClass('disk-examples__block-tabs-item-active')

    $('#diskExampleTabsBlock-3').removeClass('display-n')
    $('#diskExampleTabsBlock-2').addClass('display-n')
    $('#diskExampleTabsBlock-1').addClass('display-n')
    $('#diskExampleTabsBlock-4').addClass('display-n')
    $('#diskExampleTabsBlock-5').addClass('display-n')
    $('#diskExampleTabsBlock-6').addClass('display-n')
    $('#diskExampleTabsBlock-7').addClass('display-n')
    $('#diskExampleTabsBlock-8').addClass('display-n')
    $('#diskExampleTabsBlock-9').addClass('display-n')
    $('#diskExampleTabsBlock-10').addClass('display-n')
    $('#diskExampleTabsBlock-11').addClass('display-n')
    $('#diskExampleTabsBlock-12').addClass('display-n')
    $('#diskExampleTabsBlock-13').addClass('display-n')
    $('#diskExampleTabsBlock-14').addClass('display-n')
    $('#diskExampleTabsBlock-15').addClass('display-n')
    $('#diskExampleTabsBlock-16').addClass('display-n')
    $('#diskExampleTabsBlock-17').addClass('display-n')
    $('#diskExampleTabsBlock-18').addClass('display-n')
    $('#diskExampleTabsBlock-19').addClass('display-n')
    $('#diskExampleTabsBlock-20').addClass('display-n')
});

$('#diskExampleTabsElement-4').on('click', function() {
    $('#diskExampleTabsElement-4').addClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-2').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-3').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-1').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-5').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-6').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-7').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-8').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-9').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-10').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-11').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-12').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-13').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-14').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-15').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-16').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-17').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-18').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-19').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-20').removeClass('disk-examples__block-tabs-item-active')

    $('#diskExampleTabsBlock-4').removeClass('display-n')
    $('#diskExampleTabsBlock-2').addClass('display-n')
    $('#diskExampleTabsBlock-3').addClass('display-n')
    $('#diskExampleTabsBlock-1').addClass('display-n')
    $('#diskExampleTabsBlock-5').addClass('display-n')
    $('#diskExampleTabsBlock-6').addClass('display-n')
    $('#diskExampleTabsBlock-7').addClass('display-n')
    $('#diskExampleTabsBlock-8').addClass('display-n')
    $('#diskExampleTabsBlock-9').addClass('display-n')
    $('#diskExampleTabsBlock-10').addClass('display-n')
    $('#diskExampleTabsBlock-11').addClass('display-n')
    $('#diskExampleTabsBlock-12').addClass('display-n')
    $('#diskExampleTabsBlock-13').addClass('display-n')
    $('#diskExampleTabsBlock-14').addClass('display-n')
    $('#diskExampleTabsBlock-15').addClass('display-n')
    $('#diskExampleTabsBlock-16').addClass('display-n')
    $('#diskExampleTabsBlock-17').addClass('display-n')
    $('#diskExampleTabsBlock-18').addClass('display-n')
    $('#diskExampleTabsBlock-19').addClass('display-n')
    $('#diskExampleTabsBlock-20').addClass('display-n')
});

$('#diskExampleTabsElement-5').on('click', function() {
    $('#diskExampleTabsElement-5').addClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-2').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-3').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-4').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-1').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-6').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-7').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-8').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-9').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-10').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-11').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-12').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-13').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-14').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-15').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-16').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-17').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-18').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-19').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-20').removeClass('disk-examples__block-tabs-item-active')

    $('#diskExampleTabsBlock-5').removeClass('display-n')
    $('#diskExampleTabsBlock-2').addClass('display-n')
    $('#diskExampleTabsBlock-3').addClass('display-n')
    $('#diskExampleTabsBlock-4').addClass('display-n')
    $('#diskExampleTabsBlock-1').addClass('display-n')
    $('#diskExampleTabsBlock-6').addClass('display-n')
    $('#diskExampleTabsBlock-7').addClass('display-n')
    $('#diskExampleTabsBlock-8').addClass('display-n')
    $('#diskExampleTabsBlock-9').addClass('display-n')
    $('#diskExampleTabsBlock-10').addClass('display-n')
    $('#diskExampleTabsBlock-11').addClass('display-n')
    $('#diskExampleTabsBlock-12').addClass('display-n')
    $('#diskExampleTabsBlock-13').addClass('display-n')
    $('#diskExampleTabsBlock-14').addClass('display-n')
    $('#diskExampleTabsBlock-15').addClass('display-n')
    $('#diskExampleTabsBlock-16').addClass('display-n')
    $('#diskExampleTabsBlock-17').addClass('display-n')
    $('#diskExampleTabsBlock-18').addClass('display-n')
    $('#diskExampleTabsBlock-19').addClass('display-n')
    $('#diskExampleTabsBlock-20').addClass('display-n')
});

$('#diskExampleTabsElement-6').on('click', function() {
    $('#diskExampleTabsElement-6').addClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-2').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-3').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-4').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-5').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-1').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-7').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-8').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-9').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-10').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-11').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-12').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-13').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-14').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-15').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-16').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-17').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-18').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-19').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-20').removeClass('disk-examples__block-tabs-item-active')

    $('#diskExampleTabsBlock-6').removeClass('display-n')
    $('#diskExampleTabsBlock-2').addClass('display-n')
    $('#diskExampleTabsBlock-3').addClass('display-n')
    $('#diskExampleTabsBlock-4').addClass('display-n')
    $('#diskExampleTabsBlock-5').addClass('display-n')
    $('#diskExampleTabsBlock-1').addClass('display-n')
    $('#diskExampleTabsBlock-7').addClass('display-n')
    $('#diskExampleTabsBlock-8').addClass('display-n')
    $('#diskExampleTabsBlock-9').addClass('display-n')
    $('#diskExampleTabsBlock-10').addClass('display-n')
    $('#diskExampleTabsBlock-11').addClass('display-n')
    $('#diskExampleTabsBlock-12').addClass('display-n')
    $('#diskExampleTabsBlock-13').addClass('display-n')
    $('#diskExampleTabsBlock-14').addClass('display-n')
    $('#diskExampleTabsBlock-15').addClass('display-n')
    $('#diskExampleTabsBlock-16').addClass('display-n')
    $('#diskExampleTabsBlock-17').addClass('display-n')
    $('#diskExampleTabsBlock-18').addClass('display-n')
    $('#diskExampleTabsBlock-19').addClass('display-n')
    $('#diskExampleTabsBlock-20').addClass('display-n')
});

$('#diskExampleTabsElement-7').on('click', function() {
    $('#diskExampleTabsElement-7').addClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-2').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-3').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-4').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-5').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-6').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-1').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-8').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-9').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-10').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-11').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-12').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-13').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-14').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-15').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-16').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-17').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-18').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-19').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-20').removeClass('disk-examples__block-tabs-item-active')

    $('#diskExampleTabsBlock-7').removeClass('display-n')
    $('#diskExampleTabsBlock-2').addClass('display-n')
    $('#diskExampleTabsBlock-3').addClass('display-n')
    $('#diskExampleTabsBlock-4').addClass('display-n')
    $('#diskExampleTabsBlock-5').addClass('display-n')
    $('#diskExampleTabsBlock-6').addClass('display-n')
    $('#diskExampleTabsBlock-1').addClass('display-n')
    $('#diskExampleTabsBlock-8').addClass('display-n')
    $('#diskExampleTabsBlock-9').addClass('display-n')
    $('#diskExampleTabsBlock-10').addClass('display-n')
    $('#diskExampleTabsBlock-11').addClass('display-n')
    $('#diskExampleTabsBlock-12').addClass('display-n')
    $('#diskExampleTabsBlock-13').addClass('display-n')
    $('#diskExampleTabsBlock-14').addClass('display-n')
    $('#diskExampleTabsBlock-15').addClass('display-n')
    $('#diskExampleTabsBlock-16').addClass('display-n')
    $('#diskExampleTabsBlock-17').addClass('display-n')
    $('#diskExampleTabsBlock-18').addClass('display-n')
    $('#diskExampleTabsBlock-19').addClass('display-n')
    $('#diskExampleTabsBlock-20').addClass('display-n')
});

$('#diskExampleTabsElement-8').on('click', function() {
    $('#diskExampleTabsElement-8').addClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-2').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-3').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-4').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-5').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-6').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-7').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-1').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-9').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-10').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-11').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-12').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-13').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-14').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-15').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-16').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-17').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-18').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-19').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-20').removeClass('disk-examples__block-tabs-item-active')

    $('#diskExampleTabsBlock-8').removeClass('display-n')
    $('#diskExampleTabsBlock-2').addClass('display-n')
    $('#diskExampleTabsBlock-3').addClass('display-n')
    $('#diskExampleTabsBlock-4').addClass('display-n')
    $('#diskExampleTabsBlock-5').addClass('display-n')
    $('#diskExampleTabsBlock-6').addClass('display-n')
    $('#diskExampleTabsBlock-7').addClass('display-n')
    $('#diskExampleTabsBlock-1').addClass('display-n')
    $('#diskExampleTabsBlock-9').addClass('display-n')
    $('#diskExampleTabsBlock-10').addClass('display-n')
    $('#diskExampleTabsBlock-11').addClass('display-n')
    $('#diskExampleTabsBlock-12').addClass('display-n')
    $('#diskExampleTabsBlock-13').addClass('display-n')
    $('#diskExampleTabsBlock-14').addClass('display-n')
    $('#diskExampleTabsBlock-15').addClass('display-n')
    $('#diskExampleTabsBlock-16').addClass('display-n')
    $('#diskExampleTabsBlock-17').addClass('display-n')
    $('#diskExampleTabsBlock-18').addClass('display-n')
    $('#diskExampleTabsBlock-19').addClass('display-n')
    $('#diskExampleTabsBlock-20').addClass('display-n')
});

$('#diskExampleTabsElement-9').on('click', function() {
    $('#diskExampleTabsElement-9').addClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-2').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-3').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-4').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-5').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-6').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-7').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-8').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-1').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-10').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-11').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-12').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-13').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-14').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-15').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-16').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-17').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-18').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-19').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-20').removeClass('disk-examples__block-tabs-item-active')

    $('#diskExampleTabsBlock-9').removeClass('display-n')
    $('#diskExampleTabsBlock-2').addClass('display-n')
    $('#diskExampleTabsBlock-3').addClass('display-n')
    $('#diskExampleTabsBlock-4').addClass('display-n')
    $('#diskExampleTabsBlock-5').addClass('display-n')
    $('#diskExampleTabsBlock-6').addClass('display-n')
    $('#diskExampleTabsBlock-7').addClass('display-n')
    $('#diskExampleTabsBlock-8').addClass('display-n')
    $('#diskExampleTabsBlock-1').addClass('display-n')
    $('#diskExampleTabsBlock-10').addClass('display-n')
    $('#diskExampleTabsBlock-11').addClass('display-n')
    $('#diskExampleTabsBlock-12').addClass('display-n')
    $('#diskExampleTabsBlock-13').addClass('display-n')
    $('#diskExampleTabsBlock-14').addClass('display-n')
    $('#diskExampleTabsBlock-15').addClass('display-n')
    $('#diskExampleTabsBlock-16').addClass('display-n')
    $('#diskExampleTabsBlock-17').addClass('display-n')
    $('#diskExampleTabsBlock-18').addClass('display-n')
    $('#diskExampleTabsBlock-19').addClass('display-n')
    $('#diskExampleTabsBlock-20').addClass('display-n')
});

$('#diskExampleTabsElement-10').on('click', function() {
    $('#diskExampleTabsElement-10').addClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-2').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-3').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-4').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-5').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-6').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-7').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-8').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-9').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-1').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-11').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-12').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-13').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-14').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-15').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-16').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-17').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-18').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-19').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-20').removeClass('disk-examples__block-tabs-item-active')

    $('#diskExampleTabsBlock-10').removeClass('display-n')
    $('#diskExampleTabsBlock-2').addClass('display-n')
    $('#diskExampleTabsBlock-3').addClass('display-n')
    $('#diskExampleTabsBlock-4').addClass('display-n')
    $('#diskExampleTabsBlock-5').addClass('display-n')
    $('#diskExampleTabsBlock-6').addClass('display-n')
    $('#diskExampleTabsBlock-7').addClass('display-n')
    $('#diskExampleTabsBlock-8').addClass('display-n')
    $('#diskExampleTabsBlock-9').addClass('display-n')
    $('#diskExampleTabsBlock-1').addClass('display-n')
    $('#diskExampleTabsBlock-11').addClass('display-n')
    $('#diskExampleTabsBlock-12').addClass('display-n')
    $('#diskExampleTabsBlock-13').addClass('display-n')
    $('#diskExampleTabsBlock-14').addClass('display-n')
    $('#diskExampleTabsBlock-15').addClass('display-n')
    $('#diskExampleTabsBlock-16').addClass('display-n')
    $('#diskExampleTabsBlock-17').addClass('display-n')
    $('#diskExampleTabsBlock-18').addClass('display-n')
    $('#diskExampleTabsBlock-19').addClass('display-n')
    $('#diskExampleTabsBlock-20').addClass('display-n')
});

$('#diskExampleTabsElement-11').on('click', function() {
    $('#diskExampleTabsElement-11').addClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-2').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-3').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-4').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-5').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-6').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-7').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-8').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-9').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-10').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-1').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-12').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-13').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-14').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-15').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-16').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-17').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-18').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-19').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-20').removeClass('disk-examples__block-tabs-item-active')

    $('#diskExampleTabsBlock-11').removeClass('display-n')
    $('#diskExampleTabsBlock-2').addClass('display-n')
    $('#diskExampleTabsBlock-3').addClass('display-n')
    $('#diskExampleTabsBlock-4').addClass('display-n')
    $('#diskExampleTabsBlock-5').addClass('display-n')
    $('#diskExampleTabsBlock-6').addClass('display-n')
    $('#diskExampleTabsBlock-7').addClass('display-n')
    $('#diskExampleTabsBlock-8').addClass('display-n')
    $('#diskExampleTabsBlock-9').addClass('display-n')
    $('#diskExampleTabsBlock-10').addClass('display-n')
    $('#diskExampleTabsBlock-1').addClass('display-n')
    $('#diskExampleTabsBlock-12').addClass('display-n')
    $('#diskExampleTabsBlock-13').addClass('display-n')
    $('#diskExampleTabsBlock-14').addClass('display-n')
    $('#diskExampleTabsBlock-15').addClass('display-n')
    $('#diskExampleTabsBlock-16').addClass('display-n')
    $('#diskExampleTabsBlock-17').addClass('display-n')
    $('#diskExampleTabsBlock-18').addClass('display-n')
    $('#diskExampleTabsBlock-19').addClass('display-n')
    $('#diskExampleTabsBlock-20').addClass('display-n')
});

$('#diskExampleTabsElement-12').on('click', function() {
    $('#diskExampleTabsElement-12').addClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-2').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-3').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-4').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-5').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-6').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-7').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-8').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-9').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-10').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-11').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-1').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-13').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-14').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-15').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-16').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-17').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-18').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-19').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-20').removeClass('disk-examples__block-tabs-item-active')

    $('#diskExampleTabsBlock-12').removeClass('display-n')
    $('#diskExampleTabsBlock-2').addClass('display-n')
    $('#diskExampleTabsBlock-3').addClass('display-n')
    $('#diskExampleTabsBlock-4').addClass('display-n')
    $('#diskExampleTabsBlock-5').addClass('display-n')
    $('#diskExampleTabsBlock-6').addClass('display-n')
    $('#diskExampleTabsBlock-7').addClass('display-n')
    $('#diskExampleTabsBlock-8').addClass('display-n')
    $('#diskExampleTabsBlock-9').addClass('display-n')
    $('#diskExampleTabsBlock-10').addClass('display-n')
    $('#diskExampleTabsBlock-11').addClass('display-n')
    $('#diskExampleTabsBlock-1').addClass('display-n')
    $('#diskExampleTabsBlock-13').addClass('display-n')
    $('#diskExampleTabsBlock-14').addClass('display-n')
    $('#diskExampleTabsBlock-15').addClass('display-n')
    $('#diskExampleTabsBlock-16').addClass('display-n')
    $('#diskExampleTabsBlock-17').addClass('display-n')
    $('#diskExampleTabsBlock-18').addClass('display-n')
    $('#diskExampleTabsBlock-19').addClass('display-n')
    $('#diskExampleTabsBlock-20').addClass('display-n')
});

$('#diskExampleTabsElement-13').on('click', function() {
    $('#diskExampleTabsElement-13').addClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-2').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-3').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-4').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-5').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-6').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-7').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-8').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-9').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-10').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-11').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-12').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-1').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-14').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-15').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-16').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-17').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-18').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-19').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-20').removeClass('disk-examples__block-tabs-item-active')

    $('#diskExampleTabsBlock-13').removeClass('display-n')
    $('#diskExampleTabsBlock-2').addClass('display-n')
    $('#diskExampleTabsBlock-3').addClass('display-n')
    $('#diskExampleTabsBlock-4').addClass('display-n')
    $('#diskExampleTabsBlock-5').addClass('display-n')
    $('#diskExampleTabsBlock-6').addClass('display-n')
    $('#diskExampleTabsBlock-7').addClass('display-n')
    $('#diskExampleTabsBlock-8').addClass('display-n')
    $('#diskExampleTabsBlock-9').addClass('display-n')
    $('#diskExampleTabsBlock-10').addClass('display-n')
    $('#diskExampleTabsBlock-11').addClass('display-n')
    $('#diskExampleTabsBlock-12').addClass('display-n')
    $('#diskExampleTabsBlock-1').addClass('display-n')
    $('#diskExampleTabsBlock-14').addClass('display-n')
    $('#diskExampleTabsBlock-15').addClass('display-n')
    $('#diskExampleTabsBlock-16').addClass('display-n')
    $('#diskExampleTabsBlock-17').addClass('display-n')
    $('#diskExampleTabsBlock-18').addClass('display-n')
    $('#diskExampleTabsBlock-19').addClass('display-n')
    $('#diskExampleTabsBlock-20').addClass('display-n')
});

$('#diskExampleTabsElement-14').on('click', function() {
    $('#diskExampleTabsElement-14').addClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-2').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-3').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-4').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-5').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-6').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-7').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-8').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-9').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-10').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-11').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-12').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-13').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-1').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-15').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-16').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-17').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-18').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-19').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-20').removeClass('disk-examples__block-tabs-item-active')

    $('#diskExampleTabsBlock-14').removeClass('display-n')
    $('#diskExampleTabsBlock-2').addClass('display-n')
    $('#diskExampleTabsBlock-3').addClass('display-n')
    $('#diskExampleTabsBlock-4').addClass('display-n')
    $('#diskExampleTabsBlock-5').addClass('display-n')
    $('#diskExampleTabsBlock-6').addClass('display-n')
    $('#diskExampleTabsBlock-7').addClass('display-n')
    $('#diskExampleTabsBlock-8').addClass('display-n')
    $('#diskExampleTabsBlock-9').addClass('display-n')
    $('#diskExampleTabsBlock-10').addClass('display-n')
    $('#diskExampleTabsBlock-11').addClass('display-n')
    $('#diskExampleTabsBlock-12').addClass('display-n')
    $('#diskExampleTabsBlock-13').addClass('display-n')
    $('#diskExampleTabsBlock-1').addClass('display-n')
    $('#diskExampleTabsBlock-15').addClass('display-n')
    $('#diskExampleTabsBlock-16').addClass('display-n')
    $('#diskExampleTabsBlock-17').addClass('display-n')
    $('#diskExampleTabsBlock-18').addClass('display-n')
    $('#diskExampleTabsBlock-19').addClass('display-n')
    $('#diskExampleTabsBlock-20').addClass('display-n')
});

$('#diskExampleTabsElement-15').on('click', function() {
    $('#diskExampleTabsElement-15').addClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-2').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-3').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-4').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-5').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-6').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-7').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-8').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-9').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-10').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-11').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-12').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-13').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-14').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-1').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-16').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-17').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-18').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-19').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-20').removeClass('disk-examples__block-tabs-item-active')

    $('#diskExampleTabsBlock-15').removeClass('display-n')
    $('#diskExampleTabsBlock-2').addClass('display-n')
    $('#diskExampleTabsBlock-3').addClass('display-n')
    $('#diskExampleTabsBlock-4').addClass('display-n')
    $('#diskExampleTabsBlock-5').addClass('display-n')
    $('#diskExampleTabsBlock-6').addClass('display-n')
    $('#diskExampleTabsBlock-7').addClass('display-n')
    $('#diskExampleTabsBlock-8').addClass('display-n')
    $('#diskExampleTabsBlock-9').addClass('display-n')
    $('#diskExampleTabsBlock-10').addClass('display-n')
    $('#diskExampleTabsBlock-11').addClass('display-n')
    $('#diskExampleTabsBlock-12').addClass('display-n')
    $('#diskExampleTabsBlock-13').addClass('display-n')
    $('#diskExampleTabsBlock-14').addClass('display-n')
    $('#diskExampleTabsBlock-1').addClass('display-n')
    $('#diskExampleTabsBlock-16').addClass('display-n')
    $('#diskExampleTabsBlock-17').addClass('display-n')
    $('#diskExampleTabsBlock-18').addClass('display-n')
    $('#diskExampleTabsBlock-19').addClass('display-n')
    $('#diskExampleTabsBlock-20').addClass('display-n')
});

$('#diskExampleTabsElement-16').on('click', function() {
    $('#diskExampleTabsElement-16').addClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-2').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-3').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-4').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-5').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-6').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-7').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-8').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-9').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-10').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-11').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-12').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-13').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-14').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-15').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-1').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-17').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-18').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-19').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-20').removeClass('disk-examples__block-tabs-item-active')

    $('#diskExampleTabsBlock-16').removeClass('display-n')
    $('#diskExampleTabsBlock-2').addClass('display-n')
    $('#diskExampleTabsBlock-3').addClass('display-n')
    $('#diskExampleTabsBlock-4').addClass('display-n')
    $('#diskExampleTabsBlock-5').addClass('display-n')
    $('#diskExampleTabsBlock-6').addClass('display-n')
    $('#diskExampleTabsBlock-7').addClass('display-n')
    $('#diskExampleTabsBlock-8').addClass('display-n')
    $('#diskExampleTabsBlock-9').addClass('display-n')
    $('#diskExampleTabsBlock-10').addClass('display-n')
    $('#diskExampleTabsBlock-11').addClass('display-n')
    $('#diskExampleTabsBlock-12').addClass('display-n')
    $('#diskExampleTabsBlock-13').addClass('display-n')
    $('#diskExampleTabsBlock-14').addClass('display-n')
    $('#diskExampleTabsBlock-15').addClass('display-n')
    $('#diskExampleTabsBlock-1').addClass('display-n')
    $('#diskExampleTabsBlock-17').addClass('display-n')
    $('#diskExampleTabsBlock-18').addClass('display-n')
    $('#diskExampleTabsBlock-19').addClass('display-n')
    $('#diskExampleTabsBlock-20').addClass('display-n')
});

$('#diskExampleTabsElement-17').on('click', function() {
    $('#diskExampleTabsElement-17').addClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-2').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-3').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-4').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-5').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-6').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-7').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-8').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-9').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-10').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-11').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-12').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-13').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-14').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-15').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-16').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-1').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-18').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-19').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-20').removeClass('disk-examples__block-tabs-item-active')

    $('#diskExampleTabsBlock-17').removeClass('display-n')
    $('#diskExampleTabsBlock-2').addClass('display-n')
    $('#diskExampleTabsBlock-3').addClass('display-n')
    $('#diskExampleTabsBlock-4').addClass('display-n')
    $('#diskExampleTabsBlock-5').addClass('display-n')
    $('#diskExampleTabsBlock-6').addClass('display-n')
    $('#diskExampleTabsBlock-7').addClass('display-n')
    $('#diskExampleTabsBlock-8').addClass('display-n')
    $('#diskExampleTabsBlock-9').addClass('display-n')
    $('#diskExampleTabsBlock-10').addClass('display-n')
    $('#diskExampleTabsBlock-11').addClass('display-n')
    $('#diskExampleTabsBlock-12').addClass('display-n')
    $('#diskExampleTabsBlock-13').addClass('display-n')
    $('#diskExampleTabsBlock-14').addClass('display-n')
    $('#diskExampleTabsBlock-15').addClass('display-n')
    $('#diskExampleTabsBlock-16').addClass('display-n')
    $('#diskExampleTabsBlock-1').addClass('display-n')
    $('#diskExampleTabsBlock-18').addClass('display-n')
    $('#diskExampleTabsBlock-19').addClass('display-n')
    $('#diskExampleTabsBlock-20').addClass('display-n')
});

$('#diskExampleTabsElement-18').on('click', function() {
    $('#diskExampleTabsElement-18').addClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-2').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-3').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-4').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-5').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-6').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-7').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-8').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-9').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-10').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-11').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-12').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-13').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-14').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-15').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-16').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-17').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-1').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-19').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-20').removeClass('disk-examples__block-tabs-item-active')

    $('#diskExampleTabsBlock-18').removeClass('display-n')
    $('#diskExampleTabsBlock-2').addClass('display-n')
    $('#diskExampleTabsBlock-3').addClass('display-n')
    $('#diskExampleTabsBlock-4').addClass('display-n')
    $('#diskExampleTabsBlock-5').addClass('display-n')
    $('#diskExampleTabsBlock-6').addClass('display-n')
    $('#diskExampleTabsBlock-7').addClass('display-n')
    $('#diskExampleTabsBlock-8').addClass('display-n')
    $('#diskExampleTabsBlock-9').addClass('display-n')
    $('#diskExampleTabsBlock-10').addClass('display-n')
    $('#diskExampleTabsBlock-11').addClass('display-n')
    $('#diskExampleTabsBlock-12').addClass('display-n')
    $('#diskExampleTabsBlock-13').addClass('display-n')
    $('#diskExampleTabsBlock-14').addClass('display-n')
    $('#diskExampleTabsBlock-15').addClass('display-n')
    $('#diskExampleTabsBlock-16').addClass('display-n')
    $('#diskExampleTabsBlock-17').addClass('display-n')
    $('#diskExampleTabsBlock-1').addClass('display-n')
    $('#diskExampleTabsBlock-19').addClass('display-n')
    $('#diskExampleTabsBlock-20').addClass('display-n')
});

$('#diskExampleTabsElement-19').on('click', function() {
    $('#diskExampleTabsElement-19').addClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-2').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-3').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-4').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-5').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-6').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-7').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-8').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-9').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-10').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-11').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-12').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-13').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-14').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-15').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-16').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-17').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-18').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-1').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-20').removeClass('disk-examples__block-tabs-item-active')

    $('#diskExampleTabsBlock-19').removeClass('display-n')
    $('#diskExampleTabsBlock-2').addClass('display-n')
    $('#diskExampleTabsBlock-3').addClass('display-n')
    $('#diskExampleTabsBlock-4').addClass('display-n')
    $('#diskExampleTabsBlock-5').addClass('display-n')
    $('#diskExampleTabsBlock-6').addClass('display-n')
    $('#diskExampleTabsBlock-7').addClass('display-n')
    $('#diskExampleTabsBlock-8').addClass('display-n')
    $('#diskExampleTabsBlock-9').addClass('display-n')
    $('#diskExampleTabsBlock-10').addClass('display-n')
    $('#diskExampleTabsBlock-11').addClass('display-n')
    $('#diskExampleTabsBlock-12').addClass('display-n')
    $('#diskExampleTabsBlock-13').addClass('display-n')
    $('#diskExampleTabsBlock-14').addClass('display-n')
    $('#diskExampleTabsBlock-15').addClass('display-n')
    $('#diskExampleTabsBlock-16').addClass('display-n')
    $('#diskExampleTabsBlock-17').addClass('display-n')
    $('#diskExampleTabsBlock-18').addClass('display-n')
    $('#diskExampleTabsBlock-1').addClass('display-n')
    $('#diskExampleTabsBlock-20').addClass('display-n')
});

$('#diskExampleTabsElement-20').on('click', function() {
    $('#diskExampleTabsElement-20').addClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-2').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-3').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-4').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-5').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-6').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-7').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-8').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-9').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-10').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-11').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-12').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-13').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-14').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-15').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-16').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-17').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-18').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-19').removeClass('disk-examples__block-tabs-item-active')
    $('#diskExampleTabsElement-1').removeClass('disk-examples__block-tabs-item-active')

    $('#diskExampleTabsBlock-20').removeClass('display-n')
    $('#diskExampleTabsBlock-2').addClass('display-n')
    $('#diskExampleTabsBlock-3').addClass('display-n')
    $('#diskExampleTabsBlock-4').addClass('display-n')
    $('#diskExampleTabsBlock-5').addClass('display-n')
    $('#diskExampleTabsBlock-6').addClass('display-n')
    $('#diskExampleTabsBlock-7').addClass('display-n')
    $('#diskExampleTabsBlock-8').addClass('display-n')
    $('#diskExampleTabsBlock-9').addClass('display-n')
    $('#diskExampleTabsBlock-10').addClass('display-n')
    $('#diskExampleTabsBlock-11').addClass('display-n')
    $('#diskExampleTabsBlock-12').addClass('display-n')
    $('#diskExampleTabsBlock-13').addClass('display-n')
    $('#diskExampleTabsBlock-14').addClass('display-n')
    $('#diskExampleTabsBlock-15').addClass('display-n')
    $('#diskExampleTabsBlock-16').addClass('display-n')
    $('#diskExampleTabsBlock-17').addClass('display-n')
    $('#diskExampleTabsBlock-18').addClass('display-n')
    $('#diskExampleTabsBlock-19').addClass('display-n')
    $('#diskExampleTabsBlock-1').addClass('display-n')
});



$('.disk-constructor__wrapper-controls-type').on('click', function() {
    $('.disk-constructor__wrapper-controls-adds').toggleClass('display-n')
});
$('.disk-constructor__wrapper-controls-adds-close').on('click', function() {
    $('.disk-constructor__wrapper-controls-adds').addClass('display-n')
});

$('.disk-price__block-plus').on('click', function() {
    $('.disk-price__block-catalog').toggleClass('display-n')
});


var diskSliderBlock = new Swiper(".diskSliderBlock", {
    // loop: true,
    navigation: {
        nextEl: ".disk-slider__block-wrapper .swiper-controls .swiper-button-next",
        prevEl: ".disk-slider__block-wrapper .swiper-controls .swiper-button-prev",
    },
    pagination: {
        el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
    },
    keyboard: true,
    slidesPerView: 4,
    spaceBetween: 0,
    breakpoints: {
        1200: {
            slidesPerView: 4,
            spaceBetweenSlides: 0
        },
        850: {
            slidesPerView: 3,
            spaceBetweenSlides: 0
        },
        550: {
            slidesPerView: 2,
            spaceBetweenSlides: 0
        },
        0: {
            slidesPerView: 1,
            spaceBetweenSlides: 0
        }
    }
});


var diskSliderAbouts = new Swiper(".diskSliderAbouts", {
    observer: true,
    observeParents: true,
    // loop: true,
    navigation: {
        nextEl: ".disk-abouts__block-img-slider  .swiper-controls .swiper-button-next",
        prevEl: ".disk-abouts__block-img-slider  .swiper-controls .swiper-button-prev",
    },
    pagination: {
        el: ".disk-abouts__block-img-slider .swiper-controls .swiper-pagination",
    },
    keyboard: true,
    slidesPerView: 1,
    spaceBetween: 0,
});






//! Model Disks Slider




$('.modelDiskSliders-close').on('click', function() {
    $('.modelDiskSliders').addClass('display-n')
    $('body').css('overflow', 'visible')
});

$('#diskSlidersItems-1').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelDiskSliderBlockCount = 0
    $('.modelDiskSliders').removeClass('display-n')
    var modelDiskSliderBlock = new Swiper(".modelDiskSliderBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskSliders__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskSliders__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskSliderBlockCount,
    });
});
$('#diskSlidersItems-2').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelDiskSliderBlockCount = 1
    $('.modelDiskSliders').removeClass('display-n')
    var modelDiskSliderBlock = new Swiper(".modelDiskSliderBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskSliders__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskSliders__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskSliderBlockCount,
    });
});
$('#diskSlidersItems-3').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelDiskSliderBlockCount = 2
    $('.modelDiskSliders').removeClass('display-n')
    var modelDiskSliderBlock = new Swiper(".modelDiskSliderBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskSliders__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskSliders__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskSliderBlockCount,
    });
});
$('#diskSlidersItems-4').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelDiskSliderBlockCount = 3
    $('.modelDiskSliders').removeClass('display-n')
    var modelDiskSliderBlock = new Swiper(".modelDiskSliderBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskSliders__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskSliders__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskSliderBlockCount,
    });
});
$('#diskSlidersItems-5').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelDiskSliderBlockCount = 4
    $('.modelDiskSliders').removeClass('display-n')
    var modelDiskSliderBlock = new Swiper(".modelDiskSliderBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskSliders__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskSliders__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskSliderBlockCount,
    });
});
$('#diskSlidersItems-6').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelDiskSliderBlockCount = 5
    $('.modelDiskSliders').removeClass('display-n')
    var modelDiskSliderBlock = new Swiper(".modelDiskSliderBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskSliders__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskSliders__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskSliderBlockCount,
    });
});
$('#diskSlidersItems-7').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelDiskSliderBlockCount = 6
    $('.modelDiskSliders').removeClass('display-n')
    var modelDiskSliderBlock = new Swiper(".modelDiskSliderBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskSliders__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskSliders__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskSliderBlockCount,
    });
});
$('#diskSlidersItems-8').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelDiskSliderBlockCount = 7
    $('.modelDiskSliders').removeClass('display-n')
    var modelDiskSliderBlock = new Swiper(".modelDiskSliderBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskSliders__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskSliders__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskSliderBlockCount,
    });
});
$('#diskSlidersItems-9').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelDiskSliderBlockCount = 8
    $('.modelDiskSliders').removeClass('display-n')
    var modelDiskSliderBlock = new Swiper(".modelDiskSliderBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskSliders__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskSliders__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskSliderBlockCount,
    });
});
$('#diskSlidersItems-10').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelDiskSliderBlockCount = 9
    $('.modelDiskSliders').removeClass('display-n')
    var modelDiskSliderBlock = new Swiper(".modelDiskSliderBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskSliders__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskSliders__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskSliderBlockCount,
    });
});
$('#diskSlidersItems-11').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelDiskSliderBlockCount = 10
    $('.modelDiskSliders').removeClass('display-n')
    var modelDiskSliderBlock = new Swiper(".modelDiskSliderBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskSliders__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskSliders__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskSliderBlockCount,
    });
});
$('#diskSlidersItems-12').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelDiskSliderBlockCount = 11
    $('.modelDiskSliders').removeClass('display-n')
    var modelDiskSliderBlock = new Swiper(".modelDiskSliderBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskSliders__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskSliders__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskSliderBlockCount,
    });
});
$('#diskSlidersItems-13').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelDiskSliderBlockCount = 12
    $('.modelDiskSliders').removeClass('display-n')
    var modelDiskSliderBlock = new Swiper(".modelDiskSliderBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskSliders__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskSliders__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskSliderBlockCount,
    });
});
$('#diskSlidersItems-14').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelDiskSliderBlockCount = 13
    $('.modelDiskSliders').removeClass('display-n')
    var modelDiskSliderBlock = new Swiper(".modelDiskSliderBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskSliders__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskSliders__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskSliderBlockCount,
    });
});
$('#diskSlidersItems-15').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelDiskSliderBlockCount = 14
    $('.modelDiskSliders').removeClass('display-n')
    var modelDiskSliderBlock = new Swiper(".modelDiskSliderBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskSliders__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskSliders__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskSliderBlockCount,
    });
});
$('#diskSlidersItems-16').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelDiskSliderBlockCount = 15
    $('.modelDiskSliders').removeClass('display-n')
    var modelDiskSliderBlock = new Swiper(".modelDiskSliderBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskSliders__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskSliders__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskSliderBlockCount,
    });
});
$('#diskSlidersItems-17').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelDiskSliderBlockCount = 16
    $('.modelDiskSliders').removeClass('display-n')
    var modelDiskSliderBlock = new Swiper(".modelDiskSliderBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskSliders__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskSliders__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskSliderBlockCount,
    });
});
$('#diskSlidersItems-18').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelDiskSliderBlockCount = 17
    $('.modelDiskSliders').removeClass('display-n')
    var modelDiskSliderBlock = new Swiper(".modelDiskSliderBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskSliders__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskSliders__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskSliderBlockCount,
    });
});
$('#diskSlidersItems-19').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelDiskSliderBlockCount = 18
    $('.modelDiskSliders').removeClass('display-n')
    var modelDiskSliderBlock = new Swiper(".modelDiskSliderBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskSliders__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskSliders__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskSliderBlockCount,
    });
});
$('#diskSlidersItems-20').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelDiskSliderBlockCount = 19
    $('.modelDiskSliders').removeClass('display-n')
    var modelDiskSliderBlock = new Swiper(".modelDiskSliderBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskSliders__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskSliders__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskSliderBlockCount,
    });
});
$('#diskSlidersItems-21').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelDiskSliderBlockCount = 20
    $('.modelDiskSliders').removeClass('display-n')
    var modelDiskSliderBlock = new Swiper(".modelDiskSliderBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskSliders__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskSliders__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskSliderBlockCount,
    });
});
$('#diskSlidersItems-22').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelDiskSliderBlockCount = 21
    $('.modelDiskSliders').removeClass('display-n')
    var modelDiskSliderBlock = new Swiper(".modelDiskSliderBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskSliders__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskSliders__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskSliderBlockCount,
    });
});
$('#diskSlidersItems-23').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelDiskSliderBlockCount = 22
    $('.modelDiskSliders').removeClass('display-n')
    var modelDiskSliderBlock = new Swiper(".modelDiskSliderBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskSliders__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskSliders__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskSliderBlockCount,
    });
});
$('#diskSlidersItems-24').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelDiskSliderBlockCount = 23
    $('.modelDiskSliders').removeClass('display-n')
    var modelDiskSliderBlock = new Swiper(".modelDiskSliderBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskSliders__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskSliders__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskSliderBlockCount,
    });
});
$('#diskSlidersItems-25').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelDiskSliderBlockCount = 24
    $('.modelDiskSliders').removeClass('display-n')
    var modelDiskSliderBlock = new Swiper(".modelDiskSliderBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskSliders__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskSliders__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskSliderBlockCount,
    });
});


$('.modelDiskAboutSlider-close').on('click', function() {
    $('.modelDiskAboutSlider').addClass('display-n')
    $('body').css('overflow', 'visible')
});

$('#diskSlidersAboutItems-1').on('click', function() {
    $('.modelDiskAboutSlider').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskAboutSliderBlockCount = 0
    var modelDiskAboutSliderBlock = new Swiper(".modelDiskAboutSliderBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskAboutSlider__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskAboutSlider__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskAboutSliderBlockCount,
    });
});
$('#diskSlidersAboutItems-2').on('click', function() {
    $('.modelDiskAboutSlider').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskAboutSliderBlockCount = 1
    var modelDiskAboutSliderBlock = new Swiper(".modelDiskAboutSliderBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskAboutSlider__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskAboutSlider__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskAboutSliderBlockCount,
    });
});
$('#diskSlidersAboutItems-3').on('click', function() {
    $('.modelDiskAboutSlider').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskAboutSliderBlockCount = 2
    var modelDiskAboutSliderBlock = new Swiper(".modelDiskAboutSliderBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskAboutSlider__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskAboutSlider__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskAboutSliderBlockCount,
    });
});
$('#diskSlidersAboutItems-4').on('click', function() {
    $('.modelDiskAboutSlider').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskAboutSliderBlockCount = 3
    var modelDiskAboutSliderBlock = new Swiper(".modelDiskAboutSliderBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskAboutSlider__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskAboutSlider__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskAboutSliderBlockCount,
    });
});
$('#diskSlidersAboutItems-5').on('click', function() {
    $('.modelDiskAboutSlider').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskAboutSliderBlockCount = 4
    var modelDiskAboutSliderBlock = new Swiper(".modelDiskAboutSliderBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskAboutSlider__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskAboutSlider__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskAboutSliderBlockCount,
    });
});
$('#diskSlidersAboutItems-6').on('click', function() {
    $('.modelDiskAboutSlider').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskAboutSliderBlockCount = 5
    var modelDiskAboutSliderBlock = new Swiper(".modelDiskAboutSliderBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskAboutSlider__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskAboutSlider__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskAboutSliderBlockCount,
    });
});




$('.modelDiskExamplesSliders-close ').on('click', function() {
    $('.modelDiskExamplesSliders').addClass('display-n')
    $('body').css('overflow', 'visible')
});
$('#diskSlidersExamplesItems-1').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 0
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-2').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 1
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-3').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 2
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-4').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 3
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-5').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 4
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-6').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 5
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-7').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 6
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-8').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 7
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-9').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 8
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-10').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 9
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-11').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 10
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-12').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 11
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-13').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 12
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-14').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 13
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-15').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 14
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-16').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 15
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-17').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 16
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-18').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 17
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-19').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 18
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-20').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 19
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-21').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 20
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-22').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 21
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-23').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 22
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-24').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 23
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-25').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 24
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-26').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 25
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-27').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 26
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-28').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 27
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-29').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 28
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-30').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 29
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-31').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 30
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-32').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 31
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-33').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 32
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-34').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 33
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-35').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 34
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-36').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 35
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-37').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 36
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-38').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 37
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-39').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 38
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-40').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 39
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-41').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 40
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-42').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 41
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-43').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 42
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-44').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 43
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-45').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 44
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-46').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 45
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-47').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 46
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-48').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 47
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-49').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 48
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-50').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 49
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-51').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 50
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-52').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 51
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-53').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 52
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-54').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 53
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-55').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 54
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-56').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 55
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-57').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 56
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-58').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 57
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-59').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 58
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-60').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 59
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-61').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 60
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-62').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 61
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-63').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 62
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-64').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 63
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-65').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 64
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-66').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 65
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-67').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 66
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-68').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 67
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-69').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 68
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-70').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 69
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-71').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 70
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-72').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 71
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-73').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 72
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-74').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 73
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-75').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 74
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-76').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 75
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-77').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 76
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-78').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 77
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-79').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 78
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-80').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 79
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-81').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 80
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-82').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 81
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-83').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 82
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-84').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 83
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-85').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 84
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-86').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 85
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-87').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 86
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-88').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 87
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-89').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 88
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-90').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 89
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-91').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 90
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-92').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 91
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-93').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 92
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-94').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 93
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-95').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 94
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-96').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 95
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-97').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 96
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-98').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 97
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-99').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 98
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-100').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 99
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-101').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 100
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-102').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 101
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-103').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 102
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-104').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 103
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-105').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 104
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-106').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 105
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-107').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 106
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-108').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 107
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-109').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 108
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-110').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 109
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-111').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 110
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-112').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 111
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-113').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 112
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-114').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 113
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-115').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 114
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-116').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 115
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-117').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 116
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-118').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 117
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-119').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 118
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-120').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 119
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-121').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 120
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-122').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 121
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-123').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 122
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-124').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 123
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-125').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 124
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-126').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 125
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-127').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 126
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-128').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 127
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-129').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 128
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-130').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 129
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-131').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 130
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-132').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 131
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-133').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 132
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-134').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 133
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-135').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 134
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-136').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 135
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-137').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 136
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-138').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 137
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-139').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 138
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-140').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 139
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-141').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 140
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-142').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 141
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-143').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 142
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-144').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 143
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-145').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 144
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-146').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 145
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-147').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 146
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-148').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 147
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-149').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 148
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-150').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 149
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-151').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 150
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-152').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 151
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-153').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 152
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-154').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 153
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-155').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 154
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-156').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 155
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-157').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 156
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-158').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 157
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-159').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 158
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-160').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 159
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-161').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 160
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-162').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 161
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-163').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 162
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-164').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 163
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-165').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 164
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-166').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 165
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-167').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 166
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-168').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 167
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-169').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 168
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-170').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 169
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-171').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 170
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-172').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 171
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-173').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 172
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-174').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 173
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-175').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 174
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-176').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 175
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});
$('#diskSlidersExamplesItems-177').on('click', function() {
    $('.modelDiskExamplesSliders').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelDiskExamplesSlidersBlockCount = 176
    var modelDiskExamplesSlidersBlock = new Swiper(".modelDiskExamplesSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelDiskExamplesSliders__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelDiskExamplesSlidersBlockCount,
    })
});

var polishingSliderVideo = new Swiper(".polishingSliderVideo", {
    navigation: {
        nextEl: ".polishing-video__block-slider  .swiper-controls .swiper-button-next",
        prevEl: ".polishing-video__block-slider  .swiper-controls .swiper-button-prev",
    },
    keyboard: true,
});


$('#polishingExampleTabsElement-1').on('click', function() {
    $('#polishingExampleTabsElement-1').addClass('polishing-examples__block-tabs-item-active')
    $('#polishingExampleTabsElement-2').removeClass('polishing-examples__block-tabs-item-active')
    $('#polishingExampleTabsElement-3').removeClass('polishing-examples__block-tabs-item-active')
    $('#polishingExampleTabsElement-4').removeClass('polishing-examples__block-tabs-item-active')

    $('#polishingExampleTabsBlock-1').removeClass('display-n')
    $('#polishingExampleTabsBlock-2').addClass('display-n')
    $('#polishingExampleTabsBlock-3').addClass('display-n')
    $('#polishingExampleTabsBlock-4').addClass('display-n')
});

$('#polishingExampleTabsElement-2').on('click', function() {
    $('#polishingExampleTabsElement-2').addClass('polishing-examples__block-tabs-item-active')
    $('#polishingExampleTabsElement-1').removeClass('polishing-examples__block-tabs-item-active')
    $('#polishingExampleTabsElement-3').removeClass('polishing-examples__block-tabs-item-active')
    $('#polishingExampleTabsElement-4').removeClass('polishing-examples__block-tabs-item-active')

    $('#polishingExampleTabsBlock-2').removeClass('display-n')
    $('#polishingExampleTabsBlock-1').addClass('display-n')
    $('#polishingExampleTabsBlock-3').addClass('display-n')
    $('#polishingExampleTabsBlock-4').addClass('display-n')
});

$('#polishingExampleTabsElement-3').on('click', function() {
    $('#polishingExampleTabsElement-3').addClass('polishing-examples__block-tabs-item-active')
    $('#polishingExampleTabsElement-2').removeClass('polishing-examples__block-tabs-item-active')
    $('#polishingExampleTabsElement-1').removeClass('polishing-examples__block-tabs-item-active')
    $('#polishingExampleTabsElement-4').removeClass('polishing-examples__block-tabs-item-active')

    $('#polishingExampleTabsBlock-3').removeClass('display-n')
    $('#polishingExampleTabsBlock-2').addClass('display-n')
    $('#polishingExampleTabsBlock-1').addClass('display-n')
    $('#polishingExampleTabsBlock-4').addClass('display-n')
});

$('#polishingExampleTabsElement-4').on('click', function() {
    $('#polishingExampleTabsElement-4').addClass('polishing-examples__block-tabs-item-active')
    $('#polishingExampleTabsElement-2').removeClass('polishing-examples__block-tabs-item-active')
    $('#polishingExampleTabsElement-3').removeClass('polishing-examples__block-tabs-item-active')
    $('#polishingExampleTabsElement-1').removeClass('polishing-examples__block-tabs-item-active')

    $('#polishingExampleTabsBlock-4').removeClass('display-n')
    $('#polishingExampleTabsBlock-2').addClass('display-n')
    $('#polishingExampleTabsBlock-3').addClass('display-n')
    $('#polishingExampleTabsBlock-1').addClass('display-n')
});



var polishingSlider = new Swiper(".polishingSlider", {
    navigation: {
        nextEl: ".polishing-slider__block-slider .swiper-controls .swiper-button-next",
        prevEl: ".polishing-slider__block-slider .swiper-controls .swiper-button-prev",
    },
    pagination: {
        el: ".polishing-slider__block-slider .swiper-controls .swiper-pagination",
    },
    slidesPerView: 3,
    spaceBetween: 12,
    keyboard: true,
    breakpoints: {
        1400: {
            slidesPerView: 3,
            spaceBetweenSlides: 12
        },
        760: {
            slidesPerView: 2,
            spaceBetweenSlides: 0
        },
        0: {
            slidesPerView: 1,
            spaceBetweenSlides: 0
        },
    }
});



var polishingSliderBlock = new Swiper(".polishingSliderBlock", {
    navigation: {
        nextEl: ".polishing-slider__block-wrapper .swiper-controls .swiper-button-next",
        prevEl: ".polishing-slider__block-wrapper .swiper-controls .swiper-button-prev",
    },
    pagination: {
        el: ".polishing-slider__block-wrapper .swiper-controls .swiper-pagination",
    },
    keyboard: true,
    slidesPerView: 4,
    spaceBetween: 0,
    breakpoints: {
        1220: {
            slidesPerView: 4,
            spaceBetweenSlides: 0
        },
        700: {
            slidesPerView: 3,
            spaceBetweenSlides: 0
        },
        550: {
            slidesPerView: 2,
            spaceBetweenSlides: 0
        },
        0: {
            slidesPerView: 1,
            spaceBetweenSlides: 0
        },
    }
});



$('.polishing-constructor__wrapper-controls-type').on('click', function() {
    $('.polishing-constructor__wrapper-controls-adds').toggleClass('display-n')
});
$('.polishing-constructor__wrapper-controls-adds-close').on('click', function() {
    $('.polishing-constructor__wrapper-controls-adds').addClass('display-n')
});




$('.modelPolishingSliders-close').on('click', function() {
    $('.modelPolishingSliders').addClass('display-n')
    $('body').css('overflow', 'visible')
});

$('#polishingSlidersItems-1').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingSlidersBlockCount = 0
    $('.modelPolishingSliders').removeClass('display-n')
    var modelPolishingSlidersBlock = new Swiper(".modelPolishingSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingSliders__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingSliders__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingSlidersBlockCount,
    });
});
$('#polishingSlidersItems-2').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingSlidersBlockCount = 1
    $('.modelPolishingSliders').removeClass('display-n')
    var modelPolishingSlidersBlock = new Swiper(".modelPolishingSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingSliders__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingSliders__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingSlidersBlockCount,
    });
});
$('#polishingSlidersItems-3').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingSlidersBlockCount = 2
    $('.modelPolishingSliders').removeClass('display-n')
    var modelPolishingSlidersBlock = new Swiper(".modelPolishingSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingSliders__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingSliders__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingSlidersBlockCount,
    });
});
$('#polishingSlidersItems-4').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingSlidersBlockCount = 3
    $('.modelPolishingSliders').removeClass('display-n')
    var modelPolishingSlidersBlock = new Swiper(".modelPolishingSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingSliders__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingSliders__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingSlidersBlockCount,
    });
});
$('#polishingSlidersItems-5').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingSlidersBlockCount = 4
    $('.modelPolishingSliders').removeClass('display-n')
    var modelPolishingSlidersBlock = new Swiper(".modelPolishingSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingSliders__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingSliders__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingSlidersBlockCount,
    });
});
$('#polishingSlidersItems-6').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingSlidersBlockCount = 5
    $('.modelPolishingSliders').removeClass('display-n')
    var modelPolishingSlidersBlock = new Swiper(".modelPolishingSlidersBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingSliders__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingSliders__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingSlidersBlockCount,
    });
});







$('.modelPolishingExample-close').on('click', function() {
    $('.modelPolishingExample').addClass('display-n')
    $('body').css('overflow', 'visible')
});

$('#polishingExampleItems-1').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 0
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-2').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 1
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-3').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 2
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-4').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 3
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-5').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 4
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-6').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 5
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-7').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 6
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-8').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 7
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-9').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 8
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-10').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 9
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-11').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 10
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-12').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 11
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-13').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 12
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-14').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 13
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-15').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 14
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-16').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 15
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-17').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 16
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-18').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 17
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-19').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 18
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-20').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 19
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-21').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 20
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-22').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 21
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-23').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 22
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-24').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 23
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-25').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 24
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-26').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 25
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-27').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 26
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-28').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 27
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-29').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 28
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-30').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 29
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-31').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 30
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-32').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 31
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-33').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 32
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-34').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 33
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-35').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 34
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-36').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 35
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-37').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 36
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-38').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 37
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-39').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 38
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-40').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 39
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-41').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 40
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-42').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 41
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-43').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 42
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-44').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 43
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-45').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 44
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-46').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 45
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-47').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 46
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-48').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 47
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-49').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 48
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-50').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 49
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-51').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 50
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});
$('#polishingExampleItems-52').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPolishingExampleBlockCount = 51
    $('.modelPolishingExample').removeClass('display-n')
    var modelPolishingExampleBlock = new Swiper(".modelPolishingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPolishingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPolishingExampleBlockCount,
    });
});

var paintSliderVideo = new Swiper(".paintSliderVideo", {
    navigation: {
        nextEl: ".paint-video__block-slider .swiper-controls .swiper-button-next",
        prevEl: ".paint-video__block-slider .swiper-controls .swiper-button-prev",
    },
    keyboard: true,
});


$('#paintExampleTabsElement-1').on('click', function() {
    $('#paintExampleTabsElement-1').addClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-2').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-3').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-4').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-5').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-6').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-7').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-8').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-9').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-10').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-11').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-12').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-13').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-14').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-15').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-16').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-17').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-18').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-19').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-20').removeClass('paint-examples__block-tabs-item-active')

    $('#paintExampleTabsBlock-1').removeClass('display-n')
    $('#paintExampleTabsBlock-2').addClass('display-n')
    $('#paintExampleTabsBlock-3').addClass('display-n')
    $('#paintExampleTabsBlock-4').addClass('display-n')
    $('#paintExampleTabsBlock-5').addClass('display-n')
    $('#paintExampleTabsBlock-6').addClass('display-n')
    $('#paintExampleTabsBlock-7').addClass('display-n')
    $('#paintExampleTabsBlock-8').addClass('display-n')
    $('#paintExampleTabsBlock-9').addClass('display-n')
    $('#paintExampleTabsBlock-10').addClass('display-n')
    $('#paintExampleTabsBlock-11').addClass('display-n')
    $('#paintExampleTabsBlock-12').addClass('display-n')
    $('#paintExampleTabsBlock-13').addClass('display-n')
    $('#paintExampleTabsBlock-14').addClass('display-n')
    $('#paintExampleTabsBlock-15').addClass('display-n')
    $('#paintExampleTabsBlock-16').addClass('display-n')
    $('#paintExampleTabsBlock-17').addClass('display-n')
    $('#paintExampleTabsBlock-18').addClass('display-n')
    $('#paintExampleTabsBlock-19').addClass('display-n')
    $('#paintExampleTabsBlock-20').addClass('display-n')
});

$('#paintExampleTabsElement-2').on('click', function() {
    $('#paintExampleTabsElement-2').addClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-1').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-3').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-4').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-5').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-6').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-7').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-8').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-9').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-10').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-11').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-12').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-13').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-14').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-15').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-16').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-17').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-18').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-19').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-20').removeClass('paint-examples__block-tabs-item-active')

    $('#paintExampleTabsBlock-2').removeClass('display-n')
    $('#paintExampleTabsBlock-1').addClass('display-n')
    $('#paintExampleTabsBlock-3').addClass('display-n')
    $('#paintExampleTabsBlock-4').addClass('display-n')
    $('#paintExampleTabsBlock-5').addClass('display-n')
    $('#paintExampleTabsBlock-6').addClass('display-n')
    $('#paintExampleTabsBlock-7').addClass('display-n')
    $('#paintExampleTabsBlock-8').addClass('display-n')
    $('#paintExampleTabsBlock-9').addClass('display-n')
    $('#paintExampleTabsBlock-10').addClass('display-n')
    $('#paintExampleTabsBlock-11').addClass('display-n')
    $('#paintExampleTabsBlock-12').addClass('display-n')
    $('#paintExampleTabsBlock-13').addClass('display-n')
    $('#paintExampleTabsBlock-14').addClass('display-n')
    $('#paintExampleTabsBlock-15').addClass('display-n')
    $('#paintExampleTabsBlock-16').addClass('display-n')
    $('#paintExampleTabsBlock-17').addClass('display-n')
    $('#paintExampleTabsBlock-18').addClass('display-n')
    $('#paintExampleTabsBlock-19').addClass('display-n')
    $('#paintExampleTabsBlock-20').addClass('display-n')
});

$('#paintExampleTabsElement-3').on('click', function() {
    $('#paintExampleTabsElement-3').addClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-2').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-1').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-4').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-5').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-6').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-7').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-8').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-9').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-10').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-11').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-12').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-13').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-14').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-15').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-16').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-17').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-18').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-19').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-20').removeClass('paint-examples__block-tabs-item-active')

    $('#paintExampleTabsBlock-3').removeClass('display-n')
    $('#paintExampleTabsBlock-2').addClass('display-n')
    $('#paintExampleTabsBlock-1').addClass('display-n')
    $('#paintExampleTabsBlock-4').addClass('display-n')
    $('#paintExampleTabsBlock-5').addClass('display-n')
    $('#paintExampleTabsBlock-6').addClass('display-n')
    $('#paintExampleTabsBlock-7').addClass('display-n')
    $('#paintExampleTabsBlock-8').addClass('display-n')
    $('#paintExampleTabsBlock-9').addClass('display-n')
    $('#paintExampleTabsBlock-10').addClass('display-n')
    $('#paintExampleTabsBlock-11').addClass('display-n')
    $('#paintExampleTabsBlock-12').addClass('display-n')
    $('#paintExampleTabsBlock-13').addClass('display-n')
    $('#paintExampleTabsBlock-14').addClass('display-n')
    $('#paintExampleTabsBlock-15').addClass('display-n')
    $('#paintExampleTabsBlock-16').addClass('display-n')
    $('#paintExampleTabsBlock-17').addClass('display-n')
    $('#paintExampleTabsBlock-18').addClass('display-n')
    $('#paintExampleTabsBlock-19').addClass('display-n')
    $('#paintExampleTabsBlock-20').addClass('display-n')
});

$('#paintExampleTabsElement-4').on('click', function() {
    $('#paintExampleTabsElement-4').addClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-2').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-3').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-1').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-5').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-6').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-7').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-8').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-9').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-10').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-11').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-12').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-13').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-14').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-15').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-16').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-17').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-18').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-19').removeClass('paint-examples__block-tabs-item-active')
    $('#paintExampleTabsElement-20').removeClass('paint-examples__block-tabs-item-active')

    $('#paintExampleTabsBlock-4').removeClass('display-n')
    $('#paintExampleTabsBlock-2').addClass('display-n')
    $('#paintExampleTabsBlock-3').addClass('display-n')
    $('#paintExampleTabsBlock-1').addClass('display-n')
    $('#paintExampleTabsBlock-5').addClass('display-n')
    $('#paintExampleTabsBlock-6').addClass('display-n')
    $('#paintExampleTabsBlock-7').addClass('display-n')
    $('#paintExampleTabsBlock-8').addClass('display-n')
    $('#paintExampleTabsBlock-9').addClass('display-n')
    $('#paintExampleTabsBlock-10').addClass('display-n')
    $('#paintExampleTabsBlock-11').addClass('display-n')
    $('#paintExampleTabsBlock-12').addClass('display-n')
    $('#paintExampleTabsBlock-13').addClass('display-n')
    $('#paintExampleTabsBlock-14').addClass('display-n')
    $('#paintExampleTabsBlock-15').addClass('display-n')
    $('#paintExampleTabsBlock-16').addClass('display-n')
    $('#paintExampleTabsBlock-17').addClass('display-n')
    $('#paintExampleTabsBlock-18').addClass('display-n')
    $('#paintExampleTabsBlock-19').addClass('display-n')
    $('#paintExampleTabsBlock-20').addClass('display-n')
});



$('.modelPaintingExample-close').on('click', function() {
    $('.modelPaintingExample').addClass('display-n')
    $('body').css('overflow', 'visible')
});

$('#paintingExampleItems-1').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPaintingExampleBlockCount = 0
    $('.modelPaintingExample').removeClass('display-n')
    var modelPaintingExampleBlock = new Swiper(".modelPaintingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPaintingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPaintingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPaintingExampleBlockCount,
    });
});
$('#paintingExampleItems-2').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPaintingExampleBlockCount = 1
    $('.modelPaintingExample').removeClass('display-n')
    var modelPaintingExampleBlock = new Swiper(".modelPaintingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPaintingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPaintingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPaintingExampleBlockCount,
    });
});
$('#paintingExampleItems-3').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPaintingExampleBlockCount = 2
    $('.modelPaintingExample').removeClass('display-n')
    var modelPaintingExampleBlock = new Swiper(".modelPaintingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPaintingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPaintingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPaintingExampleBlockCount,
    });
});
$('#paintingExampleItems-4').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPaintingExampleBlockCount = 3
    $('.modelPaintingExample').removeClass('display-n')
    var modelPaintingExampleBlock = new Swiper(".modelPaintingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPaintingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPaintingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPaintingExampleBlockCount,
    });
});
$('#paintingExampleItems-5').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPaintingExampleBlockCount = 4
    $('.modelPaintingExample').removeClass('display-n')
    var modelPaintingExampleBlock = new Swiper(".modelPaintingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPaintingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPaintingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPaintingExampleBlockCount,
    });
});
$('#paintingExampleItems-6').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPaintingExampleBlockCount = 5
    $('.modelPaintingExample').removeClass('display-n')
    var modelPaintingExampleBlock = new Swiper(".modelPaintingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPaintingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPaintingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPaintingExampleBlockCount,
    });
});
$('#paintingExampleItems-7').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPaintingExampleBlockCount = 6
    $('.modelPaintingExample').removeClass('display-n')
    var modelPaintingExampleBlock = new Swiper(".modelPaintingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPaintingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPaintingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPaintingExampleBlockCount,
    });
});
$('#paintingExampleItems-8').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPaintingExampleBlockCount = 7
    $('.modelPaintingExample').removeClass('display-n')
    var modelPaintingExampleBlock = new Swiper(".modelPaintingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPaintingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPaintingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPaintingExampleBlockCount,
    });
});
$('#paintingExampleItems-9').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPaintingExampleBlockCount = 8
    $('.modelPaintingExample').removeClass('display-n')
    var modelPaintingExampleBlock = new Swiper(".modelPaintingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPaintingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPaintingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPaintingExampleBlockCount,
    });
});
$('#paintingExampleItems-10').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPaintingExampleBlockCount = 9
    $('.modelPaintingExample').removeClass('display-n')
    var modelPaintingExampleBlock = new Swiper(".modelPaintingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPaintingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPaintingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPaintingExampleBlockCount,
    });
});
$('#paintingExampleItems-11').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPaintingExampleBlockCount = 10
    $('.modelPaintingExample').removeClass('display-n')
    var modelPaintingExampleBlock = new Swiper(".modelPaintingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPaintingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPaintingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPaintingExampleBlockCount,
    });
});
$('#paintingExampleItems-12').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPaintingExampleBlockCount = 12
    $('.modelPaintingExample').removeClass('display-n')
    var modelPaintingExampleBlock = new Swiper(".modelPaintingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPaintingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPaintingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPaintingExampleBlockCount,
    });
});
$('#paintingExampleItems-13').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPaintingExampleBlockCount = 18
    $('.modelPaintingExample').removeClass('display-n')
    var modelPaintingExampleBlock = new Swiper(".modelPaintingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPaintingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPaintingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPaintingExampleBlockCount,
    });
});
$('#paintingExampleItems-14').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPaintingExampleBlockCount = 11
    $('.modelPaintingExample').removeClass('display-n')
    var modelPaintingExampleBlock = new Swiper(".modelPaintingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPaintingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPaintingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPaintingExampleBlockCount,
    });
});
$('#paintingExampleItems-15').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPaintingExampleBlockCount = 2
    $('.modelPaintingExample').removeClass('display-n')
    var modelPaintingExampleBlock = new Swiper(".modelPaintingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPaintingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPaintingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPaintingExampleBlockCount,
    });
});
$('#paintingExampleItems-16').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPaintingExampleBlockCount = 1
    $('.modelPaintingExample').removeClass('display-n')
    var modelPaintingExampleBlock = new Swiper(".modelPaintingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPaintingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPaintingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPaintingExampleBlockCount,
    });
});
$('#paintingExampleItems-17').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPaintingExampleBlockCount = 3
    $('.modelPaintingExample').removeClass('display-n')
    var modelPaintingExampleBlock = new Swiper(".modelPaintingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPaintingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPaintingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPaintingExampleBlockCount,
    });
});
$('#paintingExampleItems-18').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPaintingExampleBlockCount = 5
    $('.modelPaintingExample').removeClass('display-n')
    var modelPaintingExampleBlock = new Swiper(".modelPaintingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPaintingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPaintingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPaintingExampleBlockCount,
    });
});
$('#paintingExampleItems-19').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPaintingExampleBlockCount = 8
    $('.modelPaintingExample').removeClass('display-n')
    var modelPaintingExampleBlock = new Swiper(".modelPaintingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPaintingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPaintingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPaintingExampleBlockCount,
    });
});
$('#paintingExampleItems-20').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPaintingExampleBlockCount = 9
    $('.modelPaintingExample').removeClass('display-n')
    var modelPaintingExampleBlock = new Swiper(".modelPaintingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPaintingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPaintingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPaintingExampleBlockCount,
    });
});
$('#paintingExampleItems-21').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPaintingExampleBlockCount = 6
    $('.modelPaintingExample').removeClass('display-n')
    var modelPaintingExampleBlock = new Swiper(".modelPaintingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPaintingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPaintingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPaintingExampleBlockCount,
    });
});
$('#paintingExampleItems-22').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPaintingExampleBlockCount = 7
    $('.modelPaintingExample').removeClass('display-n')
    var modelPaintingExampleBlock = new Swiper(".modelPaintingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPaintingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPaintingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPaintingExampleBlockCount,
    });
});
$('#paintingExampleItems-23').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPaintingExampleBlockCount = 14
    $('.modelPaintingExample').removeClass('display-n')
    var modelPaintingExampleBlock = new Swiper(".modelPaintingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPaintingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPaintingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPaintingExampleBlockCount,
    });
});
$('#paintingExampleItems-24').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPaintingExampleBlockCount = 10
    $('.modelPaintingExample').removeClass('display-n')
    var modelPaintingExampleBlock = new Swiper(".modelPaintingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPaintingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPaintingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPaintingExampleBlockCount,
    });
});
$('#paintingExampleItems-25').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPaintingExampleBlockCount = 4
    $('.modelPaintingExample').removeClass('display-n')
    var modelPaintingExampleBlock = new Swiper(".modelPaintingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPaintingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPaintingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPaintingExampleBlockCount,
    });
});
$('#paintingExampleItems-26').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPaintingExampleBlockCount = 18
    $('.modelPaintingExample').removeClass('display-n')
    var modelPaintingExampleBlock = new Swiper(".modelPaintingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPaintingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPaintingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPaintingExampleBlockCount,
    });
});
$('#paintingExampleItems-27').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPaintingExampleBlockCount = 12
    $('.modelPaintingExample').removeClass('display-n')
    var modelPaintingExampleBlock = new Swiper(".modelPaintingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPaintingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPaintingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPaintingExampleBlockCount,
    });
});
$('#paintingExampleItems-28').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPaintingExampleBlockCount = 16
    $('.modelPaintingExample').removeClass('display-n')
    var modelPaintingExampleBlock = new Swiper(".modelPaintingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPaintingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPaintingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPaintingExampleBlockCount,
    });
});
$('#paintingExampleItems-29').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPaintingExampleBlockCount = 17
    $('.modelPaintingExample').removeClass('display-n')
    var modelPaintingExampleBlock = new Swiper(".modelPaintingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPaintingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPaintingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPaintingExampleBlockCount,
    });
});
$('#paintingExampleItems-30').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPaintingExampleBlockCount = 0
    $('.modelPaintingExample').removeClass('display-n')
    var modelPaintingExampleBlock = new Swiper(".modelPaintingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPaintingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPaintingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPaintingExampleBlockCount,
    });
});
$('#paintingExampleItems-31').on('click', function() {
    $('body').css('overflow', 'hidden')
    let modelPaintingExampleBlockCount = 15
    $('.modelPaintingExample').removeClass('display-n')
    var modelPaintingExampleBlock = new Swiper(".modelPaintingExampleBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelPaintingExample__slider  .swiper-controls .swiper-button-next",
            prevEl: ".modelPaintingExample__slider  .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelPaintingExampleBlockCount,
    });
});


var balanceSliderAbout = new Swiper(".balanceSliderAbout", {
    navigation: {
        nextEl: ".balance-ways__slider .swiper-controls .swiper-button-next",
        prevEl: ".balance-ways__slider .swiper-controls .swiper-button-prev",
    },
    pagination: {
        el: ".balance-ways__slider .swiper-controls .swiper-pagination",
    },
    keyboard: true,
    slidesPerView: 4,
    spaceBetween: 0,
    breakpoints: {
        1410: {
            slidesPerView: 4,
            spaceBetweenSlides: 0
        },
        1110: {
            slidesPerView: 3,
            spaceBetweenSlides: 0
        },
        680: {
            slidesPerView: 2,
            spaceBetweenSlides: 0
        },
        0: {
            slidesPerView: 1,
            spaceBetweenSlides: 0
        }
    },
});




$('.modelBalanceSlider-close ').on('click', function() {
    $('.modelBalanceSlider').addClass('display-n')
    $('body').css('overflow', 'visible')
});
$('#balanceSlidersItems-1').on('click', function() {
    $('.modelBalanceSlider').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelBalanceSliderBlockCount = 0
    var modelBalanceSliderBlock = new Swiper(".modelBalanceSliderBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelBalanceSlider__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelBalanceSlider__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelBalanceSliderBlockCount,
    })
});
$('#balanceSlidersItems-2').on('click', function() {
    $('.modelBalanceSlider').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelBalanceSliderBlockCount = 1
    var modelBalanceSliderBlock = new Swiper(".modelBalanceSliderBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelBalanceSlider__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelBalanceSlider__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelBalanceSliderBlockCount,
    })
});
$('#balanceSlidersItems-3').on('click', function() {
    $('.modelBalanceSlider').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelBalanceSliderBlockCount = 2
    var modelBalanceSliderBlock = new Swiper(".modelBalanceSliderBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelBalanceSlider__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelBalanceSlider__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelBalanceSliderBlockCount,
    })
});
$('#balanceSlidersItems-4').on('click', function() {
    $('.modelBalanceSlider').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelBalanceSliderBlockCount = 3
    var modelBalanceSliderBlock = new Swiper(".modelBalanceSliderBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelBalanceSlider__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelBalanceSlider__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelBalanceSliderBlockCount,
    })
});
$('#balanceSlidersItems-5').on('click', function() {
    $('.modelBalanceSlider').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelBalanceSliderBlockCount = 4
    var modelBalanceSliderBlock = new Swiper(".modelBalanceSliderBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelBalanceSlider__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelBalanceSlider__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelBalanceSliderBlockCount,
    })
});
$('#balanceSlidersItems-6').on('click', function() {
    $('.modelBalanceSlider').removeClass('display-n')
    $('body').css('overflow', 'hidden')
    let modelBalanceSliderBlockCount = 5
    var modelBalanceSliderBlock = new Swiper(".modelBalanceSliderBlock", {
        // loop: true,
        navigation: {
            nextEl: ".modelBalanceSlider__slider .swiper-controls .swiper-button-next",
            prevEl: ".modelBalanceSlider__slider .swiper-controls .swiper-button-prev",
        },
        // pagination: {
        //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
        // },
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: modelBalanceSliderBlockCount,
    })
});
var alloySliderVideo = new Swiper(".alloySliderVideo", {
    navigation: {
        nextEl: ".alloy-video__block-slider  .swiper-controls .swiper-button-next",
        prevEl: ".alloy-video__block-slider  .swiper-controls .swiper-button-prev",
    },
    keyboard: true,
});

$('#reviewsOpenMessages').on('click', function() {
    $(this).addClass('display-n')
    $('#reviewsElementMessages-1').removeClass('display-n')
    $('#reviewsElementMessages-2').removeClass('display-n')
    $('#reviewsElementMessages-3').removeClass('display-n')
    $('#reviewsElementMessages-4').removeClass('display-n')
    $('#reviewsElementMessages-5').removeClass('display-n')
    $('#reviewsElementMessages-6').removeClass('display-n')
    $('#reviewsElementMessages-7').removeClass('display-n')
    $('#reviewsElementMessages-8').removeClass('display-n')
    $('#reviewsElementMessages-9').removeClass('display-n')
    $('#reviewsElementMessages-10').removeClass('display-n')
    $('#reviewsElementMessages-11').removeClass('display-n')
    $('#reviewsElementMessages-12').removeClass('display-n')
    $('#reviewsElementMessages-13').removeClass('display-n')
    $('#reviewsCloseMessages').removeClass('display-n')
});
$('#reviewsCloseMessages').on('click', function() {
    $(this).addClass('display-n')
    $('#reviewsElementMessages-1').addClass('display-n')
    $('#reviewsElementMessages-2').addClass('display-n')
    $('#reviewsElementMessages-3').addClass('display-n')
    $('#reviewsElementMessages-4').addClass('display-n')
    $('#reviewsElementMessages-5').addClass('display-n')
    $('#reviewsElementMessages-6').addClass('display-n')
    $('#reviewsElementMessages-7').addClass('display-n')
    $('#reviewsElementMessages-8').addClass('display-n')
    $('#reviewsElementMessages-9').addClass('display-n')
    $('#reviewsElementMessages-10').addClass('display-n')
    $('#reviewsElementMessages-11').addClass('display-n')
    $('#reviewsElementMessages-12').addClass('display-n')
    $('#reviewsElementMessages-13').addClass('display-n')
    $('#reviewsOpenMessages').removeClass('display-n')
});
var wow = new WOW({mobile: false});
wow.init();



$('#headerServicesButton').hover(function() {
    $('#headerServices').toggleClass('display-n')
});
$('#headerServices').hover(function() {
    $(this).toggleClass('display-n')
    $('#headerAddress').addClass('display-n')
});

$('#headerAddressButton').hover(function() {
    $('#headerAddress').toggleClass('display-n')
});
$('#headerAddress').hover(function() {
    $(this).toggleClass('display-n')
    $('#headerServices').addClass('display-n')
});



$('#menuCloseButton-1').removeClass('rotate-45')
$('#menuCloseButton-2').removeClass('rotate-45')
$('#menuCloseButton-3').removeClass('rotate-45')
$('#menuCloseButton-4').removeClass('rotate-45')

$('#menuCloseButton-1').on('click', function() {
    $(this).toggleClass('rotate-45')
    $('#menuCloseButton-2').removeClass('rotate-45')
    $('#menuCloseButton-3').removeClass('rotate-45')
    $('#menuCloseButton-4').removeClass('rotate-45')
    $('#menuItems-7').addClass('display-n')
    $('#menuItems-8').addClass('display-n')
    $('#menuItems-9').addClass('display-n')
    $('#menuItems-10').addClass('display-n')
    $('#menuItems-1').toggleClass('display-n')
    $('#menuItems-2').toggleClass('display-n')
    $('#menuItems-3').toggleClass('display-n')
    $('#menuItems-4').toggleClass('display-n')
    $('#menuItems-5').toggleClass('display-n')
    $('#menuItems-6').toggleClass('display-n')
    $('#menuItems-11').addClass('display-n')
    $('#menuItems-12').addClass('display-n')
    $('#menuItems-13').addClass('display-n')
    $('#menuItems-14').addClass('display-n')
    $('#menuItems-15').addClass('display-n')
    $('#menuItems-16').addClass('display-n')
    $('#menuItems-17').addClass('display-n')
    $('#menuItems-18').addClass('display-n')
})
$('#menuCloseButton-2').on('click', function() {
    $(this).toggleClass('rotate-45')
    $('#menuCloseButton-1').removeClass('rotate-45')
    $('#menuCloseButton-3').removeClass('rotate-45')
    $('#menuCloseButton-4').removeClass('rotate-45')
    $('#menuItems-7').toggleClass('display-n')
    $('#menuItems-8').toggleClass('display-n')
    $('#menuItems-9').toggleClass('display-n')
    $('#menuItems-10').toggleClass('display-n')
    $('#menuItems-1').addClass('display-n')
    $('#menuItems-2').addClass('display-n')
    $('#menuItems-3').addClass('display-n')
    $('#menuItems-4').addClass('display-n')
    $('#menuItems-5').addClass('display-n')
    $('#menuItems-6').addClass('display-n')
    $('#menuItems-11').addClass('display-n')
    $('#menuItems-12').addClass('display-n')
    $('#menuItems-13').addClass('display-n')
    $('#menuItems-14').addClass('display-n')
    $('#menuItems-15').addClass('display-n')
    $('#menuItems-16').addClass('display-n')
    $('#menuItems-17').addClass('display-n')
    $('#menuItems-18').addClass('display-n')
})
$('#menuCloseButton-3').on('click', function() {
    $(this).toggleClass('rotate-45')
    $('#menuCloseButton-1').removeClass('rotate-45')
    $('#menuCloseButton-2').removeClass('rotate-45')
    $('#menuCloseButton-4').removeClass('rotate-45')
    $('#menuItems-7').addClass('display-n')
    $('#menuItems-8').addClass('display-n')
    $('#menuItems-9').addClass('display-n')
    $('#menuItems-10').addClass('display-n')
    $('#menuItems-1').addClass('display-n')
    $('#menuItems-2').addClass('display-n')
    $('#menuItems-3').addClass('display-n')
    $('#menuItems-4').addClass('display-n')
    $('#menuItems-5').addClass('display-n')
    $('#menuItems-6').addClass('display-n')
    $('#menuItems-11').toggleClass('display-n')
    $('#menuItems-12').toggleClass('display-n')
    $('#menuItems-13').addClass('display-n')
    $('#menuItems-14').addClass('display-n')
    $('#menuItems-15').addClass('display-n')
    $('#menuItems-16').addClass('display-n')
    $('#menuItems-17').addClass('display-n')
    $('#menuItems-18').addClass('display-n')
})
$('#menuCloseButton-4').on('click', function() {
    $(this).toggleClass('rotate-45')
    $('#menuCloseButton-1').removeClass('rotate-45')
    $('#menuCloseButton-3').removeClass('rotate-45')
    $('#menuCloseButton-2').removeClass('rotate-45')
    $('#menuItems-7').addClass('display-n')
    $('#menuItems-8').addClass('display-n')
    $('#menuItems-9').addClass('display-n')
    $('#menuItems-10').addClass('display-n')
    $('#menuItems-1').addClass('display-n')
    $('#menuItems-2').addClass('display-n')
    $('#menuItems-3').addClass('display-n')
    $('#menuItems-4').addClass('display-n')
    $('#menuItems-5').addClass('display-n')
    $('#menuItems-6').addClass('display-n')
    $('#menuItems-11').addClass('display-n')
    $('#menuItems-12').addClass('display-n')
    $('#menuItems-13').addClass('display-n')
    $('#menuItems-14').toggleClass('display-n')
    $('#menuItems-15').toggleClass('display-n')
    $('#menuItems-16').toggleClass('display-n')
    $('#menuItems-17').toggleClass('display-n')
    $('#menuItems-18').toggleClass('display-n')
})

$('#menuCloseButtons-1').on('click', function() {
    $('#menuCloseButton-1').toggleClass('rotate-45')
    $('#menuCloseButton-2').removeClass('rotate-45')
    $('#menuCloseButton-3').removeClass('rotate-45')
    $('#menuCloseButton-4').removeClass('rotate-45')
    $('#menuItems-7').addClass('display-n')
    $('#menuItems-8').addClass('display-n')
    $('#menuItems-9').addClass('display-n')
    $('#menuItems-10').addClass('display-n')
    $('#menuItems-1').toggleClass('display-n')
    $('#menuItems-2').toggleClass('display-n')
    $('#menuItems-3').toggleClass('display-n')
    $('#menuItems-4').toggleClass('display-n')
    $('#menuItems-5').toggleClass('display-n')
    $('#menuItems-6').toggleClass('display-n')
    $('#menuItems-11').addClass('display-n')
    $('#menuItems-12').addClass('display-n')
    $('#menuItems-13').addClass('display-n')
    $('#menuItems-14').addClass('display-n')
    $('#menuItems-15').addClass('display-n')
    $('#menuItems-16').addClass('display-n')
    $('#menuItems-17').addClass('display-n')
    $('#menuItems-18').addClass('display-n')
})
$('#menuCloseButtons-2').on('click', function() {
    $('#menuCloseButton-2').toggleClass('rotate-45')
    $('#menuCloseButton-1').removeClass('rotate-45')
    $('#menuCloseButton-3').removeClass('rotate-45')
    $('#menuCloseButton-4').removeClass('rotate-45')
    $('#menuItems-7').toggleClass('display-n')
    $('#menuItems-8').toggleClass('display-n')
    $('#menuItems-9').toggleClass('display-n')
    $('#menuItems-10').toggleClass('display-n')
    $('#menuItems-1').addClass('display-n')
    $('#menuItems-2').addClass('display-n')
    $('#menuItems-3').addClass('display-n')
    $('#menuItems-4').addClass('display-n')
    $('#menuItems-5').addClass('display-n')
    $('#menuItems-6').addClass('display-n')
    $('#menuItems-11').addClass('display-n')
    $('#menuItems-12').addClass('display-n')
    $('#menuItems-13').addClass('display-n')
    $('#menuItems-14').addClass('display-n')
    $('#menuItems-15').addClass('display-n')
    $('#menuItems-16').addClass('display-n')
    $('#menuItems-17').addClass('display-n')
    $('#menuItems-18').addClass('display-n')
})
$('#menuCloseButtons-3').on('click', function() {
    $('#menuCloseButton-3').toggleClass('rotate-45')
    $('#menuCloseButton-1').removeClass('rotate-45')
    $('#menuCloseButton-2').removeClass('rotate-45')
    $('#menuCloseButton-4').removeClass('rotate-45')
    $('#menuItems-7').addClass('display-n')
    $('#menuItems-8').addClass('display-n')
    $('#menuItems-9').addClass('display-n')
    $('#menuItems-10').addClass('display-n')
    $('#menuItems-1').addClass('display-n')
    $('#menuItems-2').addClass('display-n')
    $('#menuItems-3').addClass('display-n')
    $('#menuItems-4').addClass('display-n')
    $('#menuItems-5').addClass('display-n')
    $('#menuItems-6').addClass('display-n')
    $('#menuItems-11').toggleClass('display-n')
    $('#menuItems-12').toggleClass('display-n')
    $('#menuItems-13').addClass('display-n')
    $('#menuItems-14').addClass('display-n')
    $('#menuItems-15').addClass('display-n')
    $('#menuItems-16').addClass('display-n')
    $('#menuItems-17').addClass('display-n')
    $('#menuItems-18').addClass('display-n')
})
$('#menuCloseButtons-4').on('click', function() {
    $('#menuCloseButton-4').toggleClass('rotate-45')
    $('#menuCloseButton-1').removeClass('rotate-45')
    $('#menuCloseButton-3').removeClass('rotate-45')
    $('#menuCloseButton-2').removeClass('rotate-45')
    $('#menuItems-7').addClass('display-n')
    $('#menuItems-8').addClass('display-n')
    $('#menuItems-9').addClass('display-n')
    $('#menuItems-10').addClass('display-n')
    $('#menuItems-1').addClass('display-n')
    $('#menuItems-2').addClass('display-n')
    $('#menuItems-3').addClass('display-n')
    $('#menuItems-4').addClass('display-n')
    $('#menuItems-5').addClass('display-n')
    $('#menuItems-6').addClass('display-n')
    $('#menuItems-11').addClass('display-n')
    $('#menuItems-12').addClass('display-n')
    $('#menuItems-13').addClass('display-n')
    $('#menuItems-14').toggleClass('display-n')
    $('#menuItems-15').toggleClass('display-n')
    $('#menuItems-16').toggleClass('display-n')
    $('#menuItems-17').toggleClass('display-n')
    $('#menuItems-18').toggleClass('display-n')
})

$('.price-price__block-plus').on('click', function() {
    $('.price-price__block-catalog').toggleClass('display-n')
});
$('.constructor-constructor__wrapper-controls-type').on('click', function() {
    $('.constructor-constructor__wrapper-controls-adds').toggleClass('display-n')
});
$('.constructor-constructor__wrapper-controls-adds-close').on('click', function() {
    $('.constructor-constructor__wrapper-controls-adds').addClass('display-n')
});



let constructors = {
    car: 1,
    disk: 1,
}

$('#constructorTypeCarColor-1').on('click', function() {
    const type = 1
    constructors.car = type
    constructorsChecked()
});
$('#constructorTypeCarColor-2').on('click', function() {
    const type = 2
    constructors.car = type
    constructorsChecked()
});
$('#constructorTypeCarColor-3').on('click', function() {
    const type = 3
    constructors.car = type
    constructorsChecked()
});
$('#constructorTypeCarColor-4').on('click', function() {
    const type = 4
    constructors.car = type
    constructorsChecked()
});
$('#constructorTypeCarColor-5').on('click', function() {
    const type = 5
    constructors.car = type
    constructorsChecked()
});
$('#constructorTypeCarColor-6').on('click', function() {
    const type = 6
    constructors.car = type
    constructorsChecked()
});


$('#constructorTypeDiskColor-1').on('click', function() {
    const type = 1
    constructors.disk = type
    constructorsChecked()
});
$('#constructorTypeDiskColor-2').on('click', function() {
    const type = 2
    constructors.disk = type
    constructorsChecked()
});
$('#constructorTypeDiskColor-3').on('click', function() {
    const type = 3
    constructors.disk = type
    constructorsChecked()
});
$('#constructorTypeDiskColor-4').on('click', function() {
    const type = 4
    constructors.disk = type
    constructorsChecked()
});
$('#constructorTypeDiskColor-5').on('click', function() {
    const type = 5
    constructors.disk = type
    constructorsChecked()
});
$('#constructorTypeDiskColor-6').on('click', function() {
    const type = 6
    constructors.disk = type
    constructorsChecked()
});
$('#constructorTypeDiskColor-7').on('click', function() {
    const type = 7
    constructors.disk = type
    constructorsChecked()
});
$('#constructorTypeDiskColor-8').on('click', function() {
    const type = 8
    constructors.disk = type
    constructorsChecked()
});
$('#constructorTypeDiskColor-9').on('click', function() {
    const type = 9
    constructors.disk = type
    constructorsChecked()
});
$('#constructorTypeDiskColor-10').on('click', function() {
    const type = 10
    constructors.disk = type
    constructorsChecked()
});
$('#constructorTypeDiskColor-11').on('click', function() {
    const type = 11
    constructors.disk = type
    constructorsChecked()
});
$('#constructorTypeDiskColor-12').on('click', function() {
    const type = 12
    constructors.disk = type
    constructorsChecked()
});
$('#constructorTypeDiskColor-13').on('click', function() {
    const type = 13
    constructors.disk = type
    constructorsChecked()
});
$('#constructorTypeDiskColor-14').on('click', function() {
    const type = 14
    constructors.disk = type
    constructorsChecked()
});
$('#constructorTypeDiskColor-15').on('click', function() {
    const type = 15
    constructors.disk = type
    constructorsChecked()
});
$('#constructorTypeDiskColor-16').on('click', function() {
    const type = 16
    constructors.disk = type
    constructorsChecked()
});
$('#constructorTypeDiskColor-17').on('click', function() {
    const type = 17
    constructors.disk = type
    constructorsChecked()
});

function constructorsChecked() {
    for (let j = 1; j < 18; j++) {
        for (let i = 1; i < 7; i++) {
            if(constructors.disk == j && constructors.car == i) {
                $('#constructorCar').attr('src', `/wp-content/themes/pit-stop/img/constructor/${i}-${j}.png`)
            }
        }
    }
}



