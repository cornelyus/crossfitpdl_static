//Smooth scroll
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
          // var $target = $(target);
          // $target.focus();
          // if ($target.is(":focus")) { // Checking if the target was focused
          //   return false;
          // } else {
          //   $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          //   $target.focus(); // Set focus again
          // };
        });
      }
    }
  });

//Back to top button
(function(){
/**
 * Toggle the visibility of the scroll to top link.
 */
  // append  back to top link top body if it is not
  var exist= jQuery('#back-top').length; // exist = 0 if element doesn't exist
  if(exist == 0){ // this test is for fixing the ajax bug
    $("body").append("<p id='back-top'><a href='#top'><span id='button'></span><span id='link'>Back to top</span></a></p>");
  }
  // Preview function
  $("input").change(function () {
    // building the style for preview
    var style="<style>#scroll-to-top-prev-container #back-top-prev span#button-prev{ background-color:"+$("#edit-scroll-to-top-bg-color-out").val()+";} #scroll-to-top-prev-container #back-top-prev span#button-prev:hover{ background-color:"+$("#edit-scroll-to-top-bg-color-hover").val()+" }</style>"
    // building the html content of preview
    var html="<p id='back-top-prev' style='position:relative;'><a href='#top'><span id='button-prev'></span><span id='link'>";
    // if label enabled display it
    if($("#edit-scroll-to-top-display-text").attr('checked')){
    html+=$("#edit-scroll-to-top-label").val();
    }
    html+="</span></a></p>";
    // update the preview
    $("#scroll-to-top-prev-container").html(style+html);
  });
  $("#back-top").hide();
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('#back-top').fadeIn();
      } else {
        $('#back-top').fadeOut();
      }
    });

    // scroll body to 0px on click
    $('#back-top a').click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 800);
      return false;
    });
  });
})();

//Sticky Nav
(function() {
      var selector = $('#block-system-main-menu');
      //only getting the first elmenet in the dom
      var menu = $(selector).eq(0);
      if (menu.length) {
        var breakpoint = menu.offset().top;
        //we need to compensate the element so that the content does not jump up
        var compensation = menu.outerHeight();
        //attaching a scroll event
        $(window).scroll(function () {
          if ($(window).scrollTop() > breakpoint) {
            menu.addClass('stickynav-active');
            $('body').css('padding-top', compensation);
          } else {
            menu.removeClass('stickynav-active');
            $('body').css('padding-top', 'inherit');
          }
        });
      }
})();

// Lightbox Gallery for Bulma framework
// by https://github.com/marcosdg-com/lightbox-gallery-bulma-framework
function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("item-slide");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}