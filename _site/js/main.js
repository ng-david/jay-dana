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
