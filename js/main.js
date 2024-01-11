(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();
    

    // Function to update the image source based on screen size
    function updateImageSource() {
        var logoImage = $('#logoImage'); // Select the image by ID

        if (window.matchMedia('(max-width: 991.98px)').matches) {
            // Change the image source for smaller screens
            logoImage.attr('src', 'img/icasee_logo_green.webp');
        } else {
            // Revert to the original image source for larger screens
            logoImage.attr('src', 'img/icasee_logo_white.webp');

            // Sticky Navbar
            $(window).scroll(function () {
                var logoImage = $('#logoImage');

                if ($(this).scrollTop() > 45) {
                    $('.navbar').addClass('sticky-top shadow-sm');
                    logoImage.attr('src', 'img/icasee_logo_green.webp');
                } else {
                    $('.navbar').removeClass('sticky-top shadow-sm');
                    logoImage.attr('src', 'img/icasee_logo_white.webp');
                }
            });
        }
    }

    // Call the function on page load and attach it to the resize event
    $(document).ready(function () {
        updateImageSource(); // Call on page load

        // Attach the function to the resize event
        $(window).on('resize', updateImageSource);
    });

    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    // $('.back-to-top').click(function () {
    //     $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
    //     return false;
    // });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Client carousel
    $(".client-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 90,
        dots: false,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:3
            },
            768:{
                items:4
            },
            992:{
                items:5
            },
            1200:{
                items:6
            }
        }
    });
    
})(jQuery);

// Geolocation
// Initialize the map
function initMap() {
    var location = { lat: 37.7749, lng: -122.4194 }; // Replace with your specific coordinates
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: location
    });

    // Add a marker
    var marker = new google.maps.Marker({
        position: location,
        map: map,
        title: 'Tishk International Universtiy'
    });
}

