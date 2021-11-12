
// ============ Menu Js Start ==============
var $ = jQuery;
$(document).ready(function(){
  $(".hsck_menu_toggle").click(function(){
    $(".hsck_menu_toggle").toggleClass("hsck_menu_toggle_close");
    $(".hsck_menu_right").toggleClass("menu_open");
  });
});

// ============ Menu Js End ==============

// header Slider Js

 $(document).ready(function() {
  $('.hsck_slider_carousel').owlCarousel({
    loop: true,
    margin: 10,
    items: 1,
    mouseDrag: false,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
  })
})



// trusted People Slider Js

 $(document).ready(function() {
  $('.hsck_People_slider').owlCarousel({
    loop: true,
    margin: 10,
    items: 4,
    responsiveClass:true,
     responsive:{
        0:{
            items:1,
        },
        475:{
            items:2,
        },
         600:{
            items:3,
        },
        800:{
            items:4,
        },
    }
  })
})



 // Image Tab Menu

 $(document).ready(function() {

 	$(".hsck_work_outer .hsck_work_menublog button").click(function(){
 		$(".hsck_work_outer .hsck_work_menublog button").removeClass("active")
 		$(this).addClass("active")
 	});

 (function() { // wrap code in IIFE to keep it from global scope
    let links = document.querySelectorAll('button.clicked'); // grab all <a> tags that trigger the image gallery
    let imageContainer = document.querySelector('.image-container'); // grab the div that will contain the images
    let imagesCollection = document.querySelectorAll('.image-container img');
  
  function displayImage(imgs, album) { // function to check the data-album attr and check against the button that was clicked
    imgs.forEach((image) => {
      if(image.dataset.album == album) {
        image.parentElement.classList.remove('hide');
      } else {
        image.parentElement.classList.add('hide');
      }
    });
  }
  
    
    links.forEach((link) => { // loop through <a> tags and create click event on each 
        link.addEventListener('click', (e) => {
            e.preventDefault();

            switch (link.textContent) { // check name of link clicked 
                case "seo": // link 1 text
                
                    displayImage(imagesCollection, 'seo'); //display images from album 1

                    break;
                case "wordpress": // link 2 text
                
                    displayImage(imagesCollection, 'wordpress'); //display images from album 2

                    break;
                case "php": // link 3 text
                
                    displayImage(imagesCollection, 'php'); //display images from album 3

                    break;
                     case "webdesign": // link 1 text
                
                    displayImage(imagesCollection, 'webdesign'); //display images from album 1

                    break;
                     case "magento": // link 1 text
                
                    displayImage(imagesCollection, 'magento'); //display images from album 1

                    break;

                    
                case "all": // // link 4 text - display all images at once
                
                        imagesCollection.forEach((image) => {
                          image.parentElement.classList.remove('hide');
                   });

                    break;
            }

        });
    });
    
    })();
    })


 // ============================================

 // header Slider Js
// Testimonoal Slider

 $(document).ready(function() {
  $('.hsck_testimonial_carousel').owlCarousel({
    loop: true,
    margin: 10,
    items: 1,
    nav:true,
    responsiveClass:true,
    responsive:{
        0:{
             nav:false,
        },
         1000:{
            nav:true,
        },
    }
  })
   $( ".hsck_testimonial_carousel .owl-prev").html('<i class="fa fa-long-arrow-left"></i>');
 $( ".hsck_testimonial_carousel .owl-next").html('<i class="fa fa-long-arrow-right"></i>');
})


// Page Loader JS

function loadedFun() {
    setTimeout(function(){
   		document.getElementById("hsck_loader").style.display = "none";
    }, 500);
}

 // Smooth Scrollbar Js
//  $(document).ready(function(){
//   // Add smooth scrolling to all links
//   $("a").on('click', function(event) {

//     // Make sure this.hash has a value before overriding default behavior
//     if (this.hash !== "") {
//       // Prevent default anchor click behavior
//       event.preventDefault();

//       // Store hash
//       var hash = this.hash;

//       // Using jQuery's animate() method to add smooth page scroll
//       // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//       $('html, body').animate({
//         scrollTop: $(hash).offset().top
//       }, 2000, function(){
   
//         // Add hash (#) to URL when done scrolling (default click behavior)
//         window.location.hash = hash;
//       });
//     } // End if
//   });
// });


// Page Scroll Animate

$(function() {
	AOS.init({
	   once: true
	})
 });

// URL Remove # after 
window.location.replace("#");
if (typeof window.history.replaceState == 'function') {
  history.replaceState({}, '', window.location.href.slice(0, -1));
}


// Windows Scroll Menu Fix

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 20) {
        $(".hsck_menu ").addClass("hsck_menu_fixed");
    }
    else {
        $(".hsck_menu ").removeClass("hsck_menu_fixed");
    }
});