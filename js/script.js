jQuery(document).ready(function($){
    //add plus icon to buttons
    $(".kb-button:not(.menu-item)").each(function(i, obj){
        //set inner html as new div with plus svg plus existing child span
        $(this).html('<div class=plus><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="none"><path d="M11 6h6v5h-6v6H6v-6H0V6h6V0h5v6Z"/></svg></div>'+$(this).children(".kt-btn-inner-text").prop('outerHTML'));
    });

    //nav menu button
    $(".kb-button.menu-item").each(function(i, obj){
        //add main button class
        $(this).addClass("kb-button");
        //set inner html as new div with plus svg plus existing child span
        $(this).html('<div class=plus><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="none"><path d="M11 6h6v5h-6v6H6v-6H0V6h6V0h5v6Z"/></svg></div>'+$(this).children("a").prop('outerHTML'));
        $(this).children("a").addClass("kt-btn-inner-text");
    });

    //nav menu icons
    $(".language-icon").each(function(){
        $(this).prepend('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M192 64C209.7 64 224 78.3 224 96L224 128L352 128C369.7 128 384 142.3 384 160C384 177.7 369.7 192 352 192L342.4 192L334 215.1C317.6 260.3 292.9 301.6 261.8 337.1C276 345.9 290.8 353.7 306.2 360.6L356.6 383L418.8 243C423.9 231.4 435.4 224 448 224C460.6 224 472.1 231.4 477.2 243L605.2 531C612.4 547.2 605.1 566.1 589 573.2C572.9 580.3 553.9 573.1 546.8 557L526.8 512L369.3 512L349.3 557C342.1 573.2 323.2 580.4 307.1 573.2C291 566 283.7 547.1 290.9 531L330.7 441.5L280.3 419.1C257.3 408.9 235.3 396.7 214.5 382.7C193.2 399.9 169.9 414.9 145 427.4L110.3 444.6C94.5 452.5 75.3 446.1 67.4 430.3C59.5 414.5 65.9 395.3 81.7 387.4L116.2 370.1C132.5 361.9 148 352.4 162.6 341.8C148.8 329.1 135.8 315.4 123.7 300.9L113.6 288.7C102.3 275.1 104.1 254.9 117.7 243.6C131.3 232.3 151.5 234.1 162.8 247.7L173 259.9C184.5 273.8 197.1 286.7 210.4 298.6C237.9 268.2 259.6 232.5 273.9 193.2L274.4 192L64.1 192C46.3 192 32 177.7 32 160C32 142.3 46.3 128 64 128L160 128L160 96C160 78.3 174.3 64 192 64zM448 334.8L397.7 448L498.3 448L448 334.8z"/></svg>');
    });
    $(".chat-icon").each(function(){
        $(this).prepend('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M576 304C576 436.5 461.4 544 320 544C282.9 544 247.7 536.6 215.9 523.3L97.5 574.1C88.1 578.1 77.3 575.8 70.4 568.3C63.5 560.8 62 549.8 66.8 540.8L115.6 448.6C83.2 408.3 64 358.3 64 304C64 171.5 178.6 64 320 64C461.4 64 576 171.5 576 304z"/></svg>');
    });
    $(".login-icon").each(function(){
        $(this).prepend('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M320 312C386.3 312 440 258.3 440 192C440 125.7 386.3 72 320 72C253.7 72 200 125.7 200 192C200 258.3 253.7 312 320 312zM290.3 368C191.8 368 112 447.8 112 546.3C112 562.7 125.3 576 141.7 576L498.3 576C514.7 576 528 562.7 528 546.3C528 447.8 448.2 368 349.7 368L290.3 368z"/></svg>');
    });

    //slick slider
    $('.slider-left>.kt-inside-inner-col').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.slider-right>.kt-inside-inner-col'
    });
    $('.slider-right>.kt-inside-inner-col').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-left>.kt-inside-inner-col',
        arrows: false,
        dots: true,
        fade: true
    });
    $('.testimonial-slider').slick({
        centerMode: true,
        slidesToShow: 2,
        arrows: false,
        dots: true,
        vertical: true,
        verticalScrolling: true,
        verticalSwiping: true,
        infinite: true
    });

});