// Particles
particlesJS.load('particles-js', 'particlesjs-config.json', function() {
  console.log('callback - particles.js config loaded');
});


// Countdown timer
var countDownDate = new Date("May 26, 2018 11:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {
  // Get todays date and time
  var now = new Date().getTime();
  // Find the distance between now an the count down date
  var distance = countDownDate - now;
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="countdown"
  document.getElementById("countdown").innerHTML = `${days} Days ${hours} Hrs ${minutes} Mins ${seconds} Secs`;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "See you there!";
  }
}, 1000);

// Scroll to element
/* Script to allow navbar click to scroll to area on page */
$('#more-link').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 300);
    }
});

// Waypoints to highlight elements
// var introWay = new Waypoint({
//   element: document.getElementById('intro'),
//   handler: function() {
//     $('#intro-link').addClass("active");
//     $('#story-link').removeClass("active");
//     $('#wedding-link').removeClass("active");
//     $('#registry-link').removeClass("active");
//   }
// });
// var storyWay = new Waypoint({
//   element: document.getElementById('story'),
//   handler: function() {
//     $('#intro-link').removeClass("active");
//     $('#story-link').addClass("active");
//     $('#wedding-link').removeClass("active");
//     $('#registry-link').removeClass("active");
//   }
// });
// var weddingWay = new Waypoint({
//   element: document.getElementById('wedding'),
//   handler: function() {
//     $('#intro-link').removeClass("active");
//     $('#story-link').removeClass("active");
//     $('#wedding-link').addClass("active");
//     $('#registry-link').removeClass("active");
//   }
// });
// var registry = new Waypoint({
//   element: document.getElementById('registry'),
//   handler: function() {
//     $('#intro-link').removeClass("active");
//     $('#story-link').removeClass("active");
//     $('#wedding-link').removeClass("active");
//     $('#registry-link').addClass("active");
//   }
// });
