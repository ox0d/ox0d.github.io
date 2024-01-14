(function ($) {
    "use strict";

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
                    if (window.matchMedia('(min-width: 991.99px)').matches){
                        logoImage.attr('src', 'img/icasee_logo_white.webp');
                    }                    
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


})(jQuery);