document.addEventListener("DOMContentLoaded", function () {
  // Set the date we're counting down to (adjust the date and time as needed)
  var countDownDate = new Date("Jan 1, 2024 00:00:00").getTime();

  // Update the countdown every 1 second
  var x = setInterval(function () {
      var now = new Date().getTime();
      var distance = countDownDate - now;

      // Calculate remaining days, hours, minutes, and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the countdown
      document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
          + minutes + "m " + seconds + "s ";

      // If the countdown is over, open the video
      if (distance < 0) {
          clearInterval(x); // Stop the countdown
          openVideo(); // Function to open the video
      }
  }, 1000);

  function openVideo() {
      // Replace 'your_video_url' with the actual URL of your video
      window.location.href = 'https://streamable.com/4w7p03';
  }
});
