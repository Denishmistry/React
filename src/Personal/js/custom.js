
    var $grid = $('.grid').isotope({
        // options
        itemSelector: '.grid-item',
        layoutMode: 'fitRows',
    });

    // change is-checked class on buttons
    var $buttonGroup = $('.button-group');
    $buttonGroup.on('click', 'button', function(event) {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        var $button = $(event.currentTarget);
        $button.addClass('is-checked');
        var filterValue = $button.attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
    
    //smooth scrolling 
   
    $(document).ready(function() {
        // Add smooth scrolling to all links
        $(".navbar-nav a").on('click', function(event) {

            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
                // Prevent default anchor click behavior
                event.preventDefault();

                // Store hash
                var hash = this.hash;

                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function() {

                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                });
            } // End if
        });
    });
  
   
        $(window).scroll(function() {
            $('a.logo').toggleClass('scroll-logo', $(this).scrollTop() > 100);
        });
    