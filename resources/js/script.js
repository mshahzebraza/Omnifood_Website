$(document).ready(function() {

    // For the sticky Navigation
    $('.jsSectionFeatures').waypoint(function(direction){
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');

        }
        }, {
            offset: '60px;'
    })

    // Scroll to buttons
    $('.jsScrollToPlans').click(function () {
        $('html, body').animate({scrollTop: $('.jsSectionPlans').offset().top}, 1000);
    });

    $('.jsScrollToStart').click(function () {
        $('html, body').animate({scrollTop: $('.jsSectionFeatures').offset().top}, 1000);
    });

    // Navigation Scroll

    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
        ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
            scrollTop: target.offset().top
            }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
                return false;
            } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
            };
            });
        }
        }
    });

    // Animations on Scroll
    $('.jsWp1').waypoint(function (direction) {
        $('.jsWp1').addClass('animated fadeInUp ');
    }, {
        offset: '50%'
    })

    $('.jsWp2').waypoint(function (direction) {
        $('.jsWp2').addClass('animated fadeInUp');
    }, {
        offset: '40%'
    })

    $('.jsWp3').waypoint(function (direction) {
        $('.jsWp3').addClass('animated slideInLeft fadeInUp');
    }, {
        offset: '50%'
    })

    $('.jsWp4').waypoint(function (direction) {
        $('.jsWp4').addClass('animated fadein pulse');
    }, {
        offset: '30%'
    })

    // Mobile Navigation
    // This is a little DIY code... as my icon was bein controlled by 'name' attribute not by 'class' attribute... so i had to use attr property.
    $('.jsNavIcon').click(function () {
        var nav = $('.jsMainNav');        
        var icon= $('.jsNavIcon ion-icon');
        // Can also use |-- var icon= $('nav ion-icon'); --| instead of command above
        
        // This slide toggle animation is abrupt even when i change the speed... speed change doesnt work
        nav.slideToggle(200);
        if ($(icon).attr("name") == "grid") {

            $(icon).attr("name","grid-outline");

        } else {
            $(icon).attr("name","grid");
        }

        
        


    })

});
